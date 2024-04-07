// calling Express 
const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.listen(3000, () =>  {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello from Node API')
});

mongoose.connect("mongodb+srv://hayden2160:FZVi1BYTFaOFgiLB@backenddb.egnhrgg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection Failed!");
})