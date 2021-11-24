const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const Cart_ProductsModel = require('../models/Cart_ProductsModel');
const OrderModel = require('../models/OrderModel');
const CartModel = require('../models/CartModel');
const AddressModel = require('../models/AddressModel');

let items = [];
const shipping = {};

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
    const body = {};
    order.order_id = uuidv4();
    const cart_id = uuidv4();
    try {
      const { user } = req.session.get('user');

      const address = await AddressModel
        .getUserMainAddressById(user.firebase_id);
      const cart = await CartModel.getCartByFirebaseId(user.firebase_id);
      const newCart = {
        firebase_id: user.firebase_id,
        cart_id,
      };
      await CartModel.createNewCart(newCart);
      order.cart_id = cart.cart_id;
      order.address_id = address.address_id;
      order.firebase_id = user.firebase_id;

      // Setando costumer.
      body.reference_id = order.order_id;
      body.customer = { ...user };
      body.customer.tax_id = user.cpf;

      body.customer.phones = [
        {
          country: 55,
          area: parseInt(user.phone.substring(0, 2), 10),
          number: parseInt(user.phone.substring(2), 10),
          type: 'MOBILE',
        },
      ];

      body.customer.cpf = undefined;
      delete body.customer.birth_date;
      delete body.customer.type;
      delete body.customer.firebase_id;
      delete body.customer.created_at;
      delete body.customer.phone;

      // Setando items
      items = await Cart_ProductsModel
        .getCart_ProductsByCartId(cart.cart_id);

      for (let i = 0; i < items.length; i++) {
        items[i].reference_id = items[i].product_id;
        items[i].name = items[i].product_name;
        items[i].quantity = items[i].amount;
        items[i].unit_amount = items[i].final_price;
        delete items[i].cart_id;
        delete items[i].final_price;
        delete items[i].firebase_id_store;
        delete items[i].category_id;
        delete items[i].price;
        delete items[i].discount;
        delete items[i].description;
        delete items[i].img;
        delete items[i].created_at;
        delete items[i].available;
        delete items[i].product_name;
        delete items[i].amount;
        delete items[i].product_id;
      }

      body.items = items;

      // Setando address
      address.number = address.address_num;
      address.locality = address.district;
      address.region_code = address.state;
      address.country = 'BRA';
      address.postal_code = address.zipcode;

      delete address.address_id;
      delete address.address_num;
      delete address.district;
      delete address.zipcode;
      delete address.created_at;
      delete address.state;

      shipping.address = address;
      body.shipping = shipping;

      // Realizando requisição

      const url = process.env.PAGSEGURO_ENDPOINT_API;
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PAGSEGURO_MERCHANT_ID}`,
      };

      const response = await axios.post(url, body, { headers });

      // Criando Order Local
      // order.pagSeguro_id = responde.data.id
      await OrderModel.createNewOrder(order);

      return res.status(200).json(response.data);
    } catch (err) {
      return res.status(err.response.status).json(err.response.data);
    }
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
