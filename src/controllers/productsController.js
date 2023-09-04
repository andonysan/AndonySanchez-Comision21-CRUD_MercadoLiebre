const controller = {
	// Root - Show all products
	index: require('./products/product'),

	// Detail - Detail from one product
	detail: require('./products/detail'),

	// Create - Form to create
	create: require('./products/create'),
	
	// Create -  Method to store
	store: require('./products/store'),

	// Update - Form to edit
	edit: require('./products/edit'),
	// Update - Method to update
	update: require('./products/update'),

	// Delete - Delete one product from DB
	destroy : require('./products/destroy')
};

module.exports = controller;