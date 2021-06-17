const SubCategoryModel = require('../models/SubCategoryModel');

module.exports = {
  async getOne(request, response) {
    const { subcategory_id } = request.query;
    const subcategory = await SubCategoryModel.getSubCategoryById(subcategory_id);
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
    const { subcategory_id } = request.body;
    try {
      await SubCategoryModel.deleteSubCategory(subcategory_id);
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

    try {
      await SubCategoryModel.updateSubCategory(subcategory, subcategory.subcategory_id);
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update subcategory' });
    }
    return response.status(200).json({ notification: 'Subcategory updated' });
  },
};
