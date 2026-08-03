// Catálogo de secciones. La información se lee directamente de los MD de ../informacion
// Agrupados en 4 grupos para que el menú no agobie: Clases, Equipo, Guías, Endgame.

export const docs = [
  {
    slug: "personajes",
    title: "Personajes",
    group: "clases",
    icon: "⚔️",
    file: "01-Personajes.md",
    summary:
      "Las 8 clases jugables: Amazona, Asesina, Bárbaro, Nigromante, Paladín, Hechicera, Druida y el nuevo Warlock — con atributos y estilos de juego.",
    synonyms: ["clases", "heroes", "personajes", "las 8 clases", "god"],
  },
  {
    slug: "warlock",
    title: "Warlock",
    group: "clases",
    icon: "🔮",
    file: "02-Warlock.md",
    summary:
      "La nueva clase de la expansión Reign of the Warlock: árboles Demonio, Éldritch y Caos, Grimoires y builds de la Temporada 14.",
    keywords: ["brujo", "grimo", "demonio", "eldritch", "caos", "nueva clase"],
  },
  {
    slug: "runas",
    title: "Runas",
    group: "equipo",
    icon: "🜁",
    file: "03-Runas.md",
    summary:
      "Las 33 runas (El → Zod) con sus efectos en armas, armaduras y yelmos, y dónde conseguirlas.",
    keywords: ["rune", "sockets", "huecos", "zod", "ber", "jah"],
  },
  {
    slug: "palabras-runicas",
    title: "Palabras Rúnicas",
    group: "equipo",
    icon: "🜂",
    file: "04-PalabrasRunicas.md",
    summary:
      "Todas las runewords: recetas, bases y afijos, incluidas las 5 nuevas de Reign of the Warlock (Authority, Coven, Void, Vigilance, Ritual).",
    keywords: ["runewords", "runas combinadas", "recetas", "runas de palabra"],
  },
  {
    slug: "bases",
    title: "Bases",
    group: "equipo",
    icon: "🛡️",
    file: "05-Bases.md",
    summary:
      "Bases de armas y armaduras por tipo y nivel, y los nuevos Grimoires del Warlock.",
    keywords: ["base", "socket", "griso", "armas", "armaduras"],
  },
  {
    slug: "items-unicos",
    title: "Ítems Únicos",
    group: "equipo",
    icon: "💎",
    file: "06-ItemsUnicos.md",
    summary:
      "Objetos únicos dorados: clásicos imprescindibles y los nuevos de la era Reign (Dreadfang, Entropy Locket, Grimoires...).",
    keywords: ["unicos", "objetos dorados", "únicos", "shako", "soj"],
  },
  {
    slug: "conjuntos",
    title: "Conjuntos",
    group: "equipo",
    icon: "🧩",
    file: "07-Conjuntos.md",
    summary:
      "Set items verdes: bonificaciones parciales y completas de los conjuntos de cada clase.",
    keywords: ["set", "sets", "verdes", "bonuse"],
  },
  {
    slug: "gemas-joyas",
    title: "Gemas, Joyas y Encantos",
    group: "equipo",
    icon: "🪨",
    file: "10-GemasJoyasYAmuletos.md",
    summary:
      "Gemas, joyas, amuletos, anillos y charms: los rellenos del inventario que dan resistencias y daño.",
    keywords: ["gems", "jewels", "amuletos", "anillos", "charms", "encantos"],
  },
  {
    slug: "mercenarios",
    title: "Mercenarios",
    group: "guia",
    icon: "🗡️",
    file: "08-Mercenarios.md",
    summary:
      "Cómo contratar y equipar mercenarios: auras del Acto 2, equipo y mejores combos.",
    keywords: ["mercenario", "hireling", "guardia", "arquera"],
  },
  {
    slug: "cubo-horadrico",
    title: "Cubo Horádrico",
    group: "guia",
    icon: "🎲",
    file: "09-CuboHoradrico.md",
    summary:
      "Todas las recetas de transmutación, crafteo y el Cubo para el endgame (Sunder, Colossales).",
    keywords: ["horadric", "craft", "crafteo", "recetas", "transmutar"],
  },
  {
    slug: "actos",
    title: "Actos y Dificultades",
    group: "guia",
    icon: "🗺️",
    file: "11-ActosDificultades.md",
    summary:
      "Los 5 actos de la carnefría, sus jefes, dificultad Normal/Pesadilla/Infierno y las mejores zonas.",
    keywords: ["actos", "dificultades", "jefes", "mazmorras", "faureas", "misiones"],
  },
  {
    slug: "endgame",
    title: "Endgame",
    group: "endgame",
    icon: "🔥",
    file: "12-Endgame.md",
    summary:
      "Terror Zones, Heralds of Terror, Sunder Charms, Worldstone Shards y los Colossal Ancients.",
    keywords: ["terror zones", "heralds", "sunder charms", "colossal ancients", "worldstone"],
  },
]

export const groups = [
  { id: "clases", label: "Clases", blurb: "Quién juega" },
  { id: "equipo", label: "Equipo", blurb: "Qué equipas" },
  { id: "guia", label: "Guía", blurb: "Cómo se juega" },
  { id: "endgame", label: "Endgame", blurb: "Qué hay al final" },
]

export function bySlug(slug) {
  return docs.find((d) => d.slug === slug)
}

// Orden de lectura para navegación anterior/siguiente
export const readingOrder = docs.map((d) => d.slug)