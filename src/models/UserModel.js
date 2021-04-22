/* eslint-disable no-async-promise-executor */
const connection = require('../database/connection');
// const FirebaseModel = require('./FirebaseModel');

module.exports = {

  async getUserById(id) {
    try {
      const user = await connection('Users')
        .where('firebase_id', id)
        .select('*')
        .first();
      return user;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async createNewUser(user) {
    try {
      const user_aux = await connection('Users')
        .insert(user);
      return user_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async deleteUser(id) {
    try {
      const response = await connection('Users')
        .where({ firebase_id: id })
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async updateUser(user, id) {
    try {
      const response = await connection('Users')
        .where({ firebase_id: id })
        .update(user);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
