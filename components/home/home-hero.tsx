import Image from 'next/image'
import { Lock, Users, Heart } from 'lucide-react'

const FEATURES = [
  { Icon: Lock, text: 'Trusted care and confidential support' },
  { Icon: Users, text: 'Programs that create lasting change' },
  { Icon: Heart, text: 'Real people. Real recovery.' },
]

const DONORS = [
  '/images/avatar-1.png',
  '/images/avatar-2.png',
  '/images/avatar-3.png',
  '/images/avatar-4.png',
  '/images/avatar-5.png',
]

export function HomeHero() {
  return (
    <section className="relative bg-forest text-forest-foreground">
      {/* Background image – right half on lg+ */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/images/home/iwilltilimwell-foundation-11252024-002 (1).jpg"
          alt="A hopeful woman looking upward"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center lg:grid-cols-2">
          {/* Left: text */}
          <div className="py-16 lg:py-20">
            <h1 className="font-serif text-5xl font-bold leading-[1.05] text-balance sm:text-6xl">
              Somebody is waiting for help.
            </h1>
            <span className="mt-5 block h-1 w-16 rounded-full bg-brand" />
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-forest-foreground/85">
              Your support provides mental and medical care, counseling, and hope
              to individuals and families facing life&apos;s toughest challenges.
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-3">
              {FEATURES.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-snug text-forest-foreground/85">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: mobile/tablet image (hidden on lg where background image shows) */}
          <div className="relative h-72 w-full sm:h-96 lg:hidden">
            <Image
              src="/images/home/iwilltilimwell-foundation-11252024-002 (1).jpg"
              alt="A hopeful woman looking upward"
              fill
              priority
              sizes="100vw"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Donor card overlapping into the next (light) section */}
      <div className="relative z-10 mx-auto -mb-16 max-w-6xl translate-y-16 px-4 sm:px-6">
        <div className="flex flex-col items-center gap-5 rounded-2xl bg-background p-6 text-foreground shadow-xl sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {DONORS.map((src, i) => (
                <span
                  key={src}
                  className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-background"
                  style={{ zIndex: DONORS.length - i }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
              ))}
            </div>
            <p className="max-w-[12rem] text-sm leading-snug text-muted-foreground">
              Generous donors already made an impact this year.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-script text-2xl text-brand">
              Every gift makes a real difference.
            </p>
            <Heart className="h-9 w-9 shrink-0 text-brand" />
          </div>
        </div>
      </div>
    </section>
  )
}
