import { Psychologist } from '@/types/psychologist';
import { authApi } from './firebase';

export const getPsychologists = async (): Promise<Psychologist[]> => {
  const res = await authApi.get('.json');
  const psychologists: Psychologist[] = [];
  for (const id in res.data) {
    psychologists.push({
      ...res.data[id],
      id,
    });
  }

  return psychologists;
};
