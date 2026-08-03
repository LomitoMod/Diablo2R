import { Link } from "react-router-dom"
import FireHero from "../components/FireHero"
import EmberField from "../components/EmberField"
import { docs, groups } from "../data/docs"

function GroupSection({ group }) {
  const items = docs.filter((d) => d.group === group.id)
  return (
    <section className="scroll-mt-24">
      <div className="flex items-baseline gap-3 mb-5">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-gold-light">{group.label}</h2>
        <span className="text-xs uppercase tracking-[0.3em] text-ghost">{group.blurb}</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((d) => (
          <Link
            key={d.slug}
            to={`/${d.slug}`}
            className="d2-card group rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {d.icon}
              </span>
              <h3 className="font-display text-lg font-bold text-smoke group-hover:text-fire transition-colors">
                {d.title}
              </h3>
            </div>
            <p className="text-sm text-faded leading-relaxed flex-1">{d.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gold/80 group-hover:text-gold-light transition-colors">
              Abrir <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="relative">
      <EmberField count={10} travel="24vh" className="opacity-60" />

      <FireHero />

      <main className="relative max-w-6xl mx-auto px-6 pb-20 pt-2 space-y-14">
        {/* Atajo rápido de búsqueda (objetivo principal de la portada) */}
        <section className="text-center -mt-2">
          <p className="text-faded text-sm max-w-2xl mx-auto">
            ¿No sabes por dónde empezar? Escribe lo que buscas: te llevaremos directo a la sección
            correcta.
          </p>
        </section>

        <div className="fire-line" />

        {/* galería de clases con arte oficial */}
        <section className="scroll-mt-24">
          <div className="flex items-baseline gap-3 mb-5">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gold-light">Arte oficial</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-ghost">Renders de BlizzConline</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {["Amazon", "Asesina", "Bárbaro", "Nigromante", "Paladín", "Hechicera", "Druida"].map(
              (name, i) => {
                const file = {
                  Amazon: "amazon",
                  Asesina: "asesina",
                  Bárbaro: "barbaro",
                  Nigromante: "nigromante",
                  Paladín: "paladin",
                  Hechicera: "hechicera",
                  Druida: "druida",
                }[name]
                return (
                  <figure key={name} className="d2-card group rounded-xl overflow-hidden">
                    <img
                      src={`/img/${file}.webp`}
                      alt={`Arte oficial de la clase ${name}`}
                      className="w-full aspect-video object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <figcaption className="text-center text-[11px] font-display tracking-widest text-gold-light py-2">
                      {name}
                    </figcaption>
                  </figure>
                )
              }
            )}
          </div>
        </section>

        {groups.map((g) => (
          <GroupSection key={g.id} group={g} />
        ))}
      </main>
    </div>
  )
}