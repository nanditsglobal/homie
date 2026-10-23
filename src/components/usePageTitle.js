import { useEffect } from 'react'

const SITE = 'Hammad A. Khawaja'

/** Sets document.title for the current page; restores the default on unmount. */
export default function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title
    document.title = title ? `${title} — ${SITE}` : previous
    return () => { document.title = previous }
  }, [title])
}
