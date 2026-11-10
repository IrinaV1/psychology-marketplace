'use client';
import css from './AuthNavigation.module.css';
import Link from 'next/link';

export default function AuthNavigation() {
  return (
    <div className={css.authNavigation}>
      <Link className={css.btnLogin} href="/sign-in">
        Log In
      </Link>
      <Link className={css.btnRegister} href="/sign-up">
        Registration
      </Link>
    </div>
  );
}
