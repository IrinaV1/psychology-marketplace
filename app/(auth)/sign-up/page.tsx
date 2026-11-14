'use client';
import { useState } from 'react';
import css from './SignUpPage.module.css';
import { useRouter } from 'next/router';

export default function SignUpPage() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  <main className={css.mainContent}>
    <div className={css.containerTitle}>
      <h1 className={css.formTitle}>Registration</h1>
      <p className={css.formText}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
    </div>
    <form
      // action={handleSubmit}
      className={css.form}
    >
      <div className={css.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="name"
          name="name"
          className={css.input}
          required
        />
      </div>
      <div className={css.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className={css.input}
          required
        />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          className={css.input}
          required
        />
      </div>

      <div className={css.actions}>
        <button disabled={isLoading} type="submit" className={css.submitButton}>
          Sign Up
        </button>
      </div>

      {error && <p className={css.error}>{error}</p>}
    </form>
  </main>;
}
