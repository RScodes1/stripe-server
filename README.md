# Stripe Payment Gateway Integration

This project is a Node.js implementation for integrating Stripe Payment Gateway. It provides APIs to create payment intents, capture intents, create refunds, and list all payment intents.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)

- ## Installation

1. Clone the repository:

   ```bash 
   git clone https://github.com/rajcodes1/stripe-server.git 
   cd stripe-server ```
2. API Endpoints
Create Payment Intent
URL: /api/v1/create_intent
Method: POST

Capture Payment Intent
URL: /api/v1/capture_intent/:id
Method: POST

  Create Refund
URL: /api/v1/create_refund/:id
Method: POST

Get All Payment Intents
URL: /api/v1/get_intents
Method: GET

Environment Variables
STRIPE_SECRET_KEY

Running the project 
1. Ensure the env keys are set
2. run the server Node index.js
3. base server is http://localhost:3000
