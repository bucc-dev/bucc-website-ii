"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import TargetCursor from "@/components/target-cursor"
import ScrollFadeIn from "@/components/scroll-fade-in"
import Footer from "@/components/footer"
import Squares from "@/components/squares"
import Threads from "@/components/threads"
import { CheckCircleIcon, ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid"

type Stage = 'initial' | 'notReady' | 'secondChallenge' | 'finalMessage' | 'form' | 'submitted'

type FormData = {
  // Step 1
  firstName: string
  lastName: string
  email: string
  phone: string
  // Step 2
  department: string
  level: string
  matricNumber: string
  graduationYear: string
  // Step 3
  howHeard: string
  interests: string[]
  experience: string
  languages: string
  // Step 4
  whyJoin: string
  hopes: string
  additional: string
}

export default function JoinPage() {
  const [stage, setStage] = useState<Stage>('initial')
  const [noClickCount, setNoClickCount] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    level: "",
    matricNumber: "",
    graduationYear: "",
    howHeard: "",
    interests: [],
    experience: "",
    languages: "",
    whyJoin: "",
    hopes: "",
    additional: ""
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNo = () => {
    setNoClickCount(prev => prev + 1)
    if (noClickCount >= 1) {
      // Easter egg triggered
      setStage('notReady')
      setTimeout(scrollToTop, 100)
    } else {
      setStage('notReady')
      setTimeout(scrollToTop, 100)
    }
  }

  const handleMaybeNot = () => {
    setNoClickCount(prev => prev + 1)
    if (noClickCount >= 1) {
      // Easter egg triggered - stay on current stage but will show different content
      setStage('notReady')
      setTimeout(scrollToTop, 100)
    } else {
      setStage('notReady')
      setTimeout(scrollToTop, 100)
    }
  }

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone)
      case 2:
        return !!(formData.department && formData.level && formData.matricNumber && formData.graduationYear)
      case 3:
        return !!(formData.howHeard && formData.interests.length > 0 && formData.experience)
      case 4:
        return !!(formData.whyJoin && formData.hopes)
      default:
        return false
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4))
    } else {
      alert("Please fill in all required fields")
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(4)) {
      alert("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setStage('submitted')
  }

  const interests = [
    "Web Development",
    "Mobile Development",
    "Data Science",
    "UI/UX Design",
    "Cybersecurity",
    "Cloud Computing",
    "AI/ML",
    "Other"
  ]

  // Stage 1: Initial Challenge (without hero)
  if (stage === 'initial') {
    return (
      <div className="bg-white overflow-x-hidden">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <Navbar />

        {/* Challenge Section - Now starts right after navbar */}
        <section className="relative min-h-screen flex items-center justify-center py-24 md:py-32 px-4 md:px-8 bg-black overflow-hidden">
          {/* Threads Background */}
          <div className="absolute inset-0 w-full h-full">
            <Threads
              amplitude={1}
              distance={0}
              enableMouseInteraction={true}
            />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollFadeIn>
              <div className="mb-8 inline-block px-6 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
                <p className="text-blue-300 font-bold uppercase tracking-widest text-sm">LEVEL 1: THE FIRST TEST</p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight" style={{ fontFamily: "Funnel Display, sans-serif" }}>
                Think You Have
                <br />
                <span className="text-blue-400">What It Takes?</span>
              </h2>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16 max-w-3xl mx-auto">
                Joining BUCC means joining some of the <span className="text-white font-bold">best developers, designers, and innovators</span> in Africa. We don't accept everyone. We accept the ambitious.
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    setStage('secondChallenge')
                    setTimeout(scrollToTop, 100)
                  }}
                  data-cursor="block"
                  className="group relative px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105 overflow-hidden"
                >
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-300" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-300" />
                  <span className="relative z-10">YES, I'M READY</span>
                  <div className="absolute inset-0 bg-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </button>
                <button
                  onClick={handleNo}
                  data-cursor="block"
                  className="group relative px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold transition-all hover:scale-105"
                >
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-400 group-hover:border-gray-600" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-400 group-hover:border-gray-600" />
                  NO, NOT YET
                </button>
              </div>
            </ScrollFadeIn>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  // Stage 2A: Not Ready
  if (stage === 'notReady') {
    const showEasterEgg = noClickCount >= 2
    
    return (
      <div className="bg-white overflow-x-hidden">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <Navbar />

        <section className="relative min-h-screen flex items-center justify-center py-24 px-4 md:px-8 bg-black overflow-hidden">
          {/* Threads Background */}
          <div className="absolute inset-0 w-full h-full">
            <Threads
              amplitude={1}
              distance={0}
              enableMouseInteraction={true}
            />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {showEasterEgg ? (
              <>
                <ScrollFadeIn>
                  <div className="mb-8 inline-block px-6 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
                    <p className="text-blue-300 font-bold uppercase tracking-widest text-sm">⚠️ EASTER EGG UNLOCKED</p>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.1}>
                  <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight" style={{ fontFamily: "Funnel Display, sans-serif" }}>
                    Wait. You've Clicked
                    <br />
                    <span className="text-blue-400">"No" Twice Now.</span>
                  </h1>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.2}>
                  <div className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto space-y-6">
                    <p>Either you're <span className="text-blue-400 font-bold">testing us</span>, or you're <span className="text-blue-300 font-bold">genuinely unsure</span>.</p>
                    <p>If you're testing us: <span className="text-white font-bold">cute</span>. We like the curiosity. Here's the form.</p>
                    <p>If you're genuinely unsure: that's actually <span className="text-white font-bold">valid</span>. BUCC isn't for everyone, and that's by design. When you're ready, we're here.</p>
                    <p className="text-3xl font-black text-white" style={{ fontFamily: "Funnel Display, sans-serif" }}>What's it going to be?</p>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                      onClick={() => {
                        setStage('form')
                        setTimeout(scrollToTop, 100)
                      }}
                      data-cursor="block"
                      className="group relative px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105 overflow-hidden"
                    >
                      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-300" />
                      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-300" />
                      SHOW ME THE FORM
                    </button>
                    <a
                      href="/"
                      data-cursor="block"
                      className="group relative px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold transition-all hover:scale-105"
                    >
                      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-400 group-hover:border-gray-600" />
                      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-400 group-hover:border-gray-600" />
                      I NEED MORE TIME
                    </a>
                  </div>
                </ScrollFadeIn>
              </>
            ) : (
              <>
                <ScrollFadeIn>
                  <div className="mb-8 inline-block px-6 py-2 bg-gray-500/20 border border-gray-400/30 rounded-full">
                    <p className="text-gray-300 font-bold uppercase tracking-widest text-sm">LEVEL FAILED</p>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.1}>
                  <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8" style={{ fontFamily: "Funnel Display, sans-serif" }}>
                    <span className="text-white">Fair</span>{" "}
                    <span className="text-gray-400">Enough.</span>
                  </h1>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.2}>
                  <div className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto space-y-6">
                    <p>Not everyone is ready to push themselves beyond comfortable. Not everyone wants to spend <span className="text-gray-300 font-bold">late nights debugging code</span> with people who refuse to settle for mediocre. Not everyone has the hunger.</p>
                    <p className="text-3xl font-black text-gray-300" style={{ fontFamily: "Funnel Display, sans-serif" }}>And that's okay.</p>
                    <p>When you're ready to build something that matters, we'll be here.</p>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.3}>
                  <a
                    href="/"
                    data-cursor="block"
                    className="relative inline-block px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold transition-all hover:scale-105 mb-8 overflow-hidden group"
                  >
                    <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-500" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-500" />
                    Explore Our Website
                  </a>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.4}>
                  <button
                    onClick={() => {
                      setStage('initial')
                      setNoClickCount(0)
                      setTimeout(scrollToTop, 100)
                    }}
                    className="text-gray-400 hover:text-gray-300 text-sm underline transition-colors font-semibold"
                  >
                    Changed your mind? Start Over →
                  </button>
                </ScrollFadeIn>
              </>
            )}
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  // Stage 2B: Second Challenge
  if (stage === 'secondChallenge') {
    return (
      <div className="bg-white overflow-x-hidden">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <Navbar />

        <section className="relative min-h-screen flex items-center justify-center py-24 px-4 md:px-8 bg-black overflow-hidden">
          {/* Threads Background */}
          <div className="absolute inset-0 w-full h-full">
            <Threads
              amplitude={1}
              distance={0}
              enableMouseInteraction={true}
            />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollFadeIn>
              <div className="mb-8 inline-block px-6 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
                <p className="text-blue-300 font-bold uppercase tracking-widest text-sm">LEVEL 2: REALITY CHECK</p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-12 leading-tight" style={{ fontFamily: "Funnel Display, sans-serif" }}>
                Alright. Let's See
                <br />
                <span className="text-blue-400">If You Mean It.</span>
              </h1>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <div className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto space-y-4 text-left bg-gray-900/50 p-8 rounded-lg border border-gray-800">
                <p>BUCC isn't for people who dabble. It's not for people who <span className="text-gray-500 line-through">"kind of want to learn to code someday."</span> It's for people who are <span className="text-white font-bold">ready to show up, put in the work, and build things that matter</span>.</p>
                <p>This isn't an easy path. You'll be challenged. You'll <span className="text-blue-400 font-bold">debug at 2 AM</span>. You'll question if you can do this.</p>
                <p><span className="text-white font-bold">But</span> you'll also build products people use. You'll connect with brilliant minds. You'll become the developer you've been telling yourself you'd become "someday."</p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.3}>
              <h2 className="text-3xl md:text-5xl font-black mb-12" style={{ fontFamily: "Funnel Display, sans-serif" }}>
                <span className="text-white">Are You </span>
                <span className="text-blue-400">REALLY</span>
                <span className="text-white"> Ready?</span>
              </h2>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    setStage('finalMessage')
                    setTimeout(scrollToTop, 100)
                  }}
                  data-cursor="block"
                  className="group relative px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105 overflow-hidden"
                >
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-300" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-300" />
                  <span className="relative z-10">ABSOLUTELY</span>
                  <div className="absolute inset-0 bg-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500" />
                </button>
                <button
                  onClick={handleMaybeNot}
                  data-cursor="block"
                  className="group relative px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-400 hover:border-white hover:text-white font-semibold transition-all hover:scale-105"
                >
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-700 group-hover:border-gray-400" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-700 group-hover:border-gray-400" />
                  MAYBE NOT
                </button>
              </div>
            </ScrollFadeIn>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  // Stage 3: Final Message Before Form
  if (stage === 'finalMessage') {
    return (
      <div className="bg-white overflow-x-hidden">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <Navbar />

        <section className="relative min-h-screen flex items-center justify-center py-24 px-4 md:px-8 bg-black overflow-hidden">
          {/* Threads Background */}
          <div className="absolute inset-0 w-full h-full">
            <Threads
              amplitude={1}
              distance={0}
              enableMouseInteraction={true}
            />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollFadeIn>
              <div className="mb-8 inline-block px-6 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
                <p className="text-blue-300 font-bold uppercase tracking-widest text-sm">✓ LEVEL 3: FINAL BOSS</p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8" style={{ fontFamily: "Funnel Display, sans-serif" }}>
                <span className="text-blue-400">That's What We</span>
                <br />
                <span className="text-white">Like to Hear.</span>
              </h1>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <p className="text-2xl md:text-3xl text-blue-300 font-bold mb-12">Alright, future BUCC member. Here's what happens next.</p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.3}>
              <div className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto space-y-4 text-left bg-black/40 p-8 rounded-lg border border-blue-500/30 backdrop-blur-sm">
                <p>You fill out this application <span className="text-white font-bold">honestly</span>. No <span className="line-through text-red-400">ChatGPT essays</span>. No <span className="line-through text-red-400">copy-paste answers</span>. We want to know the real you—what drives you, what you want to build, why BUCC.</p>
                <p>Our team <span className="text-blue-300 font-bold">reviews every single application</span>. We're looking for curiosity, hunger, and potential. <span className="text-white font-bold">Not perfection</span>.</p>
                <p>We'll review every application. If you're serious, if you're hungry, if you're ready to be pushed—<span className="text-blue-400 font-bold">we'll get back to you</span>.</p>
                <p className="text-xl font-black text-white border-l-4 border-blue-500 pl-4">Don't waste our time with half-hearted answers. We can tell the difference.</p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.4}>
              <p className="text-4xl md:text-5xl font-black text-white mb-12" style={{ fontFamily: "Funnel Display, sans-serif" }}>
                <span className="text-blue-400">Ready?</span>
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    setStage('form')
                    setTimeout(scrollToTop, 100)
                  }}
                  data-cursor="block"
                  className="group relative px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105 overflow-hidden"
                >
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-300" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-300" />
                  <span className="relative z-10">Let's Do This</span>
                  <div className="absolute inset-0 bg-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500" />
                </button>
                <button
                  onClick={() => {
                    setStage('notReady')
                    setNoClickCount(0)
                    setTimeout(scrollToTop, 100)
                  }}
                  data-cursor="block"
                  className="group relative px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold transition-all hover:scale-105"
                >
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-400 group-hover:border-gray-600" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-400 group-hover:border-gray-600" />
                  Actually, No
                </button>
              </div>
            </ScrollFadeIn>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  // Stage 4: Submitted
  if (stage === 'submitted') {
    return (
      <div className="bg-white overflow-x-hidden">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <Navbar />

        <section className="min-h-screen flex items-center justify-center py-24 px-4 md:px-8" style={{ backgroundColor: "#0A1F44" }}>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollFadeIn>
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="w-16 h-16 text-white" />
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "Funnel Display, sans-serif" }}>
                Application Received!
              </h1>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Thank you for applying to join BUCC. We're excited that you want to be part of our community.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Your application is being reviewed by our team. We'll get back to you via email within <span className="font-bold text-white">2 weeks</span>. Keep an eye on your inbox (and spam folder, just in case).
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-12">
                In the meantime, follow us on social media to see what we're building.
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.3}>
              <div className="flex justify-center gap-4 mb-12">
                <a href="https://instagram.com/bucc" data-cursor="block" className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-colors">
                  Instagram
                </a>
                <a href="https://twitter.com/bucc" data-cursor="block" className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-colors">
                  Twitter
                </a>
                <a href="https://linkedin.com/company/bucc" data-cursor="block" className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-colors">
                  LinkedIn
                </a>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.4}>
              <a href="/" data-cursor="block" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors">
                Return to Homepage
              </a>
            </ScrollFadeIn>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  // Stage 4: The Application Form
  return (
    <div className="bg-white overflow-x-hidden">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Navbar />

      {/* Form Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-8">
              <p className="text-sm text-gray-600 italic mb-8 max-w-2xl mx-auto">
                This is where we separate the curious from the committed. Take your time. Be honest. Show us who you are.
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Application Form</h2>
              <p className="text-lg text-gray-600">No ChatGPT. No copy-paste. Just you.</p>
            </div>
          </ScrollFadeIn>

          {/* Stepper */}
          <ScrollFadeIn delay={0.1}>
            <div className="mb-12">
              <div className="flex items-center justify-between max-w-2xl mx-auto">
                {[1, 2, 3, 4].map((step, idx) => (
                  <div key={step} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                        step < currentStep ? "bg-blue-600 text-white" :
                        step === currentStep ? "bg-blue-600 text-white ring-4 ring-blue-200" :
                        "bg-gray-300 text-gray-600"
                      }`}>
                        {step < currentStep ? <CheckCircleIcon className="w-6 h-6" /> : step}
                      </div>
                      <span className="text-xs mt-2 font-semibold text-gray-600 hidden sm:block">
                        {step === 1 ? "Personal" : step === 2 ? "Academic" : step === 3 ? "Tech Journey" : "Why BUCC"}
                      </span>
                    </div>
                    {idx < 3 && (
                      <div className={`flex-1 h-1 mx-2 transition-all ${step < currentStep ? "bg-blue-600" : "bg-gray-300"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>

          {/* Form */}
          <ScrollFadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-lg">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Personal Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateField("firstName", e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateField("lastName", e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                      required
                    />
                  </div>

                  <div className="flex justify-end pt-6">
                    <button
                      type="button"
                      onClick={nextStep}
                      data-cursor="block"
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors flex items-center gap-2"
                    >
                      Next
                      <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Academic Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Academic Information</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Department *</label>
                    <select
                      value={formData.department}
                      onChange={(e) => updateField("department", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                      required
                    >
                      <option value="">Select your department</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Current Level *</label>
                    <select
                      value={formData.level}
                      onChange={(e) => updateField("level", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                      required
                    >
                      <option value="">Select your level</option>
                      <option value="100L">100 Level</option>
                      <option value="200L">200 Level</option>
                      <option value="300L">300 Level</option>
                      <option value="400L">400 Level</option>
                      <option value="500L">500 Level</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Matric Number *</label>
                    <input
                      type="text"
                      value={formData.matricNumber}
                      onChange={(e) => updateField("matricNumber", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Graduation Year *</label>
                    <input
                      type="text"
                      value={formData.graduationYear}
                      onChange={(e) => updateField("graduationYear", e.target.value)}
                      placeholder="e.g., 2027"
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      data-cursor="block"
                      className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold transition-colors flex items-center gap-2"
                    >
                      <ChevronLeftIcon className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      data-cursor="block"
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors flex items-center gap-2"
                    >
                      Next
                      <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Your Tech Journey */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Your Tech Journey</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">How did you hear about BUCC? *</label>
                    <input
                      type="text"
                      value={formData.howHeard}
                      onChange={(e) => updateField("howHeard", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">What are you interested in learning? *</label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {interests.map(interest => (
                        <label key={interest} className="flex items-center gap-3 p-3 border-2 border-gray-300 hover:border-blue-600 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => toggleInterest(interest)}
                            className="w-5 h-5 text-blue-600"
                          />
                          <span className="font-semibold text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Do you have any programming experience? *</label>
                    <div className="space-y-2">
                      {["Yes", "No", "A little"].map(option => (
                        <label key={option} className="flex items-center gap-3 p-3 border-2 border-gray-300 hover:border-blue-600 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="experience"
                            value={option}
                            checked={formData.experience === option}
                            onChange={(e) => updateField("experience", e.target.value)}
                            className="w-5 h-5 text-blue-600"
                          />
                          <span className="font-semibold text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.experience === "Yes" && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">What languages/frameworks do you know?</label>
                      <input
                        type="text"
                        value={formData.languages}
                        onChange={(e) => updateField("languages", e.target.value)}
                        placeholder="e.g., JavaScript, React, Python"
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white placeholder:text-gray-400"
                      />
                    </div>
                  )}

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      data-cursor="block"
                      className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold transition-colors flex items-center gap-2"
                    >
                      <ChevronLeftIcon className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      data-cursor="block"
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors flex items-center gap-2"
                    >
                      Next
                      <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Why BUCC? */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Why BUCC?</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Why do you want to join BUCC? *</label>
                    <textarea
                      value={formData.whyJoin}
                      onChange={(e) => updateField("whyJoin", e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors resize-none text-gray-900 bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">What do you hope to gain from being a member? *</label>
                    <textarea
                      value={formData.hopes}
                      onChange={(e) => updateField("hopes", e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors resize-none text-gray-900 bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Is there anything else you'd like us to know?</label>
                    <textarea
                      value={formData.additional}
                      onChange={(e) => updateField("additional", e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors resize-none text-gray-900 bg-white"
                    />
                  </div>

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      data-cursor="block"
                      className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold transition-colors flex items-center gap-2"
                    >
                      <ChevronLeftIcon className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      type="submit"
                      data-cursor="block"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
