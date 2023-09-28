const {readJson} = require('../../data/index')
const db = require('../../database/models')

const products = readJson('productsDataBase');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res)=>{
    // Do the magic
    const categories = db.Category.findAll();
    const productToEdit = db.Product.findByPk(req.params.id);

    Promise.all([categories, productToEdit])
        .then(([categories, productToEdit]) => {
            res.render('product-edit-form',{
                ...productToEdit.dataValues,
                categories
            })
        })
    // const productToEdit = products.find(producto => producto.id === +req.params.id)

    
}