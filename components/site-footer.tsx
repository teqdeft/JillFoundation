import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'

function SocialIcon({ path, viewBox = '0 0 24 24' }: { path: string; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const SOCIALS = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.2V14h2.3v7h3z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 8.1a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm6.2-8.3a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M6.94 5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.3 8.4h3.3V21H3.3V8.4zm5.3 0h3.16v1.72h.05c.44-.83 1.5-1.72 3.1-1.72 3.3 0 3.9 2.17 3.9 5v6.6h-3.3v-5.85c0-1.4 0-3.2-1.95-3.2s-2.25 1.52-2.25 3.1V21H8.6V8.4z',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.3c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2.2 8.8 2.2 10.5v1.8c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.7.2 6.5.3 6.5.3s4 0 6.8-.3c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.8c0-1.7-.2-3.3-.2-3.3zM9.9 14.6V8.9l5.2 2.9-5.2 2.8z',
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-forest-foreground/75">
              Empowering individuals to achieve optimal mental wellness and
              build brighter futures through compassionate care and community
              support.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ path, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-foreground/10 text-forest-foreground transition-all duration-200 hover:bg-brand hover:scale-110"
                >
                  <SocialIcon path={path} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-forest-foreground/60">
              QUICK LINKS
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-forest-foreground/85 hover:text-brand-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-forest-foreground/85 hover:text-brand-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-forest-foreground/85 hover:text-brand-foreground">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-xs font-semibold tracking-widest text-forest-foreground/60">
              GET INVOLVED
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {['Volunteer', 'Partner With Us', 'Host a Workshop'].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="text-forest-foreground/85 hover:text-brand-foreground">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div> */}

          {/* <div>
            <h3 className="text-xs font-semibold tracking-widest text-forest-foreground/60">
              TRANSPARENCY
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {['Annual Reports', 'Financials', 'Privacy Policy'].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="text-forest-foreground/85 hover:text-brand-foreground">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div> */}

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-forest-foreground/60">
              CONTACT US
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-forest-foreground/85">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                +1 (833) 237-5455
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                support@jillfoundation.org
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  Financial District, CA
                  <br />
                  San Francisco, CA 94111, USA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-forest-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-forest-foreground/60 sm:flex-row sm:px-6">
          <p>&copy; 2024 JILL Foundation. All Rights Reserved.</p>
          <p>JILL Foundation is a 501(c)(3) nonprofit organization.</p>
        </div>
      </div>
    </footer>
  )
}
