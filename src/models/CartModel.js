const connection = require('../database/connection');

module.exports = {
  async getCartById(id) {
    try {
      const cart = await connection('cart')
        .where('cart_id', id)
        .select('*')
        .first();
      return cart;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async createNewCart(cart) {
    try {
      const cart_aux = await connection('cart')
        .insert(cart);
      return cart_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async removeCart(cart_id) {
    try {
      const response = await connection('cart')
        .where({ cart_id })
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async updateCart(cart, id) {
    try {
      const response = await connection('cart')
        .where({ cart_id: id })
        .update(cart);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
