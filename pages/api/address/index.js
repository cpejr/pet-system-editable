import {
  create, update, getAll,
} from '../../../src/controllers/AddressController';
import { withAuthValidation, isAdminOrSelf, isAdmin } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    if (method === 'POST') {
      return withAuthValidation(create)(req, res);
    }
    if (method === 'PUT') {
      return withAuthValidation(update)(req, res);
    }
    if (method === 'GET') {
      return withAuthValidation(getAll)(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
