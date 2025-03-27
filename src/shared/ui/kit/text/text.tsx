'use client';

import { ReactNode } from 'react';

import st from './text.module.scss';
import { cn } from '@/shared/lib/styles';

export function Text({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn(st.text, className)}>{children}</p>;
}
