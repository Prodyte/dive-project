import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDqNvtTfG0GtMomV-yZardlbPNZ_i4Gauk',
  authDomain: 'whats-2989a.firebaseapp.com',
  databaseURL: 'https://whats-2989a-default-rtdb.firebaseio.com',
  projectId: 'whats-2989a',
  storageBucket: 'whats-2989a.appspot.com',
  messagingSenderId: '241107898184',
  appId: '1:241107898184:web:7f90e9ff4f2c33b20c6d7d',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.database();

const auth = app.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export { db, auth, googleProvider, githubProvider };
