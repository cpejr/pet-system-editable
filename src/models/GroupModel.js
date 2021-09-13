const connection = require('../database/connection');

module.exports = {
  async getGroupById(id) {
    try {
      const group = await connection('Group')
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
      const newGroup = await connection('Group').insert(group);
      return newGroup;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async deleteGroup(id, store_id) {
    const del = await connection('Group').where({ group_id: id, store_id }).delete();
    return del;
  },

  async updateGroup(group, id) {
    try {
      const response = await connection('Group')
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
      const groups = await connection('Group')
        .where('store_id', id)
        .select('*');
      return groups;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAllGroupsFromSession(store_id) {
    try {
      const groups = await connection('Group')
        .where('store_id', store_id)
        .select('*');
      return groups;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
