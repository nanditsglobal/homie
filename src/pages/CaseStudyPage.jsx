import { Link, useParams } from 'react-router-dom'
import { caseStudies, caseStudyPlaceholder } from '@/data/site.js'
import Placeholder from '@/components/Placeholder.jsx'
import { ArrowRight } from '@/components/Icons.jsx'
import usePageTitle from '@/components/usePageTitle.js'
import NotFound from './NotFound.jsx'

/**
 * Case study: problem → what I did → process → outcome. Content comes from `caseStudies` in site.js;
 * any part a study doesn't have yet falls back to the [bracketed] placeholder.
 */
export default function CaseStudyPage() {
  const { slug } = useParams()
  const index = caseStudies.findIndex((c) => c.slug === slug)
  const cs = caseStudies[index]
  usePageTitle(cs ? `${cs.title} case study` : undefined)
  if (!cs) return <NotFound />
  const c = { ...caseStudyPlaceholder, ...cs }
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <article className="page">
      <section className="wrap page-hero page-hero--case">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link to="/#work">Portfolio</Link> / {c.title}
        </nav>
        <p className="eyebrow">{c.discipline}</p>
        <h1 className="case__title">{c.title}</h1>
        <p className="case__outcome">{c.outcome}</p>
        <dl className="case__facts">
          <div><dt>Client</dt><dd>{c.facts.client}</dd></div>
          <div><dt>Timeline</dt><dd>{c.facts.timeline}</dd></div>
          <div><dt>My role</dt><dd>{c.facts.role}</dd></div>
          <div><dt>Scope</dt><dd>{c.facts.scope}</dd></div>
        </dl>
      </section>

      <div className="wrap">
        <img className="case__hero-img" src={c.img} alt={c.alt} width="800" height="800" />
      </div>

      <section className="wrap case__split">
        <h2 className="h3-lg">The problem</h2>
        <div className="case__body">
          {c.problem.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      <section className="wrap case__split">
        <h2 className="h3-lg">What I did</h2>
        <ul className="rule-list">
          {c.did.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </section>

      <section className="wrap case__process">
        <h2 className="h3-lg">Process</h2>
        <div className="case__figures">
          {c.process.map((f) => (
            <figure key={f.label}>
              {f.img ? <img src={f.img} alt={f.alt || ''} loading="lazy" /> : <Placeholder label={`IMAGE — ${f.label}`} />}
              <figcaption className="muted">{f.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="wrap case__outcome-wrap">
        <div className="case__outcome-box">
          <h2 className="h3-lg">Outcome</h2>
          <div className="case__results">
            {c.results.map((r) => (
              <div key={r.label}><p className="case__result-value">{r.value}</p><p className="muted">{r.label}</p></div>
            ))}
          </div>
          <blockquote className="case__quote">
            “{c.quote.text}”
            <footer className="muted">{c.quote.name}{c.quote.title && `, ${c.quote.title}`}</footer>
          </blockquote>
        </div>
        {c.sources.length > 0 && (
          <div className="case__sources">
            <p className="label">Sources</p>
            <ul>
              {c.sources.map((src) => <li key={src.href}><a href={src.href} target="_blank" rel="noopener noreferrer">{src.label}</a></li>)}
            </ul>
          </div>
        )}
      </section>

      <section className="wrap case__next">
        <Link to={`/work/${next.slug}`} className="case__next-link">
          <div>
            <p className="label">Next project</p>
            <p className="case__next-title">{next.title}</p>
          </div>
          <span className="case__next-arrow"><ArrowRight size={56} strokeWidth={1.4} /></span>
        </Link>
      </section>
    </article>
  )
}
