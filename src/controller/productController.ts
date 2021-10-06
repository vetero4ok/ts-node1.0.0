import {IncomingMessage, ServerResponse} from 'http';
import {ProductModelType} from '../models/productModel';

const Product = require('../models/productModel')
const {getPostDate} = require('../utils/utils')

// @desc gets all products (route get /api/products)
async function getProducts(req: IncomingMessage, res: ServerResponse) {
    try {
        const products = await Product.findAll()
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(products))
    } catch (e) {
        console.log(e)
    }
}

// @desc gets 1 product (route get /api/products/id)
async function getProduct(req: IncomingMessage, res: ServerResponse, id: string) {
    try {
        const product = await Product.findById(id)
        if (!product) {
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Bad Product Not Found'}))
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(product))
        }
    } catch (e) {
        console.log(e)
    }
}

// @desc create  product (route post /api/products)
async function createProduct(req: IncomingMessage, res: ServerResponse) {
    try {
        const body = await getPostDate(req)
        const {name, description, price} = JSON.parse(body)
        const product = {
            name,
            description,
            price
        }
        const newProduct = await Product.create(product)
        res.writeHead(201, {'Content-Type': 'application/json'})
        return res.end(JSON.stringify(newProduct))
    } catch (e) {
        console.log(e)
    }
}

// @desc update  product (route put /api/products)
async function updateProduct(req: IncomingMessage, res: ServerResponse, id: string) {
    try {
        const product = await Product.findById(id)
        if (!product) {
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Bad Product Not Found'}))
        } else {
            const body = await getPostDate(req)
            const {name, description, price} = JSON.parse(body)
            const productData: ProductModelType = {
                name: name || product.name,
                description: description || product.description,
                price: price || product.price
            }
            const updateProduct = await Product.update(productData, id)
            res.writeHead(200, {'Content-Type': 'application/json'})
            return res.end(JSON.stringify(updateProduct))
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
}