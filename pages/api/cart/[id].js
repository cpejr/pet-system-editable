import { getById, deleteByID } from '../../../src/controllers/CartController';
import { withAuthValidation } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'DELETE') {
      return withAuthValidation(deleteByID)(req, res);
    }
    if (method === 'GET') {
      return withAuthValidation(getById)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
