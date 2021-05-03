import {
  createShare, updateShare, deleteShare,
} from '../../src/controllers/AdminController';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'POST') {
      return createShare(req, res);
    }
    if (method === 'PUT') {
      return updateShare(req, res);
    }
    if (method === 'DELETE') {
      return deleteShare(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
