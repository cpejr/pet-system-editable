const Cart_ProductsModel = require('../models/Cart_ProductsModel');
const CartModel = require('../models/CartModel');

module.exports = {

  async getById(req, res) {
    const order_id = req.query.id;
    try {
      const order_products = await Cart_ProductsModel.getCart_ProductsByOrderId(order_id);
      return res.status(200).json(order_products);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },
  async getAll(req, res) {
    try {
      const order_products = await Cart_ProductsModel.getAllCart_Products();
      return res.status(200).json(order_products);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },
  async create(req, res) {
    const cart_product = req.body;
    const firebase_id = req.session.get('user').user.firebase_id;
    try {
      const cart = await CartModel.getCartByFirebaseId(firebase_id);
      cart_product.cart_id = cart.cart_id;
      const result = await Cart_ProductsModel.createCart_Products(cart_product);
      return res.status(200).json({ notification: 'Cart Product Created Successfully!' });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },
};
