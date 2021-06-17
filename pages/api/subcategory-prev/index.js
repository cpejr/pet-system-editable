import {
  create,
} from '../../../src/controllers/SubCategoryController';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'POST') {
      return create(req, res);
    }

    return res.status(500).json({ message: 'Método incorreto' });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
}
