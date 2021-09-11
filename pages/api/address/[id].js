import { getOne, remove,getAllByUser } from '../../../src/controllers/AddressController';
import { isAdminOrSelf } from '../../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
      return getOne(req, res);
    }
    if (method === 'DELETE') {
      return isAdminOrSelf(remove)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
