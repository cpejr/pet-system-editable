import {
  getAllFromStore,
} from '../../../src/controllers/GroupController';

export default function handleGroup(req, res) {
  try {
    const { method } = req;
    if (method === 'GET') {
      return getAllFromStore(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
