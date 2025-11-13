"use client"

import type React from "react"

export interface ChromaItem {
  image: string
  title: string
  subtitle: string
  handle?: string
  location?: string
  url?: string
  gradient?: string
}

export interface ChromaGridProps {
  items?: ChromaItem[]
  className?: string
  showButton?: boolean
  onLearnMore?: () => void
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  showButton = true,
  onLearnMore,
}) => {
  const demo: ChromaItem[] = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      url: "https://github.com/",
      gradient: "linear-gradient(to right, #6a11cb, #2575fc)",
    },
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "Jordan Chen",
      subtitle: "DevOps Engineer",
      handle: "@jordanchen",
      url: "https://linkedin.com/in/",
      gradient: "linear-gradient(to right, #ff7e5f, #feb47b)",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Morgan Blake",
      subtitle: "UI/UX Designer",
      handle: "@morganblake",
      url: "https://dribbble.com/",
      gradient: "linear-gradient(to right, #76b852, #8DC26F)",
    },
    {
      image: "https://i.pravatar.cc/300?img=16",
      title: "Casey Park",
      subtitle: "Data Scientist",
      handle: "@caseypark",
      url: "https://kaggle.com/",
      gradient: "linear-gradient(to right, #f7971e, #ffd200)",
    },
    {
      image: "https://i.pravatar.cc/300?img=25",
      title: "Sam Kim",
      subtitle: "Mobile Developer",
      handle: "@thesamkim",
      url: "https://github.com/",
      gradient: "linear-gradient(to right, #4facfe, #00f3ff)",
    },
    {
      image: "https://i.pravatar.cc/300?img=60",
      title: "Tyler Rodriguez",
      subtitle: "Cloud Architect",
      handle: "@tylerrod",
      url: "https://aws.amazon.com/",
      gradient: "linear-gradient(to right, #00c6ff, #0072ff)",
    },
  ]

  const data = items?.length ? items : demo

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className={`relative w-full flex flex-col items-center gap-8 ${className}`}>
      <div className="w-full flex flex-wrap justify-center items-start gap-3 px-2 sm:px-4">
        {data.map((c, i) => (
          <article
            key={i}
            onClick={() => handleCardClick(c.url)}
            className="group relative flex flex-col w-full sm:w-[300px] max-w-[calc(100%-1rem)] rounded-[20px] overflow-hidden border-2 border-transparent transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/50"
            style={
              {
                background: c.gradient,
              } as React.CSSProperties
            }
          >
            <div className="relative z-10 flex-1 p-[10px] box-border">
              <img
                src={c.image || "/placeholder.svg"}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
              <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
              {c.handle && <span className="text-[0.95rem] opacity-80 text-right">{c.handle}</span>}
              <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>
              {c.location && <span className="text-[0.85rem] opacity-85 text-right">{c.location}</span>}
            </footer>
          </article>
        ))}
      </div>

      {showButton && (
        <button 
          data-cursor="block"
          onClick={onLearnMore}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors relative"
        >
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400 pointer-events-none" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400 pointer-events-none" />
          <span>Learn More</span>
        </button>
      )}
    </div>
  )
}

export default ChromaGrid
