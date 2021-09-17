const CartModel = require('../models/CartModel');
const { v4: uuidv4 } = require('uuid');

module.exports = {

  async getAll(req, res) {
    const firebase_id = req.query.id;
    try {
      const cart = await CartModel.getAllCarts(firebase_id);
      return res.status(200).json(cart);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async getById(req, res) {
    const cart_id = req.query.id;
    try {
      const cart = await CartModel.getCartById(cart_id);
      return res.status(200).json(cart);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async create(req, res) {
    const cart = req.body;
    cart.cart_id = uuidv4();
    try {
      cart.firebase_id = req.session.get('user').user.firebase_id;
      await CartModel.createNewCart(cart);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
    return res.status(200).json({ notification: 'Cart created!' });
  },

  async update(request, response) {
    const cart = request.body;
    try {
      await CartModel.updateCart(cart, cart.cart_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Cart updated' });
  },

  async deleteByID(req, res) {
    const cart_id = req.query.id;
    try {
      await CartModel.removeCartByID(cart_id);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
    return res.status(200).json({ notification: 'Cart deleted' });
  },

  async deleteAll(req, res) {
    const firebase_id = req.session.get('user').user.firebase_id;
    try {
      await CartModel.removeAllCarts(firebase_id);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
    return res.status(200).json({ notification: 'Cart deleted' });
  },

};
