'use client';
import Image from 'next/image';
import Link from 'next/link';
import css from './Header.module.css';
import { usePathname } from 'next/navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <div className={`${css.headerContainer} container`}>
        <Link className={css.logo} href="/" aria-label="Home">
          <span className={css.logoFirst}>psychologists</span>
          <span className={css.logoSecond}>.services</span>
        </Link>
        <nav className={css.navigation} aria-label="Main Navigation">
          <ul className={css.list}>
            <li className={css.item}>
              <Link
                href={'/'}
                className={pathname === '/' ? css.active : ''}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li className={css.item}>
              <Link
                href={'/catalog'}
                className={pathname.startsWith('/catalog') ? css.active : ''}
                aria-current={
                  pathname.startsWith('/catalog') ? 'page' : undefined
                }
              >
                Psychologists
              </Link>
            </li>
          </ul>
        </nav>

        <AuthNavigation />
      </div>
    </header>
  );
}
