import { Link } from 'react-router-dom'
import { person } from '@/data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <span>© {new Date().getFullYear()} {person.name}</span>
        <Link to="/#top">Back to top</Link>
      </div>
    </footer>
  )
}
