const connection = require('../database/connection');

module.exports = {
  async getAddressById(id) {
    try {
      const address = await connection('Address')
        .where('address_id', id)
        .select('*')
        .first();
      return address;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAddressByUserId(id) {
    try {
      const address = await connection('Address')
        .where('user_id', id)
        .select('*')
        .first();
      return address;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAllAddress() {
    try {
      const addresses = await connection('Address')
        .select('*');
      return addresses;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async createNewAddress(address) {
    try {
      const address_aux = await connection('Address')
        .insert(address);
      return address_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async removeAddress(id) {
    try {
      const response = await connection('Address')
        .where({ address_id: id })
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async updateAddress(address, id) {
    try {
      const response = await connection('Address')
        .where({ address_id: id })
        .update(address);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
