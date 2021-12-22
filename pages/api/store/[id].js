import { getOne, update, deleteBoth } from '../../../../src/controllers/StoreController';
import { withAuthValidation } from '../../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
      return getOne(req, res);
    }
    if (method === 'PUT') {
      return withAuthValidation(update)(req, res);
    }
    if (method === 'DELETE') {
      return withAuthValidation(deleteBoth)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
