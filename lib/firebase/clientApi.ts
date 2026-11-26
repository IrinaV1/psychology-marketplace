import { Psychologist } from '@/types/psychologist';
import { authApi } from './firebase';

export const getPsychologists = async (): Promise<Psychologist[]> => {
  const { data } = await authApi.get('/psychologists');

  return data;
};
