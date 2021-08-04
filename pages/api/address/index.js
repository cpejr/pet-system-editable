import {
  create, del, update,
} from '../../../src/controllers/AddressController';
import { withAuthValidation, isAdminOrSelf } from '../../../src/utils/Auth';

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
      return isAdminOrSelf(del)(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
