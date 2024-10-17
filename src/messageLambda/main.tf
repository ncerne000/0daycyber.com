provider "aws" {
  region = var.aws_region
}

# IAM Role for Lambda
resource "aws_iam_role" "lambda_role" {
  name = "lambda_sendgrid_role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      },
    ]
  })
}

# Attach policies to the IAM Role
resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy" "lambda_secrets_policy" {
  name   = "lambda_secrets_policy"
  role   = aws_iam_role.lambda_role.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Action = "secretsmanager:GetSecretValue",
      Effect = "Allow",
      Resource = [
        "${var.sendgrid_api_key_arn}",
        "${var.recaptcha_secret_key_arn}"
      ]
    }]
  })
}

# Upload the Lambda function code
resource "aws_lambda_function" "contact_form_handler" {
  filename         = "lambda_function.zip"
  function_name    = "contact_form_handler"
  role             = aws_iam_role.lambda_role.arn
  handler          = "lambda_function.lambda_handler"
  source_code_hash = filebase64sha256("lambda_function.zip")
  runtime          = "python3.9"

  # Set environment variables
  environment {
    variables = {
      SENDGRID_API_KEY_ARN = var.sendgrid_api_key_arn,
      RECAPTCHA_SECRET_KEY_ARN = var.recaptcha_secret_key_arn
    }
  }

  # Set timeout (optional)
  timeout = 30
}

# API Gateway REST API
resource "aws_api_gateway_rest_api" "contact_form_api" {
  name        = "ContactFormAPI"
  description = "API Gateway for the contact form Lambda function"
}

# API Gateway Resource (the root path)
resource "aws_api_gateway_resource" "contact_form_resource" {
  rest_api_id = aws_api_gateway_rest_api.contact_form_api.id
  parent_id   = aws_api_gateway_rest_api.contact_form_api.root_resource_id
  path_part   = "contact"
}

# API Gateway Method
resource "aws_api_gateway_method" "contact_form_method" {
  rest_api_id   = aws_api_gateway_rest_api.contact_form_api.id
  resource_id   = aws_api_gateway_resource.contact_form_resource.id
  http_method   = "POST"
  authorization = "NONE"
  
  # Enable CORS by adding OPTIONS method
  depends_on = [aws_api_gateway_resource.contact_form_resource]
}

# API Gateway Integration
resource "aws_api_gateway_integration" "lambda_integration" {
  rest_api_id             = aws_api_gateway_rest_api.contact_form_api.id
  resource_id             = aws_api_gateway_resource.contact_form_resource.id
  http_method             = aws_api_gateway_method.contact_form_method.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.contact_form_handler.invoke_arn
}

# Lambda Permission to be invoked by API Gateway
resource "aws_lambda_permission" "api_gateway_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.contact_form_handler.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.contact_form_api.execution_arn}/*/*"
}

# API Gateway Deployment
resource "aws_api_gateway_deployment" "deployment" {
  depends_on = [
    aws_api_gateway_integration.lambda_integration
  ]
  rest_api_id = aws_api_gateway_rest_api.contact_form_api.id
  stage_name  = "prod"
}

# Enable CORS for the API

# OPTIONS Method
resource "aws_api_gateway_method" "options_method" {
  rest_api_id   = aws_api_gateway_rest_api.contact_form_api.id
  resource_id   = aws_api_gateway_resource.contact_form_resource.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}

# OPTIONS Integration
resource "aws_api_gateway_integration" "options_integration" {
  rest_api_id             = aws_api_gateway_rest_api.contact_form_api.id
  resource_id             = aws_api_gateway_resource.contact_form_resource.id
  http_method             = aws_api_gateway_method.options_method.http_method
  type                    = "MOCK"
  passthrough_behavior    = "WHEN_NO_MATCH"

  request_templates = {
    "application/json" = "{\"statusCode\": 200}"
  }

  # Integration Response
  depends_on = [aws_api_gateway_method.options_method]
}

# OPTIONS Method Response
resource "aws_api_gateway_method_response" "options_response" {
  rest_api_id = aws_api_gateway_rest_api.contact_form_api.id
  resource_id = aws_api_gateway_resource.contact_form_resource.id
  http_method = aws_api_gateway_method.options_method.http_method
  status_code = "200"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true,
    "method.response.header.Access-Control-Allow-Methods" = true,
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}

# OPTIONS Method Integration Response
resource "aws_api_gateway_integration_response" "options_integration_response" {
  rest_api_id = aws_api_gateway_rest_api.contact_form_api.id
  resource_id = aws_api_gateway_resource.contact_form_resource.id
  http_method = aws_api_gateway_method.options_method.http_method
  status_code = "200"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
    "method.response.header.Access-Control-Allow-Methods" = "'POST,OPTIONS'",
    "method.response.header.Access-Control-Allow-Origin"  = "'https://0daycyber.com'"
  }

  depends_on = [
    aws_api_gateway_integration.options_integration
  ]
}

# POST Method Integration Response
resource "aws_api_gateway_integration_response" "post_integration_response" {
  rest_api_id = aws_api_gateway_rest_api.contact_form_api.id
  resource_id = aws_api_gateway_resource.contact_form_resource.id
  http_method = aws_api_gateway_method.contact_form_method.http_method
  status_code = "200"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
    "method.response.header.Access-Control-Allow-Methods" = "'POST,OPTIONS'",
    "method.response.header.Access-Control-Allow-Origin"  = "'https://0daycyber.com'"
  }

  depends_on = [
    aws_api_gateway_integration.lambda_integration  # Ensure integration is created first
  ]
}

# POST Method Response
resource "aws_api_gateway_method_response" "post_method_response" {
  rest_api_id = aws_api_gateway_rest_api.contact_form_api.id
  resource_id = aws_api_gateway_resource.contact_form_resource.id
  http_method = aws_api_gateway_method.contact_form_method.http_method
  status_code = "200"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true,
    "method.response.header.Access-Control-Allow-Methods" = true,
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}


# Output the API endpoint
output "api_endpoint" {
  value = "${aws_api_gateway_deployment.deployment.invoke_url}${aws_api_gateway_resource.contact_form_resource.path}"
}
