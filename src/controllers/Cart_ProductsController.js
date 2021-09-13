const Cart_ProductsModel = require('../models/Cart_ProductsModel');

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

}