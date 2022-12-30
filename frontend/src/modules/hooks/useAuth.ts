import { useNavigate } from 'react-router-dom';
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from 'firebaseInit';

export function useAuth() {
  const navigate = useNavigate();

  const onRegister = async (
    username: string,
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    try {
      await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence
      );
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await userCredential.user;
      await updateProfile(user, { displayName: username });

      navigate('/');
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    }
  };

  const onLogin = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    try {
      await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence
      );
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await userCredential.user;
      navigate('/');
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    }
  };
  const onLogOut = async () => {
    try {
      const userCredential = await signOut(auth);
      navigate('/');
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    }
  };
  const onReset = async (userEmail: string) => {
    try {
      const userCredential = await sendPasswordResetEmail(auth, userEmail);
      alert('Email sent to ' + userEmail);
      navigate('/login');
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    }
  };

  return { onRegister, onLogin, onLogOut, onReset };
}
