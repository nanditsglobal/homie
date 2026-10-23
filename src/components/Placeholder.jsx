/** Dashed tile that marks where a real image still needs to go. */
export default function Placeholder({ label, ratio = '4 / 3', className = '' }) {
  return (
    <div className={`placeholder ${className}`} style={{ aspectRatio: ratio }}>
      [{label}]
    </div>
  )
}
