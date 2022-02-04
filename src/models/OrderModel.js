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

  async getOrdersByStoreId(filter, id) {
    try {
      const orders = await connection('Order')
        .where('firebase_id_store', id)
        .andWhere('Order.created_at', '>=', new Date(filter.year, filter.month, 1))
        .andWhere('Order.created_at', '<=', new Date(filter.year, filter.month+1, 0))
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

          console.log(order.order_products);

          for (const product of order.order_products) {
            console.log(product.amount);
          }
      }
      

      return orders;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getOrderProductsAmount(filter, id) {
    try {
      const orders = await connection('Order')
        .where('firebase_id_store', id)
        .andWhere('created_at', '>=', new Date(filter.year, filter.month, 1))
        .andWhere('created_at', '<=', new Date(filter.year, filter.month+1, 0))
        .select('*')

      var amount = 0;

      for (const order of orders) {
        delete order.type;
        delete order.birth_date;
        delete order.cpf;

        order.order_products = await Cart_ProductsModel
          .getCart_ProductsByCartId(order.cart_id);

          console.log(order.order_products);

          for (const product of order.order_products) {
            amount += product.amount;
            console.log(amount);
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
    try {
      const orders = await connection('Order')
        .sum('total_price')
        .where((builder) => {
          if (filter) {
            // eslint-disable-next-line quotes
            builder.whereRaw(`EXTRACT(MONTH FROM created_at::date) = ? AND EXTRACT(YEAR FROM created_at::date) = ?`, [filter.month, filter.year]);
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
    try {
      const orders = await connection('Order')
        .where('firebase_id_store', id)
        .andWhere('created_at', '>=', new Date(filter.year, filter.month, 1))
        .andWhere('created_at', '<=', new Date(filter.year, filter.month+1, 0))
        .sum('total_price')
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

  async getOrderProfit(filter) {
    try {
      const orders = await connection('Order')  
        .sum('admin_profit')
        .where((builder) => {
          if (filter) {
            // eslint-disable-next-line quotes
            builder.whereRaw(`EXTRACT(MONTH FROM created_at::date) = ? AND EXTRACT(YEAR FROM created_at::date) = ?`, [filter.month, filter.year]);
          }
        })
        .first()
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
    try {
      const orders = await connection('Order')  
        .where('firebase_id_store', id)
        .andWhere('created_at', '>=', new Date(filter.year, filter.month, 1))
        .andWhere('created_at', '<=', new Date(filter.year, filter.month+1, 0))
        .sum('admin_profit')
        .first()
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
      const profit = (response.share * order.total_price/100);
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
