import {
  create, update, del, getAll,
} from '../../../src/controllers/OrderController';
import { withAuthValidation, isAdmin } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    if (method === 'POST') {
      return withAuthValidation(create)(req, res);
    }
    if (method === 'PUT') {
      return isAdmin(update)(req, res);
    }
    if (method === 'DELETE') {
      return isAdmin(del)(req, res);
    }
    if (method === 'GET') {
      return isAdmin(getAll)(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
