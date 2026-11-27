'use client';

import { auth } from '@/lib/firebase/firebase';
import { useAuthStore } from '@/lib/store/authStore';
import { onAuthStateChanged } from 'firebase/auth';
import { ReactNode, useEffect } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const setUser = useAuthStore(state => state.setUser);
  const setIsLoading = useAuthStore(state => state.setIsLoading);
  const clearUser = useAuthStore(state => state.clearUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          localId: user.uid,
          email: user.email || '',
          displayName: user.displayName || '',
        });
      } else {
        clearUser();
      }

      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [setUser, clearUser, setIsLoading]);

  return <>{children}</>;
}
