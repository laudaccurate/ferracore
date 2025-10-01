export function StatsSection() {
  const stats = [
    {
      value: "20 days",
      label: "saved",
      sublabel: "on daily builds.",
      company: "NETFLIX",
    },
    {
      value: "98%",
      label: "faster",
      sublabel: "time to market.",
      company: "FINTECH+",
    },
    {
      value: "300%",
      label: "increase",
      sublabel: "in API adoption.",
      company: "BANKTECH",
    },
    {
      value: "6x",
      label: "faster to",
      sublabel: "build + deploy.",
      company: "PAYCORE",
    },
  ]

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            The complete platform to
            <br />
            build financial services.
          </h2>
          <p className="text-xl text-background/70 text-balance max-w-3xl mx-auto">
            Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best
            financial experiences with ferraCore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 border border-background/20 rounded-2xl bg-background/5 backdrop-blur"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-accent">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-background/70 mb-4">{stat.sublabel}</div>
              <div className="text-sm font-mono text-background/50">{stat.company}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center text-accent mb-6">
              <span className="mr-2">⚡</span>
              <span className="text-sm font-semibold">Collaboration</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Faster iteration.
              <br />
              More innovation.
            </h3>
            <p className="text-background/70 text-lg leading-relaxed">
              The platform for rapid progress. Let your team focus on shipping features instead of managing
              infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
            </p>
          </div>

          <div className="relative">
            <div className="bg-background/10 backdrop-blur border border-background/20 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background/10 rounded-xl">
                  <span className="font-mono text-sm">monitoring-query-variant</span>
                  <span className="text-accent">✓</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-accent/20 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-xs font-bold text-background">Q</span>
                  </div>
                  <span className="font-mono text-sm">Query ("queryEngine")</span>
                  <span className="text-accent">×</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/10 rounded-xl">
                  <span className="font-mono text-sm">enable-dashboard-recents</span>
                  <span className="text-background/50">Select an override...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
