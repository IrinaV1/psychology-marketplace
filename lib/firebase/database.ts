import { Psychologist } from '@/types/psychologist';
import { db } from './firebase';
import { ref, get } from 'firebase/database';

export async function getPsychologists(): Promise<Psychologist[]> {
  const dbRef = ref(db, 'psychologists');
  const snapshot = await get(dbRef);

  if (snapshot.exists()) {
    const data = snapshot.val();

    if (Array.isArray(data)) {
      return data
        .map((psychologist, index) => ({
          ...psychologist,
          id: String(index),
        }))
        .filter(Boolean);
    }
    return Object.entries(data).map(([key, value]) => ({
      id: key,
      ...(value as Omit<Psychologist, 'id'>),
    }));
  }
  return [];
}
