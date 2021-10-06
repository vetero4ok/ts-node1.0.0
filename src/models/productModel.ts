const products = require('../data/products.json')
const {v4: uuidv4} = require('uuid');
const { writeToFile } = require('../utils/utils')
export type ProductType = ProductModelType & {
    id: string
}
export type ProductModelType = {
    name: string
    description: string
    price: number
}
//: Promise<T>
function findAll(): Promise<Array<ProductType>> {
    return new Promise((res, rej) => {
        res(products)
    })
}

function findById(id: string): Promise<ProductType> {
    return new Promise((res, rej) => {
        const product: ProductType = products.find((p: ProductType) => p.id === id)
        res(product)
    })
}

function create(product:ProductModelType): Promise<ProductType> {
    return new Promise((res, rej) => {
        const newProduct = {id: uuidv4(), ...product}
        products.push(newProduct)
        writeToFile('./src/data/products.json', products)
        res(newProduct)
    })
}
function update(product:ProductModelType, id:string): Promise<ProductType> {
    return new Promise((res, rej) => {
        const index = products.findIndex((p:ProductType)=> p.id === id)
        products[index] = {id, ...product}
        writeToFile('./src/data/products.json', products)
        res(products[index])
    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
}