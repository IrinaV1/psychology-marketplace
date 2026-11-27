import { User } from '@/types/user';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

// Registration
export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(user, {
    displayName: name,
  });

  return {
    localId: user.uid,
    email: user.email || '',
    displayName: user.displayName || name,
  };
};

// Login
export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  return {
    localId: user.uid,
    email: user.email || '',
    displayName: user.displayName || '',
  };
};

// Logout
export const logoutUser = async (): Promise<void> => {
  await signOut(auth);
};

// User
export const getCurrentUser = async (): Promise<User | null> => {
  const user = auth.currentUser;
  if (!user) {
    return null;
  }

  return {
    localId: user.uid,
    email: user.email || '',
    displayName: user.displayName || '',
  };
};
