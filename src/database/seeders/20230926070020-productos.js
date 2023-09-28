'use strict';

const { readJson } = require('../../data');
const products = readJson('productsDataBase');
console.log(products)
const productsDB = products.map(({name, price, discount, description, image, category}) => {
  // console.log('llegué hasta acá')
  return {
    name,
    price,
    discount, 
    categoryId: category === 'visited'? 1 : 2,
    description,
    image,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})
// console.log(productsDB);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert(
      "Products",
      productsDB,
      {}
    );

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete("Products", null, {});

  }
};
