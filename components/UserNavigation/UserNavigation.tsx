'use client';
import { User } from '@/types/user';
import css from './UserNavigation.module.css';
import { useAuthStore } from '@/lib/store/authStore';
import { useRouter } from 'next/navigation';
import { logoutUser } from '@/lib/firebase/auth';
import Button from '../Button/Button';

interface UserNavigationProps {
  userName: User;
}

export default function UserNavigation({ userName }: UserNavigationProps) {
  const clearUser = useAuthStore(state => state.clearUser);

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutUser();
      clearUser();
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className={css.userNavigation}>
      <div className={css.userContainer}>
        <div className={css.userWrapper}>
          <svg className={css.userIcon} width="24" height="24">
            <use href="/icons.svg#icon-user" />
          </svg>
        </div>
        <p className={css.userName}>{userName.displayName}</p>
      </div>
      <Button type="button" onClick={handleLogout} variant="outline">
        Log Out
      </Button>
    </div>
  );
}
