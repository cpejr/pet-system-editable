/* eslint-disable no-async-promise-executor */
const connection = require('../database/connection');
// Inserir FirebaseModel?
// const { v1: uuidv1 } = require('uuid');

module.exports = {

  getUserById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await connection('Users')
          .where('firebase', id)
          .select('*')
          .first();
        resolve(user);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },

  createNewUser(user) {
    return new Promise(async (resolve, reject) => {
      try {
        const user_aux = await connection('Users')
          .insert(user);
        resolve(user_aux);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },

  deleteUser(user_id) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await connection('Users')
          .where({ id: user_id })
          .delete();
        resolve(response);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },

  updateUser(user, user_id) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await connection('Users')
          .where({ id: user_id })
          .update(user);
        resolve(response);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },
};
