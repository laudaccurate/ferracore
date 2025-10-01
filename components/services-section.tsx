import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BeseSaka, Nkyinkyim, Nkonsonkonson, Fihankra, Sankofa } from "@/components/adinkra-icons"

export function ServicesSection() {
  const services = [
    {
      icon: BeseSaka, // Wealth/Financial services
      title: "Digital Credit",
      description:
        "Complete loan origination, credit scoring, and repayment infrastructure designed for Ghana's lending ecosystem.",
      features: ["Automated underwriting", "Risk scoring APIs", "Loan management", "Repayment processing"],
    },
    {
      icon: Nkyinkyim, // Flexibility/Adaptability for wallets
      title: "Wallets & Payments",
      description:
        "Multi-wallet support with agent cash-in/cash-out capabilities and seamless payment processing across Ghana.",
      features: ["Multi-wallet integration", "Agent cash operations", "Mobile money support", "Real-time settlements"],
    },
    {
      icon: Nkonsonkonson, // Unity/Connection for agents
      title: "Agent & Merchant Enablement",
      description:
        "Comprehensive platform for onboarding agents and merchants, managing transactions, and building distribution networks.",
      features: ["Agent onboarding", "Transaction management", "Commission tracking", "Network analytics"],
    },
    {
      icon: Fihankra, // Security/Safety for compliance
      title: "Compliance Tools",
      description:
        "Built-in KYC/CDD, AML/CFT support, and risk monitoring aligned with Bank of Ghana PFTSP requirements.",
      features: ["KYC/CDD automation", "AML/CFT monitoring", "Risk assessment", "Regulatory reporting"],
    },
    {
      icon: Sankofa, // Knowledge/Development for developers
      title: "Developer Platform",
      description:
        "Easy integration with comprehensive APIs, sandbox environment, and detailed documentation for rapid deployment.",
      features: ["RESTful APIs", "Sandbox testing", "API documentation", "Developer support"],
    },
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
              <span className="mr-2">🇬🇭</span>
              Ghana's Fintech Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
              APIs built for Ghana's
              <br />
              <span className="text-primary">fintech innovators</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Build compliant digital credit and wallet solutions quickly with our modular APIs designed for Ghana's
              regulatory environment and financial ecosystem.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get API Access
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <Card className="relative bg-card/80 backdrop-blur border-border/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-2xl">
                    <span className="font-semibold">FERRACORE</span>
                    <span className="text-sm text-muted-foreground">GH****</span>
                  </div>
                  <div className="bg-accent/20 p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold">₵50M+</span>
                      <BeseSaka className="h-6 w-6 text-accent" size={24} />
                    </div>
                    <p className="text-sm text-muted-foreground">Credit Disbursed via Platform</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <p className="text-sm text-muted-foreground">Active Agents</p>
                      <p className="text-lg font-semibold">2,500+</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <p className="text-sm text-muted-foreground">API Calls/Month</p>
                      <p className="text-lg font-semibold">10M+</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden"
              style={{
                background:
                  index % 5 === 0
                    ? "linear-gradient(135deg, rgba(28, 42, 79, 0.9) 0%, rgba(30, 58, 138, 0.9) 100%)"
                    : index % 5 === 1
                      ? "linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(37, 99, 235, 0.8) 100%)"
                      : index % 5 === 2
                        ? "linear-gradient(135deg, rgba(23, 37, 84, 0.9) 0%, rgba(30, 64, 175, 0.9) 100%)"
                        : index % 5 === 3
                          ? "linear-gradient(135deg, rgba(30, 58, 138, 0.85) 0%, rgba(49, 46, 129, 0.85) 100%)"
                          : "linear-gradient(135deg, rgba(28, 42, 79, 0.95) 0%, rgba(30, 58, 138, 0.85) 100%)",
              }}
            >
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 60 60" className="absolute inset-0">
                  <defs>
                    <pattern
                      id={`service-pattern-${index}`}
                      x="0"
                      y="0"
                      width="30"
                      height="30"
                      patternUnits="userSpaceOnUse"
                    >
                      {index % 5 === 0 && (
                        <>
                          <circle cx="15" cy="15" r="3" fill="white" opacity="0.3" />
                          <rect
                            x="10"
                            y="10"
                            width="10"
                            height="10"
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                            opacity="0.2"
                          />
                        </>
                      )}
                      {index % 5 === 1 && (
                        <>
                          <path
                            d="M0,15 Q7.5,0 15,15 T30,15"
                            stroke="white"
                            strokeWidth="1"
                            fill="none"
                            opacity="0.3"
                          />
                          <circle cx="15" cy="15" r="1.5" fill="white" opacity="0.4" />
                        </>
                      )}
                      {index % 5 === 2 && (
                        <>
                          <polygon points="15,5 20,12 15,25 10,12" fill="white" opacity="0.2" />
                          <circle cx="15" cy="15" r="2" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                        </>
                      )}
                      {index % 5 === 3 && (
                        <>
                          <path d="M5,5 L25,25 M25,5 L5,25" stroke="white" strokeWidth="0.5" opacity="0.2" />
                          <circle cx="15" cy="15" r="4" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                        </>
                      )}
                      {index % 5 === 4 && (
                        <>
                          <rect
                            x="5"
                            y="5"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                            opacity="0.2"
                            rx="3"
                          />
                          <circle cx="15" cy="15" r="2" fill="white" opacity="0.3" />
                        </>
                      )}
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#service-pattern-${index})`} />
                </svg>
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
