import EmberField from "./EmberField"

// Banner animado del héroe: cielo infernal con sigilo rúnico giratorio,
// lenguas de fuego en la base y brasas ascendentes.
export default function FireHero() {
  const flames = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${(i * 7.3 + 2) % 100}%`,
    height: 60 + ((i * 23) % 90),
    delay: `${(i * 137) % 2200 / 1000}s`,
    duration: `${1.1 + ((i * 17) % 20) / 20}s`,
  }))

  return (
    <section className="relative overflow-hidden">
      {/* fondo: resplandor infernal */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 110%, rgba(255,80,15,0.35), transparent 55%), radial-gradient(90% 60% at 50% 0%, rgba(255,120,40,0.12), transparent 60%), var(--color-coal)",
        }}
      />
      <div className="absolute inset-0 bg-tex-rune opacity-40" />

      <EmberField count={30} travel="46vh" />

      {/* silueta de asentamiento infernal */}
      <svg
        className="absolute left-0 right-0 bottom-16 text-black/40"
        height="120"
        width="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 120V80l40-15 30 12 45-30 38 18 50-25 42 14 55-30 40 22 38-12 48 20 60-28 55 15 45-20 60 18 50-28 44 16 60-22 48 20 55-30 35 14 80-24 50 18 60-32 45 16 60-22 42 18 48-20 38 18 40-14 60 22V120H0Z"
        />
      </svg>

      {/* lenguas de llama */}
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none">
        {flames.map((f) => (
          <div
            key={f.id}
            className="flame"
            style={{
              left: f.left,
              height: f.height,
              animationDuration: f.duration,
              animationDelay: f.delay,
            }}
          />
        ))}
      </div>

      {/* contenido central */}
      <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32 text-center flex flex-col items-center">
        {/* sigilo rúnico giratorio */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6">
          <svg viewBox="0 0 200 200" className="absolute inset-0 sigil-spin w-full h-full opacity-80" aria-hidden="true">
            <g stroke="#ffab3d" strokeWidth="1.5" fill="none" opacity="0.7">
              <circle cx="100" cy="100" r="92" strokeDasharray="4 7" />
              <circle cx="100" cy="100" r="70" strokeDasharray="20 12" opacity="0.6" />
              <path d="M100 26 L118 86 L182 86 L129 122 L148 184 L100 150 L52 184 L71 122 L18 86 L82 86 Z" />
            </g>
          </svg>
          <svg viewBox="0 0 200 200" className="absolute inset-0 sigil-spin-rev w-full h-full opacity-40" aria-hidden="true">
            <g stroke="#ff6b1f" strokeWidth="8" fill="none" strokeLinecap="round">
              <line x1="100" y1="12" x2="100" y2="34" />
              <line x1="100" y1="166" x2="100" y2="188" />
              <line x1="12" y1="100" x2="40" y2="100" />
              <line x1="160" y1="100" x2="188" y2="100" />
              <line x1="38" y1="38" x2="58" y2="58" />
              <line x1="142" y1="142" x2="162" y2="162" />
              <line x1="38" y1="162" x2="58" y2="142" />
              <line x1="142" y1="58" x2="162" y2="38" />
            </g>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl md:text-7xl drop-shadow-[0_0_30px_rgba(255,90,20,0.8)]">🔥</span>
          </div>
        </div>

        <p className="text-xs md:text-sm uppercase tracking-[0.6em] text-blaze mb-3">
          Temporada 14 · v3.2.92777
        </p>
        <h1 className="font-display text-4xl md:text-7xl font-black">
          <span className="text-fire text-shadow-fire">EL SANTUARIO</span>
        </h1>
        <p className="font-display text-gold mt-3 text-lg md:text-2xl tracking-[0.2em] uppercase">
          Guía del mundo de Diablo II: Resurrected
        </p>
        <p className="mt-4 max-w-xl text-faded text-sm md:text-base leading-relaxed">
          Clases, runas, palabras rúnicas, bases, mercenarios y el endgame de la expansión Reign of the
          Warlock. Todo lo que buscas, a tres clics.
        </p>
      </div>
    </section>
  )
}