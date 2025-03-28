'use client';

import { motion } from '@/shared/lib/motion';

import st from './pulsing-ellipse.module.scss';

export function PulsingEllipse() {
  return (
    <>
      <motion.div
        animate={{ scale: [1, 1.5], opacity: [0, 1, 0] }}
        className={st.ellipseOne}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <FirstCircle />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.5], opacity: [0, 1, 0] }}
        className={st.ellipseTwo}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <SecondCircle />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.5], opacity: [0, 1, 0] }}
        className={st.ellipseThree}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ThirdCircle />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.5], opacity: [0, 1, 0] }}
        className={st.ellipseFour}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <FourthCircle />
      </motion.div>
    </>
  );
}

const FirstCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="90"
    height="90"
    viewBox="0 0 76 76"
    fill="none"
  >
    <circle
      cx="38"
      cy="38"
      r="37.75"
      stroke="#6060FE"
      strokeOpacity="0.6"
      strokeWidth="0.5"
    />
  </svg>
);

const SecondCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="104"
    height="104"
    viewBox="0 0 90 90"
    fill="none"
  >
    <circle
      cx="45"
      cy="45"
      r="44.75"
      stroke="#6060FE"
      strokeOpacity="0.4"
      strokeWidth="0.5"
    />
  </svg>
);

const ThirdCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="118"
    height="118"
    viewBox="0 0 104 104"
    fill="none"
  >
    <circle
      cx="52"
      cy="52"
      r="51.75"
      stroke="#6060FE"
      strokeOpacity="0.2"
      strokeWidth="0.5"
    />
  </svg>
);

const FourthCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="132"
    height="132"
    viewBox="0 0 118 118"
    fill="none"
  >
    <circle
      cx="59"
      cy="59"
      r="58.75"
      stroke="#6060FE"
      strokeOpacity="0.1"
      strokeWidth="0.5"
    />
  </svg>
);
