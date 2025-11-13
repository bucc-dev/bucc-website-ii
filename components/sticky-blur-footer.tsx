"use client"

export default function StickyBlurFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none h-16">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgb(from var(--background) r g b / 0.3) 40%, rgb(from var(--background) r g b / 0.8) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      />
    </div>
  )
}
