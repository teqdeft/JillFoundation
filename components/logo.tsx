import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'light',
}: {
  className?: string
  /** 'light' = for dark backgrounds (white text), 'dark' = for light backgrounds */
  variant?: 'light' | 'dark'
}) {
  return (
    <Link href="/" className={cn('flex items-center', className)}>
      <Image
        src="/logo.svg"
        alt="JILL Foundation"
        width={126}
        height={42}
        priority
      />
    </Link>
  )
}
