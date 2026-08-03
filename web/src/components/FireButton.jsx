import { useState } from "react"

// Botón con animación de fuego: resplandor al pasar el ratón y chispas al hacer clic.
export default function FireButton({
  children,
  className = "",
  onClick,
  as: Tag = "button",
  ...rest
}) {
  const [sparks, setSparks] = useState([])

  function handleClick(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const n = 8
    const next = Array.from({ length: n }, (_, i) => ({
      id: `${Date.now()}-${i}`,
      x: rect.width * (0.2 + Math.random() * 0.6),
      y: rect.height * (0.3 + Math.random() * 0.5),
      dx: `${(Math.random() * 60 - 30).toFixed(1)}px`,
      dy: `${-(30 + Math.random() * 60).toFixed(1)}px`,
    }))
    setSparks(next)
    setTimeout(() => setSparks([]), 750)
    if (onClick) onClick(e)
  }

  return (
    <Tag
      onClick={handleClick}
      className={`fire-btn ${className}`}
      {...rest}
    >
      {children}
      {sparks.map((s) => (
        <span
          key={s.id}
          className="ember-shot"
          style={{
            left: s.x,
            top: s.y,
            "--dx": s.dx,
            "--dy": s.dy,
          }}
        />
      ))}
    </Tag>
  )
}