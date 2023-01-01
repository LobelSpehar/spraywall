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

import { useNotifications } from 'modules/hooks/useNotifications';

export function useAuth() {
  const { errorMsg, infoMsg } = useNotifications();
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
      infoMsg('Success, Welcome ' + username + '!');
      navigate('/');
    } catch (error: any) {
      errorMsg(error.message);
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
      infoMsg('Welcome back ' + user.displayName + '!');
    } catch (error: any) {
      errorMsg(error.message);
    }
  };
  const onLogOut = async () => {
    try {
      const userCredential = await signOut(auth);
      navigate('/');
      infoMsg('Logged out, bye!');
    } catch (error: any) {
      errorMsg(error.message);
    }
  };
  const onReset = async (userEmail: string) => {
    try {
      const userCredential = await sendPasswordResetEmail(auth, userEmail);
      navigate('/login');
      infoMsg('Email sent to ' + userEmail);
    } catch (error: any) {
      errorMsg(error.message);
    }
  };

  return { onRegister, onLogin, onLogOut, onReset };
}
