const { connection } = require('../database/connection');

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
      const produto = await connection('Cart_Products')
        .where('cart_id', cart_product.cart_id)
        .where('product_id', cart_product.product_id)
        .select('*')
        .first();

      if (produto) {
        const quantity = produto.amount + parseInt(cart_product.amount, 10);
        const body = {
          amount: quantity,
          final_price: produto.final_price + parseFloat(cart_product.final_price),
        };
        const result = await connection('Cart_Products')
          .where('cart_id', cart_product.cart_id)
          .where('product_id', cart_product.product_id)
          .update(body);

        return result;
      }

      const result = await connection('Cart_Products')
        .insert(cart_product);

      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async deleteCart_Products(product_id) {
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
    try {
      const result = await connection('Cart_Products')
        .where('cart_id', cart_id)
        .delete();
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async updateProductAmount(amount, id) {
    try {
      const response = await connection('Cart_Products')
        .where({ cart_id: id })
        .where({ product_id: amount.product_id })
        .update(amount);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
