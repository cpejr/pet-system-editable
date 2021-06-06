import {
  create, deleteBoth, getAll, update,
} from '../../../src/controllers/StoreController';
import { isSeller } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
      return getAll(req, res);
    }
    if (method === 'POST') {
      return create(req, res);
    }
    if (method === 'PUT') {
      return update(req, res);
    }
    if (method === 'DELETE') {
      return isSeller(deleteBoth)(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
