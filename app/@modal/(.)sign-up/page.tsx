'use client';
import Modal from '@/components/Modal/Modal';
import SignUpForm from '@/components/SignUpForm/SignUpForm';
import { useRouter } from 'next/navigation';

export default function SignUpModalPage() {
  const router = useRouter();
  return (
    <Modal onClose={() => router.back()}>
      <SignUpForm />
    </Modal>
  );
}
