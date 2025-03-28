'use client';

import Link from 'next/link';

import st from './footer.module.scss';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className={st.footer}>
      <Image src="/full-logo.svg" alt="full-logo" width={185} height={32} />
      <Link href="mailto:go@11hosts.com" className={st.link}>
        go@11hosts.com
      </Link>
    </footer>
  );
}
