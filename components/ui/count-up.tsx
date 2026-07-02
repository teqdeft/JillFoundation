'use client'

import { useEffect, useRef, useState } from 'react'

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
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const stepDuration = duration / steps
    let frame = 0

    const timer = setInterval(() => {
      frame++
      const progress = frame / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      current = Math.round(eased * end)
      setCount(current)
      if (frame >= steps) {
        setCount(end)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [started, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
