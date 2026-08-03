import { useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { buscar } from "../data/search"
import { groups } from "../data/docs"

function highlightText(text, tokens, maxLen = 220) {
  const lower = text.toLowerCase()
  const first = []
  for (const t of tokens) {
    const idx = lower.indexOf(t)
    if (idx >= 0) first.push([idx, idx + t.length])
  }
  first.sort((a, b) => a[0] - b[0])
  let phrase = ""
  let prev = 0
  // recorta al fragmento con la primera coincidencia
  if (first.length) prev = Math.max(0, first[0][0] - 60)
  const slice = text.slice(prev, prev + maxLen)
  const sLower = slice.toLowerCase()
  const marks = []
  for (const t of tokens) {
    let from = 0
    while (from < slice.length) {
      const i = sLower.indexOf(t, from)
      if (i < 0) break
      marks.push([i, i + t.length])
      from = i + t.length
    }
  }
  marks.sort((a, b) => a[0] - b[0])
  let out = ""
  let last = 0
  for (const [s, e] of marks) {
    if (s < last) continue
    out += slice.slice(last, s)
    out += `<mark class="bg-gold/25 text-gold-light px-0.5 rounded">${slice.slice(s, e)}</mark>`
    last = e
  }
  out += slice.slice(last)
  if (prev > 0) out = "…" + out
  return out
}

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState("")
  const [activeGroup, setActiveGroup] = useState(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setQ("")
      setActiveGroup(null)
      setTimeout(() => inputRef.current?.focus(), 60)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  const result = useMemo(() => (q.trim() ? buscar(q) : { hits: [], results: 0 }), [q])
  const hits = activeGroup ? result.hits.filter((h) => h.group === activeGroup) : result.hits

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[90]" role="dialog" aria-modal="true" aria-label="Buscador">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-2xl mx-auto mt-[12vh] px-4">
        <div className="bg-coal/95 border border-gold/25 rounded-2xl shadow-[0_30px_90px_-20px_rgba(0,0,0,1)] overflow-hidden">
          <div className="flex items-center gap-3 px-4 border-b border-gold/15">
            <span className="text-gold-light text-xl leading-none">⌕</span>
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar: runas, palabras rúnicas, katar, MF, terror zones…"
              className="flex-1 bg-transparent py-4 text-base text-smoke placeholder:text-ghost focus:outline-none"
            />
            <kbd className="hidden sm:block text-[11px] text-faded border border-white/10 rounded px-2 py-0.5">ESC</kbd>
          </div>

          <div className="px-4 pt-3 flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveGroup(null)}
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                activeGroup === null ? "bg-gold/20 border-gold/50 text-gold-light" : "border-white/10 text-faded hover:text-smoke"
              }`}
            >
              Todos
            </button>
            {groups.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveGroup(activeGroup === g.id ? null : g.id)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  activeGroup === g.id ? "bg-gold/20 border-gold/50 text-gold-light" : "border-white/10 text-faded hover:text-smoke"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div className="max-h-[55vh] overflow-y-auto p-2">
            {!q.trim() && (
              <p className="text-faded text-sm px-4 py-8 text-center">
                Escribe para buscar en toda la guía. Ejemplos: <em>runeword</em>, <em>katar</em>, <em>mercenario</em>…
              </p>
            )}

            {q.trim() && result.results === 0 && (
              <div className="px-4 py-6">
                <p className="text-faded">No encontramos nada para <strong className="text-smoke">“{q}”</strong>.</p>
                {result.suggestion && (
                  <button
                    onClick={() => setQ(result.suggestion)}
                    className="mt-2 fire-btn inline-block text-sm text-gold-light border border-gold/40 rounded-lg px-3 py-1.5"
                  >
                    ¿Quisiste decir <strong>{result.suggestion}</strong>?
                  </button>
                )}
                <p className="mt-3 text-xs text-ghost">
                  Prueba con palabras más cortas, sin acentos, o revisa las categorías del menú.
                </p>
              </div>
            )}

            {result.synonymsUsed && (
              <p className="px-4 pt-1 text-[11px] text-ghost">
                Se usó el glosario de sinónimos: “{q}” se interpretó también como términos del juego.
              </p>
            )}

            {hits.map((h) => {
              const snippet = highlight(h.summary + " " + h.bodyNorm, result.tokens)
              return (
                <Link
                  key={h.slug}
                  to={`/${h.slug}`}
                  onClick={onClose}
                  className="block rounded-xl px-4 py-3 hover:bg-gold/10 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-display text-gold-light">
                      {h.icon} {h.title}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-ghost">
                      {groups.find((g) => g.id === h.group)?.label}
                    </span>
                  </div>
                  <p
                    className="text-sm text-faded mt-1 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: snippet }}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}