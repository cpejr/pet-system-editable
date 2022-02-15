const { v4: uuidv4 } = require('uuid');
const StoreModel = require('../models/StoreModel');
const FirebaseModel = require('../models/FirebaseModel');
const OrderModel = require('../models/OrderModel');

module.exports = {
  async getOne(request, response) {
    const { id } = request.query;

    try {
      const store = await StoreModel.getStoreById(id);
      return response.status(200).json(store);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async getAll(request, response) {
    try {
      const store = await StoreModel.getAllStore();
      return response.status(200).json(store);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async getApprovedStore(request, response) {
    try {
      const store = await StoreModel.getApprovedStore();
      return response.status(200).json(store);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async create(request, response) {
    const store = request.body;
    const { cover_img, logo_img } = request.files;
    cover_img.name = uuidv4();
    logo_img.name = uuidv4();

    let firebase_id;
    // Criacao da Loja
    try {
      // eslint-disable-next-line no-useless-escape
      const regex = new RegExp('.+@.+\..+');
      if (!regex.test(request.body.email)) {
        throw new Error('Formato de email inválido');
      }
      firebase_id = await FirebaseModel.createNewUser(store.email, store.password);
      store.firebase_id_store = firebase_id;
      delete store.password;
      const cover = await AwsModel.uploadAWS(cover_img);
      const logo = await AwsModel.uploadAWS(logo_img);
      store.cover_img = cover.key;
      store.logo_img = logo.key;
      await StoreModel.createNewStore(store);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Store created', id: store.firebase_id_store });
  },

  async update(request, response) {
    const store = request.body;
    const { accessToken } = await request.session.get('store');
    let updatedStore;
    try {
      updatedStore = await StoreModel
        .updateStore(store, store.firebase_id_store);
      request.session.set('store', { store: updatedStore, accessToken });
      await request.session.save();
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Store updated', store: updatedStore });
  },

  async updateStatus(request, response) {
    const store = request.body;
    const { id } = request.query;
    let updatedStore;
    try {
      updatedStore = await StoreModel
        .updateStoreStatus(store, id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Store updated', store: updatedStore });
  },

  async deleteBoth(request, response) {
    const firebase_id_store = request.query.id;

    // Apagando Loja do Banco de Dados
    try {
      await FirebaseModel.deleteUser(firebase_id_store);
      await StoreModel.deleteStore(firebase_id_store);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Store deleted' });
  },

  async getSalesInfo(request, response) {
    const { month, year } = request.query;
    try {
      const id = request.session.get('store').store.firebase_id_store;
      const when = { month, year };
      const orders = await OrderModel.getOrdersByStoreId(when, id);
      const revenue = await OrderModel.getOrderRevenueByStoreId(when, id);
      const adminProfit = await OrderModel.getOrderProfitById(when, id);
      const amount = await OrderModel.getOrderProductsAmount(when, id);
      let averageShare;
      if (revenue.sum === 0) {
        averageShare = 0;
      } else {
        averageShare = (adminProfit.sum * 100) / revenue.sum;
      }
      const storeProfit = revenue.sum - adminProfit.sum;
      return response.status(200).json({
        totalOrders: orders.length, averageShare, revenue, storeProfit, amount, orders,
      });
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },
};
