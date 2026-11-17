'use client';
import AuthLink from '../AuthButton/AuthLink';
import css from './AuthNavigation.module.css';

export default function AuthNavigation() {
  return (
    <div className={css.authNavigation}>
      <AuthLink variant="login" href="/sign-in">
        Log In
      </AuthLink>
      <AuthLink variant="register" href="/sign-up">
        Registration
      </AuthLink>
    </div>
  );
}
