import { lazy, Suspense, useEffect, useState } from "react"
import { HashRouter, Routes, Route, useLocation, Link } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SearchModal from "./components/SearchModal"
import { docs } from "./data/docs"

const Home = lazy(() => import("./pages/Home"))
const MarkdownPage = lazy(() => import("./pages/MarkdownPage"))

// Scroll al inicio al cambiar de página; respeta anclas (#).
function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname, location.hash])
  return null
}

// Atajo Ctrl/Cmd+K global + teclas simples
function useGlobalSearch(onOpen) {
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        onOpen()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onOpen])
}

function Shell() {
  const [searchOpen, setSearchOpen] = useState(false)
  const openSearch = () => setSearchOpen(true)
  useGlobalSearch(openSearch)

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header onOpenSearch={openSearch} />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="min-h-[50vh] flex items-center justify-center">
              <span className="text-3xl animate-pulse">🔥</span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            {docs.map((d) => (
              <Route key={d.slug} path={`/${d.slug}`} element={<MarkdownPage />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}

function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-6 py-28 text-center">
      <p className="text-6xl mb-4">🔥</p>
      <h1 className="font-display text-3xl text-fire mb-3">Este sendero se perdió</h1>
      <p className="text-faded mb-8">La página que buscas no existe o fue arrasada por las hordas del Caos.</p>
      <Link
        to="/"
        className="fire-btn inline-block px-6 py-3 rounded-xl border border-gold/50 bg-gold/10 text-gold-light font-medium transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  )
}