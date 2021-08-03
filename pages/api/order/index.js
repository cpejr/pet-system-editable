import nextConnect from 'next-connect';
import {
  create, del, update,
} from '../../../src/controllers/OrderController';
import { withAuthValidation } from '../../../src/utils/Auth';
import middleware from '../../../src/middleware/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'POST') {
      return withAuthValidation(create)(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
});

// handler.get(async (req, res) => {
//   try {
//     const { method } = req;
//     console.log(method);
//     if (method === 'GET') {
//       return getAll(req, res);
//     }
//     return res.status(500).json({ message: 'Método incorreto' });
//   } catch (err) {
//     return res.status(500).json({ statusCode: 500, message: err.message });
//   }
// });

handler.put(async (req, res) => {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'PUT') {
      return withAuthValidation(update)(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
});

handler.delete(async (req, res) => {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'DELETE') {
      return isSeller(del)(req, res);
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
