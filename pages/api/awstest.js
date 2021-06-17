import nextConnect from 'next-connect';
import middleware from '../../src/middleware/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const { files } = req;
    console.log(req.files);

    // do stuff with files and body
    res.status(200).json({ files });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
