export default function handler(req, res) {
  try {
    const { method } = req;
    if (method === 'POST') {
      res.status(200).json();// local onde iremos chamar a função do controller de fazer o login
    } else {
      res.status(500).json({ message: 'Método incorreto' });
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
