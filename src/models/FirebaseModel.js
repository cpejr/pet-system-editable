const admin = require('firebase-admin');
const firebase = require('firebase/app');

require('firebase/auth');

const serviceAccount = require('../../serviceAccountKey.json');

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSEND,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    console.error('Firebase initialization error raised', err.stack);
  }
}
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
});

module.exports = {
  async createNewUser(email, password) {
    try {
      const response = await firebase.auth()
        .createUserWithEmailAndPassword(email, password);
      return response.user.uid;
    } catch (err) {
      throw new Error(err);
    }
  },

  async deleteUser(id) {
    try {
      const result = await admin.auth().deleteUser(id);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },

  async changeUserEmail(uid, newEmail) {
    try {
      const result = await admin.auth().updateUser(uid, { email: newEmail });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },

  async changeUserPassword(uid, newPassword) {
    try {
      const result = await admin.auth()
        .updateUser(uid, { password: newPassword });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },

  async login(email, password) {
    try {
      const result = await firebase.auth()
        .signInWithEmailAndPassword(email, password);
      return result.user.uid;
    } catch (error) {
      throw new Error(error);
    }
  },

};
