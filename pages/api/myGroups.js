import { isSeller } from '../../src/utils/Auth';
import {
  getAllFromSession,
} from '../../src/controllers/GroupController';

export default function handleGroup(req, res) {
  try {
    const { method } = req;
    if (method === 'GET') {
      return isSeller(getAllFromSession)(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
