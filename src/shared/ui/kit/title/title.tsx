'use client';

import { ElementType, JSX, ReactNode } from 'react';

import st from './title.module.scss';
import { cn } from '@/shared/lib/styles';

export function Title({
  children,
  as,
  level = 1,
  className = '',
}: {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: ElementType;
}) {
  const Tag = as ?? (`h${level}` as keyof JSX.IntrinsicElements);

  return <Tag className={cn(st.title, className)}>{children}</Tag>;
}
