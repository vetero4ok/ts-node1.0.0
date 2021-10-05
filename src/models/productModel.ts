const products = require('../data/products.json')
const {v4: uuidv4} = require('uuid');
const { writeToFile } = require('../utils/utils')

export type ProductModelType = {
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
        const product: ProductModelType = products.find((p: ProductModelType) => p.id === id)
        res(product)
    })
}

function create(product:any): Promise<ProductModelType> {
    return new Promise((res, rej) => {
        const newProduct = {id: uuidv4(), ...product}
        products.push(newProduct)
        writeToFile('./src/data/products.json', products)
        res(newProduct)
    })
}

module.exports = {
    findAll,
    findById,
    create,
}