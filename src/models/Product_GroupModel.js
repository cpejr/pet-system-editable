// const connection = require('../database/connection');
const { db } = require('../database/connection');

module.exports = {
  async createProduct_Group(product_group) {
    try {
      const result = await db('Product_Group')
        .insert(product_group);
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getProduct_GroupByProductId(group_id, product_id) {
    try {
      const result = await db('Product_Group')
        .where('group_id', group_id)
        .where('product_id', product_id)
        .select('*');
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getGroupsByProductId(product_id) {
    try {
      const result = await db('Product_Group')
        .where('product_id', product_id)
        .column('group_id')
        .select();
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async getAllProduct_Group() {
    try {
      const result = await db('Product_Group')
        .select('*');
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async DeleteProduct_GroupById(group_id, product_id) {
    try {
      const result = await db('Product_Group')
        .where('group_id', group_id)
        .where('product_id', product_id)
        .delete();
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  async DeleteGroupById(product_id) {
    try {
      const result = await db('Product_Group')
        .where('product_id', product_id)
        .delete('*');
      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};
