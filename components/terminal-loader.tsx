"use client"

import { useEffect, useState } from "react"

interface TerminalLoaderProps {
  onComplete?: () => void
}

// Matrix background component
function MatrixRain() {
  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas") as HTMLCanvasElement
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    function draw() {
      if (!ctx || !canvas) return
      
      ctx.fillStyle = "rgba(0, 15, 45, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "rgba(59, 130, 246, 0.15)" // Blue color with low opacity
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      id="matrix-canvas"
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.3 }}
    />
  )
}

export default function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const loadingLines = [
    { text: "$ Initializing BUCC Portal...", delay: 0 },
    { text: "> Establishing secure connection...", delay: 600 },
    { text: "> Loading authentication modules...", delay: 1200 },
    { text: "> Fetching community database...", delay: 1800 },
    { text: "> Compiling innovation engine...", delay: 2400 },
    { text: "> Syncing creative workspace...", delay: 3000 },
    { text: "> Building tech ecosystem...", delay: 3600 },
    { text: "> Configuring user experience...", delay: 4200 },
    { text: "> Optimizing performance...", delay: 4800 },
    { text: "> Finalizing system checks...", delay: 5400 },
    { text: "✓ All systems operational", delay: 6000 },
    { text: "→ Welcome to BUCC", delay: 6400, highlight: true },
  ]

  useEffect(() => {
    // Progress bar animation - 9.8 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 98) // Will reach 100% in 9.8 seconds

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    // Show lines progressively
    loadingLines.forEach((line, index) => {
      setTimeout(() => {
        setCurrentLineIndex(index)
      }, line.delay)
    })

    // Complete animation after 9.8 seconds
    setTimeout(() => {
      setIsComplete(true)
      setTimeout(() => {
        onComplete?.()
      }, 500)
    }, 9800)
  }, [])

  if (isComplete) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center font-mono"
      style={{
        background: "linear-gradient(135deg, #000f2d 0%, #001a4d 50%, #000f2d 100%)",
        animation: isComplete ? "fadeOut 0.5s ease-out forwards" : "none",
      }}
    >
      {/* Matrix Rain Background */}
      <MatrixRain />

      <div className="relative z-10 w-full max-w-3xl px-6 md:px-8">
        {/* Terminal Header */}
        <div className="mb-8 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
            <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
            <div className="w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
          </div>
          <div className="ml-4 text-blue-400/60 text-sm">BUCC Terminal v2.0.0</div>
        </div>

        {/* Terminal Content */}
        <div className="space-y-2 mb-8 min-h-[300px]">
          {loadingLines.slice(0, currentLineIndex + 1).map((line, index) => (
            <div
              key={index}
              className={`text-sm md:text-base transition-all duration-300 ${
                line.highlight
                  ? "text-cyan-300 font-semibold text-lg md:text-xl glow-text"
                  : index === currentLineIndex
                    ? "text-blue-300"
                    : "text-blue-400/60"
              }`}
              style={{
                animation: index === currentLineIndex ? "typewriter 0.3s steps(30)" : "none",
              }}
            >
              {line.text}
              {index === currentLineIndex && !line.highlight && (
                <span className="inline-block w-2 h-4 ml-1 bg-blue-400 animate-pulse shadow-lg shadow-blue-400/50" />
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-blue-400/60">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-blue-950/50 rounded-full overflow-hidden border border-blue-800/30">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all duration-300 ease-out shadow-lg shadow-blue-500/50"
              style={{
                width: `${progress}%`,
                backgroundSize: "200% 100%",
                animation: "shimmer 2s infinite",
              }}
            />
          </div>
          {/* Progress Blocks */}
          <div className="flex gap-1 mt-3">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-sm transition-all duration-150 ${
                  i < Math.floor((progress / 100) * 50)
                    ? i < Math.floor((progress / 100) * 50) - 5
                      ? "bg-blue-600 shadow-sm shadow-blue-600/50"
                      : "bg-cyan-400 shadow-sm shadow-cyan-400/50"
                    : "bg-blue-950/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 text-center text-xs text-blue-400/40">
          <p className="animate-pulse">Where Ideas Become Impact</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes typewriter {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .glow-text {
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.5),
                       0 0 20px rgba(34, 211, 238, 0.3),
                       0 0 30px rgba(34, 211, 238, 0.2);
        }
      `}</style>
    </div>
  )
}
