# Base image
FROM python:3.9-slim

RUN pip install --upgrade pip

# Set working directory
WORKDIR /yapayzeka

ADD . /yapayzeka
# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Command to run the application
CMD ["python", "main.py"]