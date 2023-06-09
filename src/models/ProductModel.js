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

  async removeProduct(id) {
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

  async updateProduct(product, id) {
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
  async getAllProducts(filter) {
    try {
      console.log(filter);
      const { price } = filter;
      console.log(price);
      const products = await connection('product')
        .select('*')
        .where((builder) => {
          if(price > 100){
            builder.where("price", ">", 100);
          }else if(price){
            console.log("entrei");
            builder.where("price", "<=", price);
          }
        });
      return products;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
