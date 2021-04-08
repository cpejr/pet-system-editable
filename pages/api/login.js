import { signin } from '../../src/controllers/UserController';

export default function handler(req, res) {
  try {
    const { method } = req;
    if (method === 'POST') {
      const { email, password } = req.body;
      signin(email, password);
      console.log(email, password);
      console.log(res.status());
      res.status(200).json({ email, password });
    }
    // res.status(500).json({ message: 'Método incorreto' });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
