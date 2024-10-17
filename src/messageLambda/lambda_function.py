import json
import os
import sendgrid
from sendgrid.helpers.mail import Mail, Email, To, Content
import re
import requests
import logging
import boto3

# Configure logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Get the necessary environment variables
SENDGRID_API_KEY_ARN = os.environ.get('SENDGRID_API_KEY_ARN')
RECAPTCHA_SECRET_KEY_ARN = os.environ.get('RECAPTCHA_SECRET_KEY_ARN')
AWS_REGION = os.environ.get('AWS_REGION')

HEADERS = {
    "Access-Control-Allow-Origin": "https://0daycyber.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
}

def verify_recaptcha(token, recaptcha_secret_key):
    """
    Verifies the reCAPTCHA token using Google API
    """
    url = "https://www.google.com/recaptcha/api/siteverify"
    payload = {
        'secret': recaptcha_secret_key,
        'response': token
    }
    
    response = requests.post(url, data=payload)
    result = response.json()
    logger.info(f"reCAPTCHA response from Google: {result}")

    # The result will contain success, score, and other fields
    return result.get('success', False) and result.get('score', 0) >= 0.5


def lambda_handler(event, context):

    # Create a Secrets Manager client
    client = boto3.client('secretsmanager', region_name=AWS_REGION)
    sendgrid_api_key = client.get_secret_value(SecretId=SENDGRID_API_KEY_ARN)
    sendgrid_api_key_string = sendgrid_api_key.get('SecretString')
    sendgrid_secret_dict = json.loads(sendgrid_api_key_string)
    sendgrid_secret_key = sendgrid_secret_dict.get('sendgrid_api_key')


    recaptcha_secret_key = client.get_secret_value(SecretId=RECAPTCHA_SECRET_KEY_ARN)
    recaptcha_secret_key_string = recaptcha_secret_key.get('SecretString')
    recaptcha_secret_dict = json.loads(recaptcha_secret_key_string)
    recaptcha_secret_key = recaptcha_secret_dict.get('RECAPTCHA_SECRET_KEY')

    # Parse the request body
    try:
        body = json.loads(event['body'])
        name = body.get('name')
        email = body.get('email')
        phone = body.get('phone')
        message = body.get('message')
        token = body.get('token')
    except (KeyError, json.JSONDecodeError):
        return {
            'statusCode': 400,
            'headers': HEADERS,
            'body': json.dumps('Invalid request body.')
        }
    
    # Validate the required fields
    if not all([name, email, message]):
        return {
            'statusCode': 400,
            'headers': HEADERS,
            'body': json.dumps('Missing required fields')
        }
    
    # Server-side validation rules
    if not re.match(r'^[a-zA-Z\s]+$', name) or len(name) < 2 or len(name) > 50:
        return {
            'statusCode': 400,
            'headers': HEADERS,
            'body': json.dumps('Invalid name. Name must only contain letters, be at least 2 characters, and no more than 50 characters.')
        }

    if not re.match(r'^\S+@\S+\.\S+$', email):
        return {
            'statusCode': 400,
            'headers': HEADERS,
            'body': json.dumps('Invalid email format.')
        }

    if phone:
        if not re.match(r'^\d+$', phone) or len(phone) > 15:
            return {
                'statusCode': 400,
                'headers': HEADERS,
                'body': json.dumps('Invalid phone number. Phone number must contain only digits and be no more than 15 characters.')
            }

    if len(message.strip()) == 0 or len(message) > 500:
        return {
            'statusCode': 400,
            'headers': HEADERS,
            'body': json.dumps('Invalid message. Message cannot be empty and must be no more than 500 characters.')
        }
    
    # Validate reCAPTCHA token
    if not verify_recaptcha(token, recaptcha_secret_key):
        return {
            'statusCode': 400,
            'headers': HEADERS,
            'body': json.dumps('Invalid captcha token.')
        }
    
    email_subject = f'Business Inquiry from {name}'
    email_content = f"""
    A new business inquiry has been received from {name}:

    Name: {name}
    Email: {email}
    Phone: {phone}
    Message: {message}
    """

    # Send the email using SendGrid
    sg = sendgrid.SendGridAPIClient(api_key=sendgrid_secret_key)
    from_email = Email('no-reply@0daycyber.com')
    to_email = To('sales@0daycyber.com')
    content = Content('text/plain', email_content)
    mail = Mail(from_email, to_email, email_subject, content)

    try:
        response = sg.send(mail)
        logger.info(f"Email sent with status code: {response.status_code}, response body: {response.body}")
    except Exception as e:
        return {
            'statusCode': 400,
            'headers': HEADERS,
            'body': json.dumps(f'Error sending email: {str(e)}')
        }
    
    # Return the success response
    return {
        'statusCode': 200,
        'headers': HEADERS,
        'body': json.dumps('Message received.')
    }