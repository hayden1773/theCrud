const express = require("express");
const router = express.Router();
const Product = require("../models/product.models.js");
const {getProducts} = require('../controllers/product.controller.js');

//Controller function
router.get('/', getProducts);

router.get('/:id', getProduct);