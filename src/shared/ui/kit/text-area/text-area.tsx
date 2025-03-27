'use client';

import { InputHTMLAttributes } from 'react';

import st from './text-area.module.scss';
import { cn } from '@/shared/lib/styles';

export function TextArea({
  hint,
  intent,
  ...args
}: InputHTMLAttributes<HTMLTextAreaElement> & {
  hint?: string;
  intent?: 'primary' | 'danger';
}) {
  const textAreaClasses = cn(st.textAreaContainer, {
    [st.dangerIntent]: intent === 'danger',
  });

  return (
    <div>
      {hint ? <span className={st.hint}>{hint}</span> : null}
      <div className={textAreaClasses}>
        <textarea className={st.textArea} {...args} />
      </div>
    </div>
  );
}
