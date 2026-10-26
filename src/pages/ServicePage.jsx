import { Link, useParams } from 'react-router-dom'
import { person, services } from '@/data/site.js'
import Placeholder from '@/components/Placeholder.jsx'
import { Check } from '@/components/Icons.jsx'
import usePageTitle from '@/components/usePageTitle.js'
import NotFound from './NotFound.jsx'

/** One template for all five services; content comes from `services` in site.js. */
export default function ServicePage() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  usePageTitle(s?.title)
  if (!s) return <NotFound />

  const mail = `mailto:${person.email}?subject=${encodeURIComponent(s.cta.subject)}`

  return (
    <article className="page">
      <section className="wrap page-hero">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link to="/#services">Services</Link> / {s.no}
        </nav>
        <div className="page-hero__grid">
          <div className="page-hero__copy">
            <p className="eyebrow">Service {s.no}</p>
            <h1 className="h1">{s.title}</h1>
            <p className="lede">{s.intro}</p>
          </div>
          <Placeholder label={`IMAGE — ${s.imageLabel}`} />
        </div>
      </section>

      <section className="section section--raised section--tight">
        <div className="wrap">
          <h2 className="h3-lg">What I deliver</h2>
          <div className="deliver">
            {s.deliver.map((d) => (
              <div key={d.title} className="deliver__item">
                <h3>{d.title}</h3>
                <p className="muted">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <h2 className="h3-lg">How we’ll work</h2>
          <ol className="steps">
            {s.steps.map((st, i) => (
              <li key={st.title}>
                <span className="steps__no">{String(i + 1).padStart(2, '0')}</span>
                <h3>{st.title}</h3>
                <p className="muted">{st.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap benefits">
        <h2 className="h3-lg">What you get out of it</h2>
        <ul>
          {s.benefits.map((b) => (
            <li key={b}><span className="benefits__icon"><Check /></span><span>{b}</span></li>
          ))}
        </ul>
      </section>

      <section className="section section--raised section--tight">
        <div className="wrap page-cta">
          <div>
            <p className="label">Related work</p>
            {s.related.to && <Link to={s.related.to} className="page-cta__link">{s.related.label}</Link>}
            {s.related.href && <a href={s.related.href} className="page-cta__link">{s.related.label}</a>}
            {!s.related.to && !s.related.href && <span className="page-cta__link">{s.related.label}</span>}
          </div>
          <a href={mail} className="btn-accent">{s.cta.label}</a>
        </div>
      </section>
    </article>
  )
}
