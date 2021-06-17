const CategoryModel = require('../models/CategoryModel');

module.exports = {
  async getOne(request, response) {
    const { category_id } = request.query;
    const category = await CategoryModel.getCategoryById(category_id);
    return response.json(category);
  },

  async create(request, response) {
    const category = request.body;

    try {
      await CategoryModel.createNewCategory(category);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to create category' });
    }
    return response.status(200).json({ notification: 'Category created' });
  },

  async remove(request, response) {
    const { category_id } = request.body;
    try {
      await CategoryModel.deleteCategory(category_id);
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to delete category' });
    }
    return response.status(200).json({ notification: 'Category deleted' });
  },

  async update(request, response) {
    const category = request.body;

    try {
      await CategoryModel.updateCategory(category, category.category_id);
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update product' });
    }
    return response.status(200).json({ notification: 'Category updated' });
  },
};
