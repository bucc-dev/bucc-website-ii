"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollFadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

function ScrollFadeIn({ children, delay = 0, className = "" }: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0")
              entry.target.classList.remove("opacity-0", "translate-y-7")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`opacity-0 translate-y-7 transition-all duration-600 ease-out ${className}`}>
      {children}
    </div>
  )
}

export { ScrollFadeIn }
export default ScrollFadeIn
