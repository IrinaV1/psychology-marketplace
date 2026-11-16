'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import SignInForm from '@/components/SignInForm/SignInForm';

export default function SignInModalPage() {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <SignInForm />
    </Modal>
  );
}
