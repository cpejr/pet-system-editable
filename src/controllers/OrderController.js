const { v4: uuidv4 } = require('uuid');
const OrderModel = require('../models/OrderModel');
const StoreModel = require('../models/StoreModel');

module.exports = {

  async getOne(req, res) {
    const { order_id } = req.params;
    const order = await OrderModel.getOrderById(order_id);
    return res.status(200).json(order);
  },

  async create(req, res) {
    const order = req.body;
    order.order_id = uuidv4();
    try {
      const user_id = req.session.get('user').user.firebase_id;
      const { store_id } = await StoreModel.getByUserId(user_id);
      order.store_id = store_id;
      order.firebase_id = user_id;
      await OrderModel.createNewOrder(order);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal server error while trying to create order' });
    }
    return res.status(200).json({ notification: 'Order created!' });
  },

  async update(request, response) {
    const order = request.body;
    const { order_id } = req.params;
    try {
      await OrderModel.updateOrder(order, order_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update order' });
    }
    return response.status(200).json({ notification: 'Order updated' });
  },

  async del(req, res) {
    const { order_id } = req.params;
    try {
      await OrderModel.removeOrder(order_id);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal server error while trying to delete order' });
    }
    return res.status(200).json({ notification: 'Order deleted' });
  },

};
