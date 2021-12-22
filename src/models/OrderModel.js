/* eslint-disable no-await-in-loop */
const { connection } = require('../database/connection');
const Cart_ProductsModel = require('./Cart_ProductsModel');

module.exports = {
  async getOrderById(order_id) {
    try {
      const order = await connection('Order')
        .where('order_id', order_id)
        .select('*')
        .first();
      const cart_product = await Cart_ProductsModel.getCart_ProductsByCartId(order.cart_id);
      order.cart_product = cart_product;
      return order;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getOrderAndCartProducts(firebase_id) {
    try {
      const orders = await connection('Order')
        .where('firebase_id', firebase_id)
        .select('*');
      const orderProducts = await Cart_ProductsModel.getAllCart_Products(orders.cart_id);
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

  async getOrdersByStoreId(id) {
    try {
      const orders = await connection('Order')
        .where('firebase_id_store', id)
        .select('*')
        .innerJoin(
          'User',
          'Order.firebase_id',
          'User.firebase_id',
        )
        .innerJoin(
          'Address',
          'Order.address_id',
          'Address.address_id',
        );

      for (const order of orders) {
        delete order.type;
        delete order.birth_date;
        delete order.cpf;

        order.order_products = await Cart_ProductsModel
          .getCart_ProductsByCartId(order.cart_id);
      }

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
