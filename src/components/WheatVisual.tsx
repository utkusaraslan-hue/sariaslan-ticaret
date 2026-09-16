const STALK_X = [6, 14, 22, 30, 38, 46, 54, 62, 70, 78, 86, 94];

export default function WheatVisual() {
  return (
    <svg
      viewBox="0 0 100 75"
      preserveAspectRatio="xMidYMax slice"
      className="h-full w-full"
      role="img"
      aria-label="Buğday tarlası illüstrasyonu"
    >
      <defs>
        <radialGradient id="sky" cx="72%" cy="28%" r="75%">
          <stop offset="0%" stopColor="#e4c869" />
          <stop offset="45%" stopColor="#9a6f2a" />
          <stop offset="100%" stopColor="#171410" />
        </radialGradient>
        <linearGradient id="stalk" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#171410" />
          <stop offset="100%" stopColor="#c9a339" />
        </linearGradient>
      </defs>

      <rect width="100" height="75" fill="url(#sky)" />
      <circle cx="72" cy="21" r="10" fill="#f5f1e6" opacity="0.9" />

      {STALK_X.map((x, i) => {
        const height = 30 + ((i * 7) % 14);
        const sway = i % 2 === 0 ? 2 : -2;
        return (
          <g key={x} transform={`translate(${x} 75)`}>
            <path
              d={`M0 0 Q ${sway} ${-height / 2} 0 ${-height}`}
              stroke="url(#stalk)"
              strokeWidth="0.8"
              fill="none"
            />
            {[0, 1, 2, 3].map((n) => (
              <ellipse
                key={n}
                cx={sway * (n / 4)}
                cy={-height + n * 3.4}
                rx="1.6"
                ry="0.8"
                fill="#e4c869"
                opacity={0.9 - n * 0.15}
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}
