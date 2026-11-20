import AuthLink from '../AuthLink/AuthLink';
import css from './UserNavigation.module.css';

interface UserNavigationProps {
  userName: string;
}

export default function UserNavigation({ userName }: UserNavigationProps) {
  return (
    <div className={css.userNavigation}>
      <div className={css.userContainer}>
        <div className={css.userWrapper}>
          <svg className={css.userIcon} width="24" height="24">
            <use href="/icons.svg#icon-user" />
          </svg>
        </div>
        <p className={css.userName}>{userName}</p>
      </div>
      <AuthLink variant="login" href="/">
        Log Out
      </AuthLink>
    </div>
  );
}
