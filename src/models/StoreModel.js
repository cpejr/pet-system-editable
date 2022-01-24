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
        .update(store)
        .returning('*');
      return response[0];
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async updateStoreStatus(store, id) {
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

  async getAllStore(filter) {
    try {
      const stores = await connection('Store')
        .select('*')
        .where((builder) => {
          if (filter) {
          // eslint-disable-next-line quotes
            builder.whereRaw(`EXTRACT(MONTH FROM created_at::date) = ? AND EXTRACT(YEAR FROM created_at::date) = ?`, [filter.month, filter.year]);
          }
        });
      return stores;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getApprovedStore() {
    try {
      const stores = await connection('Store')
        .where({ status: true })
        .select('*');
      return stores;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getStatusByEmail(email) {
    try {
      const storeStatus = await connection('Store')
        .where({ email: email })
        .select('status')
        .first();
      return storeStatus;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
