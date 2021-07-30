import {
  getOne, create, update, del,
} from '../../src/controllers/OrderController';

export default function handler(req, res) {
  try {
    const { method } = req;
    if (method === 'GET') {
      return getOne(req, res);
    }
    if (method === 'POST') {
      return create(req, res);
    }
    if (method === 'PUT') {
      return update(req, res);
    }
    if (method === 'DELETE') {
      return del(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
