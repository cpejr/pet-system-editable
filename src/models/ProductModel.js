// const connection = require('../database/connection');
const { db } = require('../database/connection');

module.exports = {
  async getProductById(id) {
    try {
      const product = await db('Product')
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
      const product_aux = await db('Product').insert(product);
      return product_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async removeProduct(id) {
    try {
      const response = await db('Product')
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
      const response = await db('Product')
        .where({ product_id: id })
        .update(product);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async getAllByStore(firebase_id_store) {
    try {
      const products = await db('Product')
        .where('firebase_id_store', firebase_id_store)
        .select('*');

      return products;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async getAllProducts(valor, category_id) {
    let minPrice = 0;
    let maxPrice = 0;
    try {
      if (valor !== undefined) {
        ({ 0: minPrice } = valor);
        ({ 1: maxPrice } = valor);
      } else {
        minPrice = 0;
        maxPrice = 5000;
      }

      if (category_id !== undefined) {
        const products = await db('Product')
          .select('*')
          .where('category_id', category_id)
          .where('price', '>=', minPrice)
          .where('price', '<=', maxPrice)
          .orderBy('price', 'ASCENDING');

        return products;
      }

      if (valor) {
        const products = await db('Product')
          .select('*')
          .where('price', '>=', minPrice)
          .where('price', '<=', maxPrice)
          .orderBy('price', 'ASCENDING');

        return products;
      }

      const products = await db('Product').select('*');

      return products;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
