const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const qs = require('qs');
const { parseStringPromise } = require('xml2js');
const Cart_ProductsModel = require('../models/Cart_ProductsModel');
const OrderModel = require('../models/OrderModel');
const CartModel = require('../models/CartModel');
const AddressModel = require('../models/AddressModel');

module.exports = {
  // Pegar uma order com os order products
  async getOneOrderAndCartProducts(req, res) {
    const order_id = req.query.id;
    const order = await OrderModel.getOrderById(order_id);
    const url = `${process.env.PAGSEGURO_ENDPOINT_API}/${order.Pagseguro_id}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.PAGSEGURO_MERCHANT_ID}`,
    };
    const response = await axios.get(url, { headers });
    return res.status(200).json(response.data);
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

  async update(request, response) {
    const order = request.body;
    try {
      await OrderModel.updateOrder(order, order.order_id);
    } catch (err) {
      if (err.message) {
        console.error({ notification: err.message });
        return response.status(400).json({ notification: err.message });
      }
      return response
        .status(500)
        .json({ notification: 'Internal Server Error' });
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

  async createSession(req, res) {
    try {
      const url = `https://ws.sandbox.pagseguro.uol.com.br/sessions?appId=${process.env.PAGSEGURO_MERCHANT_APP_ID}&appKey=${process.env.PAGSEGURO_MERCHANT_KEY}`;
      const response = await axios.post(url);
      const { session } = await parseStringPromise(response.data);
      return res.status(200).json(session.id[0]);
    } catch (err) {
      console.error(err);
      return res.status(err.response.status).json(err.response.data);
    }
  },

  async creditCardPagSeguro(req, res) {
    const { body } = req;
    const order = {};
    order.order_id = uuidv4();
    try {
      const { user } = req.session.get('user');
      const address = await AddressModel.getUserMainAddressById(
        user.firebase_id,
      );

      // Setando modo de pagamento

      body['payment.mode'] = 'default';
      body['payment.method'] = 'creditCard';

      // Setando Moeda

      body.currency = 'BRL';

      // Setando itens

      const cart = await CartModel.getCartByFirebaseId(user.firebase_id);
      items = await Cart_ProductsModel.getCart_ProductsByCartId(cart.cart_id);

      items.forEach((item, index) => {
        Object.keys(item).forEach((key) => {
          if (key === 'product_id') {
            body[`item[${index + 1}].id`] = item[key];
          }
          if (key === 'product_name') {
            body[`item[${index + 1}].description`] = item[key];
          }
          if (key === 'final_price') {
            body[`item[${index + 1}].amount`] = item[key].toFixed(2).toString();
          }
          if (key === 'amount') {
            body[`item[${index + 1}].quantity`] = item[key].toString();
          }
        });
      });

      // Setando endereço url de notificação

      body.notificationURL = 'https://yourstore.com.br/notification';

      // Setando id de referencia da compra, mesmo do orderId

      body.reference = order.order_id;

      // Setando dados do comprador

      body['sender.name'] = user.name;
      body['sender.CPF'] = user.cpf;
      body['sender.areaCode'] = user.phone.substring(0, 2);
      body['sender.phone'] = user.phone.substring(2);
      body['sender.email'] = 'c35506161624506613573@sandbox.pagseguro.com.br'; // ESTÁTICO!

      // Setando endereço de cobrança
      body['shipping.address.street'] = address.street;
      body['shipping.address.number'] = address.address_num;
      body['shipping.address.complement'] = address.complement;
      body['shipping.address.district'] = address.district;
      body['shipping.address.postalCode'] = address.zipcode;
      body['shipping.address.city'] = address.city;
      body['shipping.address.state'] = address.state;
      body['shipping.address.country'] = 'BRA';

      // Setando tipo de entrega
      body['shipping.type'] = '3'; // 3 = Tipo não definido

      // Setando recebedor primario e secundarios

      body['receiver[1].publicKey'] = 'PUBCE22C91B3A7949DD8D3551851198618A';
      body['receiver[1].split.amount'] = '20.00';

      // Setando requisição

      const options = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/vnd.pagseguro.com.br.v3+xml',
        },
      };

      const url = `https://ws.sandbox.pagseguro.uol.com.br/transactions?appId=${process.env.PAGSEGURO_MERCHANT_APP_ID}&appKey=${process.env.PAGSEGURO_MERCHANT_KEY}`;
      const response = await axios.post(url, qs.stringify(body), options);

      const { transaction } = await parseStringPromise(response.data);

      // Criando Order interno do sistema

      order.firebase_id = user.firebase_id;
      order.firebase_id_store = items.firebase_id_store;
      order.address_id = address.address_id;
      order.cart_id = cart.cart_id;
      order.total_price = body['installment.value'];
      order.payment_type = 'Cartão de crédito';
      order.status = 'Aguardando pagamento';
      order.delivery_method = 'Próprio';
      const { 0: pagseguro_id } = transaction.code;
      order.Pagseguro_id = pagseguro_id;

      await OrderModel.createNewOrder(order);

      // Criando novo carrinho

      const cart_id = uuidv4();

      const newCart = {
        firebase_id: user.firebase_id,
        cart_id,
      };

      await CartModel.createNewCart(newCart);

      // Finalizando requisição

      return res.status(200).json(transaction);
    } catch (err) {
      console.log(err);
      return res.status(err.response.status).json(err.response.data);
    }
  },
};
