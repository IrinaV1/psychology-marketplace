'use client';

import css from './SignInForm.module.css';
import ShowPasswordButton from '../ShowPasswordForm/ShowPasswordButton';
import { useState } from 'react';
import Button from '../Button/Button';

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={css.mainContent}>
      <div className={css.containerTitle}>
        <h1 className={css.formTitle}>Log In</h1>
        <p className={css.formText}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
      </div>
      <form
        // action={handleSubmit}
        className={css.form}
      >
        <div className={css.formGroup}>
          <label htmlFor="email" className={css.visuallyHidden}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            placeholder="Email"
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="password" className={css.visuallyHidden}>
            Password
          </label>
          <div className={css.passwordWrapper}>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              className={css.input}
              placeholder="Password"
              required
            />
            <ShowPasswordButton
              isVisible={showPassword}
              onToggle={() => setShowPassword(prev => !prev)}
            />
          </div>
        </div>

        <div className={css.actions}>
          <Button type="submit">Log In</Button>
        </div>

        {/* {error && <p className={css.error}>{error}</p>} */}
      </form>
    </div>
  );
}
