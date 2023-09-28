const {readJson} = require('../../data/index')
const db = require('../../database/models')

const products = readJson('productsDataBase');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    // Do the magic
    db.Product.findAll()
        .then(products => {
            res.render('products',{
                products,
                toThousand
            })
        })
    const products = readJson('productsDataBase');
    
}