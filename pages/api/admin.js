import {
  getShare, createShare, updateShare, deleteShare,
} from '../../src/controllers/AdminController';
import { isAdmin } from '../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'GET') {
      return isAdmin(getShare)(req, res);
    }
    if (method === 'POST') {
      return createShare(req, res);
    }
    if (method === 'PUT') {
      return updateShare(req, res);
    }
    if (method === 'DELETE') {
      return isAdmin(deleteShare)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
