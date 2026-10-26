import { Link } from 'react-router-dom'
import { services } from '@/data/site.js'

export default function ServicesList() {
  return (
    <section id="services" className="section section--raised" aria-labelledby="services-title">
      <div className="wrap">
        <p className="eyebrow">02 — Services</p>
        <h2 id="services-title" className="h2 services__title">Five ways I help brands and product teams</h2>
        <div className="service-rows">
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="service-row">
              <div className="service-row__name">
                <span className="service-row__no">{s.no}</span>
                <h3>{s.title}</h3>
              </div>
              <p className="muted">{s.summary}</p>
              <p className="service-row__points">
                {s.points.map((p) => <span key={p}>{p}</span>)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
