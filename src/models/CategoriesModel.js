// const connection = require('../database/connection');
const { db } = require('../database/connection');

module.exports = {
  async getCategoryById(id) {
    try {
      const category = await db('Categories')
        .where('category_id', id)
        .select('*')
        .first();
      return category;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getAllCategories() {
    try {
      const categories = await db('Categories')
        .select('*');

      return categories;
    } catch (error) {
      throw new Error(error);
    }
  },

  async createNewCategory(category) {
    try {
      await db('Categories')
        .insert(category);
      return category;
    } catch (error) {
      throw new Error(error);
    }
  },

  async deleteCategory(id) {
    try {
      const response = await db('Categories')
        .where({ category_id: id })
        .delete();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async updateCategory(category, id) {
    try {
      const response = await db('Categories')
        .where({ category_id: id })
        .update(category);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};
