const { v4: uuidv4 } = require('uuid');
const UserModel = require('../models/ProductModel');
const StoreModel = require('../models/StoreModel');
const AddressModel = require('../models/AddressModel');

module.exports = {
  async getOne(request, response) {
    const { id } = request.query;

    try {
    const address = await AddressModel.getAddressById(id);
    return response.status(200).json(address);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async getAllByUser(req, res) {
    const firebase_id = req.query.id;
    try {
      const addresses = await AddressModel.getAddressesByUserId(firebase_id);
      return res.status(200).json(addresses);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async getAll(request, response) {
    try {
      const addresses = await AddressModel.getAllAddress();
      console.log("🚀 ~ file: AddressController.js ~ line 18 ~ getAll ~ addresses", addresses)
      return response.status(200).json(addresses);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async create(request, response) {
    const address = request.body;
    address.address_id = uuidv4();

    try {
      const user_id = request.session.get('user').user.firebase_id;
      address.user_id = user_id;
      const store = await StoreModel.getByUserId(user_id);
      address.store_id = store.store_id;

      await AddressModel.createNewAddress(address);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      console.error(error);
      return response.status(500).json({ notification: 'Internal Server Error' });
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
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Address updated' });
  },
  async remove(request, response) {
    const { id } = request.query;

    try {
      await AddressModel.removeAddress(id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Address deleted' });
  },
};
