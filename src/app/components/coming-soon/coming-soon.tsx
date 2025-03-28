'use client';
import { useEffect, useRef, useState } from 'react';

import st from './coming-soon.module.scss';
import { Tag } from '@/shared/ui/kit/tag';
import { Title } from '@/shared/ui/kit/title';
import { Button } from '@/shared/ui/kit/button';
import { useContactDialogStore } from '@/features/contact-dialog/services';
import { useScroll, motion, useTransform, MotionValue } from 'framer-motion';

export function ComingSoon() {
  const { setOpen } = useContactDialogStore();
  const element = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768);
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  const text =
    'The future of hosting is almost here. In the meantime, feel free to explore or reach out to us with any questions.';

  const { scrollYProgress } = useScroll({
    target: element,
    offset: isMobile
      ? ['start 0.9', 'start 0.5']
      : ['start 0.7', 'start start'],
  });

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  const words = text.split(' ');

  return (
    <section className={st.layout} ref={element}>
      <section className={st.info}>
        <Tag width={180}>Coming Soon</Tag>
        <Title>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                word={word}
                range={[start, end]}
                progress={scrollYProgress}
              />
            );
          })}
        </Title>
      </section>
      <Button onClick={() => setOpen(true)}>Be the First to Know</Button>
    </section>
  );
}

const Word = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const characters = word.split('');
  const amount = range[1] - range[0];
  const step = amount / word.length;
  return (
    <span className={st.word}>
      {characters.map((character, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Character
            key={i}
            character={character}
            range={[start, end]}
            progress={progress}
          />
        );
      })}
    </span>
  );
};

const Character = ({
  character,
  range,
  progress,
}: {
  character: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={st.character}>
      <span className={st.shadow}>{character}</span>
      <motion.span style={{ opacity }}>{character}</motion.span>
    </span>
  );
};
