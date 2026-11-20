import Header from '@/components/Header/Header';
import css from './Favorites.module.css';
import Filters from '@/components/Filters/Filters';
import Card from '@/components/Card/Card';
export default function FavoritesPage() {
  return (
    <main className={css.main}>
      <Filters />
      <Card />
    </main>
  );
}
