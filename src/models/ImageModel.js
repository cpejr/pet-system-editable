const { connection } = require('../database/connection');

module.exports = {
  async createImage(image) {
    try {
      await connection('Image')
        .insert(image);
      return image;
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteImage(id) {
    try {
      const response = await connection('Image')
        .where({ image_id: id })
        .delete();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  async getImageById(id) {
    try {
      const image = await connection('Image')
        .where('image_id', id)
        .select('*')
        .first();
      return image;
    } catch (error) {
      throw new Error(error);
    }
  },
  async getAllImage() {
    try {
      const image = await connection('Image')
        .select('*');

      return image;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateImage(image, id) {
    try {
      const response = await connection('Image')
        .where({ image_id: id })
        .update(image);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

};