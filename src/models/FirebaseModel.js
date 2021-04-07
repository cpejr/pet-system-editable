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
      .then((result) => {
        resolve(result.user.uid);
      })
      .catch((error) => {
        reject(error);
      });
  },
};
