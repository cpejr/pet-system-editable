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

  async deleteGroup(id) {
    const del = await connection('Group')
     .where('group_id', id)
     .delete();
    return del;
  },

  async updateGroup(group, id) {
    console.log("🚀 ~ file: GroupModel.js ~ line 34 ~ updateGroup ~ id", id)
    console.log("🚀 ~ file: GroupModel.js ~ line 34 ~ updateGroup ~ group", group)
    try {
      const response = await connection('Group')
        .where('group_id', id)
        .update(group);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAllGroupsFromStore(id) {
    try {
      const groups = await connection('Group')
        .where('firebase_id_store', id)
        .select('*');
      return groups;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAllGroups() {
    try {
      const groups = await connection('Group')
        .select('*');
      return groups;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAllGroupsFromSession(id) {
    try {
      const groups = await connection('Group')
        .where('firebase_id_store', id)
        .select('*');
      return groups;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
