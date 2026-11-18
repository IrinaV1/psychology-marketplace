'use client';

import { useState } from 'react';
import css from './SignUpForm.module.css';
import ShowPasswordButton from '../ShowPasswordForm/ShowPasswordButton';
import Button from '../Button/Button';

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={css.mainContent}>
      <div className={css.containerTitle}>
        <h1 className={css.formTitle}>Registration</h1>
        <p className={css.formText}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </div>
      <form
        // action={handleSubmit}
        className={css.form}
      >
        <div className={css.formGroup}>
          <label htmlFor="name" className={css.visuallyHidden}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className={css.input}
            placeholder="Name"
            required
          />
        </div>
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
          <Button type="submit" className={css.btnSignUp}>
            Sign Up
          </Button>
        </div>

        {/* {error && <p className={css.error}>{error}</p>} */}
      </form>
    </div>
  );
}
