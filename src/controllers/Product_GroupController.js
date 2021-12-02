const Product_GroupModel = require('../models/Product_GroupModel');

module.exports = {

  async create(req, res) {
    const product_group = req.body;
    console.log(product_group);
    try {
      const result = await Product_GroupModel.createProduct_Group(product_group);
      return res.status(200).json({ notification: 'Product Successfully added to group' });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },
  async update(req, res) {
    const { currentGroups, productId } = req.body;
    try {
      await Product_GroupModel.DeleteGroupById(productId);
      currentGroups.forEach((group) => {
        const product_group = {
          product_id: productId,
          group_id: group.group_id,
        };
        console.log('🚀 ~ file: Product_GroupController.js ~ line 27 ~ currentGroups.forEach ~ product_group', product_group);
        Product_GroupModel.createProduct_Group(product_group);
      });
      return res.status(200).json({ notification: 'Product Successfully added to group' });
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },
  async getById(req, res) {
    const group_id = req.query.id;
    const product = req.body;
    try {
      const product_group = await Product_GroupModel.getProduct_GroupByProductId(group_id, product.product_id);
      return res.status(200).json(product_group);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async getAll(req, res) {
    try {
      const product_groups = await Product_GroupModel.getAllProduct_Group();
      return res.status(200).json(product_groups);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async deleteById(req, res) {
    const group_id = req.query.id;
    const product = req.body;
    try {
      await Product_GroupModel.DeleteProduct_GroupById(group_id, product.product_id);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
    return res.status(200).json({ notification: 'Product Removed From Group' });
  },

  async getGroupsById(req, res) {
    const product_id = req.query.id;
    try {
      const groups = await Product_GroupModel.getGroupsByProductId(product_id);
      return res.status(200).json(groups);
    } catch (error) {
      if (error.message) {
        return res.status(400).json({ notification: error.message });
      }
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
  },

};
