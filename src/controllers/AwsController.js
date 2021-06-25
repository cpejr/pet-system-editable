const AwsModel = require('../models/AwsModel');

module.exports = {

  async getImagesAWS(req, res) {
    try {
      // console.log(req.params)
      const { key } = req.params;
      const readStream = await AwsModel.getAWS(key);

      readStream.pipe(res);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ notification: 'Internal server error while trying to get images' });
    }
    return res.status(200).send(readStream);
  },
};
