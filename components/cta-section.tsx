import { Button } from "@/components/ui/button"
import { Mpatapo } from "@/components/adinkra-icons"
import { DemoModal } from "@/components/demo-modal"

export function CTASection() {
  const benefits = [
    "No setup fees or hidden costs",
    "Bank-grade security and compliance",
    "Comprehensive API documentation",
    "24/7 developer support",
    "Sandbox environment included",
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance mb-8">
            Ready to build the future
            <br />
            <span className="text-primary">of finance?</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance mb-12">
            Join thousands of developers and financial institutions already building with ferraCore's comprehensive
            banking-as-a-service platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 animate-pulse-glow"
            >
              Start Building Today
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
            <DemoModal />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start">
                <Mpatapo className="h-5 w-5 text-accent mr-3 flex-shrink-0" size={20} />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
