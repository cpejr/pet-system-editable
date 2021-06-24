const connection = require('../database/connection');

module.exports = {
  async getSubCategoryById(id) {
    try {
      const response = await connection('Subcategories')
        .select('*')
        .where({ subcategory_id: id })
        .first();
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },

  async createNewSubCategory(subcategory) {
    try {
      const response = await connection('Subcategories')
        .insert(subcategory);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async deleteSubCategory(id) {
    try {
      const response = await connection('Subcategories')
        .where({ subcategory_id: id })
        .delete();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async updateSubCategory(subcategory, id) {
    try {
      const response = await connection('Subcategories')
        .where({ subcategory_id: id })
        .update(subcategory);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

};
