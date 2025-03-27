'use client';

export function BlinkEllipse() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
    >
      <circle cx="8.5" cy="8" r="5" fill="#6060FE" />
      <circle
        cx="8.5"
        cy="8"
        r="6.5"
        stroke="#6060FE"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
    </svg>
  );
}
