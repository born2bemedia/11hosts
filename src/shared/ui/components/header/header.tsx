'use client';

import { Button } from '@/shared/ui/kit/button';

import st from './header.module.scss';
import { useContactDialogStore } from '@/features/contact-dialog/services';
import Image from 'next/image';
import { useWindow } from '@/shared/lib/hooks';

export function Header() {
  const { setOpen } = useContactDialogStore();
  const { width } = useWindow();

  return (
    <header className={st.header}>
      <Image src="/full-logo.svg" alt="full-logo" width={185} height={32} />
      <Button onClick={() => setOpen(true)}>
        {width <= 768 ? 'Contact Us' : 'Contact Our Team'}
      </Button>
    </header>
  );
}
