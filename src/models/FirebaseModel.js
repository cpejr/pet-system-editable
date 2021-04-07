const admin = require('firebase'); // Alterar o require
const firebase = require('firebase/app');

require('firebase/auth');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSEND,
  appId: process.env.FIREBASE_APPID,
};

firebase.initializeApp(firebaseConfig);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Inserir o databaseURL
});

module.exports = {
  async createNewUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => (result.user.uid))
      .catch((error) => {
        throw new Error(error);
      });
  },

  async deleteUser(id) {
    admin.auth().deleteUser(id)
      .then((result) => result)
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        throw new Error(errorMessage);
      });
  },

  async changeUserEmail(uid, newEmail) {
    admin.auth().updateUser(uid, {
      email: newEmail,
    })
      .then((result) => result)
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        throw new Error(errorMessage);
      });
  },

  async changeUserPassword(id, newPassword) {
    admin.auth().updateUser(id, {
      password: newPassword,
    })
      .then((result) => result)
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        throw new Error(errorMessage);
      });
  },
};
