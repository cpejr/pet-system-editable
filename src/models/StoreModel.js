const connection = require('../database/connection');

module.exports = {
  async getStoreById(id) {
    try {
      const store = await connection('Store')
        .where('firebase_id_store', id)
        .select('*')
        .first();
      return store;
    } catch (error) {
      throw new Error(error);
    }
  },

  async createNewStore(store) {
    try {
      const store_aux = await connection('Store')
        .insert(store);
      return store_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async deleteStore(id) {
    try {
      const response = await connection('Store')
        .where({ firebase_id_store: id })
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async updateStore(store, id) {
    try {
      const response = await connection('Store')
        .where({ firebase_id_store: id })
        .update(store);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async getAllStore() {
    try {
      const stores = await connection('Store')
        .select('*');
      return stores;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getByUserId(firebase_id_store) {
    try {
      const store = await connection('Store').select('*').where({ firebase_id_store }).first();
      return store;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
