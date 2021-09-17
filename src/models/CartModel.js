const connection = require('../database/connection');

module.exports = {

  async getAllCarts(id) {
    try {
      const carts = await connection('Cart')
        .where('firebase_id', id)
        .select('*');
      return carts;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getCart(id) {
    try {
      const cart = await connection('Cart')
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
      const cart_aux = await connection('Cart')
        .insert(cart);
      return cart_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async removeCartByID(cart_id) {
    try {
      const response = await connection('Cart')
        .where({ cart_id })
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async removeAllCarts(firebase_id) {
    try {
      const response = await connection('Cart')
        .where({ firebase_id })
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async updateCart(cart, id) {
    try {
      const response = await connection('Cart')
        .where({ cart_id: id })
        .update(cart);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
