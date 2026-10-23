// Inline stroke icons. Decorative by default (aria-hidden).

const base = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export function ArrowRight({ size = 18, strokeWidth = 1.8 }) {
  return <svg width={size} height={size} viewBox="0 0 20 20" strokeWidth={strokeWidth} {...base}><path d="M4 10h12M11 5l5 5-5 5" /></svg>
}

export function ArrowUpRight({ size = 18, strokeWidth = 1.9 }) {
  return <svg width={size} height={size} viewBox="0 0 20 20" strokeWidth={strokeWidth} {...base}><path d="M6 14 14 6M7 6h7v7" /></svg>
}

export function Check({ size = 22 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={2.2} {...base}><path d="M20 6L9 17l-5-5" /></svg>
}

export function Globe({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.3} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.7 5.7 3.7 9S14.5 18.4 12 21c-2.5-2.6-3.7-5.7-3.7-9S9.5 5.6 12 3Z" />
    </svg>
  )
}
