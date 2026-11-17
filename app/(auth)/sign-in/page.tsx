import SignInForm from '@/components/SignInForm/SignInForm';
import css from './SignInPage.module.css';
export default function SignInPage() {
  return (
    <main className={css.main}>
      <div className="container">
        <SignInForm />
      </div>
    </main>
  );
}
