import jwt from 'jsonwebtoken';
import SessionModel from '../models/SessionModel';
import UserModel from '../models/UserModel';
import FirebaseModel from '../models/FirebaseModel';

module.exports = {
  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      let firebase_id;

      try {
        firebase_id = await FirebaseModel.login(email, password);
        const user = await UserModel.getUserById(firebase_id);
        const accessToken = jwt
          .sign({ user }, process.env.NEXT_PUBLIC_JWT_SECRET);

        await SessionModel.createSession(user.firebase_id, accessToken);

        return res.status(200).json({ accessToken, user });
      } catch (error) {
        console.log(error); //eslint-disable-line
        return res.status(400).json({ message: 'Email ou senha incorreto' });
      }
    } catch (error) {
      return res.status(500).json({ message: err.message });
    }
  },

  async validateSession(req, res) {
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
  },
};
