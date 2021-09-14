const connection = require('../database/connection');
const OrderProductsModel = require('./OrderProductsModels');

module.exports = {
  async getOrderById(id) {
    try {
      const order = await connection('Order')
        .where('order_id', id)
        .select('*')
        .first();
      const orderProducts = await OrderProductsModel.getOrderProductsByOrderId(id);
      order.orderProducts = orderProducts;
      return order;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getOrderAndOrderProducts(id) {
    try {
      const orders = await connection('Order')
        .where('firebase_id', id)
        .select('*');
      const orderProducts = await OrderProductsModel.getAllOrderProducts();
      orders.forEach((order) => {
        const orderProductsFilter = orderProducts.filter(orderProducts => orderProducts.order_id === order.order_id)
        order.orderProducts = orderProductsFilter;
      })
      return orders;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAddressesByUserId(id) {
    try {
      const orders = await connection('Order')
        .where('firebase_id', id)
        .select('*');
      return orders;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAllOrders() {
    try {
      const orders = await connection('Order')
        .select('*');
      return orders;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async createNewOrder(order) {
    try {
      const order_aux = await connection('Order')
        .insert(order);
      return order_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async removeOrder(order_id) {
    try {
      const response = await connection('Order')
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
      const response = await connection('Order')
        .where({ order_id: id })
        .update(order);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
