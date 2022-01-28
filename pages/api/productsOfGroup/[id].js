import { getProductsById } from '../../../src/controllers/Product_GroupController';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
      return getProductsById(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
