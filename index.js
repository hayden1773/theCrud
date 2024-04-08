// calling Express 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.models.js');
const productRoute = require('./routes/product.route.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Moved server run to after connection


// routes
app.use('/api/products', productRoute);





app.get('/', (req, res) => {
    res.send('Hello from Node API')
});






// Connection to MongoDB w/ user & pass
mongoose.connect("mongodb+srv://hayden2160:FZVi1BYTFaOFgiLB@backenddb.egnhrgg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
    .then(() => {
        console.log("Connected to database!");
        // Server running after connection to mongoDB
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection Failed!");
    });