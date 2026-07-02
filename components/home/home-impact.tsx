import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react'
import { ImpactStats } from './impact-stats'

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

        <ImpactStats />

        <div className="mt-10 grid gap-6 rounded-2xl bg-background p-6 shadow-sm ring-1 ring-border sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map(({ Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 transition-all duration-300 hover:-translate-y-0.5">
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-brand transition-transform duration-300 hover:scale-110" />
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
