'use client';

import { ReactNode } from 'react';
import css from './AuthLink.module.css';
import Link from 'next/link';

interface AuthLinkProps {
  href: string;
  children: ReactNode;
  variant: 'login' | 'register';
}

export default function AuthLink({ href, children, variant }: AuthLinkProps) {
  return (
    <Link href={href} className={css[variant]}>
      {children}
    </Link>
  );
}
