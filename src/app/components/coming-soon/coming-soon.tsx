'use client';

import st from './coming-soon.module.scss';
import { Tag } from '@/shared/ui/kit/tag';
import { Title } from '@/shared/ui/kit/title';
import { Button } from '@/shared/ui/kit/button';
import { useContactDialogStore } from '@/features/contact-dialog/services';

export function ComingSoon() {
  const { setOpen } = useContactDialogStore();

  return (
    <section className={st.layout}>
      <section className={st.info}>
        <Tag width={180}>Coming Soon</Tag>
        <Title>
          The future of hosting is almost here. In the meantime, feel free to
          explore or reach out to us with any questions.
        </Title>
      </section>
      <Button onClick={() => setOpen(true)}>Be the First to Know</Button>
    </section>
  );
}
