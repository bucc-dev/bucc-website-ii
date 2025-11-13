import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import CardSwapSection from "@/components/card-swap-section"
import LeadershipSection from "@/components/leadership-section"
import EventsSection from "@/components/events-section"
import BlogSection from "@/components/blog-section"
import GallerySection from "@/components/gallery-section"
import PartnersSection from "@/components/partners-section"
import TargetCursor from "@/components/target-cursor"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Navbar />
      <Hero />
      <AboutSection />
      <CardSwapSection />
      <LeadershipSection />

      {/* Events and Blog Section Container - Light Theme */}
      <div className="relative z-0 overflow-x-hidden">
        <div className="relative z-0 pt-20" style={{ backgroundColor: "#0A1F44" }}>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-events-main" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-events-main)" />
            </svg>
          </div>
          <EventsSection />
          {/* PartnershipSection component removed */}
        </div>

        {/* Blog Section in White Background */}
        <BlogSection />

        {/* Partners Section */}
        <PartnersSection />

        {/* Gallery Section */}
        <GallerySection />

        <CTASection />
        <Footer />
      </div>
    </div>
  )
}
