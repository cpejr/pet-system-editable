import {
  getOne, update, remove,
} from '../../../src/controllers/SubCategoryController';
import { isAdmin } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
      return getOne(req, res);
    }
    if (method === 'PUT') {
      return isAdmin(update)(req, res);
    }
    if (method === 'DELETE') {
      return isAdmin(remove)(req, res);
    }

    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
}
