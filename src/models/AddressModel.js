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

  async getAddressesByFirebaseId(id, user) {
    try {

      if (user) {      
        const address = await connection('User_Address')
        .where({ firebase_id: id })
        .select().innerJoin(
          'Address',
          'User_Address.address_id',
          'Address.address_id',
        );

        return address;
      }

      if(!user){
        const address = await connection('Store_Address')
        .where({ firebase_id_store: id })
        .select().innerJoin(
          'Address',
          'Store_Address.address_id',
          'Address.address_id',
        );

        return address;
      }

      return address;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAllAddress() {
    try {
      const addresses = await connection('Address')
        .select('*').innerJoin(
          'User_Address',
          'Address.address_id',
          'User_Address.address_id',
        );
      return addresses;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async createNewAddress(address, req) {
    try {
      const address_aux = await connection('Address')
        .insert(address);

      const user = await req.session.get("user");
      
      if (user) {
        const firebase_user = await req.session.get("user").user.firebase_id;

        const change_main_address = await connection('User_Address')
        .where({ firebase_id: firebase_user })
        .select('*');
        
        //Tipo um forEach. Troca todos os main_address para false e atualiza no banco de dados.
        for (const address of change_main_address) {
          address.main_address = false;
          await connection('User_Address')
          .where({ address_id: address.address_id })
          .update(address);
        }
        
        const user_address = {
          firebase_id: firebase_user,
          address_id: address.address_id,
          main_address: true
        }
        
        await connection('User_Address')
        .insert(user_address);
      }

      if(!user){
        const firebase_id_store = await req.session.get("store").store.firebase_id_store;
        const store_address = {
          firebase_id_store: firebase_id_store,
          address_id: address.address_id
        }
        await connection('Store_Address')
        .insert(store_address);
      }

      return address_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async removeAddress(id,user) {
    try {

      if (user) {      
        await connection('User_Address')
        .where({ address_id: id })
        .delete();
      }

      if(!user){
        await connection('Store_Address')
        .where({ address_id: id })
        .delete();
      }

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
