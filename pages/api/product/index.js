import nextConnect from 'next-connect';
import {
  create, getAll,
} from '../../../src/controllers/ProductController';
import { isSeller } from '../../../src/utils/Auth';
import middleware from '../../../src/middleware/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const { method } = req;
    // console.log(method);
    if (method === 'POST') {
      return isSeller(create)(req, res);
    }
    if (method === 'GET') {
      return isSeller(getAll)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
