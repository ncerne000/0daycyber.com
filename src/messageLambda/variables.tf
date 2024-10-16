variable "sendgrid_api_key_arn" {
  description = "Your SendGrid API Key"
  type        = string
  default = "arn:aws:secretsmanager:us-east-1:954976284809:secret:prod/sendgrid_mail_send_api_key-oUPqD2"
}

variable "recaptcha_secret_key_arn" {
  description = "Your SendGrid API Key"
  type        = string
  default = "arn:aws:secretsmanager:us-east-1:954976284809:secret:prod/recaptcha_secret_key-hYrVGk"
}

variable "aws_region" {
  description = "The AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}