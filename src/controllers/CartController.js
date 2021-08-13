const CartModel = require('../models/CartModel');

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

  async create(req, res) {
    const cart = req.body;
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
      await CartModel.updateCart(cart, cart.product_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Cart updated' });
  },

  async deleteByID(req, res) {
    const product_id = req.query.id;
    try {
      await CartModel.removeCartByID(product_id);
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
    const user_id = req.session.get('user').user.firebase_id;
    try {
      await CartModel.removeAllCarts(user_id);
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
