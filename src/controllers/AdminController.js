const AdminModel = require('../models/AdminModel');

module.exports = {
  async createShare(request, response) {
    const share = request.body;
    try {
      await AdminModel.createShare(share);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to create admin' });
    }
    return response.status(200).json({ notification: 'Share criado!' });
  },

  async updateShare(req, res) {
    const { share } = req.body;

    try {
      const oldShare = await AdminModel.getAll();
      await AdminModel.changeAdminShare(oldShare.share, share);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      return res.status(500).json({ notification: 'Internal server error while trying to update commission' });
    }
    return res.status(200).json({ notification: 'Admin share updated' });
  },
  async deleteShare(request, response) {
    const share = request.body;

    try {
      await AdminModel.deleteShare(share);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to delete share' });
    }
    return response.status(200).json({ notification: 'Share deleted' });
  },
};
