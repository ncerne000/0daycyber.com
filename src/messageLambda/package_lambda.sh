#!/bin/bash

# Remove any existing packages
rm -rf package lambda_function.zip

# Create a directory for dependencies
mkdir package

# Install dependencies into the package directory
pip install --target ./package sendgrid
pip install --target ./package requests
pip install --target ./package boto3

# Copy your Lambda function code into the package directory
cp lambda_function.py package/

# Navigate to the package directory and zip everything up
cd package
zip -r ../lambda_function.zip .

# Navigate back to the root directory
cd ..

echo "Packaging complete. Lambda function zip created: lambda_function.zip"
