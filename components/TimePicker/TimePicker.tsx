'use client';

import { useState } from 'react';
import css from './TimePicker.module.css';

interface TimePickerProps {
  time: string;
  onTimeChange: (time: string) => void;
}
const times = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
];
export default function TimePicker({ time, onTimeChange }: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.timePicker}>
      <button
        type="button"
        className={css.timeButton}
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Choose appointment time"
        aria-expanded={isOpen}
      >
        <svg className={css.clock} width="20" height="20" aria-hidden="true">
          <use href="/icons.svg#icon-clock" />
        </svg>
      </button>

      {isOpen && (
        <div className={css.timeDropdown}>
          <p className={css.timeTitle}>Meeting time</p>

          <ul className={css.timeList} aria-label="Available appointment times">
            {times.map(item => (
              <li key={item}>
                <button
                  type="button"
                  className={`${css.timeOption} ${
                    time === item ? css.selected : ''
                  }`}
                  onClick={() => {
                    onTimeChange(item);
                    setIsOpen(false);
                  }}
                >
                  <span className={css.times}>
                    <span className={css.time}>{item.slice(0, 2)}</span>
                    <span className={css.timeColon}>:</span>
                    <span className={css.time}>{item.slice(3)}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
