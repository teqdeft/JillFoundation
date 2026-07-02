import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  HandHeart,
  Sun,
  Users,
  ShieldCheck,
  Heart,
  MessageCircle,
  HeartHandshake,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'About | JILL Foundation',
  description:
    'Learn why the JILL Foundation exists and meet founder Dr. Jill Rovaris.',
}

const VALUES = [
  {
    Icon: HandHeart,
    title: 'Our Mission',
    desc: 'Empower individuals to achieve optimal mental and medical wellness by providing access to effective care and resources.',
  },
  {
    Icon: Sun,
    title: 'Our Vision',
    desc: 'A world where mental and medical health is prioritized, supported, and accessible to all.',
  },
  {
    Icon: Users,
    title: 'Our Values',
    desc: 'Compassion, integrity, respect, equity, and collaboration guide everything we do.',
  },
  {
    Icon: ShieldCheck,
    title: 'Our Promise',
    desc: 'We are committed to transparency, accountability, and making a measurable impact.',
  },
]

const IMPACT = [
  { Icon: Users, value: '1,200+', label: 'Individuals Supported' },
  { Icon: MessageCircle, value: '350+', label: 'Counseling and Medical Sessions Provided' },
  { Icon: Heart, value: '50+', label: 'Community Workshops' },
  { Icon: HeartHandshake, value: '20+', label: 'Partner Healthcare Organizations' },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Story */}
        <section className="bg-background">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-widest text-brand">
                OUR STORY
              </p>
              <h1 className="mt-3 font-serif text-5xl font-bold text-foreground sm:text-6xl">
                Why We Exist
              </h1>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                The JILL Foundation was founded by Dr. Jill Rovaris after
                addressing the growing mental and medical health crisis and the
                barriers so many face in getting the help they need. Our mission
                is to ensure that no one has to face their struggles alone.
              </p>
              <p className="mt-8 font-script text-3xl text-brand">
                Jill Rovaris, PhD
              </p>
              <p className="mt-3 font-semibold text-foreground">
                Jill Rovaris, PhD
              </p>
              <p className="text-muted-foreground">Founder &amp; CEO</p>
            </div>

            <div className="relative mx-auto h-[26rem] w-full max-w-md overflow-hidden rounded-2xl bg-muted sm:h-[30rem]">
              <Image
                src="/images/about/ceo.jpeg"
                alt="Dr. Jill Rovaris, Founder and CEO"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-background pb-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
            {VALUES.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className={
                  i > 0 ? 'lg:border-l lg:border-border lg:pl-8' : ''
                }
              >
                <span className="flex h-14 w-14 items-center justify-center text-brand">
                  <Icon className="h-9 w-9" strokeWidth={1.5} />
                </span>
                <h2 className="mt-4 font-serif text-xl font-bold text-brand">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="bg-background pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-3xl bg-brand-soft/50 p-8 sm:p-12">
              <h2 className="text-center text-sm font-semibold tracking-widest text-brand">
                OUR IMPACT TOGETHER
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {IMPACT.map(({ Icon, value, label }, i) => (
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
                        {value}
                      </p>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-forest text-forest-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
            <div className="flex items-center gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-forest-foreground/40">
                <Heart className="h-6 w-6" />
              </span>
              <p className="font-serif text-2xl font-semibold text-balance sm:text-3xl">
                Our work is possible because of supporters like you.
              </p>
            </div>
            <Link
              href="/donate"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-background px-7 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-background/90"
            >
              DONATE NOW
              <Heart className="h-4 w-4 fill-current text-brand" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
