'use client';

import css from './SubmitButton.module.css';

type SubmitButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export default function SubmitButton({
  children,
  disabled = false,
}: SubmitButtonProps) {
  return (
    <button type="submit" className={css.submitButton} disabled={disabled}>
      {children}
    </button>
  );
}
