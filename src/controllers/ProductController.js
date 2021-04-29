const ProductModel = require('../models/ProductModel');

module.exports = {
  async getOne(request, response) {
    const { product_id } = request.body;
    const product = await ProductModel.getProductById(product_id);
    return response.json(product);
  },

  async create(request, response) {
    const product = request.body;
    try {
      await ProductModel.createNewProduct(product);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to register user' });
    }
    return response.status(200).json({ notification: 'Produto criado!' });
  },
  async update(request, response) {
    const product = request.body;

    try {
      await ProductModel.updateProduct(product, product.product_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update product' });
    }
    return response.status(200).json({ notification: 'Produto alterado com sucesso!' });
  },
  async remove(request, response) {
    const { product_id } = request.body;

    try {
      await ProductModel.removeProduct(product_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to delete product' });
    }
    return response.status(200).json({ notification: 'Product deleted' });
  },
};
