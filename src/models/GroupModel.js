const { connection } = require('../database/connection');

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
    const del = await connection('Group').where('group_id', id).delete();
    return del;
  },

  async updateGroup(group, id) {
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

      for (const group of groups) {
        const product_groups = await connection('Product_Group')
          .where('group_id', group.group_id)
          .select('*')
          .innerJoin(
            'Product',
            'Product_Group.product_id',
            'Product.product_id',
          );
        group.product_groups = product_groups;
      }

      return groups;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAllGroups() {
    try {
      const groups = await connection('Group').select('*');
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

      for (const group of groups) {
        const product_groups = await connection('Product_Group')
          .where('group_id', group.group_id)
          .select('*')
          .innerJoin(
            'Product',
            'Product_Group.product_id',
            'Product.product_id',
          );
        group.product_groups = product_groups;
      }

      return groups;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
