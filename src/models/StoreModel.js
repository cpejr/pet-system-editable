const connection = require('../database/connection');

module.exports = {
  async getStoreById(id) {
    try {
      const store = await connection('Store')
        .select('*')
        .where('store_id', id)
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
        .where({ user_id: id })
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
        .where({ store_id: id })
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

  async getByUserId(user_id) {
    try {
      const store = await connection('Store').select('*').where({ user_id }).first();
      return store;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
