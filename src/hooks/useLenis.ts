import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const animFrame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animFrame)
      lenis.destroy()
    }
  }, [])

  return lenisRef
}
