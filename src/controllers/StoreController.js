const StoreModel = require('../models/StoreModel');
// const FireBaseModel = require('../models/FirebaseModel');

module.exports = {
  async getOne(request, response) {
    const { id } = request.params;
    const store = await StoreModel.getStoreById(id);
    return response.json(store);
  },
  /*
  async create(request, response) {

  },
  */
};
