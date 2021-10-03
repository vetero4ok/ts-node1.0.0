const products = require('../data/products.json')
//: Promise<T>
function findAll():Promise<{}> {
    return new Promise((res, rej) => {
        res(products)
    })
}

module.exports = {
    findAll
}