'use client';

import { Tag } from '@/shared/ui/kit/tag';
import { Title } from '@/shared/ui/kit/title';

import st from './whats-coming.module.scss';
import { Text } from '@/shared/ui/kit/text';
import Image from 'next/image';
import { cn } from '@/shared/lib/styles';

const services = [
  {
    title: 'Fast & Secure Hosting',
    desc: 'Reliable, high-speed hosting to keep your websites and applications running smoothly with top-tier security.',
    imgPath: '/images/services/hosting.svg',
  },
  {
    title: 'Domain Services',
    desc: 'Easily find, register, and manage your perfect domain with hassle-free setup and seamless integration.',
    imgPath: '/images/services/domain-name.svg',
  },
  {
    title: 'Full Control',
    desc: 'Take charge of your website and applications with our intuitive dashboard, designed for seamless navigation and complete management.',
    imgPath: '/images/services/control.svg',
  },
  {
    title: '24/7 Support',
    desc: 'Expert assistance available around the clock, providing help in your language whenever you need it.',
    imgPath: '/images/services/support.svg',
  },
];

export function WhatsComing() {
  return (
    <section className={st.layout}>
      <section className={st.text}>
        <Tag>Features</Tag>
        <Title>What&#39;s coming</Title>
      </section>
      <section className={st.services}>
        {services.map((service, index) => (
          <Service
            key={service.title}
            {...service}
            isOffset={index % 2 !== 0}
          />
        ))}
      </section>
    </section>
  );
}

function Service({
  desc,
  imgPath,
  title,
  isOffset,
}: {
  title: string;
  desc: string;
  imgPath: string;
  isOffset: boolean;
}) {
  return (
    <article className={cn(st.cardLayout, isOffset && st.offset)}>
      <section className={st.cardInfo}>
        <Title as="h2" className={st.title}>
          {title}
        </Title>
        <Text className={st.text}>{desc}</Text>
      </section>
      <Image
        src={imgPath}
        alt="service-img"
        width={310}
        height={300}
        style={{
          width: '100%',
          height: 'auto',
          borderBottomLeftRadius: '32px',
          borderBottomRightRadius: '32px',
          objectFit: 'cover',
        }}
      />
    </article>
  );
}
