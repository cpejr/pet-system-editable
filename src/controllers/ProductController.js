const { v4: uuidv4 } = require('uuid');
const ProductModel = require('../models/ProductModel');
const StoreModel = require('../models/StoreModel');
const AwsModel = require('../models/AwsModel');

module.exports = {
  async getOne(request, response) {
    const { id } = request.query;
    const product = await ProductModel.getProductById(id);
    // const readImage = await AwsModel.getAWS(id.img);
    const store = await StoreModel.getStoreById(product.store_id);
    product.store = store;

    // readImage.pipe(response);
    return response.json(product);
  },

  async create(request, response) {
    const product = request.body;
    const file = request.files;
    product.product_id = uuidv4();
    try {
      const image_id = await AwsModel.uploadAWS(file);
      // await unlinkFile(file.img.path);
      product.img = image_id.key;

      const user_id = request.session.get('user').user.firebase_id;
      const { store_id } = await StoreModel.getByUserId(user_id);
      product.store_id = store_id;

      await ProductModel.createNewProduct(product);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      console.error(error);
      return response.status(500).json({ notification: 'Internal server error while trying to create product' });
    }
    return response.status(200).json({ notification: 'Product created' });
  },
  async update(request, response) {
    const product = request.body;

    try {
      await ProductModel.updateProduct(product, product.product_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update product' });
    }
    return response.status(200).json({ notification: 'Product updated' });
  },
  async remove(request, response) {
    const { product_id } = request.body;

    try {
      await ProductModel.removeProduct(product_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to delete product' });
    }
    return response.status(200).json({ notification: 'Product deleted' });
  },
  async getAll(request, response) {
    // const { product_id } = request.body;
    const product = await ProductModel.getAllProducts();
    return response.json(product);
  },
};
