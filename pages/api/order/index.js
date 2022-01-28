import { update, getAll } from '../../../src/controllers/OrderController';
import { isAdmin, isAdminOrSeller } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    if (method === 'PUT') {
      return isAdminOrSeller(update)(req, res);
    }
    if (method === 'GET') {
      return isAdmin(getAll)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
