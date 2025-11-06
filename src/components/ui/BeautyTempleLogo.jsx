// components/brand/BeautyTempleLogo.jsx
export default function BeautyTempleLogo({
  size = 240, // overall size in px
  ringWidth = 60, // width of the gold ring
  blackFill = "#0F0F12", // inner circle color
  serif = "Georgia, 'Times New Roman', Times, serif",
}) {
  const viewBox = "0 0 1000 1000";
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      role="img"
      aria-label="Beauty Temple logo"
    >
      <defs>
        <linearGradient id="bt-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C6A65A" />
          <stop offset="25%" stopColor="#E8D18C" />
          <stop offset="50%" stopColor="#D1B464" />
          <stop offset="75%" stopColor="#F2E4AE" />
          <stop offset="100%" stopColor="#B6903F" />
        </linearGradient>
        <radialGradient id="bt-vignette" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#111113" stopOpacity="0" />
          <stop offset="70%" stopColor="#111113" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#111113" stopOpacity="0.18" />
        </radialGradient>
      </defs>

      {/* outer ring */}
      <circle
        cx="500"
        cy="500"
        r={460}
        fill="none"
        stroke="url(#bt-gold)"
        strokeWidth={ringWidth}
      />

      {/* inner circle */}
      <circle cx="500" cy="500" r="430" fill={blackFill} />
      <circle cx="500" cy="500" r="430" fill="url(#bt-vignette)" />

      {/* BT */}
      <text
        x="500"
        y="415"
        textAnchor="middle"
        fill="url(#bt-gold)"
        fontFamily={serif}
        fontWeight="700"
        fontSize="260"
      >
        BT
      </text>

      {/* BEAUTY TEMPLE */}
      <text
        x="500"
        y="560"
        textAnchor="middle"
        fill="url(#bt-gold)"
        fontFamily={serif}
        fontWeight="700"
        fontSize="82"
        letterSpacing="6"
      >
        BEAUTY TEMPLE
      </text>
    </svg>
  );
}
