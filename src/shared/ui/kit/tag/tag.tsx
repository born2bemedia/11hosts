'use client';

import { ReactNode } from 'react';

import st from './tag.module.scss';
import { BlinkEllipse } from '@/shared/ui/icons';

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className={st.tag}>
      <BlinkEllipse />
      {children}
    </span>
  );
}
