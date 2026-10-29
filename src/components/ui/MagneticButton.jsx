import { useMagnetic } from '../../hooks/useMagnetic'

export default function MagneticButton({ children, className = '', strength = 0.25, ...props }) {
  const magneticRef = useMagnetic(strength)

  return (
    <button ref={magneticRef} className={className} {...props}>
      {children}
    </button>
  )
}