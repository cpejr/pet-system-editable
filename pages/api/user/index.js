import { create } from '../../../src/controllers/UserController';

export default function handler(req, res) {
  try {
    const { method } = req;
    if (method === 'POST') {
      return create(req, res);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
