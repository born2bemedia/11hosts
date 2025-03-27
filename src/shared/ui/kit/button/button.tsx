'use client';

import { ButtonHTMLAttributes } from 'react';

import st from './button.module.scss';
import { cn } from '@/shared/lib/styles';

export function Button({
  children,
  className,
  ...args
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(st.btn, className)} {...args}>
      {children}
    </button>
  );
}
