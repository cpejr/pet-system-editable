import { pay } from '../../../src/controllers/OrderController';
import { withAuthValidation } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log('pay', method);
    if (method === 'POST') {
      return withAuthValidation(pay)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
