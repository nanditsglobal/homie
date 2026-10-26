/** Case study section: how a brand was built — logo idea, logo versions, colour, type and pattern. */
export default function BrandIdentity({ brand }) {
  return (
    <section className="wrap brand" aria-labelledby="brand-title">
      <div className="case__split brand__head">
        <h2 id="brand-title" className="h3-lg">Brand identity</h2>
        <p className="case__body">{brand.intro}</p>
      </div>

      <figure className="brand__story">
        <div className="brand__card brand__card--light">
          <img src={brand.story.img} alt={brand.story.alt} loading="lazy" />
        </div>
        <figcaption>
          <ol className="brand__parts">
            {brand.story.parts.map((p) => (
              <li key={p.name}>
                <p className="brand__part-name">{p.name}</p>
                <p className="muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </figcaption>
      </figure>

      <div className="brand__logos">
        {brand.logos.map((l) => (
          <figure key={l.img}>
            <div className={`brand__card brand__card--${l.tone}`}><img src={l.img} alt={l.alt} loading="lazy" /></div>
            <figcaption className="muted">{l.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="brand__system">
        <div>
          <p className="label">Colour</p>
          <ul className="brand__colours">
            {brand.colours.map((c) => (
              <li key={c.name}>
                <span className="brand__swatch" style={{ background: c.hex }} />
                <span className="brand__colour-name">{c.name}</span>
                <span className="brand__colour-meta">{c.hex} · {c.share}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label">Type</p>
          <p className="brand__type">{brand.type}</p>
        </div>
      </div>

      <figure className="brand__pattern">
        <div className="brand__card brand__card--light"><img src={brand.pattern.img} alt={brand.pattern.alt} loading="lazy" /></div>
        <figcaption className="muted">{brand.pattern.caption}</figcaption>
      </figure>
    </section>
  )
}
