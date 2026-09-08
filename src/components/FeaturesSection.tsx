'use client'
import React from 'react'
import {
  BarChart3,
  Cloud,
  Code,
  CreditCard,
  Gauge,
  Globe,
  LifeBuoy,
  Lock,
  Plug,
  Search,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  /** Icon tint, so the row reads as a set of distinct marks rather than one colour. */
  tone: string
}

const rowOne: Feature[] = [
  { icon: Code, title: 'MERN Development', description: 'Full-stack apps on Mongo, Express, React, and Node.', tone: 'text-indigo-500' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'One React Native codebase, both app stores.', tone: 'text-pink-500' },
  { icon: Cloud, title: 'Cloud Infrastructure', description: 'AWS, Azure, and GCP with infrastructure as code.', tone: 'text-sky-500' },
  { icon: Sparkles, title: 'AI Features', description: 'Retrieval and agents wired into your product.', tone: 'text-amber-500' },
  { icon: Search, title: 'SEO Solutions', description: 'Technical audits and content architecture.', tone: 'text-emerald-500' },
  { icon: Globe, title: 'Web Performance', description: 'Core Web Vitals work that survives real traffic.', tone: 'text-violet-500' },
]

const rowTwo: Feature[] = [
  { icon: Gauge, title: 'Performance', description: 'Apps tuned for speed under real-world load.', tone: 'text-orange-500' },
  { icon: Lock, title: 'Security', description: 'Auth, encryption, and dependency hygiene by default.', tone: 'text-rose-500' },
  { icon: Plug, title: 'Integrations', description: 'Seamless links to the tools you already run.', tone: 'text-teal-500' },
  { icon: CreditCard, title: 'Payments', description: 'Stripe and Razorpay billing, subscriptions included.', tone: 'text-lime-600' },
  { icon: BarChart3, title: 'Analytics', description: 'Product analytics you can actually act on.', tone: 'text-cyan-500' },
  { icon: LifeBuoy, title: '24/7 Support', description: 'Monitoring and maintenance after you ship.', tone: 'text-fuchsia-500' },
]

const Card: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="w-[19rem] shrink-0 rounded-2xl border border-border bg-surface-elevated p-6 shadow-[var(--shadow-soft)]">
    <feature.icon className={`h-6 w-6 ${feature.tone}`} />
    <h3 className="mt-5 text-base font-semibold text-fg">{feature.title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-fg-subtle">
      {feature.description}
    </p>
  </div>
)

/**
 * Two ribbons of feature cards drifting in opposite directions. Each row's
 * children are duplicated so the -50% translate loops seamlessly.
 */
const Row: React.FC<{ features: Feature[]; reverse?: boolean }> = ({
  features,
  reverse,
}) => (
  <div className="marquee-mask overflow-hidden">
    <div
      className="marquee-track flex gap-6"
      style={reverse ? { animationDirection: 'reverse' } : undefined}
    >
      {[...features, ...features].map((feature, index) => (
        <Card key={`${feature.title}-${index}`} feature={feature} />
      ))}
    </div>
  </div>
)

const FeaturesSection: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-20 md:py-28 bg-surface-subtle/60 border-t border-border"
      id="features"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Capabilities
        </p>
        <h2 className="mt-4 text-h2 font-semibold tracking-display text-fg">
          Everything you need
          <br className="hidden sm:block" /> to ship and scale
        </h2>
        <p className="mt-4 text-lead text-fg-muted">
          One senior team across the whole stack. No handoffs, no gaps, no
          juggling four vendors to get one product live.
        </p>
      </div>

      <div className="mt-14 space-y-6">
        <Row features={rowOne} />
        <Row features={rowTwo} reverse />
      </div>
    </section>
  )
}

export default FeaturesSection
