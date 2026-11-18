import { ReactNode } from 'react';
import css from './Button.module.css';

type SubmitButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'large',
  disabled = false,
  onClick,
}: SubmitButtonProps) {
  return (
    <button
      type={type}
      className={`${css.button} ${css[variant]} ${css[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
