'use client';

import st from './welcome.module.scss';
import { Tag } from '@/shared/ui/kit/tag';
import { Title } from '@/shared/ui/kit/title';
import { Text } from '@/shared/ui/kit/text';
import { Button } from '@/shared/ui/kit/button';
import Image from 'next/image';
import { useContactDialogStore } from '@/features/contact-dialog/services';
import { PulsingEllipse } from '@/app/components/pulsing-ellipse/pulsing-ellipse';

export function Welcome() {
  const { setOpen } = useContactDialogStore();

  return (
    <section className={st.layout}>
      <Tag>Welcome to 11Hosts</Tag>
      <Title>
        Reliable Hosting. <br className={st.titelBr} /> Smart Domain Solutions.
      </Title>
      <Text>
        We&#39;re building a new generation of hosting and domain services.
        Whether you&#39;re launching your first project or migrating your entire
        infrastructure — 11Hosts is here to support your journey.
      </Text>
      <Button onClick={() => setOpen(true)}>Let&#39;s Talk Hosting</Button>
      <section className={st.cloud}>
        <Image src="/images/cloud.svg" alt="cloud" fill />
        <PulsingEllipse />
        <Image
          className={st.cloudIcon}
          src="/images/cloud-icon.svg"
          alt="cloud icon"
          width={104}
          height={104}
        />
      </section>
    </section>
  );
}
