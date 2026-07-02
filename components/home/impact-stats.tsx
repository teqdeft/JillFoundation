'use client'

import { Users, HandHeart, Home, Sun } from 'lucide-react'
import { CountUp } from '@/components/ui/count-up'

const STATS = [
  { Icon: Users, end: 350, suffix: '+', label: 'Counseling and medical sessions provided every month' },
  { Icon: HandHeart, end: 1200, suffix: '+', label: 'Individuals and families supported last year' },
  { Icon: Home, end: 50, suffix: '+', label: 'Community programs made possible' },
  { Icon: Sun, end: 0, suffix: '', text: 'Countless', label: 'Lives changed through your support' },
]

export function ImpactStats() {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map(({ Icon, end, suffix, text, label }) => (
        <div key={label} className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <p className="font-serif text-xl font-bold text-brand">
              {text ? text : <CountUp end={end} suffix={suffix} />}
            </p>
            <p className="text-sm leading-snug text-muted-foreground">{label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
