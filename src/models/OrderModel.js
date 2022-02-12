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
        const CartProductsFilter = orderProducts.filter(
          (CartProducts) => CartProducts.cart_id === order.cart_id,
        );
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

  async getOrdersByStoreId(filter, id) {
    const monthBegin = (0 + filter.month).slice(-2);
    const monthEnd = (0 + (parseInt(filter.month, 10) + 1).toString()).slice(-2);
    try {
      const orders = await connection('Order')
        .where('firebase_id_store', id)
        .where('Order.created_at', '>=', `${filter.year}-${monthBegin}-01T00:00:00.000Z`)
        .where('Order.created_at', '<', `${filter.year}-${monthEnd}-01T00:00:00.000Z`)
        .where('status', 'Finalizado')
        .innerJoin(
          'User',
          'Order.firebase_id',
          'User.firebase_id',
        )
        .innerJoin(
          'Address',
          'Order.address_id',
          'Address.address_id',
        )
        .select('*', 'Order.created_at as order_created_at');

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

  async getOrderProductsAmount(filter, id) {
    const monthBegin = (0 + filter.month).slice(-2);
    const monthEnd = (0 + (parseInt(filter.month, 10) + 1).toString()).slice(-2);
    try {
      const orders = await connection('Order')
        .where('firebase_id_store', id)
        .where('Order.created_at', '>=', `${filter.year}-${monthBegin}-01T00:00:00.000Z`)
        .where('Order.created_at', '<', `${filter.year}-${monthEnd}-01T00:00:00.000Z`)
        .where('status', 'Finalizado')
        .select('*');

      let amount = 0;

      for (const order of orders) {
        delete order.type;
        delete order.birth_date;
        delete order.cpf;

        order.order_products = await Cart_ProductsModel
          .getCart_ProductsByCartId(order.cart_id);

        for (const product of order.order_products) {
          amount += product.amount;
        }
      }

      return amount;
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

  async getOrderRevenue(filter) {
    const monthBegin = filter ? (0 + filter.month).slice(-2) : null;
    const monthEnd = filter ? (0 + (parseInt(filter.month, 10) + 1).toString()).slice(-2) : null;
    try {
      const orders = await connection('Order')
        .sum('total_price')
        .where((builder) => {
          if (filter) {
            // eslint-disable-next-line quotes
            builder.where('Order.created_at', '>=', `${filter.year}-${monthBegin}-01T00:00:00.000Z`)
              .where('Order.created_at', '<', `${filter.year}-${monthEnd}-01T00:00:00.000Z`);
          }
        })
        .first();
      if (orders.sum === null) {
        orders.sum = 0;
      }
      return orders;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getOrderRevenueByStoreId(filter, id) {
    const monthBegin = (0 + filter.month).slice(-2);
    const monthEnd = (0 + (parseInt(filter.month, 10) + 1).toString()).slice(-2);
    try {
      const orders = await connection('Order')
        .where('firebase_id_store', id)
        .where('created_at', '>=', `${filter.year}-${monthBegin}-01T00:00:00.000Z`)
        .where('created_at', '<', `${filter.year}-${monthEnd}-01T00:00:00.000Z`)
        .where('status', 'Finalizado')
        .first()
        .sum('total_price');
      if (orders.sum === null) {
        orders.sum = 0;
      }
      return orders;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getOrderProfit(filter) {
    const monthBegin = (0 + filter.month).slice(-2);
    const monthEnd = (0 + (parseInt(filter.month, 10) + 1).toString()).slice(-2);
    try {
      const orders = await connection('Order')
        .sum('admin_profit')
        .where((builder) => {
          if (filter) {
            // eslint-disable-next-line quotes
            builder.where('created_at', '>=', `${filter.year}-${monthBegin}-01T00:00:00.000Z`)
              .where('created_at', '<', `${filter.year}-${monthEnd}-01T00:00:00.000Z`);
          }
        })
        .first();
      if (orders.sum === null) {
        orders.sum = 0;
      }
      return orders;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getOrderProfitById(filter, id) {
    const monthBegin = (0 + filter.month).slice(-2);
    const monthEnd = (0 + (parseInt(filter.month, 10) + 1).toString()).slice(-2);
    try {
      const orders = await connection('Order')
        .where('firebase_id_store', id)
        .where('created_at', '>=', `${filter.year}-${monthBegin}-01T00:00:00.000Z`)
        .where('created_at', '<', `${filter.year}-${monthEnd}-01T00:00:00.000Z`)
        .where('status', 'Finalizado')
        .sum('admin_profit')
        .first();
      if (orders.sum === null) {
        orders.sum = 0;
      }
      return orders;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async createNewOrder(order) {
    try {
      const response = await connection('Admin_share')
        .select('*').first();
      const profit = (response.share * order.total_price) / 100;
      order.admin_profit = profit;
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
