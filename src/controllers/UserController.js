const jwt = require('jsonwebtoken');
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
    let firebase_id;

    try {
      firebase_id = await FirebaseModel.createNewUser(user.email, user.password);
      user.firebase_id = firebase_id;
      delete user.password;
      await UserModel.createNewUser(user);
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
        const firebaseId = user.firebase;
        await FirebaseModel.changeUserPassword(firebaseId, password);
        delete newUser.password;
      }

      if (email) {
        const user = await UserModel.getUserById(id);
        const firebaseId = user.firebase;
        await FirebaseModel.changeUserEmail(firebaseId, email);
      }

      await UserModel.updateUser(newUser, id);
      return response.status(200).json({ message: 'Sucesso!' });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ notification: 'Internal server error while trying to delete user' });
    }
  },

  async signin(req, res) {
    try {
      const { email, password } = req.body;
      let firebase_id;

      try {
        firebase_id = await FirebaseModel.login(email, password);
        const user = await UserModel.getUserById(firebase_id);
        const accessToken = jwt.sign({ user },
          process.env.NEXT_PUBLIC_JWT_SECRET);
        return res.status(200).json({ accessToken, user });
      } catch (error) {
        return res.status(400).json({ message: 'Email ou senha incorreto' });
      }
    } catch (error) {
      return res.status(500).json({ message: err.message });
    }
  },
};
