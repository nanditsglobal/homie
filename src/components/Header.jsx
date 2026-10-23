import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav, person } from '@/data/site.js'
import { ArrowUpRight } from './Icons.jsx'

const HEADER_OFFSET = 80 // how far below the header a section must reach to count as "current"

/** Measure an element relative to its offset parent, for positioning the sliding shapes. */
function rectOf(el) {
  return el ? { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight } : null
}
function shapeStyle(r) {
  return r
    ? { opacity: 1, width: r.w, height: r.h, transform: `translate(${r.x}px, ${r.y}px)` }
    : { opacity: 0, width: 0, height: 0 }
}

/**
 * Site header.
 * - Liquid-glass toggle menu: a frosted ghost follows hover, a glossy thumb (with a faint
 *   ember tint) marks the current section and springs between items.
 * - A soft light travels round the menu's outline (border trail).
 * - Homepage: the current item follows scroll (scroll spy). Other pages: fixed to Services/Portfolio.
 * - Transparent over the hero; gains a glass ground once the page scrolls.
 */
export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const headerRef = useRef(null)
  const linkRefs = useRef({})
  const [spyActive, setSpyActive] = useState(null)
  const [hovered, setHovered] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [, setTick] = useState(0) // bump to re-measure (fonts, resize)

  const active = isHome
    ? spyActive
    : pathname.startsWith('/services') ? 'services'
    : pathname.startsWith('/work') ? 'work'
    : null

  // Scroll state + scroll spy
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      setScrolled(window.scrollY > 8)
      if (!isHome) return
      const h = headerRef.current ? headerRef.current.offsetHeight : 88
      let current = null
      for (const n of nav) {
        const s = document.getElementById(n.id)
        if (s && s.getBoundingClientRect().top <= h + HEADER_OFFSET) current = n.id
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) current = 'contact'
      setSpyActive(current)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [isHome])

  // Re-measure once fonts settle and whenever the menu changes size
  useLayoutEffect(() => {
    const bump = () => setTick((t) => t + 1)
    const t = setTimeout(bump, 400)
    document.fonts?.ready?.then(bump)
    const ro = window.ResizeObserver ? new ResizeObserver(bump) : null
    const navEl = linkRefs.current.__nav
    if (ro && navEl) ro.observe(navEl)
    return () => { clearTimeout(t); ro?.disconnect() }
  }, [])

  // Smooth in-page scrolling on the homepage; elsewhere the router navigates to /#id
  const onNavClick = useCallback((e, id) => {
    if (!isHome) return
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
    window.history.replaceState(null, '', `#${id}`)
  }, [isHome])

  const hoverRect = hovered ? rectOf(linkRefs.current[hovered]) : null
  const activeRect = active ? rectOf(linkRefs.current[active]) : null

  return (
    <header ref={headerRef} className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand">{person.name}</Link>

        <nav
          aria-label="Main"
          className="glass-nav"
          ref={(el) => { linkRefs.current.__nav = el }}
          onMouseLeave={() => setHovered(null)}
        >
          <span className="glass-nav__trail" aria-hidden="true"><span className="glass-nav__trail-light" /></span>
          <span className="glass-nav__hover" aria-hidden="true" style={shapeStyle(hoverRect)} />
          <span className="glass-nav__thumb" aria-hidden="true" style={shapeStyle(activeRect)} />
          {nav.map((n) => {
            const on = n.id === active
            return (
              <Link
                key={n.id}
                to={`/#${n.id}`}
                ref={(el) => { linkRefs.current[n.id] = el }}
                className={`glass-nav__link ${on ? 'is-active' : ''}`}
                aria-current={on ? 'location' : undefined}
                onMouseEnter={() => setHovered(n.id)}
                onFocus={() => setHovered(n.id)}
                onBlur={() => setHovered(null)}
                onClick={(e) => onNavClick(e, n.id)}
              >
                {n.label}
              </Link>
            )
          })}
        </nav>

        <a href={`mailto:${person.email}`} className="glass-btn">
          Start a project
          <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  )
}
