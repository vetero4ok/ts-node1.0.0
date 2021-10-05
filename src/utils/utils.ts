import * as fs from 'fs';
import {ProductType} from '../models/productModel';

function writeToFile(fileName:string, content:Array<ProductType>) {
    fs.writeFile(fileName, JSON.stringify(content), 'utf-8', err => {
        if(err){
            console.log(err)
        }
    })
}

module.exports = {
    writeToFile,
}