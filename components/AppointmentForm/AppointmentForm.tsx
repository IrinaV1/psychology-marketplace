'use client';

import SubmitButton from '../Button/Button';
import css from './AppointmentForm.module.css';

export default function AppointmentForm() {
  return (
    <div className={css.mainContent}>
      <div className={css.containerTitle}>
        <h1 className={css.formTitle}>Log In</h1>
        <p className={css.formText}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
      </div>
      <form
        // action={handleSubmit}
        className={css.form}
      >
        <div className={css.formGroup}>
          <label htmlFor="name" className={css.visuallyHidden}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className={css.input}
            placeholder="Name"
            required
          />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="email" className={css.visuallyHidden}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            placeholder="Email"
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="comment" className={css.visuallyHidden}>
            Comment
          </label>
          <div className={css.commentWrapper}>
            <textarea
              id="comment"
              name="comment"
              className={css.input}
              placeholder="Comment"
            />
          </div>
        </div>

        <div className={css.actions}>
          <SubmitButton>Send</SubmitButton>
        </div>

        {/* {error && <p className={css.error}>{error}</p>} */}
      </form>
    </div>
  );
}
