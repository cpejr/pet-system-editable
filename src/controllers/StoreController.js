const StoreModel = require('../models/StoreModel');
const UserModel = require('../models/UserModel');
const FireBaseModel = require('../models/FirebaseModel');
const FirebaseModel = require('../models/FirebaseModel');

module.exports = {
  async getOne(request, response) {
    const { store_id } = request.body;
    const store = await StoreModel.getStoreById(store_id);
    return response.json(store);
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
      type: info.type,
      created_at: info.created_at,
    };

    const store = {
      store_id: info.store_id,
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
      created_at: info.created_at,
      evaluation: info.evaluation,
      status: info.status,
    };

    console.log('Info: ', info);
    console.log('User: ', user);
    console.log('Store: ', store);

    // Criacao do Usuario
    try {
      firebase_id = await FireBaseModel.createNewUser(user.email, user.password);
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

    // Pegando o user_id do Usuario recem criado
    store.user_id = user.firebase_id;

    // Criacao da Loja
    try {
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
    const { user_id, store_id } = request.body;
    // Checagem no banco de dados - Corrigir depois
    /*
    try {
      const store = StoreModel.getStoreById(store_id);
      console.log(store);
      console.log('User id passado: ', user_id);
      console.log('User id do banco de dados: ', store.user_id);
      if (store.user_id !== user_id) {
        console.log('User id is not correct');
      }
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to search store' });
    }
    */
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
      await StoreModel.deleteStore(store_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to delete store' });
    }
    return response.status(200).json({ notification: 'User and store were deleted' });
  },
};