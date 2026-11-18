'use client';

import Image from 'next/image';
import css from './Card.module.css';
import { useState } from 'react';
import ReviewList from '../ReviewList/ReviewList';
import Button from '../Button/Button';

export default function Card() {
  const [] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {};

  return (
    <div className={css.cardContainer}>
      <div className={css.containerAvatar}>
        <Image
          className={css.cardAvatar}
          src="/user.jpg"
          alt="user"
          width={96}
          height={96}
        />
      </div>

      <div className={css.containerInfo}>
        <div className={css.wrapperInfo}>
          <div className={css.wrapperAbout}>
            <p className={css.cardProfession}>Psychologist</p>
            <p className={css.cardUserName}>Dr. Sarah Davis</p>
          </div>
          <ul className={css.list}>
            <li className={css.item}>
              <p className={css.itemLabel}>
                Experience:
                <span className={css.itemValue}>12 years</span>
              </p>
            </li>
            <li className={css.item}>
              <p className={css.itemLabel}>
                License:
                <span className={css.itemValue}>
                  Licensed Psychologist (License #67890)
                </span>
              </p>
            </li>
            <li className={css.item}>
              <p className={css.itemLabel}>
                Specialization:
                <span className={css.itemValue}>
                  Depression and Mood Disorders
                </span>
              </p>
            </li>
            <li className={css.item}>
              <p className={css.itemLabel}>
                Initial_consultation:
                <span className={css.itemValue}>
                  Free 45-minute initial consultation
                </span>
              </p>
            </li>
          </ul>
          <div className={css.description}>
            Dr. Sarah Davis is a highly experienced and licensed psychologist
            specializing in Depression and Mood Disorders. With 12 years of
            practice, she has helped numerous individuals overcome their
            depression and regain control of their lives. Dr. Davis is known for
            her empathetic and understanding approach to therapy, making her
            clients feel comfortable and supported throughout their journey to
            better mental health.
          </div>
        </div>
        {!isExpanded ? (
          <button
            className={css.readMoreBtn}
            type="button"
            onClick={() => setIsExpanded(true)}
          >
            {' '}
            Read more
          </button>
        ) : (
          <div className={css.reviews}>
            <ReviewList />
            <Button className={css.btnAppointment}>Make an appointment</Button>
          </div>
        )}
      </div>
      <div className={css.cardMeta}>
        <div className={css.cardStats}>
          <svg className={css.cardStar} width="16" height="16">
            <use href="/icons.svg#icon-star" />
          </svg>
          <p className={css.rating}>
            Rating: <span>4.75</span>
          </p>
          <p className={css.price}>
            Price / 1 hour: <span className={css.accentPrice}>120$</span>
          </p>
        </div>
      </div>
      <button
        className={css.favoriteButton}
        type="button"
        aria-label="Add to favorites"
      >
        <svg className={css.cardHeart} width="26" height="26">
          <use href="/icons.svg#icon-heart" />
        </svg>
      </button>
    </div>
  );
}
