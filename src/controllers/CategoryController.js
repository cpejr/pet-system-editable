const { v4: uuidv4 } = require('uuid');
const CategoryModel = require('../models/CategoryModel');
const SubCategoryModel = require('../models/SubCategoryModel');

module.exports = {
  async getOne(request, response) {
    const { id } = request.query;
    try {
      const category = await CategoryModel.getCategoryById(id);
      return response.status(200).json(category);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to find category' });
    }
  },

  async getAll(request, response) {
    try {
      const categories = await CategoryModel.getAllCategories();
      return response.status(200).json(categories);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to find categories' });
    }
  },

  async create(request, response) {
    const info = request.body;

    const category = {
      category_id: uuidv4(),
      name: info.name,
    };

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
    const { id } = request.query;
    try {
      await CategoryModel.deleteCategory(id);
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
    const { id } = request.query;
    try {
      await CategoryModel.updateCategory(category, id);
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update product' });
    }
    return response.status(200).json({ notification: 'Category updated' });
  },
};
