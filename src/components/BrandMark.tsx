export function BrandMark() {
  return (
    <a href="#top" className="brand-mark" aria-label="Arif Ansari home">
      <svg viewBox="0 0 100 100" role="img" aria-label="Abstract A logo">
        <defs>
          <linearGradient id="a-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.52" stopColor="#dce5e4" />
            <stop offset="1" stopColor="#70c9c0" />
          </linearGradient>
          <linearGradient id="a-ribbon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#42a99f" />
            <stop offset="1" stopColor="#8ce3d9" />
          </linearGradient>
        </defs>
        <path d="M18 82 48 13 77 82H60L48 51 35 82Z" fill="url(#a-metal)" />
        <path d="M8 78C30 59 53 52 91 47 68 56 42 68 8 78Z" fill="url(#a-ribbon)" />
        <path d="M43 65 58 62" stroke="#0d1117" strokeWidth="3" opacity=".85" />
      </svg>
    </a>
  );
}