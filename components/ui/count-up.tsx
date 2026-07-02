'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export function CountUp({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className,
}: {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const [count, setCount] = useState(0)
  const startedRef = useRef(false)
  const ref = useRef<HTMLSpanElement>(null)

  const animate = useCallback(() => {
    if (startedRef.current) return
    startedRef.current = true
    const steps = 60
    const stepDuration = duration / steps
    let frame = 0

    const timer = setInterval(() => {
      frame++
      const progress = frame / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (frame >= steps) {
        setCount(end)
        clearInterval(timer)
      }
    }, stepDuration)
  }, [end, duration])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate()
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [animate])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
