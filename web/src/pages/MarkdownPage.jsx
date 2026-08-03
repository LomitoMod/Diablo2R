import { useMemo } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Link, useParams, Navigate } from "react-router-dom"
import { docs, groups, readingOrder, bySlug } from "../data/docs"
import { content } from "../data/content"
import EmberField from "../components/EmberField"

function splitBody(md) {
  const lines = md.split("\n")
  let i = 0
  while (i < lines.length && !lines[i].startsWith("# ")) i++
  return lines.slice(i + 1).join("\n")
}

function extractHeadings(md) {
  const out = []
  for (const line of md.split("\n")) {
    const m = line.match(/^(#{2,3})\s+(.+)/)
    if (!m) continue
    const level = m[1].length
    const text = m[2].replace(/[#*`>]/g, "").trim()
    const id = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
    out.push({ level, text, id })
  }
  return out
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

// Extrae texto plano de los children de react-markdown (recursivo).
function nodeToText(node) {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(nodeToText).join("")
  if (node && typeof node === "object" && node.props) return nodeToText(node.props.children)
  return ""
}

export default function MarkdownPage() {
  const { slug } = useParams()
  const doc = bySlug(slug)
  const raw = content[slug]
  const bodyMd = useMemo(() => (raw ? splitBody(raw) : ""), [raw])

  const headings = useMemo(() => (raw ? extractHeadings(raw) : []), [raw])

  const group = groups.find((g) => g.id === doc?.group)
  const idx = readingOrder.indexOf(slug)
  const prevDoc = idx > 0 ? bySlug(readingOrder[idx - 1]) : null
  const nextDoc = idx < readingOrder.length - 1 ? bySlug(readingOrder[idx + 1]) : null
  const related = docs.filter((d) => d.group === doc?.group && d.slug !== slug).slice(0, 3)

  if (!doc || !raw) return <Navigate to="/" replace />

  return (
    <div className="relative">
      <EmberField count={8} travel="20vh" className="opacity-50" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* migas de pan */}
        <nav aria-label="Migas de pan" className="text-xs text-ghost mb-6 flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-gold-light transition-colors">
            Inicio
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-faded">{group?.label}</span>
          <span aria-hidden="true">/</span>
          <span className="text-gold-light">{doc.title}</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl drop-shadow-[0_0_18px_rgba(255,90,20,0.5)]">{doc.icon}</span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-blaze mb-1">{group?.label}</p>
              <h1 className="font-display text-3xl md:text-5xl font-black text-fire text-shadow-fire">
                {doc.title}
              </h1>
            </div>
          </div>
          <p className="max-w-3xl text-faded text-base leading-relaxed">{doc.summary}</p>
          <div className="fire-line mt-6" />
        </header>

        <div className="grid lg:grid-cols-[240px_1fr] gap-8">
          {/* TOC */}
          {headings.length > 0 && (
            <aside className="lg:sticky lg:top-24 lg:self-start hidden lg:block">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-3">
                En esta página
              </p>
              <nav className="border-l border-gold/20">
                {headings.map((h) => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    className={`block py-1.5 pl-4 border-l-2 -ml-px text-[13px] transition-colors ${
                      h.level === 3 ? "pl-7 text-faded/80" : "text-smoke"
                    } hover:text-gold-light hover:border-gold/60`}
                  >
                    {h.text}
                  </a>
                ))}
              </nav>
              <div className="mt-6">
                <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-2">
                  En esta sección
                </p>
                <div className="flex flex-col gap-1">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/${r.slug}`}
                      className="text-sm text-faded hover:text-gold-light transition-colors"
                    >
                      {r.icon} {r.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          )}

          {/* contenido */}
          <article className="md-body min-w-0">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => <h2 id={slugify(nodeToText(children))}>{children}</h2>,
                h3: ({ children }) => <h3 id={slugify(nodeToText(children))}>{children}</h3>,
                a: (props) => <a {...props} target={props.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" />,
              }}
            >
              {bodyMd}
            </ReactMarkdown>
          </article>
        </div>

        {/* navegación anterior/siguiente */}
        <div className="mt-14 flex flex-col sm:flex-row gap-3">
          {prevDoc ? (
            <Link
              to={`/${prevDoc.slug}`}
              className="d2-card flex-1 rounded-xl px-5 py-4 group"
            >
              <span className="text-[11px] uppercase tracking-widest text-ghost">← Anterior</span>
              <span className="block font-display text-gold-light group-hover:text-fire transition-colors">
                {prevDoc.icon} {prevDoc.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextDoc ? (
            <Link
              to={`/${nextDoc.slug}`}
              className="d2-card flex-1 rounded-xl px-5 py-4 group text-right"
            >
              <span className="text-[11px] uppercase tracking-widest text-ghost">Siguiente →</span>
              <span className="block font-display text-gold-light group-hover:text-fire transition-colors">
                {nextDoc.title} {nextDoc.icon}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  )
}