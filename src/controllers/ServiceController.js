const { v4: uuidv4 } = require('uuid');
const ServiceModel = require('../models/ServiceModel');
const StoreModel = require('../models/StoreModel');

module.exports = {
  async getOne(request, response) {
    const { id } = request.query;

    const service = await ServiceModel.getProductById(id);
    const store = await StoreModel.getStoreById(service.store_id);
    service.store = store;

    return response.json(service);
  },

  async create(request, response) {
    const service = request.body;
    service.service_id = uuidv4();

    try {
      const user_id = request.session.get('user').user.firebase_id;
      const { store_id } = await StoreModel.getByUserId(user_id);
      service.store_id = store_id;

      console.log({ service });
      await ServiceModel.createNewService(service);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      console.error(error);
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Product created' });
  },
  async update(request, response) {
    const service = request.body;

    try {
      await ServiceModel.updateService(service, service.service_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Product updated' });
  },
  async remove(request, response) {
    const { service_id } = request.body;

    try {
      await ServiceModel.removeService(service_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Product deleted' });
  },
  async getAll(request, response) {
    try {
      const services = await ServiceModel.getAllServices();
      return response.status(200).json(services);
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },
};
