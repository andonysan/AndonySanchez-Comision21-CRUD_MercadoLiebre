const { readJson } = require(".");

const products = readJson('productsDataBase')
const Product = function ({name,description,price,discount,category}) {

    this.id = products[products.length - 1].id + 1;
    this.name = name.trim();
    this.description = description.trim();
    this.price = +price;
    this.discount = +discount;
    this.image = null;
    this.category = category;
    // this.createAt = new Date;
}

module.exports = Product