const connection = require('../database/connection');
const FirebaseModel = require('../models/FirebaseModel');
const UserModel = require('../models/UserModel');

module.exports = {

  async getOne(request, response) {
    const { id } = request.params;
    const users = await UserModel.getUserById(id);
    return response.json(users);
  },

  async create(request, response) {
    const user = request.body;
    if (user.type === 'retailer') {
      user.user_status = 'approved';
    }
    let firebaseId;
    try {
      firebaseId = await FirebaseModel.createNewUser(user.email, user.password);
      user.firebase = firebaseId;

      delete user.password;
      await connection('Users').insert(user);
      /*
      const data = {
        to: user.email,
        subject: 'Bem Vindo',
        text: 'Loja Casulus',
        user_name: user.name,
      };
      Email.registerMail(data);
      */
    } catch (err) {
      if (firebaseId) {
        FirebaseModel.deleteUser(firebaseId);
      }
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to register user' });
    }
    return response.status(200).json({ notification: 'Usuario criado!' });
  },

  async delete(request, response) {
    try {
      const { id } = request.params;
      const user = await UserModel.getUserById(id);

      await FirebaseModel.deleteUser(user.firebase);
      await UserModel.deleteUser(id);

      return response.status(200).json({ message: 'Sucesso!' });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ notification: 'Internal server error while trying to delete user' });
    }
  },

  async update(request, response) {
    try {
      const { id } = request.params;
      const newUser = request.body;
      const { password, email } = request.body;

      if (password) {
        const user = await UserModel.getUserById(id);
        const firebaseUid = user.firebase;
        await FirebaseModel.changeUserPassword(firebaseUid, password);
        delete newUser.password;
      }

      if (email) {
        const user = await UserModel.getUserById(id);
        const firebaseUid = user.firebase;
        await FirebaseModel.changeUserEmail(firebaseUid, email);
      }

      await UserModel.updateUser(newUser, id);

      /*
      const user_ = await UserModel.getUserById(id);
      if(user_.type === "retailer" && user_.user_status === "approved"){
        const data = {
          to: user_.email,
          subject: 'Bem Vindo',
          text: 'Loja Casulus',
          user_name: user_.name
        }

        Email.retailerAprovalMail(data)
      }
      */

      return response.status(200).json({ message: 'Sucesso!' });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ notification: 'Internal server error while trying to delete user' });
    }
  },
};
