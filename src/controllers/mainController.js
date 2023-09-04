const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// Do the magic
		const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const productsVisited = products.filter(producto => producto.category === 'visited')
		const productsOfert = products.filter(producto => producto.category === 'in-sale');
		res.render('index', {
			productsVisited,
			productsOfert,
			toThousand
			
		})
	},
	search: (req, res) => {
		// Do the magic
		const results = products.filter(producto => producto.name.toLowerCase().includes(req.query.keywords.toLowerCase()))
		console.log(results)
		res.render('results',{
			results,
			toThousand,
			keywords: req.query.keywords
		})
	},
};

module.exports = controller;
