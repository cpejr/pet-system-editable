import { getProfitById } from '../../../src/models/OrderModel';
import { isAdmin } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
        return isAdmin(getProfitById)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}