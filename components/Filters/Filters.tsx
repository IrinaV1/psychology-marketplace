'use client';

import css from './Filters.module.css';

export default function Filters() {
  return (
    <div className={css.filters}>
      <p className={css.title}>Filters</p>

      <select className={css.select} defaultValue="a-z">
        <option value="a-z">A to Z</option>
        <option value="z-a">Z to A</option>
        <option value="less">Less than 10$</option>
        <option value="Greater">Greater than 10$</option>
        <option value="popular">Popular</option>
        <option value="not popular">Not popular</option>
        <option value="all">Show all</option>
      </select>
    </div>
  );
}
