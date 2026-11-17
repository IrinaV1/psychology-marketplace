'use client';

import { useState } from 'react';
import css from './SignUpForm.module.css';

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
            <button
              type="button"
              className={css.eyeButton}
              onClick={() => setShowPassword(prev => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg className={css.passwordIcon} width="20" height="20">
                  <use href="/icons.svg#icon-eye" />
                </svg>
              ) : (
                <svg className={css.passwordIcon} width="20" height="20">
                  <use href="/icons.svg#icon-eye-off" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={css.actions}>
          <button
            // disabled={isLoading}
            type="submit"
            className={css.submitButton}
          >
            Sign Up
          </button>
        </div>

        {/* {error && <p className={css.error}>{error}</p>} */}
      </form>
    </div>
  );
}
