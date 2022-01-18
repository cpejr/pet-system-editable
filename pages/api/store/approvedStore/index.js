import nextConnect from 'next-connect';
import {
  getApprovedStore,
} from '../../../../src/controllers/StoreController';
import { isAdmin } from '../../../../src/utils/Auth';
import middleware from '../../../../src/middleware/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
      return isAdmin(getApprovedStore)(req, res);
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
