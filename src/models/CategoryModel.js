const connection = require('../database/connection');

module.exports = {
  async getCategoryById(id) {
    try {
      const columns = [
        'Categories.category_id',
        'Categories.name as categoryName',
        'Subcategories.subcategory_id',
        'Subcategories.name as subcategoryName',
      ];

      const response = await connection('Categories')
        .join('Subcategories', 'Categories.category_id', '=', 'Subcategories.category_id')
        .where('Categories.category_id', id)
        .select(columns);

      const subcategories = response.map((entry) => ({
        name: entry.subcategoryName,
        id: entry.subcategory_id,
      }));

      const category = {
        name: response[0].categoryName,
        id: response[0].category_id,
        subcategories,
      };
      return category;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getAllCategories() {
    try {
      const columns = [
        'Categories.category_id',
        'Categories.name as categoryName',
        'Subcategories.subcategory_id',
        'Subcategories.name as subcategoryName',
      ];

      const response = await connection('Categories')
        .join('Subcategories', 'Categories.category_id', '=', 'Subcategories.category_id')
        .orderBy('Categories.category_id')
        .select(columns);

      const { categories } = response.reduce((currentObj, entry, index) => {
        const catArray = currentObj.categories;
        let { nbOfCategories } = currentObj;

        if (!index || entry.category_id !== catArray[nbOfCategories - 1].id) {
          catArray.push(
            {
              name: entry.categoryName,
              id: entry.category_id,
              subcategories: [
                {
                  id: entry.subcategory_id,
                  name: entry.subcategoryName,
                },
              ],
            },
          );
          nbOfCategories++;
        } else {
          catArray[nbOfCategories - 1].subcategories.push(
            {
              id: entry.subcategory_id,
              name: entry.subcategoryName,
            },
          );
        }

        return { categories: catArray, nbOfCategories };
      }, { categories: [], nbOfCategories: 0 });

      return categories;
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
