import { signIn } from '../../src/controllers/SessionController';
import { withSession } from '../../src/utils/Auth';

export default function handler(req, res) {
  try {
    const { method } = req;
    console.log(method);
    if (method === 'POST') {
      return withSession(signIn)(req, res);
    }
    return res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
