const { v4: uuidv4 } = require('uuid');
const ImageModel = require('../models/ImageModel');
const AwsModel = require('../models/AwsModel');

module.exports = {
  async create(request, response) {
    const info = request.body;
    const { img } = request.files;
    img.name = uuidv4();

    try {
      const image_id = await AwsModel.uploadAWS(img);
      info.image_id = image_id.key;
      const newImage = await ImageModel.createImage(info);
      return response.status(200).json(newImage);
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },
  async getOne(request, response) {
    const { id } = request.query;
    try {
      const image = await ImageModel.getImageById(id);
      return response.status(200).json(image);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
  },

  async getAll(request, response) {
    try {
      const image = await ImageModel.getAllImage();
      return response.status(200).json(image);
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
      await ImageModel.deleteImage(id);
      await AwsModel.deleteAWS(id);
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Image deleted' });
  },
  async update(request, response) {
    const image = request.body;
    const { id } = request.query;
    const file = request.files;
    try {
      if (Object.keys(file).length > 0) {
        file.img.name = uuidv4();
      }

      const image_id = Object.keys(file).length > 0
        ? await AwsModel.uploadAWS(file.img) : null;

      if (image_id) {
        image.img = image_id.key;
      }
      await ImageModel.updateImage(image, id);
    } catch (error) {
      if (error.message) {
        return response.status(400).json({ notification: error.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Image updated' });
  },
};
