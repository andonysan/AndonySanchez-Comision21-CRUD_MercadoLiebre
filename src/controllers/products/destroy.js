const {existsSync, unlinkSync} = require('fs')
const { readJson, writeJson } = require("../../data")
const db = require('../../database/models');


module.exports = (req, res) => {
    // Do the magic
    const {id} = req.params;
    db.Product.destroy({
        where:{
            id
        }
    })
    .then(response => {
        console.log(response);
        res.redirect('/products')
    })
    // const products = readJson('productsDataBase');
    // const productsDestroy = products.filter((producto) => {
    //     if(producto.id === +req.params.id){
    //         console.log(producto);
    //         existsSync(`./public/images/products/${producto.image}`) && 
    //         unlinkSync(`./public/images/products/${producto.image}`);
    //     }
    //     return producto.id != +req.params.id;
    // });
    // // console.log(productsDestroy);
    // writeJson(productsDestroy, 'productsDataBase')
    
}