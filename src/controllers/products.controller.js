const productService = require('../services/products.service');

class ProducController {
    async findAll(req, res){
        const products = await productService.findAll();
        res.status(200).json(products);
    }

    async findByPk(req, res){
        const { id } = req.params;
        const product = await productService.findByPk(id);
        res.status(200).json(product);
    }

    async create(req, res){
        const { title, price, description } = req.body;
        const product = await productService.create({title, price, description});
        res.status(200).json(product);
    }

    async update(req, res){
        const { id } = req.params;
        const { title, price, description } = req.body;
        const product = await productService.update(id, {title, price, description});
        res.status(200).json(product);
    }

    async delete(req, res){
        const { id } = req.params;
        const product = await productService.delete(id);
        res.status(200).json(product);
    }

}

module.exports = new ProducController();