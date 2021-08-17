import 'tailwindcss/tailwind.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import Login from '../components/Login';
import firebase from 'firebase';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const ref = db.ref('/users/');
  const [user, _] = useAuthState(auth);
  if (user) {
    let userRef = ref.child(user.uid);
    userRef.set({
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });
  }
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
