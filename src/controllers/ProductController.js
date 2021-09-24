const { v4: uuidv4 } = require('uuid');
const ProductModel = require('../models/ProductModel');
const AwsModel = require('../models/AwsModel');

module.exports = {
  async getOne(request, response) {
    const { id } = request.query;
    try {
      const product = await ProductModel.getProductById(id);
      const readImage = await AwsModel.getAWS(product.img);
      product.img = readImage;
      const stringfedProduct = JSON.stringify(product);
      return response.status(200).send(stringfedProduct);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async create(request, response) {
    const product = request.body;
    const file = request.files;
    product.product_id = uuidv4();
    file.img.name = uuidv4();
    try {
      const image_id = await AwsModel.uploadAWS(file.img);
      product.img = image_id.key;
      // eslint-disable-next-line prefer-destructuring
      const firebase_id_store = request.session.get('store').store.firebase_id_store;
      product.firebase_id_store = firebase_id_store;

      await ProductModel.createNewProduct(product);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      console.error(error);
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Product created' });
  },
  async update(request, response) {
    const product = request.body;
    const { id } = request.query;

    try {
      await ProductModel.updateProduct(product, id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Product updated' });
  },
  async remove(request, response) {
    const { id } = request.query;

    try {
      await ProductModel.removeProduct(id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Product deleted' });
  },
  async getAll(request, response) {
    try {
      const { category_id } = request.query;
      const price = request.query["price[]"];
      
      const products = await ProductModel.getAllProducts(price, category_id);
      return response.status(200).json(products);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },
};
