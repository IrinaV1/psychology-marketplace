'use client';

import css from './Favorites.module.css';
import Filters from '@/components/Filters/Filters';
import Card from '@/components/Card/Card';
import Button from '@/components/Button/Button';
import { useAuthStore } from '@/lib/store/authStore';

export default function FavoritesPage() {
  const user = useAuthStore(state => state.user);
  if (!user) {
    return <p>Please log in to access your favorites.</p>;
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
