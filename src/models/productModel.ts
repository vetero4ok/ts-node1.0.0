const products = require('../data/products.json')
type ProductModelType = {
    id: string
    name: string
    description: string
    price: number
}

//: Promise<T>
function findAll(): Promise<Array<ProductModelType>> {
    return new Promise((res, rej) => {
        res(products)
    })
}

function findById(id: string): Promise<ProductModelType> {
    return new Promise((res, rej) => {
        const product:ProductModelType = products.find((p:ProductModelType) => p.id === id)
            res(product)
    })
}

module.exports = {
    findAll,
    findById,
}