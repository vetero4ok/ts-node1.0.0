import {createServer, IncomingMessage, ServerResponse} from 'http';

const {getProducts, getProduct, createProduct, updateProduct} = require('./controller/productController')

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res)
    } else if (req.url && req.url.match('/api/products/') && req.method === 'GET') {
        const id = req.url.split('/')[3]
        getProduct(req, res, id)
    } else if (req.url === '/api/products' && req.method === 'POST') {
        createProduct(req, res)
    }else if (req.url && req.url.match('/api/products/') && req.method === 'PUT') {
        const id = req.url.split('/')[3]
        updateProduct(req, res, id)
    }
    else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route not found'}))
    }
})
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})