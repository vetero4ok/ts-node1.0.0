const Product = require('../models/productModel')

// @desc gets all products (route get /api/products)
async function getProducts(req: any, res: any) {
    try {
        const products = await Product.findAll()
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(products))
    } catch (e) {
        console.log(e)
    }
}
// @desc gets 1 product (route get /api/products/id)
async function getProduct(req: any, res: any, id:string) {
    try {
        const product = await Product.findById(id)
        if(!product){
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
async function createProduct(req: any, res: any) {
    try {
        /** hard coded data  */
       const product = {
           name: 'Test product N2',
           description: 'Testing the new product 2',
           price: 85
       }
        const newProduct = await Product.create(product)
        res.writeHead(201, {'Content-Type': 'application/json'})
       return  res.end(JSON.stringify(newProduct))
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
}