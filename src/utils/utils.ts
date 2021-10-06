import * as fs from 'fs';
import {ProductType} from '../models/productModel';
import {IncomingMessage} from 'http';

function writeToFile(fileName: string, content: Array<ProductType>) {
    fs.writeFile(fileName, JSON.stringify(content), 'utf-8', err => {
        if (err) {
            console.log(err)
        }
    })
}

function getPostDate(req: IncomingMessage) {
    return new Promise((res, rej) => {
        try {
            let body = ''
            req.on('data', (chunk) => {
                body += chunk.toString()
            })
            req.on('end', () => {
                res(body)
            })
        } catch (err) {
            console.log(err)
        }
    })
}

module.exports = {
    writeToFile,
    getPostDate,

}