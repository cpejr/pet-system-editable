import { isSeller } from '../../../src/utils/Auth';
import {
  create, del, update,
} from '../../../src/controllers/GroupController';

export default function handleGroup(req, res) {
  try {
    const { method } = req;
    if (method === 'POST') {
      return isSeller(create)(req, res);
    }
    if (method === 'PUT') {
      return isSeller(update)(req, res);
    }
    if (method === 'DELETE') {
      return isSeller(del)(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
