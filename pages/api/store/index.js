import nextConnect from 'next-connect';
import {
  create, deleteBoth, getAll, update,
} from '../../../src/controllers/StoreController';
import { isSeller } from '../../../src/utils/Auth';
import middleware from '../../../src/middleware/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'POST') {
      return create(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
});

handler.get(async (req, res) => {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
      return getAll(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
});

handler.put(async (req, res) => {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'PUT') {
      return update(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
});

// handler.putStatus(async (req, res) => {
//   try {
//     const { method } = req;
//     console.log(method);
//     if (method === 'PUT') {
//       return update(req, res);
//     }
//     return res.status(500).json({ message: 'Internal Server Error' });
//   } catch (err) {
//     return res.status(500).json({ statusCode: 500, message: err.message });
//   }
// });

handler.delete(async (req, res) => {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'DELETE') {
      return isSeller(deleteBoth)(req, res);
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
