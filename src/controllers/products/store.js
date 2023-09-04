const { writeJson, readJson } = require("../../data");
const Product = require("../../data/product")

module.exports = (req, res) => {
    // Do the magic
    const products = readJson('productsDataBase');
    const {name,description, price,category, discount} = req.body
    const newProduct = new Product(req.body)
    console.log(req.file);
    newProduct.image = req.file? req.file.filename : null;
    console.log(newProduct);

    products.push(newProduct);
    writeJson(products, 'productsDataBase')
    res.redirect('/products');
}