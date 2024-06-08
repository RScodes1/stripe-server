const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const app = express()

const PORT = process.env.PORT;

const {paymentRoute} = require('./routes/payment');

app.use('/api/v1', paymentRoute);
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send({msg: "Hello Beautiful"});
})

app.listen(PORT, ()=>{
    console.log(`server started on http://localhost:${PORT}`);
})