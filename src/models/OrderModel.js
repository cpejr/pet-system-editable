const connection = require('../database/connection');

module.exports = {
  async getOrderById(id) {
    try {
      const order = await connection('order')
        .where('order_id', id)
        .select('*')
        .first();
      return order;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async createNewOrder(order) {
    try {
      const order_aux = await connection('order')
        .insert(order);
      return order_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async removeOrder(order_id) {
    try {
      const response = await connection('order')
        .where({ order_id })
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async updateOrder(order, id) {
    try {
      const response = await connection('order')
        .where({ order_id: id })
        .update(order);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
