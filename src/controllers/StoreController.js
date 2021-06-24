const { v4: uuidv4 } = require('uuid');
const timestamp = require('time-stamp');
const StoreModel = require('../models/StoreModel');
const UserModel = require('../models/UserModel');
const FirebaseModel = require('../models/FirebaseModel');
// const ProductModel = require('../models/ProductModel');

module.exports = {
  async getOne(request, response) {
    const { store_id } = request.query;

    try {
      const store = await StoreModel.getStoreById(store_id);
      return response.status(200).json(store);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to find store' });
    }
  },

  async getAll(request, response) {
    try {
      const store = await StoreModel.getAllStore();
      return response.status(200).json(store);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to find category' });
    }
  },

  async create(request, response) {
    const info = request.body;
    let firebase_id;

    const user = {
      email: info.email,
      password: info.password,
      cpf: info.cpf,
      birth_date: info.birth_date,
      first_name: info.first_name,
      last_name: info.last_name,
      type: 'seller',
      created_at: timestamp(),
      telephone: info.telephone,
    };

    const store = {
      store_id: uuidv4(),
      company_name: info.company_name,
      email: info.email,
      telephone: info.telephone,
      cellphone: info.cellphone,
      cnpj: info.cnpj,
      cep: info.cep,
      ie: info.ie,
      ie_state: info.ie_state,
      cover_img: info.cover_img,
      logo_img: info.logo_img,
      created_at: timestamp(),
      evaluation: info.evaluation,
      status: info.status,
    };

    // Criacao do Usuario
    try {
      // Criacao de usuario:
      firebase_id = await FirebaseModel.createNewUser(user.email, user.password);
      user.firebase_id = firebase_id;
      delete user.password;
      await UserModel.createNewUser(user);
    } catch (err) {
      if (firebase_id) {
        FirebaseModel.deleteUser(firebase_id);
      }
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to register user' });
    }

    // Criacao da Loja
    try {
      store.user_id = user.firebase_id;
      await StoreModel.createNewStore(store);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to register store' });
    }
    return response.status(200).json({ notification: 'User and store created' });
  },

  async update(request, response) {
    const store = request.body;

    try {
      await StoreModel.updateStore(store, store.store_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update store' });
    }
    return response.status(200).json({ notification: 'Store updated' });
  },

  async deleteBoth(request, response) {
    const user_id = request.session.get('user').user.firebase_id;

    // Apagando Usuario do Firebase e do Banco de Dados
    try {
      await FirebaseModel.deleteUser(user_id);
      await UserModel.deleteUser(user_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to delete users store' });
    }
    // Apagando Loja do Bando de Dados
    try {
      await StoreModel.deleteStore(user_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to delete store' });
    }
    return response.status(200).json({ notification: 'User and store were deleted' });
  },
};
