import {
  getOne, update, remove,
} from '../../../src/controllers/SubCategoryController';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
      return getOne(req, res);
    }
    if (method === 'PUT') {
      return update(req, res);
    }
    if (method === 'DELETE') {
      return remove(req, res);
    }

    return res.status(500).json({ message: 'Método incorreto' });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
}
