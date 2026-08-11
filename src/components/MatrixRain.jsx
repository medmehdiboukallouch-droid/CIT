import { useEffect, useRef } from 'react'

const GLYPHS = '01アイウエオカキクケコサシスセソ<>{}[]#$/\\|+=*&%'

/**
 * Very low-opacity falling-glyph backdrop. Deliberately dim — it should read as
 * texture behind the content, never as decoration competing with it.
 */
export default function MatrixRain({ opacity = 0.11 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let columns = []
    let raf
    let last = 0

    const setup = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const fontSize = 14
      const count = Math.floor(canvas.width / fontSize)
      columns = Array.from({ length: count }, () => Math.random() * -canvas.height)
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`
    }

    const draw = (t) => {
      raf = requestAnimationFrame(draw)
      if (t - last < 55) return
      last = t

      ctx.fillStyle = 'rgba(2, 3, 4, 0.16)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < columns.length; i++) {
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        const x = i * 14
        const y = columns[i]
        ctx.fillStyle = Math.random() > 0.985 ? 'rgba(53,243,126,0.9)' : 'rgba(31,191,92,0.45)'
        ctx.fillText(char, x, y)
        columns[i] = y > canvas.height && Math.random() > 0.975 ? 0 : y + 14
      }
    }

    setup()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', setup)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', setup)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ opacity }}
    />
  )
}
