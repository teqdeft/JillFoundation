import { Users, HandHeart, Home, Sun, ShieldCheck, Award, CheckCircle2 } from 'lucide-react'

const STATS = [
  { Icon: Users, value: '350+', label: 'Counseling and medical sessions provided every month' },
  { Icon: HandHeart, value: '1,200+', label: 'Individuals and families supported last year' },
  { Icon: Home, value: '50+', label: 'Community programs made possible' },
  { Icon: Sun, value: 'Countless', label: 'Lives changed through your support' },
]

const BADGES = [
  { Icon: ShieldCheck, title: 'Secure & Private', desc: 'Your information is safe and encrypted.' },
  { Icon: Award, title: 'Tax-Deductible', desc: 'JILL Foundation is a 501(c)(3) nonprofit organization.' },
  { Icon: CheckCircle2, title: 'Transparent', desc: 'We are committed to total transparency.' },
  { Icon: Award, title: 'Accountable', desc: 'Your gift goes directly to programs that help.' },
]

export function HomeImpact() {
  return (
    <section className="bg-muted/40 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-serif text-2xl font-bold text-foreground sm:text-3xl">
          Your gift creates real change.
        </h2>
        <span className="mx-auto mt-3 block h-1 w-12 rounded-full bg-brand" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ Icon, value, label }) => (
            <div key={label} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-serif text-xl font-bold text-brand">{value}</p>
                <p className="text-sm leading-snug text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-2xl bg-background p-6 shadow-sm ring-1 ring-border sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map(({ Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs leading-snug text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
