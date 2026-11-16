'use client';

import { useEffect, useRef, useState } from 'react';
import css from './Filters.module.css';

const options = [
  { value: 'a-z', label: 'A to Z' },
  { value: 'z-a', label: 'Z to A' },
  { value: 'less', label: 'Less than 10$' },
  { value: 'greater', label: 'Greater than 10$' },
  { value: 'popular', label: 'Popular' },
  { value: 'not-popular', label: 'Not popular' },
  { value: 'all', label: 'Show all' },
] as const;

export default function Filters() {
  const [selected, setSelected] = useState('a-z');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const selectedOption = options.find(option => option.value === selected);
  return (
    <div className={css.filters}>
      <p className={css.title}>Filters</p>

      <div className={css.selectWrapper} ref={selectRef}>
        <button
          type="button"
          className={css.select}
          onClick={() => setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
        >
          {selectedOption?.label}

          <svg
            className={`${css.chevronIcon} ${isOpen ? css.rotated : ''}`}
            width="20"
            height="20"
          >
            <use href="/icons.svg#icon-chevron-down" />
          </svg>
        </button>

        <ul className={`${css.options} ${isOpen ? css.open : ''}`}>
          {options.map(option => (
            <li key={option.value}>
              <button
                type="button"
                className={`${css.option} ${
                  selected === option.value ? css.active : ''
                }`}
                onClick={() => {
                  setSelected(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
