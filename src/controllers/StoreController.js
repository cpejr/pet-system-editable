const StoreModel = require('../models/StoreModel');
const UserModel = require('../models/UserModel');
const FireBaseModel = require('../models/FirebaseModel');

module.exports = {
  async getOne(request, response) {
    const { store_id } = request.body;
    const store = await StoreModel.getStoreById(store_id);
    return response.json(store);
  },

  async create(request, response) {
    const {
      email, password, cpf, birth_date, first_name, last_name, type, created_at,
    } = request.body;

    const {
      store_id, company_name, telephone, cellphone, cep, cnpj, ie, ie_state, cover_img, logo_img, evaluation, status,
    } = request.body;

    const userInfo = { email, password };
    const user = {
      email, password, cpf, birth_date, first_name, last_name, type, created_at,
    };

    const store = {
      store_id,
      company_name,
      email,
      telephone,
      cellphone,
      cnpj,
      cep,
      ie,
      ie_state,
      cover_img,
      logo_img,
      created_at,
      evaluation,
      status,
    };

    let firebase_id;

    // Criacao do Usuario
    try {
      firebase_id = await FireBaseModel.createNewUser(userInfo.email, userInfo.password);
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
      return response.status(500).json({ notification: 'Internal server error while trying to register user' });
    }
    return response.status(200).json({ notification: 'Usuario e loja criada!' });
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
    return response.status(200).json({ notification: 'Loja alterada com sucesso!' });
  },
};
