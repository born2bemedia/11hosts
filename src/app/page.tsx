import { ComingSoon, Welcome, WhatsComing } from './components';
import { ContactDialog } from '@/features/contact-dialog/components';

export default function Home() {
  return (
    <main>
      <Welcome />
      <WhatsComing />
      <ComingSoon />
      <ContactDialog />
    </main>
  );
}
