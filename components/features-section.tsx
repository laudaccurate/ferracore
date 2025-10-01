import { Card, CardContent } from "@/components/ui/card"
import { Dwennimmen, Aya, Nkyinkyim, Sankofa } from "@/components/adinkra-icons"

export function FeaturesSection() {
  const features = [
    {
      icon: Dwennimmen, // Strength/Security for regulatory trust
      title: "Regulatory Trust",
      description:
        "Compliance with Bank of Ghana PFTSP framework built-in, ensuring your fintech operates within regulatory guidelines from day one.",
      color: "text-primary",
    },
    {
      icon: Aya, // Endurance/Resilience for infrastructure
      title: "Infrastructure Strength",
      description:
        "Robust, reliable systems designed for 99.9% uptime and security, powering Ghana's most trusted financial services.",
      color: "text-accent",
    },
    {
      icon: Nkyinkyim, // Flexibility/Integration for interoperability
      title: "Interoperability",
      description:
        "APIs built for multi-EMI, multi-wallet access, enabling seamless integration across Ghana's financial ecosystem.",
      color: "text-chart-2",
    },
    {
      icon: Sankofa, // Knowledge/Learning for developers
      title: "Developer Focus",
      description:
        "Clean APIs, comprehensive documentation, and fast onboarding designed specifically for Ghana's developer community.",
      color: "text-chart-4",
    },
  ]

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Ghana's foundational
            <br />
            <span className="text-primary">fintech platform</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Powering secure, compliant, and scalable financial services for fintechs, EMIs, microfinance institutions,
            merchants, and banks across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden"
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(135deg, rgba(28, 42, 79, 0.95) 0%, rgba(30, 58, 138, 0.9) 100%)"
                    : "linear-gradient(135deg, rgba(212, 175, 55, 0.95) 0%, rgba(184, 134, 11, 0.9) 100%)",
              }}
            >
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0">
                  <defs>
                    <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill="white" opacity="0.3" />
                      <path d="M0,10 Q5,0 10,10 T20,10" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                </svg>
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
