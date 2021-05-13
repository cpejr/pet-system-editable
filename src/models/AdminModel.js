const connection = require('../database/connection');

module.exports = {

  async getAll() {
    try {
      const response = await connection('Admin_share')
        .select('*').first();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async createShare(share) {
    try {
      const share_aux = await connection('Admin_share')
        .insert(share);
      return share_aux;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async changeAdminShare(share_, commission) {
    try {
      const response = await connection('Admin_share')
        .where({ share: share_ })
        .update({ share: commission });
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async deleteShare(share) {
    try {
      const response = await connection('Admin_share')
        .where(share)
        .delete();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
