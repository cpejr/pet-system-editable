import { getOne } from '../../../src/controllers/UserController';

export default function handler(req, res) {
  try {
    const { method } = req;
    if (method === 'GET') {
      return getOne(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
