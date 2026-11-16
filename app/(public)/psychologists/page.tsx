import Card from '@/components/Card/Card';
import css from './Psychologists.module.css';
import Header from '@/components/Header/Header';
import Filters from '@/components/Filters/Filters';

export default function PsychologistsPage() {
  return (
    <main className={css.main}>
      <div className="container">
        {/* <Header /> */}

        <Filters />
        <Card />
      </div>
    </main>
  );
}
