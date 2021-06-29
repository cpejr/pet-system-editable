import jwt from 'jsonwebtoken';
import { createSession } from '../models/SessionModel';
import UserModel from '../models/UserModel';
import FirebaseModel from '../models/FirebaseModel';

export async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    let firebase_id;

    try {
      firebase_id = await FirebaseModel.login(email, password);
      const user = await UserModel.getUserById(firebase_id);
      const accessToken = jwt
        .sign({ user }, process.env.NEXT_PUBLIC_JWT_SECRET);

      await createSession(user.firebase_id, accessToken);

      req.session.set('user', {
        user,
        accessToken,
      });

      await req.session.save();

      return res.status(200).json({ accessToken, user });
    } catch (error) {
      console.error(error); //eslint-disable-line
      return res.status(400).json({ message: 'Email ou senha incorreto' });
    }
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
}

export async function validateSession(req, res) {
  try {
    const session = await req.session.get('user');
    return res.status(200).json(session);
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
}

export async function logout(req, res) {
  try {
    req.session.destroy();
    return res.status(200).json({ message: 'Logged out' });
  } catch (error) {
    console.error(error); //eslint-disable-line
    return res.status(500).json({ message: 'Could not log out' });
  }
}
