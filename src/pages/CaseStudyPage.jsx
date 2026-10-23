import { Link, useParams } from 'react-router-dom'
import { caseStudies } from '@/data/site.js'
import Placeholder from '@/components/Placeholder.jsx'
import { ArrowRight } from '@/components/Icons.jsx'
import usePageTitle from '@/components/usePageTitle.js'
import NotFound from './NotFound.jsx'

/**
 * Case study template. The structure (problem → what I did → process → outcome) is final;
 * every [bracketed] field is a placeholder until real project content is written.
 * When content exists, move it into `caseStudies` in site.js and render it here.
 */
export default function CaseStudyPage() {
  const { slug } = useParams()
  const index = caseStudies.findIndex((c) => c.slug === slug)
  const cs = caseStudies[index]
  usePageTitle(cs ? `${cs.title} case study` : undefined)
  if (!cs) return <NotFound />
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <article className="page">
      <section className="wrap page-hero page-hero--case">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link to="/#work">Portfolio</Link> / {cs.title}
        </nav>
        <p className="eyebrow">{cs.discipline}</p>
        <h1 className="case__title">{cs.title}</h1>
        <p className="case__outcome">[One sentence: the outcome you achieved for the client]</p>
        <dl className="case__facts">
          <div><dt>Client</dt><dd>[Client / industry]</dd></div>
          <div><dt>Timeline</dt><dd>[Month Year – Month Year]</dd></div>
          <div><dt>My role</dt><dd>[Your actual role]</dd></div>
          <div><dt>Scope</dt><dd>[Strategy, identity, guidelines…]</dd></div>
        </dl>
      </section>

      <div className="wrap">
        <img className="case__hero-img" src={cs.img} alt={cs.alt} width="800" height="800" />
      </div>

      <section className="wrap case__split">
        <h2 className="h3-lg">The problem</h2>
        <div className="case__body">
          <p>[What was wrong before you arrived? Who was the audience, and what was getting in the way? 2–3 sentences, specific to this client.]</p>
          <p>[Constraints you worked within — budget, deadline, legacy assets, stakeholders.]</p>
        </div>
      </section>

      <section className="wrap case__split">
        <h2 className="h3-lg">What I did</h2>
        <ul className="rule-list">
          <li>[Decision 1 you led, and why]</li>
          <li>[Decision 2 you led, and why]</li>
          <li>[Decision 3 you led, and why]</li>
        </ul>
      </section>

      <section className="wrap case__process">
        <h2 className="h3-lg">Process</h2>
        <div className="case__figures">
          {['research / moodboard', 'sketches / routes', 'final system / guidelines'].map((label) => (
            <figure key={label}>
              <Placeholder label={`IMAGE — ${label}`} />
              <figcaption className="muted">[Caption: what this shows]</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="wrap case__outcome-wrap">
        <div className="case__outcome-box">
          <h2 className="h3-lg">Outcome</h2>
          <div className="case__results">
            {['[Measurable result — or a concrete deliverable count]', '[Second result]', '[Third result]'].map((r) => (
              <div key={r}><p className="case__result-value">[X]</p><p className="muted">{r}</p></div>
            ))}
          </div>
          <blockquote className="case__quote">
            “[Optional: one line from the client about the result.]”
            <footer className="muted">[Name, title]</footer>
          </blockquote>
        </div>
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
