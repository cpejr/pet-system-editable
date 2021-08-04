const connection = require('../database/connection');

module.exports = {
  async getServiceById(id) {
    try {
      const service = await connection('services')
        .where('service_id', id)
        .select('*')
        .first();
      return service;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async createNewService(service) {
    try {
      const service_aux = await connection('services')
        .insert(service);
      return service_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async removeService(id) {
    try {
      const response = await connection('services')
        .where({ service_id: id })
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async updateService(service, id) {
    try {
      const response = await connection('services')
        .where({ service_id: id })
        .update(service);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async getAllServices() {
    try {
      const services = await connection('services')
        .select('*');
      return services;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
