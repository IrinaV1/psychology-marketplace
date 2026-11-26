'use client';

import css from './Favorites.module.css';
import Filters from '@/components/Filters/Filters';
import Card from '@/components/Card/Card';
import Button from '@/components/Button/Button';
import { useAuthStore } from '@/lib/store/authStore';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';

export default function FavoritesClient() {
  const user = useAuthStore(state => state.user);
  const isLoading = useAuthStore(state => state.isLoading);
  const router = useRouter();

  const handleCloseModal = () => {
    router.replace('/');
  };
  if (isLoading) {
    return null;
  }

  if (!user) {
    return (
      <>
        <Modal onClose={handleCloseModal}>
          <h2>Authentication required</h2>
          <p>
            Please sign in or create an account to access your favorite
            psychologists.
          </p>
        </Modal>
      </>
    );
  }

  return (
    <main className={css.main}>
      <div className="container">
        <Filters />
        <Card />
        <Button className={css.loadMoreBtn}>Load more</Button>
      </div>
    </main>
  );
}
