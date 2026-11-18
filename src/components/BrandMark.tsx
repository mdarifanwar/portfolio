export function BrandMark() {
  return (
    <a href="#top" className="brand-mark" aria-label="Md Arif Ansari home">
      <svg viewBox="0 0 100 100" role="img" aria-label="Modern MA Monogram Logo">
        <defs>
          <linearGradient id="bm-ma-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="50%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
          <linearGradient id="bm-accent-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#99f6e4" />
            <stop offset="100%" stopColor="#5eead4" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill="#090c10" />
        <rect width="98" height="98" x="1" y="1" rx="21" fill="none" stroke="rgba(94, 234, 212, 0.3)" strokeWidth="1.5" />
        <path d="M 18 80 L 18 24 L 30 24 L 46 54 L 38 67 L 28 48 L 28 80 Z" fill="url(#bm-ma-grad)" />
        <path d="M 82 80 L 82 24 L 70 24 L 54 54 L 62 67 L 72 48 L 72 80 Z" fill="url(#bm-ma-grad)" />
        <polygon points="50,16 34,68 44,68 50,46 56,46 62,68 72,68" fill="url(#bm-ma-grad)" />
        <rect x="33" y="55" width="34" height="6" rx="3" fill="url(#bm-accent-grad)" />
      </svg>
    </a>
  );
}
