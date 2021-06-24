import {
  create,
} from '../../../src/controllers/CategoryController';
import { isAdmin } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'POST') {
      return isAdmin(create)(req, res);
    }

    return res.status(500).json({ message: 'Método incorreto' });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
}