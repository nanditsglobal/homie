import { useState } from 'react'
import { ArrowRight } from './Icons.jsx'

const thumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
// If a thumbnail can't load, show the empty tile rather than a broken-image icon
const hideBroken = (e) => { e.currentTarget.style.visibility = 'hidden' }

/**
 * YouTube player with a thumbnail strip. The iframe loads only after the visitor presses play,
 * so the page stays fast and YouTube sets no cookies until then (youtube-nocookie).
 */
export default function VideoSlider({ videos }) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const video = videos[index]

  const show = (i) => {
    setIndex((i + videos.length) % videos.length)
    setPlaying(true)
  }

  return (
    <div className="video-slider">
      <div className="video-slider__stage">
        {playing ? (
          <iframe
            key={video.id}
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className="video-slider__poster" onClick={() => setPlaying(true)} aria-label={`Play: ${video.title}`}>
            <img src={thumb(video.id)} alt="" onError={hideBroken} />
            <span className="video-slider__play" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
            </span>
          </button>
        )}
      </div>

      <div className="video-slider__bar">
        <p className="video-slider__now">
          <span className="label">{String(index + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}</span>
          {video.title}
        </p>
        <div className="video-slider__arrows">
          <button type="button" className="video-slider__arrow" onClick={() => show(index - 1)} aria-label="Previous video">
            <span style={{ display: 'inline-flex', transform: 'scaleX(-1)' }}><ArrowRight /></span>
          </button>
          <button type="button" className="video-slider__arrow" onClick={() => show(index + 1)} aria-label="Next video">
            <ArrowRight />
          </button>
        </div>
      </div>

      <ul className="video-slider__thumbs">
        {videos.map((v, i) => (
          <li key={v.id}>
            <button type="button" className={`video-slider__thumb ${i === index ? 'is-on' : ''}`} aria-pressed={i === index} onClick={() => show(i)}>
              <img src={thumb(v.id)} alt="" loading="lazy" onError={hideBroken} />
              <span>{v.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
