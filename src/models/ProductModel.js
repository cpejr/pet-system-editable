const connection = require('../database/connection');

module.exports = {
  async getProductById(id) {
    try {
      const product = await connection('product')
        .where('product_id', id)
        .select('*')
        .first();
      return product;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async createNewProduct(product) {
    try {
      const product_aux = await connection('product')
        .insert(product);
      return product_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async deleteProduct(id) {
    try {
      const response = await connection('product')
        .where({ product_id: id })
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async updateUser(product, id) {
    try {
      const response = await connection('product')
        .where({ product_id: id })
        .update(product);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
