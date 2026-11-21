import css from './Favorites.module.css';
import Filters from '@/components/Filters/Filters';
import Card from '@/components/Card/Card';
import Button from '@/components/Button/Button';

export default function FavoritesPage() {
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
