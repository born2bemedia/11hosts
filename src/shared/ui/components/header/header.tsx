'use client';

import { Button } from '@/shared/ui/kit/button';

import st from './header.module.scss';
import { useContactDialogStore } from '@/features/contact-dialog/services';

export function Header() {
  const { setOpen } = useContactDialogStore();

  return (
    <header className={st.header}>
      <p>Logo</p>
      <Button onClick={() => setOpen(true)}>Contact Our Team</Button>
    </header>
  );
}
