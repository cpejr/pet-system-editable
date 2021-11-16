const { v4: uuidv4 } = require('uuid');
const OrderModel = require('../models/OrderModel');
const CartModel = require('../models/CartModel');
const AddressModel = require('../models/AddressModel');

module.exports = {

  // Pegar uma order com os order products
  async getOneOrderAndCartProducts(req, res) {
    const order_id = req.query.id;
    const order = await OrderModel.getOrderById(order_id);
    return res.status(200).json(order);
  },

  // Pegar todas as orders com os order products
  async getOrderAndCartProducts(req, res) {
    const { firebase_id } = req.session.get('user').user;
    try {
      const orders = await OrderModel.getOrderAndCartProducts(firebase_id);
      return res.status(200).json(orders);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async getAllByUser(req, res) {
    const firebase_id = req.query.id;
    try {
      const orders = await OrderModel.getOrdersByUserId(firebase_id);
      return res.status(200).json(orders);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async getAll(req, res) {
    try {
      const orders = await OrderModel.getAllOrders();
      return res.status(200).json(orders);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async getAllOrdersByStore(req, res) {
    try {
      const { firebase_id_store } = req.session.get('store').store;
      const orders = await OrderModel.getOrdersByStoreId(firebase_id_store);
      return res.status(200).json(orders);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async create(req, res) {
    const order = req.body;
    order.order_id = uuidv4();
    const cart_id = uuidv4();
    try {
      const { firebase_id } = req.session.get('user').user;
      const address = await AddressModel.getUserMainAddressById(firebase_id);
      const cart = await CartModel.getCartByFirebaseId(firebase_id);
      const newCart = {
        firebase_id,
        cart_id,
      };
      await CartModel.createNewCart(newCart);
      order.cart_id = cart.cart_id;
      order.address_id = address.address_id;
      order.firebase_id = firebase_id;

      await OrderModel.createNewOrder(order);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
    return res.status(200).json({ notification: 'Order created!' });
  },

  async update(request, response) {
    const order = request.body;
    try {
      await OrderModel.updateOrder(order, order.order_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Order updated' });
  },

  async del(req, res) {
    const { id } = req.query;
    try {
      await OrderModel.removeOrder(id);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
    return res.status(200).json({ notification: 'Order deleted' });
  },

};
