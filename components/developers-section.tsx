import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sankofa, MmereDane, Nyansapo } from "@/components/adinkra-icons"

export function DevelopersSection() {
  const integrationSteps = [
    {
      step: "1",
      title: "Get API Keys",
      description: "Sign up and get your sandbox API keys instantly",
      code: "curl -X POST https://api.ferracore.com/auth",
    },
    {
      step: "2",
      title: "Initialize SDK",
      description: "Install and configure the ferraCore SDK",
      code: "npm install @ferracore/sdk",
    },
    {
      step: "3",
      title: "Make Your First Call",
      description: "Create a wallet or process your first payment",
      code: "ferraCore.wallets.create({ userId: '123' })",
    },
  ]

  const features = [
    "RESTful APIs with OpenAPI 3.0 specs",
    "SDKs for Node.js, Python, PHP, Java",
    "Webhook notifications for real-time updates",
    "Comprehensive testing sandbox",
    "Interactive API documentation",
    "24/7 developer support",
  ]

  return (
    <section id="developers" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Built for <span className="text-primary">Developers</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Get started in minutes with our developer-first APIs, comprehensive documentation, and powerful SDKs
            designed for rapid integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {/* Integration Steps */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <MmereDane className="h-6 w-6 text-accent mr-3" size={24} />
              Quick Integration
            </h3>
            <div className="space-y-6">
              {integrationSteps.map((step, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern
                          id={`dev-pattern-${index}`}
                          x="0"
                          y="0"
                          width="25"
                          height="25"
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x="0"
                            y="0"
                            width="25"
                            height="25"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            className="text-primary/20"
                          />
                          <circle cx="12.5" cy="12.5" r="3" fill="currentColor" className="text-primary/15" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#dev-pattern-${index})`} />
                    </svg>
                  </div>

                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                        <p className="text-muted-foreground mb-3">{step.description}</p>
                        <div className="bg-muted/50 rounded-lg p-3 font-mono text-sm">
                          <code>{step.code}</code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Developer Features */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Sankofa className="h-6 w-6 text-accent mr-3" size={24} />
              Developer Experience
            </h3>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Nyansapo className="mr-2 h-5 w-5" size={20} />
                Get Started - It's Free
                <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" className="w-full bg-transparent">
                View API Documentation
              </Button>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-center justify-between p-4 border-b border-slate-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                  JavaScript
                </Badge>
              </div>
              <div className="p-6 font-mono text-sm text-slate-300 overflow-x-auto">
                <pre>{`// Initialize ferraCore SDK
import { FerraCore } from '@ferracore/sdk';

const ferraCore = new FerraCore({
  apiKey: process.env.FERRACORE_API_KEY,
  environment: 'sandbox' // or 'production'
});

// Create a digital wallet
const wallet = await ferraCore.wallets.create({
  userId: 'user_123',
  currency: 'GHS',
  type: 'personal'
});

// Process a payment
const payment = await ferraCore.payments.create({
  amount: 100.00,
  currency: 'GHS',
  fromWallet: wallet.id,
  toAccount: 'acc_456',
  description: 'Payment for services'
});

console.log('Payment successful:', payment.id);`}</pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
