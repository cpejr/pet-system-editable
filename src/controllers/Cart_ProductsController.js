const Cart_ProductsModel = require('../models/Cart_ProductsModel');
const CartModel = require('../models/CartModel');

module.exports = {

  async getById(req, res) {
    const cart_id = req.query.id;
    try {
      const cart_products = await Cart_ProductsModel.getCart_ProductsByCartId(cart_id);
      return res.status(200).json(cart_products);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },
  async getAll(req, res) {
    try {
      const cart_products = await Cart_ProductsModel.getAllCart_Products();
      return res.status(200).json(cart_products);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },
  async create(req, res) {
    const cart_product = req.body;
    const { firebase_id } = req.session.get('user').user;
    console.log(firebase_id);
    try {
      console.log(firebase_id);
      const cart = await CartModel.getCartByFirebaseId(firebase_id);
      console.log(cart);
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
  async deleteByID(req, res) {
    const product_id = req.query.id;
    try {
      const result = await Cart_ProductsModel.deleteCart_Products(product_id);
      return res.status(200).json({ notification: 'Cart Product Deleted Successfully!' });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },
  async deleteAllProductsCart(req, res) {
    const { firebase_id } = req.session.get('user').user;
    try {
      const cart = await CartModel.getCartByFirebaseId(firebase_id);
      const { cart_id } = cart;
      const result = await Cart_ProductsModel.deleteAllProductsCart(cart_id);
      return res.status(200).json({ notification: 'Cart Products Deleted Successfully!' });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },
};
