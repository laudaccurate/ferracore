// Adinkra Icons Component Library
// Traditional Ghanaian symbols representing various concepts

interface AdinkraIconProps {
  className?: string
  size?: number
}

// Gye Nyame - "Except God" - Supremacy and omnipotence of God
// Used for: Trust, Reliability, Supreme quality
export function GyeNyame({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12M6 12h12" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

// Dwennimmen - "Ram's horns" - Strength and humility
// Used for: Security, Protection
export function Dwennimmen({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 12c0-4 2-6 4-6s4 2 4 6-2 6-4 6-4-2-4-6z" />
      <path d="M12 12c0-4 2-6 4-6s4 2 4 6-2 6-4 6-4-2-4-6z" />
      <circle cx="8" cy="9" r="1" fill="currentColor" />
      <circle cx="16" cy="9" r="1" fill="currentColor" />
    </svg>
  )
}

// Sankofa - "Go back and fetch it" - Learning from the past
// Used for: Knowledge, Wisdom, Development
export function Sankofa({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2c-5 0-9 4-9 9s4 9 9 9 9-4 9-9" />
      <path d="M12 6v10M8 10l4-4 4 4" />
      <circle cx="19" cy="5" r="2" fill="currentColor" />
    </svg>
  )
}

// Nkyinkyim - "Twisting" - Initiative, dynamism, versatility
// Used for: Flexibility, Adaptability, Integration
export function Nkyinkyim({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 12c0-3 1.5-5 3-5s3 2 3 5-1.5 5-3 5-3-2-3-5z" />
      <path d="M9 12c0-3 1.5-5 3-5s3 2 3 5-1.5 5-3 5-3-2-3-5z" />
      <path d="M15 12c0-3 1.5-5 3-5s3 2 3 5-1.5 5-3 5-3-2-3-5z" />
    </svg>
  )
}

// Fihankra - "Compound house" - Security, safety
// Used for: Compliance, Regulation, Safety
export function Fihankra({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 3v18M15 9v12M9 15h6" />
    </svg>
  )
}

// Nkonsonkonson - "Chain link" - Unity, human relations
// Used for: Integration, Connection, Community
export function Nkonsonkonson({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="7" cy="12" r="3" />
      <circle cx="17" cy="12" r="3" />
      <path d="M10 12h4" />
    </svg>
  )
}

// Adinkrahene - "Chief of Adinkra symbols" - Leadership, greatness
// Used for: Excellence, Leadership, Premium service
export function Adinkrahene({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  )
}

// Akoma - "The heart" - Patience, tolerance
// Used for: Customer service, Care, Support
export function Akoma({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 21c-7-4-10-9-10-13a5 5 0 0 1 10-1 5 5 0 0 1 10 1c0 4-3 9-10 13z" />
    </svg>
  )
}

// Aya - "Fern" - Endurance, resourcefulness
// Used for: Resilience, Reliability, Endurance
export function Aya({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2v20M8 6l4-2 4 2M6 10l6-2 6 2M4 14l8-2 8 2M6 18l6-2 6 2" />
    </svg>
  )
}

// Bese Saka - "Sack of cola nuts" - Affluence, abundance, unity
// Used for: Wealth, Financial services, Prosperity
export function BeseSaka({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 2h8l2 4H6l2-4z" />
      <rect x="4" y="6" width="16" height="14" rx="2" />
      <path d="M8 12h8M8 16h8" />
    </svg>
  )
}

// Nyansapo - "Wisdom knot" - Wisdom, ingenuity, intelligence
// Used for: Smart solutions, Innovation, Intelligence
export function Nyansapo({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  )
}

// Mpatapo - "Knot of reconciliation" - Peacemaking, reconciliation
// Used for: Harmony, Agreement, Partnership
export function Mpatapo({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  )
}

// Eban - "Fence" - Love, safety, security
// Used for: Protection, Security, Safety
export function Eban({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="8" width="4" height="13" />
      <rect x="10" y="8" width="4" height="13" />
      <rect x="17" y="8" width="4" height="13" />
      <path d="M2 8h20M2 3h20" />
    </svg>
  )
}

// Mmere Dane - "Time changes" - Change, life's dynamics
// Used for: Innovation, Transformation, Evolution
export function MmereDane({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
      <path d="M16 2l2 2-2 2" />
    </svg>
  )
}

// Fawohodie - "Independence" - Freedom, emancipation
// Used for: Autonomy, Freedom, Self-service
export function Fawohodie({ className = "", size = 24 }: AdinkraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2L2 7v10c0 5 10 5 10 5s10 0 10-5V7L12 2z" />
      <path d="M12 12v5" />
    </svg>
  )
}
