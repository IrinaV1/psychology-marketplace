'use client';
import { getCurrentUser } from '@/lib/firebase/auth';
import { useAuthStore } from '@/lib/store/authStore';
import { ReactNode, useEffect } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const setUser = useAuthStore(state => state.setUser);
  const setIsLoading = useAuthStore(state => state.setIsLoading);
  const clearUser = useAuthStore(state => state.clearUser);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          setUser(user);
        } else {
          clearUser();
        }
      } finally {
        setIsLoading(false);
      }
    };
    checkSession();
  }, [setUser, clearUser, setIsLoading]);

  return <>{children}</>;
}
