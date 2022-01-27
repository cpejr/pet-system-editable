/*eslint-disable*/
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');
const multer = require('multer');

const region = 'sa-east-1';
const accessKeyId = 'AKIASMQJMISSGYXYR35Q';
const secretAccessKey = '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';
const bucketName = 'petsystembucket';

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const upload = multer({
  dest: './temp/upload',
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') { cb(null, true); } else cb({ error: 'File type not allowed' }, false);
  },
});

const imageUpload = (imageName, mode = 'create') => (req, res, next) => {
  upload.single(imageName)(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!req.file && mode === 'create') return res.status(400).json({ error: `${imageName} is required` });

    return next();
  });
};

const multipleImageUpload = (singleName, arrayName, mode = 'create') => (req, res, next) => {
  const config = [];
  if (singleName) {
    config.push({ name: singleName, maxCount: 1 });
  }
  if (arrayName) {
    config.push({ name: arrayName, maxCount: 10 });
  }

  upload.fields(config)(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!req.files && mode === 'create') return res.status(400).json({ error: `${arrayName} is required` });

    return next();
  });
};

module.exports = {

  async uploadAWS(image) {
    return new Promise(async (resolve, reject) => {
      try {
        const fileStream = fs.createReadStream(image.path);

        const uploadParams = {
          Bucket: bucketName,
          Body: fileStream,
          Key: image.name,
         
        };

        const awsRes =  await s3.upload(uploadParams).promise();

        resolve(awsRes);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  },

  async getAWS(fileKey) {
    return new Promise((resolve, reject) => {
      try {
        const downloadParams = {
          Key: fileKey,
          Bucket: bucketName,
        };
        resolve(s3.getObject(downloadParams).createReadStream());
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  },

  async deleteAWS(fileKey) {
    return new Promise((resolve, reject) => {
      try {
        const deleteParams = {
          Bucket: bucketName,
          Key: fileKey,
        };

        resolve(s3.deleteObject(deleteParams, (err) => {
          if (err) console.log('Erro no delete!', err);
        }));
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  },

  imageUpload,
  multipleImageUpload,
};
