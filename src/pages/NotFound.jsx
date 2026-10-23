import { Link } from 'react-router-dom'
import usePageTitle from '@/components/usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="wrap page page-hero">
      <p className="eyebrow">404</p>
      <h1 className="h1">This page doesn’t exist.</h1>
      <p className="lede"><Link to="/">Back to the homepage</Link></p>
    </section>
  )
}
