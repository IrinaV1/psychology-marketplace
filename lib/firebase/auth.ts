import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';

import { auth } from './firebase';

// Registration
export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  await updateProfile(user, {
    displayName: name,
  });

  return user;
};

// Login
export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
};

// Logout
export const logoutUser = async (): Promise<void> => {
  await signOut(auth);
};
