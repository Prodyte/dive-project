import dive from '../images/dive_logo.png';
import { auth, googleProvider, githubProvider } from '../firebase';
import Image from 'next/image';
function Login() {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).catch(alert);
  };

  const signInWithGithub = () => {
    auth.signInWithPopup(githubProvider).catch(alert);
  };
  return (
    <div className="container mx-auto  grid mt-32 ">
      <h2 className="text-5xl font-bold text-center py-5">Coding Assignment</h2>
      <Image src={dive} objectFit="contain" height={200} width={200} />
      <button
        className="mx-auto my-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={signInWithGoogle}
      >
        Login With Google
      </button>
      <button
        className="mx-auto my-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={signInWithGithub}
      >
        Login With Github
      </button>
    </div>
  );
}

export default Login;
