const { v4: uuidv4 } = require('uuid');
const StoreModel = require('../models/StoreModel');
const FirebaseModel = require('../models/FirebaseModel');
const OrderModel = require('../models/OrderModel');
const AdminModel = require('../models/AdminModel');


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

  async getSalesInfo() {
    const { id } = req.session.get('store').store;
    const { month, year } = request.query;
    try{
      const when = { month, year };
      const orders = await OrderModel.getOrdersByStoreIdByMonth(when, id);
      console.log(orders);
      const revenue = await OrderModel.getOrdersByStoreId(when, id);
      console.log(revenue);
      const share = await AdminModel.getAll();
      console.log(share);
      const store_profit = revenue.sum * (1 - share/100);
      console.log(store_profit);
      return response.status(200).json({
        total_orders: orders.lentgh, share, revenue, store_profit,
      }); 
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  }
};
