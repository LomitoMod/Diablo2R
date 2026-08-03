// Motor de búsqueda: sinónimos, tolerancia a typos, ranking por relevancia.
// Aplica las reglas de la skill ux-search (título > resumen > cuerpo, sin-resultados).
import { content } from "./content"
import { docs } from "./docs"

// Normaliza: minúsculas, sin acentos, solo letras y numeros.
function norm(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

// Glosario de sinonimos de la skill ux-search.
// Lo que escribe el usuario -> el termino que usa la pagina.
const SYNONYMS = {
  runeword: "palabras runicas",
  runewords: "palabras runicas",
  runas: "runas palabras runicas runes",
  mf: "magic find mejor chance",
  katar: "garra garras katars",
  claw: "garra garras katars",
  tier: "nivel tier",
  grimoire: "grimoires tomos de conjuracion",
  grimoires: "grimoires tomos de conjuracion",
  sunder: "sunder charms encantos de rompimiento",
  colossal: "colossal ancients antiguos colosales",
  worldstone: "worldstone shards fragmentos de la piedra",
  herald: "heralds of terror heraldos",
  endgame: "endgame terror zones heralds sunder charms",
  "magic find": "magic find mejor chance mf",
}

// Vocabulario para la sugerencia de errores de tipeo.
const VOCAB = []
docs.forEach((d) => {
  const words = norm(`${d.title} ${d.summary} ${(d.keywords || []).join(" ")}`).split(" ")
  words.forEach((w) => {
    if (w.length > 2 && !VOCAB.includes(w)) VOCAB.push(w)
  })
})
Object.keys(SYNONYMS).forEach((k) => {
  norm(k)
    .split(" ")
    .forEach((w) => {
      if (w.length > 2 && !VOCAB.includes(w)) VOCAB.push(w)
    })
})

function stripTitle(md) {
  const lines = md.split("\n")
  let i = 0
  while (i < lines.length && !lines[i].startsWith("# ")) i++
  return lines.slice(i + 1).join("\n")
}

// Indice con texto plano por documento.
export const searchIndex = docs.map((d) => {
  const raw = content[d.slug] || ""
  const body = stripTitle(raw)
  return {
    slug: d.slug,
    title: d.title,
    summary: d.summary,
    group: d.group,
    icon: d.icon,
    textNorm: norm(`${d.title} ${d.summary} ${body}`),
    bodyNorm: norm(body),
  }
})

function countTerms(text, tokens) {
  let n = 0
  tokens.forEach((t) => {
    n += text.split(t).length - 1
  })
  return n
}

function scoreDoc(doc, tokens) {
  let score = 0
  const titleNorm = norm(doc.title)
  const sumNorm = norm(doc.summary)
  tokens.forEach((t) => {
    if (titleNorm.includes(t)) score += 8
    if (sumNorm.includes(t)) score += 4
    score += countTerms(doc.bodyNorm, [t])
  })
  return score
}

// Mayor cercania por Levenshtein (distancia <= 2) para "?Quisiste decir X?"
export function sugerirTermino(texto) {
  const dirty = norm(texto)
  if (!dirty) return null
  const tokens = dirty.split(" ").filter((t) => t.length > 3)
  for (const t of tokens) {
    let best = null
    for (const v of VOCAB) {
      const d = levenshtein(t, v)
      if (d <= 2 && d > 0) {
        if (!best || d < best.d) best = { word: v, d }
      }
    }
    if (best) return best.word
  }
  return null
}

function levenshtein(a, b) {
  const m = a.length
  const n = b.length
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1))
  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const costo = a[i - 1] === b[j - 1] ? 0 : 1
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + costo)
    }
  }
  return dp[m][n]
}

// Busqueda principal. Devuelve: { hits, tokens, synonymsUsed, noneg }
export function buscar(query) {
  const q = norm(query)
  if (!q) return { hits: [], tokens: [], synonymsUsed: false, results: 0 }

  const rawTokens = [...new Set(q.split(" "))].filter(Boolean)
  const synonymsUsed = rawTokens.some((t) => SYNONYMS[t])
  // Expandir sinonimos: anadimos un token alternativo por cada sinonimo encontrado.
  const tokens = []
  rawTokens.forEach((t) => {
    tokens.push(t)
    const syn = SYNONYMS[t]
    if (syn) {
      norm(syn).split(" ").forEach((w) => {
        if (w && !tokens.includes(w)) tokens.push(w)
      })
    }
  })

  const hits = []
  searchIndex.forEach((doc) => {
    const score = scoreDoc(doc, tokens)
    if (score > 0) hits.push({ ...doc, score })
  })
  hits.sort((a, b) => b.score - a.score)

  const suggestion = hits.length === 0 ? sugerirTermino(query) : null
  return {
    hits: hits.slice(0, 8),
    tokens,
    synonymsUsed,
    results: hits.length,
    suggestion,
    title: hits[0] ? hits[0].title : null,
  }
}