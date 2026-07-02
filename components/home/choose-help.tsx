import Image from 'next/image'
import Link from 'next/link'
import { User, Users, UsersRound, Lock } from 'lucide-react'
import { CareGiving } from '@/components/home/care-giving'
import { cn } from '@/lib/utils'

const TIERS = [
  {
    Icon: User,
    price: '$50',
    title: 'Sponsor an Individual',
    desc: 'Provides counseling and medical help, recovery support, and essential resources for one person.',
    image: '/images/sponsor-individual.png',
    popular: false,
  },
  {
    Icon: Users,
    price: '$75',
    title: 'Sponsor a Family',
    desc: 'Provides counseling and medical help and wellness support for a family in need.',
    image: '/images/sponsor-family.png',
    popular: true,
  },
  {
    Icon: UsersRound,
    price: '$1,500',
    title: 'Sponsor a Community',
    desc: 'Funds community programs that provide mental and medical support and resources.',
    image: '/images/sponsor-community.png',
    popular: false,
  },
]

export function ChooseHelp() {
  return (
    <section className="bg-muted/40 pb-16 pt-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Choose how you want to help
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Whether you want to provide ongoing support or make a one-time gift,
            your impact{' '}
            <span className="font-semibold text-brand">changes lives</span>.
          </p>
        </div>

        {/* Sponsor someone */}
        <div className="mt-10 rounded-2xl bg-background p-6 shadow-sm ring-1 ring-border sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
              <User className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand">
                1. Sponsor Someone
              </h3>
              <p className="mt-1 max-w-md text-sm leading-snug text-muted-foreground">
                Provide ongoing support and help create lasting change in
                someone&apos;s life.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TIERS.map((tier) => (
              <div
                key={tier.title}
                className={cn(
                  'relative flex flex-col rounded-xl border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
                  tier.popular
                    ? 'border-brand shadow-md'
                    : 'border-border',
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-[11px] font-semibold tracking-wide text-brand-foreground">
                    MOST POPULAR
                  </span>
                )}
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <tier.Icon className="h-6 w-6" />
                </span>
                <div className="mt-3 text-center">
                  <p className="font-serif text-3xl font-bold text-brand">
                    {tier.price}
                    <span className="align-middle text-sm font-normal text-muted-foreground">
                      {' '}
                      /month
                    </span>
                  </p>
                  <p className="mt-1 font-semibold text-foreground">
                    {tier.title}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">
                    {tier.desc}
                  </p>
                </div>
                <div className="relative mt-4 h-36 w-full overflow-hidden rounded-lg">
                  <Image
                    src={tier.image}
                    alt={tier.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <Link
                  href="/donate"
                  className="mt-4 rounded-md bg-brand py-2.5 text-center text-sm font-semibold text-brand-foreground transition-all duration-200 hover:bg-brand/90 hover:shadow-md hover:scale-[1.03] active:scale-[0.97]"
                >
                  SPONSOR NOW
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Your sponsorship is secure, recurring, and can be canceled anytime.
          </p>
        </div>

        {/* I care giving */}
        <div className="mt-8">
          <CareGiving />
        </div>
      </div>
    </section>
  )
}
