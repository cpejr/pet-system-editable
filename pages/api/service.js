import {
  getOne, create, update, remove, getAll,
} from '../../src/controllers/ServiceController';

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
      return remove(req, res);
    }
    if (method === 'GETALL') {
      return getAll(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
