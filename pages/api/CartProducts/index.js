import { create, getAll, deleteAllProductsCart } from '../../../src/controllers/Cart_ProductsController';
import { withAuthValidation } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
      return withAuthValidation(getAll)(req, res);
    }
    if (method === 'POST') {
      return withAuthValidation(create)(req, res);
    }
    if (method === 'DELETE') {
      return withAuthValidation(deleteAllProductsCart)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
}
