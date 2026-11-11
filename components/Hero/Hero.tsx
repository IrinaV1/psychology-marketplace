import css from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.overlay} />
      <div className={`container ${css.content}`}>
        <div className={css.containerTitle}>
          <h1 className={css.title}>
            The road to the <span className={css.accent}>depths</span> of the
            human soul
          </h1>
          <p className={css.subtitle}>
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </p>
          <Link className={css.link} href="/psychologists">
            Get Started
            <svg
              className={css.arrowIcon}
              width="14"
              height="16"
              aria-hidden="true"
            >
              <use href="/icons.svg#icon-arrow" />
            </svg>
          </Link>
        </div>
        <div className={css.containerImage}>
          <Image
            className={css.image}
            src="/hero.jpg"
            alt="Scenic landscape"
            width={464}
            height={528}
            priority
            fetchPriority="high"
            sizes="(max-width: 464px) 100vw, 464px"
          />
          <div className={css.questionBlock}>
            <svg
              className={css.questionIcon}
              width="10"
              height="17"
              aria-hidden="true"
            >
              <use href="/icons.svg#icon-question" />
            </svg>
          </div>
          <div className={css.usersBlock}>
            <svg
              className={css.usersIcon}
              width="25"
              height="25"
              aria-hidden="true"
            >
              <use href="/icons.svg#icon-users" />
            </svg>
          </div>
          <div className={css.checkBlock}>
            <svg
              className={css.checkIcon}
              width="40"
              height="40"
              aria-hidden="true"
            >
              <use href="/icons.svg#icon-check" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
