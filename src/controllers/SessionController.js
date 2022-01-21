import jwt from 'jsonwebtoken';
import { toast } from 'react-toastify';
import UserModel from '../models/UserModel';
import StoreModel from '../models/StoreModel';
import FirebaseModel from '../models/FirebaseModel';

toast.configure();

export async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    let firebase_id;

    try {
      const storeStatus = await StoreModel.getStatusByEmail(email);
      if (storeStatus === undefined) {
        return res.status(200).json('Loja sem cadastro');
      } if (storeStatus.status === false) {
        return res.status(200).json('Loja em espera');
      }

      console.log(storeStatus);
      firebase_id = await FirebaseModel.login(email, password);
      const user = await UserModel.getUserById(firebase_id);

      if (user) {
        const accessToken = jwt.sign(
          { user },
          process.env.NEXT_PUBLIC_JWT_SECRET,
        );

        req.session.set('user', {
          user,
          accessToken,
        });

        await req.session.save();

        return res.status(200).json({ accessToken, user });
      }

      const store = await StoreModel.getStoreById(firebase_id);

      const accessToken = jwt.sign(
        { store },
        process.env.NEXT_PUBLIC_JWT_SECRET,
      );

      req.session.set('store', {
        store,
        accessToken,
      });

      await req.session.save();

      return res.status(200).json({ accessToken, store });
    } catch (error) {
      console.error(error); //eslint-disable-line
      return res.status(400).json({ message: 'Email ou senha incorreto' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function validateSession(req, res) {
  try {
    const session = await req.session.get('user');
    if (session) {
      return res.status(200).json(session);
    }
    const sessionStore = await req.session.get('store');
    return res.status(200).json(sessionStore);
  } catch (error) {
    return res.status(500).json({ message: error.message });
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

export async function forgottenPassword(request, response) {
  try {
    const { email } = request.body;
    const res = await FirebaseModel.firebaseChangeUserPassword(email);
    return response.status(200).json({ res });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      notification: 'Error while trying to send reset password email',
    });
  }
}
