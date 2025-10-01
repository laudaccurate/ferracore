import { Button } from "@/components/ui/button"
import { Dwennimmen, Sankofa, Nkonsonkonson, Mpatapo } from "@/components/adinkra-icons"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent-foreground mb-8">
              <span className="mr-2">🇬🇭</span>
              Building Ghana's Fintech Infrastructure
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-8">
              Banking-as-a-Service
              <br />
              <span className="text-primary">for Ghana's Fintech Future</span>
            </h1>

            <p className="text-xl text-muted-foreground text-balance mb-12">
              Power your digital credit, wallets, and payments with APIs built for Ghana's fintech innovators. Compliant
              with Bank of Ghana PFTSP framework, designed for rapid deployment and seamless integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
                Get API Access
                <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                View Documentation
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mpatapo className="h-4 w-4 text-accent" size={16} />
                Bank of Ghana PFTSP Ready
              </div>
              <div className="flex items-center gap-2">
                <Mpatapo className="h-4 w-4 text-accent" size={16} />
                99.9% Uptime SLA
              </div>
              <div className="flex items-center gap-2">
                <Mpatapo className="h-4 w-4 text-accent" size={16} />
                ISO 27001 Certified
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <svg viewBox="0 0 400 400" className="w-full h-auto max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Background circles */}
                <circle cx="200" cy="200" r="180" fill="url(#gradient1)" opacity="0.1" />
                <circle cx="200" cy="200" r="140" fill="url(#gradient2)" opacity="0.1" />
                <circle cx="200" cy="200" r="100" fill="url(#gradient3)" opacity="0.1" />

                {/* Central banking icon */}
                <rect x="160" y="160" width="80" height="60" rx="8" fill="url(#gradient4)" />
                <rect x="170" y="170" width="60" height="8" rx="4" fill="white" opacity="0.8" />
                <rect x="170" y="185" width="40" height="6" rx="3" fill="white" opacity="0.6" />
                <rect x="170" y="195" width="50" height="6" rx="3" fill="white" opacity="0.6" />

                {/* API connection nodes */}
                <circle cx="120" cy="120" r="20" fill="url(#gradient5)" />
                <circle cx="280" cy="120" r="20" fill="url(#gradient6)" />
                <circle cx="120" cy="280" r="20" fill="url(#gradient7)" />
                <circle cx="280" cy="280" r="20" fill="url(#gradient8)" />

                {/* Connection lines */}
                <line x1="140" y1="140" x2="180" y2="180" stroke="url(#gradient9)" strokeWidth="3" opacity="0.6" />
                <line x1="260" y1="140" x2="220" y2="180" stroke="url(#gradient9)" strokeWidth="3" opacity="0.6" />
                <line x1="140" y1="260" x2="180" y2="220" stroke="url(#gradient9)" strokeWidth="3" opacity="0.6" />
                <line x1="260" y1="260" x2="220" y2="220" stroke="url(#gradient9)" strokeWidth="3" opacity="0.6" />

                {/* Service icons in nodes */}
                <text x="120" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                  ₵
                </text>
                <text x="280" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                  💳
                </text>
                <text x="120" y="285" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                  📱
                </text>
                <text x="280" y="285" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                  🏪
                </text>

                {/* Floating data particles */}
                <circle cx="100" cy="200" r="3" fill="url(#gradient10)" opacity="0.8">
                  <animate attributeName="cy" values="200;180;200" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="200" r="3" fill="url(#gradient10)" opacity="0.8">
                  <animate attributeName="cy" values="200;220;200" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="100" r="3" fill="url(#gradient10)" opacity="0.8">
                  <animate attributeName="cx" values="200;220;200" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="300" r="3" fill="url(#gradient10)" opacity="0.8">
                  <animate attributeName="cx" values="200;180;200" dur="3.5s" repeatCount="indefinite" />
                </circle>

                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.25 0.08 258)" />
                    <stop offset="100%" stopColor="oklch(0.75 0.15 85)" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.75 0.15 85)" />
                    <stop offset="100%" stopColor="oklch(0.25 0.08 258)" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.25 0.08 258)" />
                    <stop offset="100%" stopColor="oklch(0.75 0.15 85)" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.25 0.08 258)" />
                    <stop offset="100%" stopColor="oklch(0.35 0.12 258)" />
                  </linearGradient>
                  <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.75 0.15 85)" />
                    <stop offset="100%" stopColor="oklch(0.85 0.18 85)" />
                  </linearGradient>
                  <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.25 0.08 258)" />
                    <stop offset="100%" stopColor="oklch(0.35 0.12 258)" />
                  </linearGradient>
                  <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.35 0.12 258)" />
                    <stop offset="100%" stopColor="oklch(0.25 0.08 258)" />
                  </linearGradient>
                  <linearGradient id="gradient8" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.85 0.18 85)" />
                    <stop offset="100%" stopColor="oklch(0.75 0.15 85)" />
                  </linearGradient>
                  <linearGradient id="gradient9" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.75 0.15 85)" />
                    <stop offset="100%" stopColor="oklch(0.25 0.08 258)" />
                  </linearGradient>
                  <linearGradient id="gradient10" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.75 0.15 85)" />
                    <stop offset="100%" stopColor="oklch(0.25 0.08 258)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Background decoration */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
          <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50 animate-float">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <Sankofa className="h-8 w-8 text-accent" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Developer-First APIs</h3>
            <p className="text-muted-foreground text-center">
              Clean APIs, comprehensive docs, and sandbox environment for rapid integration
            </p>
          </div>

          <div
            className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50 animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Dwennimmen className="h-8 w-8 text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
            <p className="text-muted-foreground text-center">
              Built-in compliance with Bank of Ghana PFTSP framework and KYC/AML requirements
            </p>
          </div>

          <div
            className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-16 h-16 rounded-full bg-chart-2/20 flex items-center justify-center mb-4">
              <Nkonsonkonson className="h-8 w-8 text-chart-2" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Agent Network Ready</h3>
            <p className="text-muted-foreground text-center">
              Support for agent banking, merchant onboarding, and cash-in/cash-out operations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
