import { about, person, social } from '@/data/site.js'

const linkedIn = social.find((s) => s.label === 'LinkedIn')

/** Desktop: the left column pins below the header while the experience list scrolls past. */
export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <div className="about__pinned">
          <p className="eyebrow">03 — About</p>
          <h2 id="about-title" className="h2 h2--about">{about.title}</h2>
          {about.bio.map((p, i) => <p key={i} className="about__bio">{p}</p>)}
          <div className="about__actions">
            {person.resumeUrl && <a href={person.resumeUrl} className="btn-outline">Download résumé (PDF)</a>}
            <a href={linkedIn.href} className="btn-outline">LinkedIn</a>
          </div>
        </div>

        <div className="about__list">
          <h3 className="label">Experience</h3>
          {about.experience.map((e) => (
            <div key={e.role + e.company} className="timeline-row">
              <div>
                <p className="timeline-row__role">{e.role}</p>
                <p className="timeline-row__org">{e.company}</p>
              </div>
              <p className="timeline-row__dates">{e.dates}</p>
            </div>
          ))}

          <h3 className="label label--spaced">Education</h3>
          <div className="timeline-row">
            <div>
              <p className="timeline-row__role">{about.education.degree}</p>
              <p className="timeline-row__org">{about.education.school}</p>
            </div>
            <p className="timeline-row__dates">{about.education.dates}</p>
          </div>

          <h3 className="label label--spaced">Toolkit</h3>
          <p className="about__tools">{about.toolkit}</p>

          <h3 className="label label--spaced">AI stack</h3>
          <p className="about__tools">{about.aiStack}</p>
          <ul className="rule-list">
            {about.aiSkills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
