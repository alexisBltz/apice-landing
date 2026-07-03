/// Brand mark de Ápice: la "A" como cima con la tilde-chispa naranja.
export function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={(size * 26) / 30}
      height={size}
      viewBox="0 0 26 30"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 28 L14 4 L24 28"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 20 L20 20" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="15.6" cy="2.4" r="2.6" fill="#E8622A" />
    </svg>
  );
}
