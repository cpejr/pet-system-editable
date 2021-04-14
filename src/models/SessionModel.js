const connection = require('../database/connection');

module.exports = {
  async createSession(user_id, accessToken) {
    try {
      const session = await connection('sessions')
        .insert({ user_id, accessToken });
      return session;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getSessionByAccessToken(accessToken) {
    try {
      const session = await connection('sessions')
        .where({ accessToken })
        .first();
      return session;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async deleteAllSessionsByUserId(user_id) {
    try {
      const response = await connection('sessions')
        .where({ user_id })
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
