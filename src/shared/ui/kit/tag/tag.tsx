'use client';

import { ReactNode } from 'react';

import st from './tag.module.scss';
import { BlinkEllipse } from '@/shared/ui/icons';

export function Tag({
  children,
  width = 226,
}: {
  children: ReactNode;
  width?: number;
}) {
  return (
    <span className={st.tag} style={{ width: `${width}px` }}>
      <span className={st.children}>
        <BlinkEllipse />
        {children}
      </span>
    </span>
  );
}
