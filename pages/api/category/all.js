import { getAll } from '../../../src/controllers/CategoryController';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
      return getAll(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
}
