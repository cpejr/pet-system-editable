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

  async getStoreAddressById(id) {
    try {
      const address = await connection('Store_Address')
        .where('firebase_id_store', id)
        .select('*')
        .first();
      return address;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getUserMainAddressById(id) {
    try {
      const addressRelation = await connection('User_Address')
        .where('firebase_id', id)
        .select('*');

      const addressFilter = addressRelation.filter((address) => address.main_address === true);

      const address = await connection('Address')
        .where('address_id', addressFilter.address_id)
        .select('*')
        .first();

      return address;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAddressesByFirebaseId(id) {
    try {
      const address = await connection('Address')
        .where('firebase_id', id)
        .select('*');
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

      const user = await req.session.get("user");

      if (user) {
        const user_address = {
          firebase_id: user.firebase_id,
          address_id: address.address_id,
          main_address: true
        }
        const address_user_aux = await connection('User_Address')
        .insert(user_address);
      }

      if(!user){
        const store = await req.session.get("store");
        const store_address = {
          firebase_id_store: store.firebase_id_store,
          address_id: address.address_id
        }
        const address_store_aux = await connection('Store_Address')
        .insert(store_address);
      }

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
