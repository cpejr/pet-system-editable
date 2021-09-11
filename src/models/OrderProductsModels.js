const connection = require('../database/connection');

module.exports = {
  async getOrderProductsByOrderId(id) {
    try {
      const order_products = await connection('orders_products')
        .where('order_id', id)
        .select('*').innerJoin(
          'product',
          'orders_products.product_id',
          'product.product_id'
        )
      return order_products;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAllOrderProducts() {
    try {
      const order_products = await connection('orders_products')
        .select('*').innerJoin(
          'product',
          'orders_products.product_id',
          'product.product_id'
        )
      return order_products;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
}
