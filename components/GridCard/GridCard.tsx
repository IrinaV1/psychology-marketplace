'use client';
import { Psychologist } from '@/types/psychologist';
import Card from '../Card/Card';
import css from './GridCard.module.css';

import { useEffect, useState } from 'react';
import { getPsychologists } from '@/lib/firebase/clientApi';

export default function GridCard() {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  useEffect(() => {
    const fetchPsychologists = async () => {
      const data = await getPsychologists();
      setPsychologists(data);
    };

    fetchPsychologists();
  }, []);
  console.log(psychologists);

  return (
    <div className={css.containerCards}>
      {psychologists.map(psychologist => (
        <Card key={psychologist.id} psychologist={psychologist} />
      ))}
    </div>
  );
}
