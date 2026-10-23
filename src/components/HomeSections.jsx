import { faq, person, quotes, social } from '@/data/site.js'
import { ArrowUpRight } from './Icons.jsx'

export function Testimonials() {
  return (
    <section id="testimonials" className="section section--raised" aria-labelledby="quotes-title">
      <div className="wrap">
        <p className="eyebrow">04 — Kind words</p>
        <h2 id="quotes-title" className="h2 quotes__title">What teams say</h2>
        <div className="quotes">
          {quotes.map((q) => (
            <figure key={q.name} className="quote">
              <blockquote>“{q.text}”</blockquote>
              <figcaption>
                <span className="quote__name">{q.name}</span>
                <span className="muted">{q.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Answers are written as direct, quotable sentences for search engines and AI assistants. */
export function Faq() {
  return (
    <section id="faq" className="section section--flush-bottom" aria-labelledby="faq-title">
      <div className="wrap">
        <p className="eyebrow">05 — FAQ</p>
        <div className="faq">
          <h2 id="faq-title" className="h2">Questions clients ask</h2>
          <div>
            {faq.map((f, i) => (
              <details key={f.q} open={i === 0} className="faq__item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="eyebrow">06 — Contact</p>
        <h2 id="contact-title" className="contact__title">Have a brand or product that needs direction?</h2>
        <a href={`mailto:${person.email}`} className="btn-accent">
          {person.email}
          <ArrowUpRight size={20} strokeWidth={2} />
        </a>
        <div className="contact__meta">
          <div>
            <p className="label">Phone / WhatsApp</p>
            <a href={person.phoneHref} className="contact__value">{person.phone}</a>
          </div>
          <div>
            <p className="label">Based in</p>
            <p className="contact__value">{person.location} · working worldwide</p>
          </div>
          <div>
            <p className="label">Elsewhere</p>
            <div className="contact__links">
              {social.map((s) => <a key={s.label} href={s.href}>{s.label}</a>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
