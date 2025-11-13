"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import TargetCursor from "@/components/target-cursor"
import ScrollFadeIn from "@/components/scroll-fade-in"
import Footer from "@/components/footer"
import Squares from "@/components/squares"
import { XMarkIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import { 
  BriefcaseIcon,
  AcademicCapIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid"
import leadershipData from "@/data/leadership-2025.json"

type Leader = {
  id: string
  name: string
  position?: string
  photo: string
  level?: string
  department: string
  shortBio?: string
  fullBio?: string
  achievements?: string[]
  currentProjects?: string[]
  askMeAbout?: string[]
  contact?: {
    email: string
    linkedin?: string
    twitter?: string
  }
  role?: string
}

export default function LeadershipPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2025)
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null)

  const openModal = (leader: Leader) => {
    setSelectedLeader(leader)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedLeader(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="bg-white overflow-x-hidden" style={{ touchAction: 'auto' }}>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[75vh] flex items-center pt-24 pb-20 px-4 md:px-8 overflow-hidden"
        style={{ backgroundColor: "#0A1F44" }}
      >
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-leadership-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-leadership-hero)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <ScrollFadeIn>
            <div className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6">LEADERSHIP</div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Funnel Display, sans-serif" }}
            >
              The Visionaries Behind
              <br />
              <span className="text-blue-400">the Movement</span>
            </h1>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              These are the elected student leaders driving BUCC forward.
              <br />
              By members, for members.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Year Selector */}
      <section className="py-12 px-4 md:px-8 bg-gray-50 border-b border-gray-200" style={{ touchAction: 'auto' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-700 font-semibold mb-4">View Leadership from:</p>
          <div className="flex justify-center gap-4 flex-wrap" style={{ touchAction: 'auto' }}>
            <button
              data-cursor="block"
              onClick={() => setSelectedYear(2025)}
              onTouchEnd={(e) => {
                e.preventDefault()
                setSelectedYear(2025)
              }}
              className={`px-8 py-3 font-bold text-lg transition-all ${
                selectedYear === 2025
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
              style={{ touchAction: 'auto', cursor: 'pointer' }}
            >
              2025
            </button>
            <button
              data-cursor="block"
              onClick={() => setSelectedYear(2024)}
              onTouchEnd={(e) => {
                e.preventDefault()
                setSelectedYear(2024)
              }}
              className={`px-8 py-3 font-bold text-lg transition-all ${
                selectedYear === 2024
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
              style={{ touchAction: 'auto', cursor: 'pointer' }}
            >
              2024
            </button>
            <button
              data-cursor="block"
              onClick={() => setSelectedYear(0)}
              onTouchEnd={(e) => {
                e.preventDefault()
                setSelectedYear(0)
              }}
              className={`px-8 py-3 font-bold text-lg transition-all ${
                selectedYear === 0
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
              style={{ touchAction: 'auto', cursor: 'pointer' }}
            >
              ARCHIVE
            </button>
          </div>
        </div>
      </section>

      {/* Content based on selected year */}
      {selectedYear === 2025 && (
        <>
          {/* Executive Board Section */}
          <section className="py-24 md:py-32 px-4 md:px-8 bg-white" style={{ touchAction: 'auto' }}>
            <div className="max-w-7xl mx-auto" style={{ touchAction: 'auto' }}>
              <ScrollFadeIn>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">THE EXECUTIVE BOARD</h2>
                  <p className="text-xl text-gray-600">The core leadership team elected to drive BUCC's vision forward.</p>
                </div>
              </ScrollFadeIn>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" style={{ touchAction: 'auto' }}>
                {leadershipData.executives.map((exec, index) => (
                  <ScrollFadeIn key={exec.id} delay={0.1 * index}>
                    <div
                      data-cursor="block"
                      onClick={() => openModal(exec)}
                      onTouchEnd={(e) => {
                        e.preventDefault()
                        openModal(exec)
                      }}
                      className="group cursor-pointer bg-white border border-gray-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 w-full max-w-sm"
                      style={{ touchAction: 'auto', cursor: 'pointer' }}
                    >
                      {/* Photo */}
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={exec.photo}
                          alt={exec.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                          <p className="text-white text-sm font-semibold uppercase tracking-wider mb-1">
                            {exec.department}
                          </p>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-6 text-center">
                        <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {exec.name}
                        </h3>
                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
                          {exec.position}
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{exec.shortBio}</p>
                        <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                          <span>View Profile</span>
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  </ScrollFadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Senators Section */}
          <section className="py-24 md:py-32 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <ScrollFadeIn>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">THE SENATE</h2>
                  <p className="text-xl text-gray-600">Elected student representatives from every level.</p>
                </div>
              </ScrollFadeIn>

              {Object.entries(leadershipData.senators).map(([level, senators], idx) => (
                <div key={level} className="mb-16 last:mb-0">
                  <ScrollFadeIn delay={0.1 * idx}>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">
                      {level} LEVEL SENATORS
                    </h3>
                  </ScrollFadeIn>

                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    {senators.map((senator, index) => (
                      <ScrollFadeIn key={senator.id} delay={0.05 * index}>
                        <div
                          data-cursor="block"
                          onClick={() => openModal(senator)}
                          className="group cursor-pointer bg-white border border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 w-full max-w-sm"
                        >
                          {/* Photo */}
                          <div className="relative h-64 overflow-hidden">
                            <img
                              src={senator.photo}
                              alt={senator.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                          </div>

                          {/* Info */}
                          <div className="p-4 text-center">
                            <h4 className="text-lg font-black text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                              {senator.name}
                            </h4>
                            <p className="text-blue-600 font-semibold text-xs uppercase tracking-wide mb-2">
                              {senator.position}
                            </p>
                            <p className="text-gray-600 text-xs">{senator.department}</p>
                          </div>
                        </div>
                      </ScrollFadeIn>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Committees Section */}
          <section className="py-24 md:py-32 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <ScrollFadeIn>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">THE COMMITTEES</h2>
                  <p className="text-xl text-gray-600">Specialized teams driving specific initiatives.</p>
                </div>
              </ScrollFadeIn>

              {Object.entries(leadershipData.committees).map(([key, committee], idx) => (
                <div key={key} className="mb-16 last:mb-0">
                  <ScrollFadeIn delay={0.1 * idx}>
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{committee.name}</h3>
                      <p className="text-gray-600 text-lg">{committee.description}</p>
                    </div>
                  </ScrollFadeIn>

                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    {committee.members.map((member, index) => (
                      <ScrollFadeIn key={member.id} delay={0.05 * index}>
                        <div
                          data-cursor="block"
                          onClick={() => openModal(member)}
                          className="group cursor-pointer bg-white border border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 w-full max-w-sm"
                        >
                          {/* Photo */}
                          <div className="relative h-64 overflow-hidden">
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                          </div>

                          {/* Info */}
                          <div className="p-4 text-center">
                            <h4 className="text-lg font-black text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                              {member.name}
                            </h4>
                            <p className="text-blue-600 font-semibold text-xs uppercase tracking-wide mb-2">
                              {member.role}
                            </p>
                            <p className="text-gray-600 text-xs">{member.department}</p>
                          </div>
                        </div>
                      </ScrollFadeIn>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Archive View */}
      {selectedYear === 0 && (
        <section className="py-24 md:py-32 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollFadeIn>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Historical Archive</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                BUCC has been building excellence since 2015, but comprehensive leadership records weren't systematically
                documented before 2024. We're committed to preserving our history going forward.
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-12 text-left">
                <h3 className="text-2xl font-black text-gray-900 mb-4">Help Us Preserve BUCC's History</h3>
                <p className="text-gray-700 mb-4">
                  If you served in BUCC leadership between 2015-2023, we'd love to hear from you! Share your story and
                  help us complete our historical record.
                </p>
                <button
                  data-cursor="block"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
                >
                  Submit Your Information
                </button>
              </div>
            </ScrollFadeIn>
          </div>
        </section>
      )}

      {/* Want to Lead CTA */}
      <section className="relative py-32 md:py-40 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: "#0A1F44" }}>
        {/* Animated Squares Background */}
        <div className="absolute inset-0 opacity-30">
          <Squares 
            speed={0.5} 
            squareSize={40}
            direction='diagonal'
            borderColor='rgba(59, 130, 246, 0.3)'
            hoverFillColor='rgba(37, 99, 235, 0.2)'
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <ScrollFadeIn>
            <div className="inline-block px-6 py-2 bg-blue-500/20 border border-blue-400/30 mb-8">
              <p className="text-blue-300 font-bold uppercase tracking-widest text-sm">JOIN THE MOVEMENT</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
              style={{ fontFamily: "Funnel Display, sans-serif" }}
            >
              Ready to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Make History?
              </span>
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16 max-w-3xl mx-auto">
              Leadership applications open every September. If you're ready to drive change, build community, and leave
              your mark on BUCC's legacy—
              <span className="text-white font-bold"> we're ready for you.</span>
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#elections"
                data-cursor="block"
                className="group px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center gap-3"
              >
                Learn About Elections
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="mailto:leadership@buccclub.org"
                data-cursor="block"
                className="group px-10 py-5 bg-white hover:bg-gray-100 text-gray-900 font-black text-lg transition-all hover:scale-105 hover:shadow-2xl border-2 border-white flex items-center gap-3"
              >
                Contact Leadership
                <EnvelopeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.4}>
            <div className="mt-16 pt-12 border-t border-blue-400/20">
              <p className="text-blue-300 text-sm uppercase tracking-widest font-bold">
                Elections held annually • Open to all active members • By members, for members
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Profile Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
          style={{ cursor: 'default' }}
        >
          <div
            className="bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
            style={{ cursor: 'default' }}
          >
            {/* Close Button */}
            <button
              data-cursor="block"
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 p-2 rounded-full transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-gray-900" />
            </button>

            <div className="grid md:grid-cols-5">
              {/* Left Side - Photo & Quick Info */}
              <div className="md:col-span-2 bg-gray-50">
                <div className="relative h-96 md:h-full min-h-[400px]">
                  <img
                    src={selectedLeader.photo}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                </div>

                <div className="p-8">
                  {selectedLeader.level && (
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3 text-gray-700">
                        <AcademicCapIcon className="w-5 h-5 text-blue-600" />
                        <span>{selectedLeader.level} • {selectedLeader.department}</span>
                      </div>
                    </div>
                  )}

                  {selectedLeader.contact && (
                    <div className="space-y-3">
                      <a
                        data-cursor="block"
                        href={`mailto:${selectedLeader.contact.email}`}
                        className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        <EnvelopeIcon className="w-5 h-5" />
                        <span>Email</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Full Details */}
              <div className="md:col-span-3 p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{selectedLeader.name}</h2>
                <p className="text-xl text-blue-600 font-bold uppercase tracking-wide mb-8">
                  {selectedLeader.position || selectedLeader.role}
                </p>

                {selectedLeader.fullBio && (
                  <div className="mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">{selectedLeader.fullBio}</p>
                  </div>
                )}

                {selectedLeader.achievements && selectedLeader.achievements.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-black text-gray-900 mb-4">Key Achievements</h3>
                    <ul className="space-y-2">
                      {selectedLeader.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-blue-600 mt-1">→</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedLeader.currentProjects && selectedLeader.currentProjects.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-black text-gray-900 mb-4">Currently Working On</h3>
                    <ul className="space-y-2">
                      {selectedLeader.currentProjects.map((project, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-blue-600">•</span>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedLeader.askMeAbout && selectedLeader.askMeAbout.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">Ask Me About</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedLeader.askMeAbout.map((topic, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
