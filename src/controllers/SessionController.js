import jwt from 'jsonwebtoken';
import { withIronSession } from 'next-iron-session';
import SessionModel from '../models/SessionModel';
import UserModel from '../models/UserModel';
import FirebaseModel from '../models/FirebaseModel';

async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    let firebase_id;

    try {
      firebase_id = await FirebaseModel.login(email, password);
      const user = await UserModel.getUserById(firebase_id);
      const accessToken = jwt
        .sign({ user }, process.env.NEXT_PUBLIC_JWT_SECRET);

      await SessionModel.createSession(user.firebase_id, accessToken);

      req.session.set('user', {
        user,
        accessToken,
      });

      await req.session.save();

      return res.status(200).json({ accessToken, user });
    } catch (error) {
      console.log(error); //eslint-disable-line
      return res.status(400).json({ message: 'Email ou senha incorreto' });
    }
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
}

async function validateSession(req, res) {
  try {
    const { accessToken } = req.body;
    const session = await SessionModel.getSessionByAccessToken(accessToken);

    if (session) {
      const firebase_id = session.user_id;
      const user = await UserModel.getUserById(firebase_id);

      return res.status(200).json({ accessToken, user });
    }
    return res.status(400).json({ message: 'A sessao nao foi validada' });
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
}

function withSession(handlerFunction) {
  return withIronSession(handlerFunction, {
    cookieName: 'userSession',
    password: 'complex_password_at_least_32_characters_long',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });
}

function withAuth(handler) {
  return async (req, res) => {
    const { accessToken } = req.session.get('user');
    if (!accessToken) return res.status(400).json({ message: 'No session provided' });

    return handler(req, res);
  };
}

function withAuthValidation(handler) {
  return withSession(withAuth(handler));
}

module.exports = {
  withSession,
  signIn: withSession(signIn),
  validateSession: withSession(validateSession),
  withAuthValidation,
};
