'use client';

import css from './SignInForm.module.css';
import ShowPasswordButton from '../ShowPasswordForm/ShowPasswordButton';
import { useState } from 'react';
import Button from '../Button/Button';
import { LoginFormValues } from './SignInForm-schema';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { loginUser } from '@/lib/firebase/auth';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const setUser = useAuthStore(state => state.setUser);

  const { register, handleSubmit } = useForm<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> = async data => {
    try {
      setIsLoading(true);
      const user = await loginUser(data.email, data.password);

      setUser(user);
      router.push('/psychologists');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.error;
      } else {
        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };
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
        onSubmit={handleSubmit(onSubmit)}
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
            className={css.input}
            placeholder="Email"
            required
            {...register('email')}
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
              className={css.input}
              placeholder="Password"
              required
              {...register('password')}
            />
            <ShowPasswordButton
              isVisible={showPassword}
              onToggle={() => setShowPassword(prev => !prev)}
            />
          </div>
        </div>

        <div className={css.actions}>
          <Button type="submit" className={css.btnSignIn}>
            Log In
          </Button>
        </div>

        {error && <p className={css.error}>{error}</p>}
      </form>
    </div>
  );
}
