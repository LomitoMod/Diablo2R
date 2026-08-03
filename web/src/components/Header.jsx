import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import Logo from "./Logo"
import SearchModal from "./SearchModal"
import { groups, docs } from "../data/docs"

const groupDocIds = {
  clases: ["personajes", "warlock"],
  equipo: ["runas", "palabras-runicas", "bases", "items-unicos", "conjuntos", "gemas-joyas"],
  guia: ["mercenarios", "cubo-horadrico", "actos"],
  endgame: ["endgame"],
}

function Dropdown({ label, ids }) {
  const items = ids.map((id) => docs.find((d) => d.slug === id)).filter(Boolean)
  return (
    <div className="relative group">
      <button className="fire-btn px-3 py-2 rounded-md text-sm font-medium text-smoke/90 hover:text-gold-light transition-colors">
        {label}
        <span className="ml-1 text-[10px] opacity-60">▾</span>
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
        <div className="bg-coal/95 backdrop-blur border border-gold/25 rounded-xl shadow-[0_18px_50px_-12px_rgba(0,0,0,0.9)] py-2 min-w-[200px]">
          {items.map((d) => (
            <NavLink
              key={d.slug}
              to={`/${d.slug}`}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-gold-light bg-gold/10"
                    : "text-smoke/80 hover:text-gold-light hover:bg-gold/10"
                }`
              }
            >
              <span className="mr-2">{d.icon}</span>
              {d.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Header({ onOpenSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-abyss/85 backdrop-blur-md border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          {/* Izquierda (escritorio) */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `fire-btn px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "text-gold-light" : "text-smoke/90 hover:text-gold-light"
                }`
              }
            >
              Inicio
            </NavLink>
            <Dropdown label="Clases" ids={groupDocIds.clases} />
            <Dropdown label="Equipo" ids={groupDocIds.equipo} />
          </nav>

          {/* Logo centrado superpuesto al menú */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
            <Link to="/" aria-label="Diablo II Resurrected — inicio" className="block hover:opacity-90 transition-opacity">
              <Logo compact />
            </Link>
          </div>

          {/* Derecha (escritorio) */}
          <nav className="hidden md:flex items-center gap-1">
            <Dropdown label="Guía" ids={groupDocIds.guia} />
            <Dropdown label="Endgame" ids={groupDocIds.endgame} />
            <button
              onClick={onOpenSearch}
              aria-label="Buscar"
              className="fire-btn ml-1 px-3 py-2 rounded-md text-sm text-smoke/90 hover:text-gold-light transition-colors"
            >
              <span className="text-base leading-none">⌕</span>
            </button>
          </nav>

          {/* Botón móvil */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden fire-btn px-3 py-2 rounded-md text-gold-light text-xl leading-none"
            aria-label="Menú"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-4 flex flex-col gap-1">
          <NavLink to="/" end onClick={() => setMobileOpen(false)} className="py-2.5 text-sm text-smoke/90 border-b border-white/5">
            Inicio
          </NavLink>
          {docs.map((d) => (
            <NavLink
              key={d.slug}
              to={`/${d.slug}`}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `py-2.5 text-sm border-b border-white/5 ${
                  isActive ? "text-gold-light" : "text-smoke/80"
                }`
              }
            >
              <span className="mr-2">{d.icon}</span>
              {d.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}