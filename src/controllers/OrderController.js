const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const qs = require('qs');
const { parseStringPromise } = require('xml2js');
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

  async create(req, res) {
    const order = req.body;
    const body = {};
    order.order_id = uuidv4();
    const cart_id = uuidv4();
    try {
      const { user } = req.session.get('user');
      const address = await AddressModel.getUserMainAddressById(
        user.firebase_id,
      );
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

      delete body.customer.cpf;
      delete body.customer.birth_date;
      delete body.customer.type;
      delete body.customer.firebase_id;
      delete body.customer.created_at;
      delete body.customer.phone;

      // Setando items
      items = await Cart_ProductsModel.getCart_ProductsByCartId(cart.cart_id);

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

      order.Pagseguro_id = response.data.id;
      await OrderModel.createNewOrder(order);

      return res.status(200).json(response.data);
    } catch (err) {
      return res.status(err.response.status).json(err.response.data);
    }
  },

  async createCheckoutPagSeguro(req, res) {
    const order = req.body;
    const data = {
      currency: 'BRL',
      itemId1: '0001',
      itemDescription1: 'PRODUTO 1',
      itemAmount1: '2250.00', // Sempre com decimais
      itemQuantity1: 1,
      itemWeight1: '100',
      itemId2: '0002',
      itemDescription2: 'PRODUTO 2',
      itemAmount2: '35.00', // Sempre com decimais
      itemQuantity2: 2,
      itemWeight2: '750',
      reference: 'REF1234',
      senderName: 'Jose Comprador',
      senderAreaCode: '11',
      senderPhone: '56713293',
      senderEmail: 'comprador@cpejr.com.br',
      shippingType: '1', // Formas de envio, consulte a documentacao
      shippingAddressStreet: 'Av. Brig. Faria Lima',
      shippingAddressNumber: '1384',
      shippingAddressComplement: '2o andar',
      shippingAddressDistrict: 'Jardim Paulistano',
      shippingAddressPostalCode: '01452002',
      shippingAddressCity: 'Sao Paulo',
      shippingAddressState: 'SP',
      shippingAddressCountry: 'BRA',
    };
    // const body = {};
    // order.order_id = uuidv4();
    try {
      // const { user } = req.session.get('user');
      // const address = await AddressModel
      //   .getUserMainAddressById(user.firebase_id);
      // const cart = await CartModel.getCartByFirebaseId(user.firebase_id);
      // order.cart_id = cart.cart_id;
      // order.address_id = address.address_id;
      // order.firebase_id = user.firebase_id;

      // // Setando costumer.
      // body.reference_id = order.order_id;
      // body.customer = { ...user };
      // body.customer.tax_id = user.cpf;

      // body.customer.phones = [
      //   {
      //     country: 55,
      //     area: parseInt(user.phone.substring(0, 2), 10),
      //     number: parseInt(user.phone.substring(2), 10),
      //     type: 'MOBILE',
      //   },
      // ];

      // delete body.customer.cpf;
      // delete body.customer.birth_date;
      // delete body.customer.type;
      // delete body.customer.firebase_id;
      // delete body.customer.created_at;
      // delete body.customer.phone;

      // // Setando items
      // items = await Cart_ProductsModel
      //   .getCart_ProductsByCartId(cart.cart_id);

      // for (let i = 0; i < items.length; i++) {
      //   items[i].reference_id = items[i].product_id;
      //   items[i].name = items[i].product_name;
      //   items[i].quantity = items[i].amount;
      //   items[i].unit_amount = items[i].final_price;
      //   delete items[i].cart_id;
      //   delete items[i].final_price;
      //   delete items[i].firebase_id_store;
      //   delete items[i].category_id;
      //   delete items[i].price;
      //   delete items[i].discount;
      //   delete items[i].description;
      //   delete items[i].img;
      //   delete items[i].created_at;
      //   delete items[i].available;
      //   delete items[i].product_name;
      //   delete items[i].amount;
      //   delete items[i].product_id;
      // }

      // body.items = items;

      // // Setando address
      // address.number = address.address_num;
      // address.locality = address.district;
      // address.region_code = address.state;
      // address.country = 'BRA';
      // address.postal_code = address.zipcode;

      // delete address.address_id;
      // delete address.address_num;
      // delete address.district;
      // delete address.zipcode;
      // delete address.created_at;
      // delete address.state;

      // shipping.address = address;
      // body.shipping = shipping;

      // Realizando requisição

      const url = 'https://ws.sandbox.pagseguro.uol.com.br/v2/checkout?email=vicepresidencia@cpejr.com.br&token=6B2B8617225E4CA8870633A697CA6DD6';
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      const response = await axios.post(url, qs.stringify(data), { headers });
      const { checkout } = await parseStringPromise(response.data);

      return res.status(200).json(checkout);
    } catch (err) {
      return res.status(err.response.status).json(err.response.data);
    }
  },

  async pay(req, res) {
    const charges = req.body;
    const { id } = req.query;
    charges.reference_id = uuidv4();
    try {
      // Realizando requisição

      const url = `${process.env.PAGSEGURO_ENDPOINT_API}/${id}/pay`;
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PAGSEGURO_MERCHANT_ID}`,
      };

      const response = await axios.post(url, charges, { headers });

      const order = {
        status: response.data.charges[0].status,
      };

      await OrderModel.updateOrder(order, response.data.reference_id);

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
    const cart_id = uuidv4();
    try {
      const { user } = req.session.get('user');
      const address = await AddressModel.getUserMainAddressById(
        user.firebase_id,
      );
      order.firebase_id_store = body.firebase_id_store;
      order.delivery_method = body.delivery_method;

      delete body.firebase_id_store;
      delete body.delivery_method;

      // Setando modo de pagamento
      body.paymentMode = 'default';

      // Setando id de referencia da compra, mesmo do orderId
      body.reference = order.order_id;

      // Setando email do recebedor
      body.receiverEmail = process.env.PAGSEGURO_MERCHANT_EMAIL;

      // Setando moeda
      body.currency = 'BRL';

      // Setando dados do comprador
      body.senderAreaCode = user.phone.substring(0, 2);
      body.creditCardHolderAreaCode = user.phone.substring(0, 2);
      body.senderCPF = user.cpf;
      body.senderEmail = 'c35506161624506613573@sandbox.pagseguro.com.br'; // ESTÁTICO!
      body.senderName = user.name;
      body.creditCardHolderPhone = user.phone.substring(2);
      body.senderPhone = user.phone.substring(2);

      // Setando endereço de cobrança
      body.billingAddressCity = address.city;
      body.billingAddressComplement = address.complement;
      body.billingAddressCountry = 'BRA';
      body.billingAddressDistrict = address.district;
      body.billingAddressNumber = address.address_num;
      body.billingAddressPostalCode = address.zipcode;
      body.billingAddressState = address.state;
      body.billingAddressStreet = address.street;

      // Endereço de entrega como False;
      body.shippingAddressRequired = 'False';

      // Setando items

      const cart = await CartModel.getCartByFirebaseId(user.firebase_id);

      // items = await Cart_ProductsModel.getCart_ProductsByCartId(cart.cart_id);

      // for (let i = 0; i < items.length; i++) {
      //   items[i].itemId = items[i].product_id;
      //   items[i].itemDescription = items[i].product_name;
      //   items[i].itemQuantity = items[i].amount;
      //   items[i].itemAmount = items[i].final_price.toFixed(2).toString();
      //   delete items[i].cart_id;
      //   delete items[i].final_price;
      //   delete items[i].firebase_id_store;
      //   delete items[i].category_id;
      //   delete items[i].price;
      //   delete items[i].discount;
      //   delete items[i].description;
      //   delete items[i].img;
      //   delete items[i].created_at;
      //   delete items[i].available;
      //   delete items[i].product_name;
      //   delete items[i].amount;
      //   delete items[i].product_id;
      // }

      // items.forEach((item, index) => {
      //   Object.keys(item).forEach((key) => {
      //     body[`${key}${index + 1}`] = item[key];
      //   });
      // });

      // Setando requisição

      const options = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/vnd.pagseguro.com.br.v3+xml',
        },
      };

      // const url = `https://ws.sandbox.pagseguro.uol.com.br/v2/transactions?email=${process.env.PAGSEGURO_MERCHANT_EMAIL}&token=${process.env.PAGSEGURO_MERCHANT_ID}`;
      const url = `https://ws.sandbox.pagseguro.uol.com.br/transactions?appId=${process.env.PAGSEGURO_MERCHANT_APP_ID}&appKey=${process.env.PAGSEGURO_MERCHANT_KEY}`;
      const response = await axios.post(url, qs.stringify(body), options);

      const { transaction } = await parseStringPromise(response.data);

      // Criando Order interno do sistema
      order.firebase_id = user.firebase_id;
      order.address_id = address.address_id;
      order.cart_id = cart.cart_id;
      order.total_price = body.installmentValue * body.installmentQuantity;
      order.payment_type = body.paymentMethod;
      order.status = 'Aguardando pagamento';
      order.Pagseguro_id = transaction.code[0];

      await OrderModel.createNewOrder(order);

      // Criando novo carrinho

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
