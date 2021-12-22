const { connection } = require('../database/connection');

module.exports = {
  async getStoreById(firebase_id_store) {
    try {
      const store = await connection('Store')
        .where('firebase_id_store', firebase_id_store)
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
      console.log(store_aux);
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
    console.log('firebase', id);
    try {
      const response = await connection('Store')
        .where({ firebase_id_store: id })
        .update(store)
        .returning('*');
      return response[0];
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
};
