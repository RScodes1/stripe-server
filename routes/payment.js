const express = require('express');
const paymentRoute = express.Router()
require('dotenv').config() // environment variables

const stripe = require('stripe')(process.env.STRIPE_ACCESS_KEY);

paymentRoute.post('/create_intent',async(req,res)=>{
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 2000, // Amount in cents
            currency: 'usd', 
        });
        res.status(201).send({ paymentIntent }); // successful
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

paymentRoute.post('/capture_intent/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        const paymentIntent = await stripe.paymentIntents.capture(id);
        res.status(200).send({ paymentIntent });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

paymentRoute.post('/create_refund/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        const refund = await stripe.refunds.create({ payment_intent: id });
        res.status(201).send({ refund });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

paymentRoute.get('/get_intents',async(req,res)=>{
    try {
        const paymentIntents = await stripe.paymentIntents.list({ limit: 10 });
        res.status(200).send({ paymentIntents });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

module.exports = {
    paymentRoute
}
