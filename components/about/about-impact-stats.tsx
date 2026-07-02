'use client'

import { Users, MessageCircle, Heart, HeartHandshake } from 'lucide-react'
import { CountUp } from '@/components/ui/count-up'

const IMPACT = [
  { Icon: Users, end: 1200, suffix: '+', label: 'Individuals Supported' },
  { Icon: MessageCircle, end: 350, suffix: '+', label: 'Counseling and Medical Sessions Provided' },
  { Icon: Heart, end: 50, suffix: '+', label: 'Community Workshops' },
  { Icon: HeartHandshake, end: 20, suffix: '+', label: 'Partner Healthcare Organizations' },
]

export function AboutImpactStats() {
  return (
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {IMPACT.map(({ Icon, end, suffix, label }, i) => (
        <div
          key={label}
          className={
            'flex items-start gap-4 ' +
            (i > 0 ? 'lg:border-l lg:border-brand/20 lg:pl-6' : '')
          }
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <p className="font-serif text-2xl font-bold text-forest">
              <CountUp end={end} suffix={suffix} />
            </p>
            <p className="text-sm leading-snug text-muted-foreground">
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
