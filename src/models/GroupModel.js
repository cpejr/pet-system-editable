const connection = require('../database/connection');

module.exports = {
  async getGroupById(id) {
    try {
      const group = await connection('group')
        .where('group_id', id)
        .select('*')
        .first();
      return group;
    } catch (error) {
      throw new Error(error);
    }
  },

  async createGroup(group) {
    try {
      const newGroup = await connection('group').insert(group);
      return newGroup;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async deleteGroup(group_id, store_id) {
    const del = await connection('group').where({ group_id, store_id }).del();
    return del;
  },

  async updateGroup(group, id) {
    try {
      const response = await connection('group')
        .where({ group_id: id })
        .update(group);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAllGroups(id) {
    try {
      const groups = await connection('group')
        .where('store_id', id)
        .select('*');
      return groups;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
