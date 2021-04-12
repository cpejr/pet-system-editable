const connection = require('../database/connection');

module.exports = {
  async getStoreById(id) {
    try {
      const store = await connection('Store')
        .where('store_id', id)
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

  async deleteStore(store_id) {
    try {
      const response = await connection('Store')
        .where({ id: store_id })
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async updateUser(store, store_id) {
    try {
      const response = await connection('Store')
        .where({ id: store_id })
        .update(store);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
