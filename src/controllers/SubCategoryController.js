const { v4: uuidv4 } = require('uuid');
const SubCategoryModel = require('../models/SubCategoryModel');

module.exports = {
  async getOne(request, response) {
    const { id } = request.query;

    try {
      const subcategory = await SubCategoryModel.getSubCategoryById(id);
      return response.status(200).json(subcategory);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to find subcategory' });
    }
  },

  async create(request, response) {
    const info = request.body;

    const subcategory = {
      subcategory_id: uuidv4(),
      name: info.name,
      category_id: info.category_id,
    };

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
