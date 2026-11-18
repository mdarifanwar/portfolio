export function BrandMark() {
  return (
    <a href="#top" className="brand-mark" aria-label="Md Arif Ansari home">
      <svg viewBox="0 0 100 100" role="img" aria-label="MA Pure Black Circle White Text Logo">
        <circle cx="50" cy="50" r="50" fill="#000000" />
        <text
          x="50"
          y="52"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#ffffff"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          fontSize="46"
          fontWeight="400"
          letterSpacing="1px"
        >
          MA
        </text>
      </svg>
    </a>
  );
}
