const { v4: uuidv4 } = require('uuid');
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

  async getOneByStoreId(request, response) {
    const { id } = request.query;

    try {
      const address = await AddressModel.getStoreAddressById(id);
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

    const user = await req.session.get('user');

    try {
      const addresses = await AddressModel.getAddressesByFirebaseId(firebase_id, user);
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
      await AddressModel.createNewAddress(address, request);
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

    const { user } = await request.session.get('user');

    const mainAddress = user ? await AddressModel.getUserMainAddressById(user.firebase_id) : null;

    const orderAssociated = await AddressModel. getAddressOrderAssociated(id) ;
    try {
      await AddressModel.removeAddress(id, user, (id === mainAddress.address_id), orderAssociated);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Address deleted' });
  },
};
