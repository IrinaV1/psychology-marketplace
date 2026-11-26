import { Psychologist } from '@/types/psychologist';
import { databaseApi } from './firebase';

export const getPsychologists = async (): Promise<Psychologist[]> => {
  const res = await databaseApi.get('.json');
  const psychologists: Psychologist[] = [];
  for (const id in res.data) {
    psychologists.push({
      ...res.data[id],
      id,
    });
  }

  return psychologists;
};
