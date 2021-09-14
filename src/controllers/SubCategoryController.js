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
      return response.status(500).json({ notification: 'Internal Server Error' });
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
      return response.status(200).json(subcategory);
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async remove(request, response) {
    const { id } = request.query;
    try {
      await SubCategoryModel.deleteSubCategory(id);
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Subcategory deleted' });
  },

  async update(request, response) {
    const subcategory = request.body;
    const { id } = request.query;

    try {
      await SubCategoryModel.updateSubCategory(subcategory, id);
      return response.status(200).json({ name: subcategory.name, id });
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },
};
