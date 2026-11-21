import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

export const registerUser = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
};

export const updateUserProfile = async (name: string) => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('User is not authenticated');
  }
  await updateProfile(user, {
    displayName: name,
  });
  return user;
};
