// calling Express 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const Product = require('./models/product.models.js');

// Moved server run to after connection


app.get('/', (req, res) => {
    res.send('Hello from Node API')
});

app.get('/api/products', async (req, res) => {

    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/product/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.post('/api/products', async (req, res) => {
    // console.log(req.body);
    // res.send(req.body);
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        //server error
        res.status(500).json({ message: error.message });
    }
});

//update a product

app.put('/api/product/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        // res.status(200).json(product);
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//delete a product

app.delete('/api/product/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(400).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully!" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

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