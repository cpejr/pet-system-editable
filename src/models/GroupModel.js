const connection = require('../database/connection');

module.exports = {
  async createGroup(group) {
    const newGroup = await connection('group').insert(group);
    return newGroup;
  },

  async deleteGroup(group_id, store_id) {
    const del = await connection('group').where({ group_id, store_id }).del();
    return del;
  },
};
