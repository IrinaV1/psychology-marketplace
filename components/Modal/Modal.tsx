'use client';

import type React from 'react';
import { ReactNode, useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  size?: 'auth' | 'appointment';
}
const emptySubscribe = () => () => {};
export default function Modal({
  onClose,
  children,
  size = 'auth',
}: ModalProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
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
  if (!isClient) return null;
  return createPortal(
    <div onClick={handleBackdropClick} className={css.backdrop}>
      <div
        className={`${css.modal} ${css[size]}`}
        role="dialog"
        aria-modal="true"
      >
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
