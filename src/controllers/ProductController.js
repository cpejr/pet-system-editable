const { v4: uuidv4 } = require('uuid');
const ProductModel = require('../models/ProductModel');
const AwsModel = require('../models/AwsModel');

module.exports = {
  async getOne(request, response) {
    const { id } = request.query;
    try {
      const product = await ProductModel.getProductById(id);
      return response.status(200).json(product);
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
      const { firebase_id_store } = request.session.get('store').store;
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
    const file = request.files;
    try {
      if (Object.keys(file).length > 0) {
        file.img.name = uuidv4();
      }

      const image_id = Object.keys(file).length > 0
        ? await AwsModel.uploadAWS(file.img) : null;

      if (image_id) {
        product.img = image_id.key;
      }
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
      const price = request.query['price[]'];

      const products = await ProductModel.getAllProducts(price, category_id);
      return response.status(200).json(products);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },
  async getAllByStoreId(request, response) {
    const { id } = request.query;
    try {
      const product = await ProductModel.getAllByStore(id);
      return response.status(200).json(product);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },
  async getAllByStoreSession(req, response) {
    const { firebase_id_store } = req.session.get('store').store;
    try {
      const product = await ProductModel.getAllByStore(firebase_id_store);
      return response.status(200).json(product);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },
};
