const express = require('express');
const routes = express.Router();

const productsController = require('../controllers/products.controller');

routes.get('/', productsController.findAll);
routes.get('/:id', productsController.findByPk);
routes.post('/create', productsController.create);
routes.put('/update/:id', productsController.update);
routes.delete('/delete/:id', productsController.delete);

module.exports = routes;