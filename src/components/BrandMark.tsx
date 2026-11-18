export function BrandMark() {
  return (
    <a href="#top" className="brand-mark" aria-label="Md Arif Ansari home">
      <svg viewBox="0 0 100 100" role="img" aria-label="AM Circle Logo">
        <circle cx="50" cy="50" r="47" fill="#090c10" stroke="#2dd4bf" strokeWidth="3" />
        <text
          x="50"
          y="52"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#5eead4"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          fontSize="46"
          fontWeight="700"
          letterSpacing="1px"
        >
          AM
        </text>
      </svg>
    </a>
  );
}
