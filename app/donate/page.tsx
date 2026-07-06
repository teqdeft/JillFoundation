import Image from 'next/image'
import type { Metadata } from 'next'
import { ShieldCheck, DollarSign, CheckCircle2, Quote } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DonationForm } from '@/components/donate/donation-form'

export const metadata: Metadata = {
  title: 'Donate | JILL Foundation',
  description:
    'Your donation creates real change. Support mental and medical health care.',
}

const BADGES = [
  {
    Icon: ShieldCheck,
    title: 'Secure Donation',
    desc: 'Your information is safe and protected.',
  },
  {
    Icon: DollarSign,
    title: 'Tax-Deductible',
    desc: 'JILL Foundation is a 501(c)(3) nonprofit organization.',
  },
  {
    Icon: CheckCircle2,
    title: 'Transparency',
    desc: 'We are committed to total transparency.',
  },
]

// const PARTNERS = [
//   'NAMI',
//   'Mental Health America',
//   'SAMHSA',
//   'United Way',
//   'Community Health Network',
// ]

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-forest text-forest-foreground">
          <Image
            src="/images/donate-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/60 to-transparent" />
          <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32">
            <div className="max-w-lg">
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance sm:text-5xl">
                Your Donation Creates Real Change
              </h1>
              <span className="mt-5 block h-1 w-16 rounded-full bg-brand" />
              <p className="mt-5 text-lg leading-relaxed text-forest-foreground/85">
                Together, we can provide hope, healing, and opportunities for a
                brighter future.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-forest sm:text-4xl">
                Thank You for Your Donation!
              </h2>
              <p className="mt-3 text-muted-foreground">
                Your generosity helps provide critical mental and medical health
                care and support.
              </p>
            </div>
            <hr className="my-10 border-border" />
            <DonationForm />
          </div>
        </section>

        {/* Trust badges */}
        <section className="bg-muted/50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
            {BADGES.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className={
                  'flex items-start gap-4 ' +
                  (i > 0 ? 'md:border-l md:border-border md:pl-8' : '')
                }
              >
                <Icon className="h-9 w-9 shrink-0 text-forest" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="text-sm leading-snug text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-background">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-14 sm:px-6 md:flex-row">
            <div className="relative h-44 w-64 shrink-0 overflow-hidden rounded-xl">
              <Image
                src="/images/testimonial.png"
                alt="A person smiling outdoors"
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
            <div>
              <Quote className="h-8 w-8 text-brand" />
              <blockquote className="mt-2 font-serif text-2xl italic leading-snug text-foreground text-pretty sm:text-3xl">
                &ldquo;You don&apos;t have to be rich to make a difference. A
                small act of kindness can change a life.&rdquo;
              </blockquote>
              {/* <p className="mt-4 font-semibold text-forest">&ndash; Unknown</p> */}
            </div>
          </div>
        </section>

        {/* Partners */}
        {/* <section className="border-t border-border bg-background pb-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="pt-10 text-center text-xs font-semibold tracking-widest text-muted-foreground">
              PROUDLY TRUSTED BY OUR PARTNERS
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {PARTNERS.map((name) => (
                <span
                  key={name}
                  className="text-lg font-bold uppercase tracking-wide text-muted-foreground/70"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <SiteFooter />
    </div>
  )
}
