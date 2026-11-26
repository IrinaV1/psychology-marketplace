'use client';

import Image from 'next/image';
import css from './Card.module.css';
import { useState } from 'react';
import ReviewList from '../ReviewList/ReviewList';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import { Psychologist } from '@/types/psychologist';

interface CardProps {
  psychologist: Psychologist;
}

export default function Card({ psychologist }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={css.cardContainer}>
      <div className={css.containerAvatar}>
        <Image
          className={css.cardAvatar}
          src={psychologist.avatar_url}
          alt={psychologist.name}
          width={96}
          height={96}
        />
      </div>

      <div className={css.containerInfo}>
        <div className={css.wrapperInfo}>
          <div className={css.wrapperAbout}>
            <p className={css.cardProfession}>Psychologist</p>
            <p className={css.cardUserName}>{psychologist.name}</p>
          </div>
          <ul className={css.list}>
            <li className={css.item}>
              <p className={css.itemLabel}>
                Experience:
                <span className={css.itemValue}>{psychologist.experience}</span>
              </p>
            </li>
            <li className={css.item}>
              <p className={css.itemLabel}>
                License:
                <span className={css.itemValue}>{psychologist.license}</span>
              </p>
            </li>
            <li className={css.item}>
              <p className={css.itemLabel}>
                Specialization:
                <span className={css.itemValue}>
                  {psychologist.specialization}
                </span>
              </p>
            </li>
            <li className={css.item}>
              <p className={css.itemLabel}>
                Initial_consultation:
                <span className={css.itemValue}>
                  {psychologist.initial_consultation}
                </span>
              </p>
            </li>
          </ul>
          <div className={css.description}>{psychologist.about}</div>
        </div>
        {!isExpanded ? (
          <button
            className={css.readMoreBtn}
            type="button"
            onClick={() => setIsExpanded(true)}
          >
            Read more
          </button>
        ) : (
          <div className={css.reviews}>
            <ReviewList />
            <Button className={css.btnAppointment} onClick={openModal}>
              Make an appointment
            </Button>
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
      {isModalOpen && (
        <Modal onClose={closeModal} size="appointment">
          <AppointmentForm />
        </Modal>
      )}
    </div>
  );
}
