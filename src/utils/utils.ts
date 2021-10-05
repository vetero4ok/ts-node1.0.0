import * as fs from 'fs';
import {ProductModelType} from '../models/productModel';

function writeToFile(fileName:string, content:Array<ProductModelType>) {
    fs.writeFile(fileName, JSON.stringify(content), 'utf-8', err => {
        if(err){
            console.log(err)
        }
    })
}

module.exports = {
    writeToFile,
}