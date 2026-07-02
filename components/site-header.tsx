'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const NAV = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'DONATE', href: '/donate' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-forest text-forest-foreground">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo variant="light" />
     


        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-sm font-medium tracking-wide transition-colors hover:text-brand-foreground',
                  active ? 'text-forest-foreground' : 'text-forest-foreground/85',
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            
            className="hidden items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-sm transition-all duration-200 hover:bg-brand/90 hover:shadow-md hover:scale-[1.03] active:scale-[0.97] sm:inline-flex"
          >
            DONATE NOW
            <Heart className="h-4 w-4 fill-current" />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-forest-foreground md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-forest-foreground/10 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-md px-2 py-3 text-sm font-medium',
                  pathname === item.href
                    ? 'text-forest-foreground'
                    : 'text-forest-foreground/80',
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
