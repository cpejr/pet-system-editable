import { update } from '../../src/controllers/UserController';

export default function change(request, response) {
  try {
    const { method } = request;
    if (method === 'PUT') {
      return update(request, response);
    }
    return response.status(500).json({ message: 'Internal Server Error' });
  } catch (err) {
    return response.status(500).json({ statusCode: 500, message: err.message });
  }
}
