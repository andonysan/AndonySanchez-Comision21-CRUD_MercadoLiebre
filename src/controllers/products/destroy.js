const {existsSync, unlinkSync} = require('fs')
const { readJson, writeJson } = require("../../data")


module.exports = (req, res) => {
    // Do the magic
    const products = readJson('productsDataBase');
    const productsDestroy = products.filter((producto) => {
        if(producto.id === +req.params.id){
            console.log(producto);
            existsSync(`./public/images/products/${producto.image}`) && 
            unlinkSync(`./public/images/products/${producto.image}`);
        }
        return producto.id != +req.params.id;
    });
    // console.log(productsDestroy);
    writeJson(productsDestroy, 'productsDataBase')
    res.redirect('/products')
}