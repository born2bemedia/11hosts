'use client';

import { InputHTMLAttributes } from 'react';

import st from './text-field.module.scss';
import { cn } from '@/shared/lib/styles';

export function TextField({
  hint,
  intent,
  ...args
}: InputHTMLAttributes<HTMLInputElement> & {
  hint?: string;
  intent?: 'primary' | 'danger';
}) {
  const textFieldClasses = cn(st.textFieldContainer, {
    [st.dangerIntent]: intent === 'danger',
  });

  return (
    <div>
      {hint ? <span className={st.hint}>{hint}</span> : null}
      <div className={textFieldClasses}>
        <input className={st.textField} {...args} />
      </div>
    </div>
  );
}
