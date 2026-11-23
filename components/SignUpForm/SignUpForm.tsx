'use client';

import { useState } from 'react';
import css from './SignUpForm.module.css';
import ShowPasswordButton from '../ShowPasswordForm/ShowPasswordButton';
import Button from '../Button/Button';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  registrationFormSchema,
  RegistrationFormValues,
} from './SignUpForm-schema';
import { registerUser } from '@/lib/firebase/auth';
import axios from 'axios';
import { useAuthStore } from '@/lib/store/authStore';

interface SignUpFormProps {
  onSuccess?: () => void;
}
export default function SignUpForm({ onSuccess }: SignUpFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const setUser = useAuthStore(state => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: { username: '', email: '', password: '' },
  });

  const onSubmit: SubmitHandler<RegistrationFormValues> = async data => {
    setError('');
    setIsLoading(true);
    try {
      const user = await registerUser(data.username, data.email, data.password);
      // router.push('/psychologists');
      setUser(user);
      onSuccess?.();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.error;

        if (errorMessage === 'auth/email-already-in-use') {
          setError('This email is already registered.');
        } else if (errorMessage === 'auth/weak-password') {
          setError('Password should be at least 6 characters.');
        } else if (errorMessage === 'auth/invalid-email') {
          setError('Please enter a valid email address.');
        } else {
          setError('Registration failed. Please try again.');
        }
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="name" className={css.visuallyHidden}>
            Name
          </label>
          <input
            id="name"
            type="text"
            className={css.input}
            placeholder="Name"
            {...register('username')}
          />
          {errors.username && (
            <p className={css.error}>{errors.username.message}</p>
          )}
        </div>
        <div className={css.formGroup}>
          <label htmlFor="email" className={css.visuallyHidden}>
            Email
          </label>
          <input
            id="email"
            type="email"
            className={css.input}
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
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
              {...register('password')}
            />
            <ShowPasswordButton
              isVisible={showPassword}
              onToggle={() => setShowPassword(prev => !prev)}
            />
          </div>
          {errors.password && (
            <p className={css.error}>{errors.password.message}</p>
          )}
        </div>

        <div className={css.actions}>
          <Button type="submit" className={css.btnSignUp}>
            Sign Up
          </Button>
        </div>

        {error && <p className={css.error}>{error}</p>}
      </form>
    </div>
  );
}
