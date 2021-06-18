const SubCategoryModel = require('../models/SubCategoryModel');

module.exports = {
  async getOne(request, response) {
    const { id } = request.query;
    const subcategory = await SubCategoryModel.getSubCategoryById(id);
    return response.json(subcategory);
  },

  async create(request, response) {
    const subcategory = request.body;
    try {
      await SubCategoryModel.createNewSubCategory(subcategory);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to create subcategory' });
    }
    return response.status(200).json({ notification: 'Subcategory created' });
  },

  async remove(request, response) {
    const { id } = request.query;
    try {
      await SubCategoryModel.deleteSubCategory(id);
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to delete subcategory' });
    }
    return response.status(200).json({ notification: 'Subcategory deleted' });
  },

  async update(request, response) {
    const subcategory = request.body;
    const { id } = request.query;
    try {
      await SubCategoryModel.updateSubCategory(subcategory, id);
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update subcategory' });
    }
    return response.status(200).json({ notification: 'Subcategory updated' });
  },
};
