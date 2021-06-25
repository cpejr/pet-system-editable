import nextConnect from 'next-connect';
import {
  create,
} from '../../../src/controllers/ProductController';
import { isSeller } from '../../../src/utils/Auth';
import middleware from '../../../src/middleware/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'POST') {
      return isSeller(create)(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
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
