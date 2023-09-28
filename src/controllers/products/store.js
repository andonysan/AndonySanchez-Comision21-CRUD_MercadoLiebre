const { writeJson, readJson } = require("../../data");
const Product = require("../../data/product")
const db = require('../../database/models')

module.exports = (req, res) => {
    // Do the magic
    const products = readJson('productsDataBase');
    const {name,description, price,categoryId, discount} = req.body
    db.Product.create({
        name: name.trim(),
        price,
        discount: discount || 0,
        categoryId, 
        description: description.trim(),
        image: null 
    })
    .then(product => {
        console.log(product);
        res.redirect('/products');
    })

    // const newProduct = new Product(req.body)
    // console.log(req.file);
    // newProduct.image = req.file? req.file.filename : null;
    // console.log(newProduct);

    // products.push(newProduct);
    // writeJson(products, 'productsDataBase')
    // res.redirect('/products');
}