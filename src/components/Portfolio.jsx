import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { portfolio, portfolioCategories } from '@/data/site.js'
import Placeholder from './Placeholder.jsx'

const INITIAL = 8

function Tile({ item }) {
  const media = (
    <div className="tile__media">
      {item.img
        ? <img src={item.img} alt={item.alt || item.title} loading="lazy" width="800" height="800" />
        : <Placeholder label={`THUMBNAIL — ${item.title}`} ratio="1 / 1" />}
      {item.featured && <span className="tile__badge">Case study</span>}
    </div>
  )
  const text = (
    <div>
      <h3 className="tile__title">{item.title}</h3>
      <p className="tile__cat">{item.cat}</p>
    </div>
  )
  return item.to
    ? <Link to={item.to} className="tile">{media}{text}</Link>
    : <a href={item.href} className="tile">{media}{text}</a>
}

/** Featured case studies first, then the archive — one grid, filterable by category. */
export default function Portfolio() {
  const [cat, setCat] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const counts = useMemo(() => Object.fromEntries(
    portfolioCategories.map((c) => [c, c === 'All' ? portfolio.length : portfolio.filter((p) => p.cat === c).length]),
  ), [])
  const filtered = cat === 'All' ? portfolio : portfolio.filter((p) => p.cat === cat)
  const visible = showAll ? filtered : filtered.slice(0, INITIAL)

  return (
    <section id="work" className="section" aria-labelledby="portfolio-title">
      <div className="wrap">
        <div className="portfolio__head">
          <div className="portfolio__intro">
            <p className="eyebrow">01 — Portfolio</p>
            <h2 id="portfolio-title" className="h2">Portfolio</h2>
            <p className="muted">Recent case studies first, then 18 years of range across healthcare software, branding, publishing, print and fine art.</p>
          </div>
          <div role="group" aria-label="Filter portfolio" className="filters">
            {portfolioCategories.map((c) => (
              <button
                key={c}
                type="button"
                className={`chip ${c === cat ? 'is-on' : ''}`}
                aria-pressed={c === cat}
                onClick={() => { setCat(c); setShowAll(false) }}
              >
                {c} <span className="chip__count">{counts[c]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="tiles">
          {visible.map((item) => <Tile key={item.title} item={item} />)}
        </div>

        {!showAll && filtered.length > INITIAL && (
          <div className="portfolio__more">
            <button type="button" className="btn-outline" onClick={() => setShowAll(true)}>
              Show all {filtered.length} projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
