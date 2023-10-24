const database = require('../database/models/');

class ProductRepository {
    async findAll() {
        return await database.Products.findAll();
    }

    async findByPk(id) {
        return await database.Products.findByPk(id);
    }

    async create(product) {
        return await database.Products.create(product);
    }

    async update(id, product) {
        return await database.Products.update(product, {
            where : {
                id
            }
        });
    }

    async delete(id) {
        return await database.Products.destroy({
            where : {
                id
            }
        });
    }
}

module.exports = new ProductRepository();