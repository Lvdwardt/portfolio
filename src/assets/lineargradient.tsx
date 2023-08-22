export default function Gradient() {
  return (
    <svg width="0" height="0" className="absolute">
      <linearGradient id="logo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="var(--secondary)" offset="0%" />
        <stop stopColor="var(--secondary)" offset="10%" />
        <stop stopColor="var(--logo)" offset="100%" />
      </linearGradient>
    </svg>
  );
}
