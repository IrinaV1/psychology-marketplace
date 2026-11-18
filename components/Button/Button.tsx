import { ReactNode } from 'react';
import css from './Button.module.css';

type SubmitButtonProps = {
  children: ReactNode;
  className: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
}: SubmitButtonProps) {
  return (
    <button
      type={type}
      className={`${css.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
