'use client';

import Link from 'next/link';
import css from './Header.module.css';
import { usePathname } from 'next/navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import { useState } from 'react';
import { RiMenuSearchLine } from 'react-icons/ri';
import UserNavigation from '../UserNavigation/UserNavigation';
import { useAuthStore } from '@/lib/store/authStore';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useAuthStore(state => state.user);
  const isLoading = useAuthStore(state => state.isLoading);
  const closeMenu = () => setIsMenuOpen(false);

  const isPsychologistsPage = pathname.startsWith('/psychologists');
  const isFavoritesPage = pathname === '/favorites';

  return (
    <header className={css.header}>
      <div className={`${css.headerContainer} container`}>
        <Link
          className={css.logo}
          onClick={closeMenu}
          href="/"
          aria-label="Home"
        >
          <span className={css.logoFirst}>psychologists</span>
          <span className={css.logoSecond}>.services</span>
        </Link>
        <nav
          className={`${css.navigation} ${isMenuOpen ? css.navigationOpen : ''}`}
          aria-label="Main Navigation"
        >
          <ul className={css.list}>
            <li className={css.item}>
              <Link
                href={'/'}
                className={pathname === '/' ? css.active : ''}
                aria-current={pathname === '/' ? 'page' : undefined}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className={css.item}>
              <Link
                href={'/psychologists'}
                className={isPsychologistsPage ? css.active : ''}
                aria-current={isPsychologistsPage ? 'page' : undefined}
                onClick={closeMenu}
              >
                Psychologists
              </Link>
            </li>
            {!isLoading && user && (
              <li className={css.item}>
                <Link
                  href="/favorites"
                  className={isFavoritesPage ? css.active : ''}
                  aria-current={isFavoritesPage ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  Favorites
                </Link>
              </li>
            )}
          </ul>
          <div className={css.mobileAuth}>
            {!isLoading &&
              (user ? <UserNavigation userName={user} /> : <AuthNavigation />)}
          </div>
        </nav>
        <div className={css.desktopAuth}>
          {!isLoading &&
            (user ? <UserNavigation userName={user} /> : <AuthNavigation />)}
        </div>

        <button
          type="button"
          className={css.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <svg className={css.menuClose} width="40" height="40">
              <use href="/icons.svg#icon-close" />
            </svg>
          ) : (
            <RiMenuSearchLine className={css.menuBurger} size={40} />
          )}
        </button>
      </div>
    </header>
  );
}
