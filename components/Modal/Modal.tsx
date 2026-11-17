'use client';

import type React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  size?: 'auth' | 'appointment';
}

export default function Modal({
  onClose,
  children,
  size = 'auth',
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        console.log(e.key);
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  if (!mounted) return null;
  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={css.backdrop}
      aria-modal="true"
      role="dialog"
    >
      <div className={`${css.modal} ${css[size]}`}>
        <button
          type="button"
          className={css.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className={css.menuClose} width="32" height="32">
            <use href="/icons.svg#icon-close" />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
