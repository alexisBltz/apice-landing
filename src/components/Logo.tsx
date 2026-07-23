export function Logo({ size = 30 }: { size?: number }) {
  return (
    <img
      src="/apice-logo.png"
      alt=""
      aria-hidden="true"
      width={(size * 88) / 56}
      height={size}
      className="object-contain"
    />
  );
}
