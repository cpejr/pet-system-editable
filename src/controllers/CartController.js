const CartModel = require('../models/CartModel');

module.exports = {

  async getOne(req, res) {
    const { product_id } = req.params;
    const cart = await CartModel.getCartById(product_id);
    return res.status(200).json(cart);
  },

  async getAll(req, res) {
    const { user_id } = req.params;
    const cart = await CartModel.getAllCarts(user_id);
    return res.status(200).json(cart);
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
      return res.status(500).json({ notification: 'Internal server error while trying to create cart' });
    }
    return res.status(200).json({ notification: 'Cart created!' });
  },

  async update(request, response) {
    const cart = request.body;
    const { product_id } = req.params;
    try {
      await CartModel.updateCart(cart, product_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update cart' });
    }
    return response.status(200).json({ notification: 'Cart updated' });
  },

  async deleteByID(req, res) {
    const { product_id } = req.params;
    try {
      await CartModel.removeCartByID(product_id);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal server error while trying to delete cart' });
    }
    return res.status(200).json({ notification: 'Cart deleted' });
  },

  async deleteAll(req, res) {
    const { user_id } = req.params;
    try {
      await CartModel.removeAllCarts(user_id);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal server error while trying to delete cart' });
    }
    return res.status(200).json({ notification: 'Cart deleted' });
  },

};
