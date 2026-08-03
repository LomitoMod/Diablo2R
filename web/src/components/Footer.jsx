import { Link } from "react-router-dom"
import Logo from "./Logo"
import { docs, groups } from "../data/docs"

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 bg-coal/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <Logo compact />
            <p className="mt-4 text-xs text-faded leading-relaxed max-w-xs">
              Guía de referencia no oficial del mundo de Sanctuary: clases, equipamiento y endgame
              de Diablo II: Resurrected.
            </p>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-3">Secciones</p>
            {groups.map((g) => (
              <div key={g.id} className="mb-2">
                <p className="text-[11px] uppercase tracking-widest text-ghost">{g.label}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                  {docs
                    .filter((d) => d.group === g.id)
                    .map((d) => (
                      <Link
                        key={d.slug}
                        to={`/${d.slug}`}
                        className="text-xs text-faded hover:text-gold-light transition-colors"
                      >
                        {d.title}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-3">Información</p>
            <ul className="text-xs text-faded space-y-2">
              <li>Versión del juego: 3.2.92777</li>
              <li>Temporada 14 · Reign of the Warlock</li>
              <li>Web creada con React + Tailwind CSS</li>
              <li>Datos extraídos de la carpeta <code className="text-gold/80">web/informacion/</code></li>
              <li>Imágenes del press kit oficial de Blizzard (blizzard.gamespress.com)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-ghost">
            Diablo II: Resurrected y todos sus contenidos, marcas y logotipos relacionados son
            propiedad de Blizzard Entertainment, Inc. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-xs text-faded">
            Sitio no oficial creado con fines informativos por{" "}
            <span className="text-fire font-semibold">lomito</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}