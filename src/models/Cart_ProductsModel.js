const connection = require('../database/connection');

module.exports = {
  async getCart_ProductsByCartId(id) {
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
        .select('*')
        .innerJoin(
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
  async createCart_Products(cart_product) {
    try {
      const result = await connection('Cart_Products')
        .insert(cart_product);
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async deleteCart_Products(product_id) {
    console.log(product_id);
    try {
      const result = await connection('Cart_Products')
        .where('product_id', product_id)
        .delete();
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async deleteAllProductsCart(cart_id) {
    console.log(cart_id);
    try {
      const result = await connection('Cart_Products')
        .where('cart_id', cart_id)
        .delete();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
