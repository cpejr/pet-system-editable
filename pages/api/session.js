import { validateSession } from '../../src/controllers/SessionController';
import { withAuthValidation } from '../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    if (method === 'GET') {
      return withAuthValidation(validateSession)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
