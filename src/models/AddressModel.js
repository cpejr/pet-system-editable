const { connection } = require('../database/connection');

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
      const { address_id } = await connection('Store_Address')
        .where('firebase_id_store', id)
        .select('*')
        .first();

      const address = await connection('Address')
        .where('address_id', address_id)
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
        .where('address_id', addressFilter[0].address_id)
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

      if (!user) {
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
      const user_addresses = await connection('User_Address')
        .select('*').leftJoin(
          'Address',
          'User_Address.address_id',
          'Address.address_id',
        );

      const store_addresses = await connection('Store_Address')
        .select('*').leftJoin(
          'Address',
          'Store_Address.address_id',
          'Address.address_id',
        );

      return { user_addresses, store_addresses };
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async createNewAddress(data, req) {
    const address = {
      street: data.street,
      address_num: data.address_num,
      complement: data.complement,
      district: data.district,
      zipcode: data.zipcode,
      city: data.city,
      state: data.state,
      address_id: data.address_id,
      region: data.region,
    };
    try {
      const address_aux = await connection('Address')
        .insert(address);
      try {
        const firebase_user = await req.session.get('user').user.firebase_id;

        const change_main_address = await connection('User_Address')
          .where({ firebase_id: firebase_user })
          .select('*');

        // Tipo um forEach. Troca todos os main_address para false e atualiza no banco de dados.
        for (const address of change_main_address) {
          address.main_address = false;
          await connection('User_Address')
            .where({ address_id: address.address_id })
            .update(address);
        }

        const user_address = {
          firebase_id: firebase_user,
          address_id: address.address_id,
          main_address: true,
        };

        await connection('User_Address')
          .insert(user_address);
      } catch {
        const firebase_id_store = data.id;
        const store_address = {
          firebase_id_store,
          address_id: address.address_id,
        };
        await connection('Store_Address')
          .insert(store_address);
      }

      return address_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async removeAddress(id, user) {
    try {
      if (user) {
        await connection('User_Address')
          .where({ address_id: id })
          .delete();
      }

      if (!user) {
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
