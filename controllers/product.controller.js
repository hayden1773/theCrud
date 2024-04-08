const Product = require('../models/product.models');




const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const getProduct = async (req, res) => {

    
}



module.exports = {
    getProducts
}
