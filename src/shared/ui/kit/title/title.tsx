'use client';

import { ElementType, JSX, ReactNode, RefObject } from 'react';

import st from './title.module.scss';
import { cn } from '@/shared/lib/styles';

export function Title({
  children,
  as,
  ref,
  level = 1,
  className = '',
}: {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: ElementType;
  ref?: RefObject<HTMLHeadingElement | null>;
}) {
  const Tag = as ?? (`h${level}` as keyof JSX.IntrinsicElements);

  return (
    <Tag ref={ref} className={cn(st.title, className)}>
      {children}
    </Tag>
  );
}
