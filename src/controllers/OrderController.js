const { v4: uuidv4 } = require('uuid');
const OrderModel = require('../models/OrderModel');
const CartModel = require('../models/CartModel');
const ProductModel = require('../models/ProductModel');
const AddressModel = require('../models/AddressModel');

module.exports = {

  async getOne(req, res) {
    const order_id = req.query.id;
    const order = await OrderModel.getOrderById(order_id);
    return res.status(200).json(order);
  },

  //Pegar todas as orders com os order products
  async getOrderAndOrderProducts(req, res) {
    const firebase_id = req.query.id;
    try {
      const orders = await OrderModel.getOrderAndOrderProducts(firebase_id);
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
      const orders = await OrderModel.getAddressesByUserId(firebase_id);
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

  async create(req, res) {
    const order = req.body;
    order.order_id = uuidv4();
    try {
      const user_id = req.session.get('user').user.firebase_id;
      const { product_id } = await CartModel.getCart(user_id);
      const { store_id } = await ProductModel.getProductById(product_id);
      const { address_id } = await AddressModel.getAddressByUserId(user_id);
      console.log(address_id);
      order.address_id = address_id;
      order.store_id = store_id;
      order.firebase_id = user_id;
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
