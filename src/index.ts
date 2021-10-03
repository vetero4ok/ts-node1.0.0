import {createServer, IncomingMessage, ServerResponse} from 'http';
const products = require('./data/products.json')

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method === 'GET' && req.url === '/api/products') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(products))
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route not found'}))
    }
})
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})