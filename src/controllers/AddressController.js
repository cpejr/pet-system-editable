const { v4: uuidv4 } = require('uuid');
const UserModel = require('../models/ProductModel');
const StoreModel = require('../models/StoreModel');
const AddressModel = require('../models/AddressModel');

module.exports = {
  async getOne(request, response) {
    const { id } = request.query;

    const address = await UserModel.getAddressById(id);

    return response.json(address);
  },

  async getAll(request, response) {
    try {
      const addresses = await AddressModel.getAllAddress();
      return response.status(200).json(addresses);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to find category' });
    }
  },

  async create(request, response) {
    const address = request.body;
    address.address_id = uuidv4();

    try {
      const user_id = request.session.get('user').user.firebase_id;
      address.user_id = user_id;
      const { store_id } = await StoreModel.getByUserId(user_id);
      address.store_id = store_id;

      await AddressModel.createNewAddress(address);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      console.error(error);
      return response.status(500).json({ notification: 'Internal server error while trying to create address' });
    }
    return response.status(200).json({ notification: 'Address created' });
  },
  async update(request, response) {
    const address = request.body;

    try {
      await AddressModel.updateAddress(address, address.address_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update address' });
    }
    return response.status(200).json({ notification: 'Address updated' });
  },
  async remove(request, response) {
    const { address_id } = request.params;

    try {
      await AddressModel.removeAddress(address_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to delete address' });
    }
    return response.status(200).json({ notification: 'Address deleted' });
  },
};
