// Brasas animadas de fondo (partículas que suben)
export default function EmberField({ count = 26, travel = "48vh", className = "" }) {
  const embers = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 37 + 9) % 100}%`,
    size: 3 + ((i * 13) % 7),
    delay: `${(i * 143) % 7000 / 1000}s`,
    duration: `${5.5 + ((i * 29) % 50) / 10}s`,
    op: 0.45 + ((i * 7) % 40) / 100,
    sway: `${((i * 53) % 60) - 30}px`,
  }))

  return (
    <div className={`ember-field ${className}`} aria-hidden="true">
      {embers.map((e) => (
        <span
          key={e.id}
          className="ember"
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            animationDuration: e.duration,
            animationDelay: e.delay,
            "--op": e.op,
            "--travel": travel,
            "--sway": e.sway,
          }}
        />
      ))}
    </div>
  )
}