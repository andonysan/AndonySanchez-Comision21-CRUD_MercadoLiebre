const {existsSync, unlinkSync} = require('fs')
const {readJson, writeJson} = require('../../data/index')

const products = readJson('productsDataBase');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res) => {
    // Do the magic
    const {name,price,discount,category,description} = req.body;
    const productoModify = products.map(producto => {
        if(producto.id === +req.params.id){
            req.file &&
                existsSync(`./public/images/products/${producto.image}`) && 
                unlinkSync(`./public/images/products/${producto.image}`)

            producto.name = name.trim();
            producto.description = description.trim();
            producto.price = +price;
            producto.discount = +discount;
            producto.image = req.file? req.file.filename : producto.image;
            producto.category = category;
        }
        return producto;
    });
    writeJson(productoModify,'productsDataBase');
    res.redirect('/products')
}