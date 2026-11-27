'use client';
import { Psychologist } from '@/types/psychologist';
import Card from '../Card/Card';
import css from './GridCard.module.css';

import { useEffect, useState } from 'react';
import { getPsychologists } from '@/lib/firebase/database';

export default function GridCard() {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  useEffect(() => {
    const fetchPsychologists = async () => {
      try {
        const data = await getPsychologists();
        setPsychologists(data);
      } catch (error) {
        console.error('Failed to fetch psychologists:', error);
      }
    };

    fetchPsychologists();
  }, []);

  return (
    <div className={css.containerCards}>
      {psychologists.map(psychologist => (
        <Card key={psychologist.id} psychologist={psychologist} />
      ))}
    </div>
  );
}
