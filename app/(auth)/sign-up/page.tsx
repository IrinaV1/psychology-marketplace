import SignUpForm from '@/components/SignUpForm/SignUpForm';
import css from './SignUpPage.module.css';

export default function SignUpPage() {
  return (
    <main className={css.main}>
      <div className="container">
        <SignUpForm />
      </div>
    </main>
  );
}
