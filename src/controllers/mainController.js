const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const op = db.Sequelize.Op;

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// Do the magic

		const productsVisited= db.Product.findAll({
			where:{
				categoryId: 1
			}
		});
		const productsOfert= db.Product.findAll({
			where:{
				categoryId: 2
			}
		});

		Promise.all([productsVisited, productsOfert])
			.then(([productsVisited, productsOfert]) => {
				console.log(productsVisited)
				res.render('index', {
					productsVisited,
					productsOfert,
					toThousand
					
				})
			})
			.catch(error => console.log(error))

		// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
		// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		// const productsVisited = products.filter(producto => producto.category === 'visited')
		// const productsOfert = products.filter(producto => producto.category === 'in-sale');
		
	},
	search: (req, res) => {
		// Do the magic
		db.Product.findAll({
			where:{
				[op.or]:[
					{
						name:{
							[op.substring]: req.query.keywords
						}
					},
					{
						description:{
							[op.substring]: req.query.keywords
						}
					}
				]
				
			}
		})
		.then(results => {
			res.render('results',{
				results,
				toThousand,
				keywords: req.query.keywords
			})
		})
		.catch(error => console.log(error))
		// const results = products.filter(producto => producto.name.toLowerCase().includes(req.query.keywords.toLowerCase()))
		// console.log(results)
		
	},
};

module.exports = controller;
