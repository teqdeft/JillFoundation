import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  HandHeart,
  Sun,
  Users,
  ShieldCheck,
  Heart,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AboutImpactStats } from '@/components/about/about-impact-stats'
import { cn } from '@/lib/utils'

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
                className={cn(
                  'transition-all duration-300 hover:-translate-y-1',
                  i > 0 ? 'lg:border-l lg:border-border lg:pl-8' : '',
                )}
              >
                <span className="flex h-14 w-14 items-center justify-center text-brand transition-transform duration-300 group-hover:scale-110">
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
              <AboutImpactStats />
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
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-background px-7 py-3.5 text-sm font-semibold text-forest transition-all duration-200 hover:bg-background/90 hover:shadow-md hover:scale-[1.03] active:scale-[0.97]"
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
