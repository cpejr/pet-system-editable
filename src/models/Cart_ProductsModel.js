const connection = require('../database/connection');

module.exports = {
  async getCart_ProductsByOrderId(id) {
    try {
      const order_products = await connection('Cart_Products')
        .where('cart_id', id)
        .select('*').innerJoin(
          'Product',
          'Cart_Products.product_id',
          'Product.product_id',
        );
      return order_products;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAllCart_Products() {
    try {
      const order_products = await connection('Cart_Products')
        .select('*').innerJoin(
          'Product',
          'Cart_Products.product_id',
          'Product.product_id',
        );
      return order_products;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
