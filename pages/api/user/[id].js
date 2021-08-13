import { getOne } from '../../../src/controllers/UserController';
import { isAdminOrSelf } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    if (method === 'GET') {
      return isAdminOrSelf(getOne)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
