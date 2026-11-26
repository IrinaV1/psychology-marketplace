import css from './Psychologists.module.css';

import Filters from '@/components/Filters/Filters';
import GridCard from '@/components/GridCard/GridCard';

export default function PsychologistsPage() {
  return (
    <main className={css.main}>
      <div className="container">
        <Filters />
        <GridCard />
      </div>
    </main>
  );
}
