const {readJson} = require('../../data/index')
const db = require('../../database/models')

const products = readJson('productsDataBase');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = (req, res)=>{
    // Do the magic
    db.Product.findByPk(+req.params.id)
        .then(producto => {
            // console.log(producto);
            res.render('detail',{
                ...producto.dataValues,
                toThousand
            })
        })
    const producto = products.find(producto => producto.id === +req.params.id)
    // res.render('detail',{
    //     ...producto,
    //     toThousand
    // })
}