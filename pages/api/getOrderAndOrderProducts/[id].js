import { getOrderAndOrderProducts } from '../../../src/controllers/OrderController';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
      return getOrderAndOrderProducts(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
