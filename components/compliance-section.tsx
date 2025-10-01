import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dwennimmen, Adinkrahene, Eban, Mpatapo, Fihankra, GyeNyame } from "@/components/adinkra-icons"

export function ComplianceSection() {
  const certifications = [
    {
      icon: Dwennimmen, // Strength/Security
      title: "ISO 27001",
      description: "Information Security Management",
      status: "Certified",
    },
    {
      icon: Eban, // Protection/Safety
      title: "ISO 27017",
      description: "Cloud Security Controls",
      status: "Certified",
    },
    {
      icon: Adinkrahene, // Excellence/Leadership
      title: "PCI DSS Level 1",
      description: "Payment Card Industry Compliance",
      status: "Certified",
    },
    {
      icon: Mpatapo, // Reconciliation/Agreement
      title: "SOC 2 Type II",
      description: "Security & Availability Controls",
      status: "Certified",
    },
    {
      icon: Fihankra, // Security/Regulation
      title: "Bank of Ghana PFTSP",
      description: "Payment & Financial Technology Service Provider",
      status: "Licensed",
    },
    {
      icon: GyeNyame, // Supreme/Trust
      title: "GDPR Compliant",
      description: "General Data Protection Regulation",
      status: "Compliant",
    },
  ]

  return (
    <section id="compliance" className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Built on <span className="text-primary">Trust & Compliance</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            ferraCore meets the highest international standards for security, compliance, and regulatory requirements,
            ensuring your financial services are built on a foundation of trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <Card
                key={index}
                className="relative overflow-hidden bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern
                        id={`compliance-pattern-${index}`}
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="10" cy="10" r="2" fill="currentColor" className="text-primary/20" />
                        <path
                          d="M5,5 L15,15 M15,5 L5,15"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          className="text-primary/10"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#compliance-pattern-${index})`} />
                  </svg>
                </div>

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                      {cert.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
