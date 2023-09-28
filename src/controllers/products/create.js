const db = require('../../database/models')

module.exports = (req,res)=>{
    // Do the magic
    db.Category.findAll()
        .then(categories => {
            res.render('product-create-form',{
                categories
            })
        })
}