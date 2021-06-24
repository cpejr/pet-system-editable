import {
  getAll,
} from '../../../src/controllers/GroupController';

export default function handleGroup(req, res) {
  try {
    const { method } = req;
    if (method === 'GET') {
      return getAll(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
