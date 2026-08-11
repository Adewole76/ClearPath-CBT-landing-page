import { useEffect, useRef } from "react"

const ParticleCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const PARTICLE_COUNT = 72
    const CONNECTION_DIST = 160
    const MOUSE_RADIUS = 180

    let width = 0
    let height = 0
    let animId
    const mouse = { x: -9999, y: -9999 }
    let particles = []

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * devicePixelRatio
      canvas.height = height * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    const spawn = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1.2,
        opacity: Math.random() * 0.5 + 0.25,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Update particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < MOUSE_RADIUS) {
          const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.012
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force

          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
          if (speed > 1.8) {
            p.vx = (p.vx / speed) * 1.8
            p.vy = (p.vy / speed) * 1.8
          }
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.18
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(224, 92, 69, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 75, 53, ${p.opacity})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    spawn()
    draw()
const onResize = () => {
  resize()
  spawn()
}

window.addEventListener("resize", onResize)
window.addEventListener("mousemove", onMove)
window.addEventListener("mouseleave", onLeave)

return () => {
  cancelAnimationFrame(animId)
  window.removeEventListener("resize", onResize)
  window.removeEventListener("mousemove", onMove)
  window.removeEventListener("mouseleave", onLeave)
}

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
    />
  )
}

export default ParticleCanvas