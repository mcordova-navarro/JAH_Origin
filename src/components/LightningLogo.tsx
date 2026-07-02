export function LightningLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`lightning-logo ${className}`} aria-hidden="true">
      <div className="lightning-orbit">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b7a" />
              <stop offset="50%" stopColor="#c41e3a" />
              <stop offset="100%" stopColor="#8b1528" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M38 8L22 34h10l-4 22 20-28H38l4-20z"
            fill="url(#boltGrad)"
            filter="url(#glow)"
          />
        </svg>
      </div>
      <div className="lightning-ring" />
      <div className="lightning-ring lightning-ring--delay" />
    </div>
  )
}
