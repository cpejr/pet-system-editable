import {
  create, getAll,
} from '../../../src/controllers/CategoriesController';
import { isAdmin } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'POST') {
      // return isAdmin(create)(req, res);
      return create(req, res);
    }
    if (method === 'GET') {
      return getAll(req, res);
    }

    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
}
