const AdminModel = require('../models/AdminModel');

module.exports = {
  async getShare(request, response) {
    request.session.get('user');

    const shareValue = await AdminModel.getAll();
    return response.json(shareValue);
  },

  async createShare(request, response) {
    const share = request.body;
    try {
      await AdminModel.createShare(share);
    } catch (error) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Share created' });
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
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
    return res.status(200).json({ notification: 'Admin share updated' });
  },
  async deleteShare(request, response) {
    request.session.get('user');

    try {
      await AdminModel.deleteShare();
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Share deleted' });
  },
};
