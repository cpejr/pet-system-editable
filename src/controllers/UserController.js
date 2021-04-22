const jwt = require('jsonwebtoken');
const FirebaseModel = require('../models/FirebaseModel');
const UserModel = require('../models/UserModel');

module.exports = {

  async getOne(request, response) {
    const { firebase_id } = request.body;
    const user = await UserModel.getUserById(firebase_id);
    return response.json(user);
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
    return response.status(200).json({ notification: 'User created' });
  },

  async deleteBoth(request, response) {
    const { firebase_id } = request.body;

    try {
      await FirebaseModel.deleteUser(firebase_id);
      await UserModel.deleteUser(firebase_id);
    } catch (err) {
      if (firebase_id) {
        FirebaseModel.deleteUser(firebase_id);
      }
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to delete user' });
    }
    return response.status(200).json({ notification: 'User deleted' });
  },

  async update(request, response) {
    const { firebase_id, email } = request.body;
    const id = request.body;
    try {
      await UserModel.updateUser(id, id.firebase_id);
      await FirebaseModel.changeUserEmail(firebase_id, email);
    } catch (err) {
      if (firebase_id) {
        FirebaseModel.changeUserEmail(firebase_id, email);
      }
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update firebase_id' });
    }
    return response.status(200).json({ notification: 'User email updated' });
  },

  async updatePassword(request, response) {
    const { firebase_id, password } = request.body;

    try {
      await FirebaseModel.changeUserPassword(firebase_id, password);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update user' });
    }
    return response.status(200).json({ notification: 'User password updated' });
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
