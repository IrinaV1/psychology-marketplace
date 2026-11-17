'use client';

import css from './ShowPasswordButton.module.css';

interface ShowPasswordProps {
  isVisible: boolean;
  onToggle: () => void;
}
export default function ShowPasswordButton({
  isVisible,
  onToggle,
}: ShowPasswordProps) {
  return (
    <button
      type="button"
      className={css.eyeButton}
      onClick={onToggle}
      aria-label={isVisible ? 'Hide password' : 'Show password'}
    >
      <svg className={css.passwordIcon} width="20" height="20">
        <use
          href={isVisible ? '/icons.svg#icon-eye' : '/icons.svg#icon-eye-off'}
        />
      </svg>
    </button>
  );
}
