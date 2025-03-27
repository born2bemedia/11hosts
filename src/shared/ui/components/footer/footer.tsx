'use client';

import Link from 'next/link';

import st from './footer.module.scss';

export function Footer() {
  return (
    <footer className={st.footer}>
      <p>Logo</p>
      <Link href="mailto:go@11hosts.com" className={st.link}>
        go@11hosts.com
      </Link>
    </footer>
  );
}
