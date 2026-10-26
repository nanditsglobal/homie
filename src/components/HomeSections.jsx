import { useRef, useState } from 'react'
import { contact, faq, person, quotes, services, social } from '@/data/site.js'
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

const EMPTY = { name: '', email: '', company: '', timeline: '', message: '' }

/**
 * Project enquiry in two steps: pick one of the five services, then the parts of it you need and the brief.
 * No backend — submitting opens the visitor's email app with the brief filled in.
 */
export function Contact() {
  const [service, setService] = useState('')
  const [needs, setNeeds] = useState([])
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)
  const stepRef = useRef(null)
  const picked = services.find((s) => s.slug === service)

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })
  const pickService = (slug) => {
    setService(slug)
    setNeeds([])
    setSent(false)
    // Bring the new step into view below the fixed header, then hand it focus
    requestAnimationFrame(() => {
      stepRef.current?.closest('form').scrollIntoView({ block: 'start' })
      stepRef.current?.focus({ preventScroll: true })
    })
  }
  const toggleNeed = (n) => setNeeds(needs.includes(n) ? needs.filter((x) => x !== n) : [...needs, n])

  const submit = (e) => {
    e.preventDefault()
    const subject = `Project enquiry — ${picked.title}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company / website: ${form.company}` : null,
      `Service: ${picked.title}`,
      needs.length ? `Focus: ${needs.join(', ')}` : null,
      form.timeline ? `Timeline: ${form.timeline}` : null,
      '',
      form.message,
    ].filter((line) => line !== null).join('\n')
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap contact__grid">
        <div className="contact__intro">
          <p className="eyebrow">06 — Contact</p>
          <h2 id="contact-title" className="contact__title">{contact.title}</h2>
          <p className="lede">{contact.intro}</p>
          <dl className="contact__meta">
            <div>
              <dt className="label">Email</dt>
              <dd><a href={`mailto:${person.email}`} className="contact__value">{person.email}</a></dd>
            </div>
            <div>
              <dt className="label">Phone / WhatsApp</dt>
              <dd><a href={person.phoneHref} className="contact__value">{person.phone}</a></dd>
            </div>
            <div>
              <dt className="label">Based in</dt>
              <dd className="contact__value">{person.location} · working worldwide</dd>
            </div>
            <div>
              <dt className="label">Elsewhere</dt>
              <dd className="contact__links">
                {social.map((s) => <a key={s.label} href={s.href}>{s.label}</a>)}
              </dd>
            </div>
          </dl>
        </div>

        <form className="enquiry" onSubmit={submit} aria-labelledby="enquiry-step enquiry-title">
          <div className="enquiry__steps">
            <div className="enquiry__head">
              <div className="enquiry__head-text">
                <p id="enquiry-step" className="label" ref={stepRef} tabIndex={-1}>Step {picked ? 2 : 1} of 2</p>
                <h3 id="enquiry-title" className="enquiry__title">
                  {picked
                    ? <><span className="enquiry__service-no">{picked.no}</span> {picked.title}</>
                    : 'What do you need help with?'}
                </h3>
              </div>
              {picked && <button type="button" className="enquiry__change" onClick={() => pickService('')}>Change</button>}
            </div>
            <span className="enquiry__progress" aria-hidden="true"><span style={{ width: picked ? '100%' : '50%' }} /></span>
          </div>

          {!picked && (
            <div className="enquiry__services">
              {services.map((s) => (
                <button key={s.slug} type="button" className="enquiry__service" onClick={() => pickService(s.slug)}>
                  <span className="enquiry__service-no">{s.no}</span>
                  <span className="enquiry__service-title">{s.title}</span>
                  <ArrowUpRight size={16} strokeWidth={2} />
                </button>
              ))}
            </div>
          )}

          {picked && (
            <>
              <fieldset className="enquiry__group">
                <legend className="label">Which parts? <span className="enquiry__hint">optional</span></legend>
                <div className="filters">
                  {picked.points.map((n) => (
                    <label key={n} className={`chip ${needs.includes(n) ? 'is-on' : ''}`}>
                      <input type="checkbox" checked={needs.includes(n)} onChange={() => toggleNeed(n)} />
                      {n}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="enquiry__group">
                <legend className="label">About you</legend>
                <div className="enquiry__fields">
                  <label className="field">
                    <span className="field__label">Name</span>
                    <input type="text" name="name" autoComplete="name" required value={form.name} onChange={set('name')} />
                  </label>
                  <label className="field">
                    <span className="field__label">Email</span>
                    <input type="email" name="email" autoComplete="email" required value={form.email} onChange={set('email')} />
                  </label>
                  <label className="field">
                    <span className="field__label">Company or website <span className="enquiry__hint">optional</span></span>
                    <input type="text" name="company" autoComplete="organization" value={form.company} onChange={set('company')} />
                  </label>
                  <label className="field">
                    <span className="field__label">Timeline <span className="enquiry__hint">optional</span></span>
                    <select name="timeline" value={form.timeline} onChange={set('timeline')}>
                      <option value="">Select…</option>
                      {contact.timelines.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </label>
                  <label className="field field--wide">
                    <span className="field__label">Your project</span>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={set('message')}
                      placeholder={contact.prompts[picked.slug]}
                    />
                  </label>
                </div>
              </fieldset>

              <div className="enquiry__submit">
                <button type="submit" className="btn-accent">
                  Send enquiry
                  <ArrowUpRight size={20} strokeWidth={2} />
                </button>
                <p className="enquiry__note muted" role="status">
                  {sent
                    ? <>Your email app should open with this filled in. If it didn’t, email <a href={`mailto:${person.email}`}>{person.email}</a>.</>
                    : 'Opens your email app with your answers filled in.'}
                </p>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
