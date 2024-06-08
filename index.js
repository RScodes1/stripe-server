const express = require('express');
require('dotenv').config()

const app = express()

const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    res.send({msg: "Hello Beautiful"});
})

app.listen(PORT, ()=>{
    console.log(`server started on http://localhost:${PORT}`);
})