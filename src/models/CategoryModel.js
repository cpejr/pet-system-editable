const connection = require('../database/connection');

module.exports = {
  async getCategoryById(id) {
    try {
      const response = await connection('Categories')
        .where('category_id', id)
        .select('*')
        .first();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async createNewCategory(category) {
    try {
      const response = await connection('Categories')
        .insert(category);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async deleteCategory(id) {
    try {
      const response = await connection('Categories')
        .where({ category_id: id })
        .delete();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async updateCategory(category, id) {
    try {
      const response = await connection('Categories')
        .where({ category_id: id })
        .update(category);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

};
