// Logotipo estilizado "Diablo II: Resurrected" para el menú y el héroe.
// Ilustración SVG original inspirada en el arte del juego (llama + anillo rúnico).
export default function Logo({ compact = false, className = "" }) {
  return (
    <div className={`flex flex-col items-center select-none leading-none ${className}`}>
      <svg
        viewBox="0 0 64 64"
        width="56"
        height="24"
        className={compact ? "w-9 h-9" : "w-12 h-12"}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lgGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe9b0" />
            <stop offset="55%" stopColor="#e0b23c" />
            <stop offset="100%" stopColor="#8a6d1f" />
          </linearGradient>
          <linearGradient id="lgFlame" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe08a" />
            <stop offset="50%" stopColor="#ff8a2a" />
            <stop offset="100%" stopColor="#d4201a" />
          </linearGradient>
        </defs>
        {/* anillo rúnico */}
        <circle cx="32" cy="32" r="27" fill="none" stroke="url(#lgGold)" strokeWidth="1.6" opacity="0.9" />
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i * 30 * Math.PI) / 180
          const x1 = 32 + Math.cos(a) * 27
          const y1 = 32 + Math.sin(a) * 27
          const x2 = 32 + Math.cos(a) * 24
          const y2 = 32 + Math.sin(a) * 24
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#lgGold)" strokeWidth="1.4" />
        })}
        {/* llama central */}
        <path
          d="M32 13c1 8-6 10-6 18a12 12 0 0 0 24 0c0-8-7-10-6-18-2 5-4 6-6 5-2 1-4 0-6-5z"
          fill="none"
          stroke="url(#lgFlame)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M32 41c-7 0-10-4-10-9 0-3 2-5 4-6 1-2 2-4 4-5 .5 3 2 4 4 5 2 1 3 3 3 6 0 5-4 9-5 9z"
          fill="url(#lgFlame)"
          opacity="0.75"
        />
      </svg>
      <div className={`font-display tracking-[0.28em] ${compact ? "text-sm" : "text-lg"}`}>
        <span className="text-fire text-shadow-fire font-black">DIABLO&nbsp;II</span>
      </div>
      <div
        className={`font-sans font-semibold tracking-[0.5em] pl-2 ${compact ? "text-[9px]" : "text-[11px]"} text-faded`}
      >
        RESURRECTED
      </div>
    </div>
  )
}