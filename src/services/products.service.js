// Don't pass the req or res object to the service layer

// Don't return anything related to the HTTP transport layer like a status code or headers from the service layer.

const productRepository = require('../repositories/product.repository');

class ProductService {
    async findAll(){
        try {
            return await productRepository.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    async findByPk(id){
        try {
            return await productRepository.findByPk(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(product){
        try {
            return await productRepository.create(product);
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id, product){
        try {
            return await productRepository.update(id, product);
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id){
        try {
            return await productRepository.delete(id);
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new ProductService();