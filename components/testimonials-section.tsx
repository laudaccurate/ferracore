import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, FinanceFlow",
      company: "FinanceFlow",
      content:
        "ferraCore transformed our development timeline. What used to take months now takes weeks. The API documentation is exceptional.",
      rating: 5,
      avatar: "/professional-woman-diverse.png",
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Engineering, PayStream",
      company: "PayStream",
      content:
        "The reliability and security features are outstanding. We've processed over $100M in transactions without a single issue.",
      rating: 5,
      avatar: "/professional-man.jpg",
    },
    {
      name: "Emily Watson",
      role: "Product Manager, WealthTech",
      company: "WealthTech",
      content:
        "Integration was seamless. Our customers love the new investment features we built using ferraCore's APIs.",
      rating: 5,
      avatar: "/professional-woman-glasses.png",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Trusted by Leading
            <br />
            <span className="text-primary">Financial Innovators</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Join hundreds of companies building the future of finance with ferraCore's banking-as-a-service platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                    <pattern
                      id={`testimonial-pattern-${index}`}
                      x="0"
                      y="0"
                      width="25"
                      height="25"
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M12.5,5 Q20,12.5 12.5,20 Q5,12.5 12.5,5" fill="white" opacity="0.1" />
                      <circle cx="12.5" cy="12.5" r="1" fill="white" opacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#testimonial-pattern-${index})`} />
                </svg>
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-white/80 text-white/80" />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed mb-6 text-white/95">"{testimonial.content}"</blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-white/30"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/80">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">KLARNA</div>
            <div className="text-2xl font-bold">Harvey.</div>
            <div className="text-2xl font-bold">OSCAR</div>
            <div className="text-2xl font-bold">SUPERHUMAN</div>
            <div className="text-2xl font-bold">salesforce</div>
          </div>
        </div>
      </div>
    </section>
  )
}
