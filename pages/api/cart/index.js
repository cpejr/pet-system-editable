import {
  create, deleteAll, update, getAll,
} from '../../../src/controllers/CartController';
import { withAuthValidation } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    if (method === 'POST') {
      return withAuthValidation(create)(req, res);
    }
    if (method === 'PUT') {
      return withAuthValidation(update)(req, res);
    }
    if (method === 'DELETE') {
      return withAuthValidation(deleteAll)(req, res);
    }
    if (method === 'GET') {
      return withAuthValidation(getAll)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
}
