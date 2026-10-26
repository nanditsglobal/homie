import { Link } from 'react-router-dom'
import { hero, person } from '@/data/site.js'
import { ArrowRight, Globe } from './Icons.jsx'

const CHAR_START = 0.35 // seconds before the first character fades in
const CHAR_STEP = 0.03 // seconds between characters

/** Headline that fades in one character at a time (after TextEffect per="char" preset="fade"). */
function CharFadeHeadline({ lines }) {
  let i = 0
  const plain = lines.map((segs) => segs.map((s) => s.text).join('')).join(', ')
  return (
    <>
      <span className="sr-only">{plain}</span>
      <span aria-hidden="true">
        {lines.map((segs, li) => (
          <span className="hero__line" key={li}>
            {segs.map((seg, si) => {
              const chars = Array.from(seg.text).map((ch) => (
                <span className="tchar" key={i} style={{ animationDelay: `${(CHAR_START + CHAR_STEP * i++).toFixed(2)}s` }}>
                  {ch}
                </span>
              ))
              return seg.serif ? <em key={si}>{chars}</em> : <span key={si}>{chars}</span>
            })}
          </span>
        ))}
      </span>
    </>
  )
}

export default function Hero() {
  return (
    <div className="hero">
      {/* Portrait: right-hand column on desktop, edges feathered into the page; behind the copy below 1100px */}
      <div className="hero__media" aria-hidden="true">
        <img className="hero__photo" src="/img/hero.webp" alt="" width="1200" height="1200" fetchPriority="high" />
      </div>
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__rules" aria-hidden="true"><span /><span /><span /></div>

      <div className="hero__content">
        <section id="top" className="hero__main">
          <div className="hero__copy">
            <h1 className="hero__title rise d1">
              <span className="hero__eyebrow">{hero.eyebrow}</span>
              <CharFadeHeadline lines={hero.lines} />
            </h1>

            <p className="hero__sub rise d2">{hero.sub}</p>

            <div className="hero__actions rise d3">
              <Link to="/#work" className="btn-flame">
                View portfolio
                <span className="btn-flame__dot" aria-hidden="true"><ArrowRight /></span>
              </Link>
              <p className="hero__mail">
                Or write directly
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </p>
            </div>

            <ul className="hero__stats rise d4">
              {hero.stats.map((s) => (
                <li key={s.label} className={`stat ${s.tint ? 'stat--tint' : ''}`}>
                  <span className="stat__mark" aria-hidden="true">*</span>
                  <span className="stat__value">{s.value}</span>
                  <span className="stat__label">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="hero__foot rise d5">
          <div className="hero__sign">
            <span className="hero__watermark" aria-hidden="true">HAK</span>
            <p className="hero__location">
              <Globe size={22} />
              {/* Text shimmer (after the TextShimmer component) */}
              <span className="shimmer">
                {hero.location.map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}
              </span>
            </p>
          </div>
          <section aria-label="Organisations" className="hero__orgs">
            <span>Led creative at</span>
            <ul>{hero.orgs.map((o) => <li key={o}>{o}</li>)}</ul>
          </section>
        </div>
      </div>
    </div>
  )
}
