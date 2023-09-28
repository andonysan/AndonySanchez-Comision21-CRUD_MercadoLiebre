const {existsSync, unlinkSync} = require('fs')
const {readJson, writeJson} = require('../../data/index')
const db = require('../../database/models')

const products = readJson('productsDataBase');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res) => {
    // Do the magic
    const {id} = req.params;
    const {name,price,discount,categoryId,description} = req.body;

    db.Product.update(
        {
            name: name.trim(),
            price,
            discount: discount || 0,
            categoryId,
            description: description.trim()
        },
        {
            where:{
                id
            }
        }
    )
    .then(response => {
        console.log(response);
        res.redirect('/products')
    })


    // const productoModify = products.map(producto => {
    //     if(producto.id === +req.params.id){
    //         req.file &&
    //             existsSync(`./public/images/products/${producto.image}`) && 
    //             unlinkSync(`./public/images/products/${producto.image}`)

    //         producto.name = name.trim();
    //         producto.description = description.trim();
    //         producto.price = +price;
    //         producto.discount = +discount;
    //         producto.image = req.file? req.file.filename : producto.image;
    //         producto.category = category;
    //     }
    //     return producto;
    // });
    // writeJson(productoModify,'productsDataBase');
    // res.redirect('/products')
}