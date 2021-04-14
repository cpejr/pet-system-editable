const StoreModel = require('../models/StoreModel');
const UserModel = require('../models/UserModel');
const FirebaseModel = require('../models/FirebaseModel');

module.exports = {
  async getOne(request, response) {
    const { id } = request.params;
    const store = await StoreModel.getStoreById(id);
    return response.json(store);
  },

  async create(request, response) {
    const user = request.body;
    const store = request.body;
    let firebase_id;

    try {
      // Criacao de usuario:
      firebase_id = await FirebaseModel.createNewUser(user.email, user.password);
      user.firebase_id = firebase_id;
      delete user.password;
      await UserModel.createNewUser(user);

      // Checa se o usuario e do tipo vendedor:
      if (user.type === 'vendedor') {
        // Usuario habilitado a criar loja
        try {
          await StoreModel.createNewStore(store);
        } catch (err) {
          console.log(err);
          throw new Error(err);
        }
      } else {
        // Usuario apagado, nao habilitado a criar uma loja
        FirebaseModel.deleteUser(firebase_id);
      }
    } catch (err) {
      if (firebase_id) {
        FirebaseModel.deleteUser(firebase_id);
      }
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to register user' });
    }
    return response.status(200).json({ notification: 'Usuario criado!' });
  },
};
