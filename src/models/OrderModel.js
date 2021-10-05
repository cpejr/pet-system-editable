const connection = require('../database/connection');
const Cart_ProductsModel = require('./Cart_ProductsModel');

module.exports = {
  async getOrderById(order_id,cart_id) {
    try {
      const order = await connection('Order')
        .where('order_id', order_id)
        .select('*')
        .first();
      const cart_product = await Cart_ProductsModel.getCart_ProductsByCartId(cart_id);
      order.cart_product = cart_product;
      return order;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getOrderAndCartProducts(firebase_id,cart_id) {
    try {
      const orders = await connection('Order')
        .where('firebase_id', firebase_id)
        .select('*');
      const orderProducts = await Cart_ProductsModel.getAllCart_Products(cart_id);
      orders.forEach((order) => {
        const CartProductsFilter = orderProducts.filter((CartProducts) => CartProducts.cart_id === order.cart_id);
        order.CartProducts = CartProductsFilter;
      });
      return orders;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getOrdersByUserId(id) {
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
    console.log("🚀 ~ file: OrderModel.js ~ line 61 ~ createNewOrder ~ order", order)
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
