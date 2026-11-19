'use client';

import Image from 'next/image';
import Button from '../Button/Button';
import css from './AppointmentForm.module.css';
import TimePicker from '../TimePicker/TimePicker';
import { useState } from 'react';

export default function AppointmentForm() {
  const [time, setTime] = useState('00:00');
  const [selectedTime, setSelectedTime] = useState('09:30');
  return (
    <div className={css.mainContent}>
      <div className={css.containerTitle}>
        <h1 className={css.formTitle}>
          Make an appointment with a psychologists
        </h1>
        <p className={css.formText}>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </p>
      </div>
      <div className={css.containerPsychologists}>
        <Image
          className={css.appointmentAvatar}
          src="/user.jpg"
          alt="user"
          width={44}
          height={44}
        />
        <div className={css.wrapperAbout}>
          <p className={css.profession}>Psychologist</p>
          <p className={css.userName}>Dr. Sarah Davis</p>
        </div>
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

        <div className={css.formRow}>
          <div className={css.formGroup}>
            <label htmlFor="phone" className={css.visuallyHidden}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className={`${css.phone} ${css.input}`}
              placeholder="+380"
              required
            />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="time" className={css.visuallyHidden}>
              Meeting time
            </label>
            <input
              id="time"
              type="text"
              name="time"
              value={time}
              className={`${css.time} ${css.input}`}
              readOnly
              required
            />
            <TimePicker
              time={selectedTime}
              onTimeChange={value => {
                setSelectedTime(value);
                setTime(value);
              }}
            />
          </div>
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
              className={`${css.textarea} ${css.input}`}
              placeholder="Comment"
              required
            />
          </div>
        </div>

        <div className={css.actions}>
          <Button type="submit" className={css.btnAppointment}>
            Send{' '}
          </Button>
        </div>

        {/* {error && <p className={css.error}>{error}</p>} */}
      </form>
    </div>
  );
}
