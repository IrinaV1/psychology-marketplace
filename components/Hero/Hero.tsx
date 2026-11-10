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
            <Image
              className={css.arrowIcon}
              src="/arrow.svg"
              alt="arrow icon"
              width={14}
              height={16}
            />
          </Link>
        </div>
        <div className="containerImage">
          <Image
            src="/hero.jpg"
            alt="Scenic landscape"
            width={464}
            height={528}
            priority
            fetchPriority="high"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
