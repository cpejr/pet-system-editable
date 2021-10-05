import { isSeller } from '../../../src/utils/Auth';
import { getAll,create } from '../../../src/controllers/Product_GroupController';

export default function handleGroup(req, res) {
  try {
    const { method } = req;
    if (method === 'POST') {
      return isSeller(create)(req, res);
    }
    if (method === 'GET') {
      return isSeller(getAll)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
