const {readJson} = require('../../data/index')

const products = readJson('productsDataBase');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    // Do the magic
    const products = readJson('productsDataBase');
    res.render('products',{
        products,
        toThousand
    })
}