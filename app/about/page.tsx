"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import TargetCursor from "@/components/target-cursor"
import ScrollFadeIn from "@/components/scroll-fade-in"
import ScrollReveal from "@/components/scroll-reveal"
import Footer from "@/components/footer"
import Lanyard from "@/components/lanyard"
import {
  UserGroupIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  TrophyIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "ACTIVE MEMBERS", description: "From freshers to final year, every level represented" },
    { number: "50+", label: "EVENTS ANNUALLY", description: "Workshops, hackathons, talks, bootcamps—we never stop building" },
    { number: "20+", label: "INDUSTRY PARTNERS", description: "Google, Microsoft, Flutterwave, and more trust BUCC talent" },
    { number: "15+", label: "PRODUCTS LAUNCHED", description: "Real apps, real users, real impact—built by students" },
    { number: "100%", label: "PLACEMENT RATE", description: "BUCC alumni work at every top tech company in Nigeria" },
    { number: "5", label: "YEARS STRONG", description: "And we're just getting started" },
  ]

  const values = [
    {
      icon: UsersIcon,
      title: "COMMUNITY OVER COMPETITION",
      description:
        "We grow together. Your win is our win. No gatekeeping. No ego. Just 500+ people who want to see each other succeed.",
    },
    {
      icon: CodeBracketIcon,
      title: "BUILD, DON'T JUST LEARN",
      description:
        "Theory is important. Shipping is essential. Every workshop ends with a project. Every semester ends with something you built. Your GitHub should prove you were here.",
    },
    {
      icon: UserGroupIcon,
      title: "EVERYONE'S INVITED",
      description:
        "Don't know how to code? Perfect—neither did we once. BUCC is for the curious, the hungry, the willing-to-learn. Your major doesn't matter. Your passion does.",
    },
    {
      icon: TrophyIcon,
      title: "EXCELLENCE IS NON-NEGOTIABLE",
      description:
        "We don't build mediocre. We compete nationally. We win hackathons. We ship products people actually use. If you're here, you're here to be great.",
    },
    {
      icon: GlobeAltIcon,
      title: "AFRICA-FOCUSED, WORLD-CLASS",
      description:
        "We're solving African problems with world-class solutions. Local impact. Global standards. The future of this continent is being built by people who look like us.",
    },
  ]

  const programs = [
    {
      title: "WEEKLY WORKSHOPS",
      description:
        "Every Thursday, industry experts and senior members teach what's hot: React, Python, Cloud, AI, Design. Hands-on. Project-based. Zero fluff.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "ANNUAL HACKATHON",
      description:
        "48 hours. 100+ developers. Judges from top companies. Build something impossible. Win incredible prizes. Launch your career.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "MENTORSHIP PROGRAM",
      description:
        "Get paired with BUCC alumni now working at Google, Meta, Andela, Flutterwave. One-on-one guidance. Real-world insights. Connections that matter.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "PROJECT TEAMS",
      description:
        "Join a dev team building real products. Frontend, backend, mobile, design—find your lane and ship something people use.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "TECH TALKS & PANELS",
      description:
        "Hear from founders, CTOs, and innovators changing the game. Ask questions. Get inspired. See what's possible.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "COMMUNITY HANGOUTS",
      description:
        "Not everything is about code. Game nights. Movie nights. Just vibing with people who get it. Community is everything.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="bg-white overflow-x-hidden">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Navbar />

      {/* Hero Section - Dark with Grid */}
      <section
        className="relative min-h-screen flex items-center pt-24 pb-16 md:py-32 px-4 md:px-8"
        style={{ backgroundColor: "#0A1F44" }}
      >
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-about-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-about-hero)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="order-2 lg:order-none">
              <ScrollFadeIn>
                <div className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6">ABOUT BUCC</div>
              </ScrollFadeIn>

              <ScrollFadeIn delay={0.1}>
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
                  style={{ fontFamily: "Funnel Display, sans-serif" }}
                >
                  Beyond Resumes.
                  <br />
                  <span className="text-blue-400">We're Building the Future.</span>
                </h1>
              </ScrollFadeIn>

              <ScrollFadeIn delay={0.2}>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Since 2015, BUCC has been the beating heart of tech innovation at Babcock University.
                  <br />
                  <br />
                  This is our story. This is our mission. This is just the beginning.
                </p>
              </ScrollFadeIn>
            </div>

            {/* Right: 3D Lanyard Component */}
            <ScrollFadeIn delay={0.3}>
              <div className="relative flex justify-center items-center order-1 lg:order-none -mt-32 lg:mt-0">
                <div className="relative h-[400px] w-full lg:h-[750px] lg:-mt-16 rounded-2xl overflow-visible">
                  <Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} fov={28} transparent={true} />
                </div>
                <div className="absolute bottom-8 right-4 lg:bottom-1/2 lg:right-0 lg:translate-y-1/2">
                  <p className="text-blue-300 text-sm font-semibold animate-pulse" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                    <span className="lg:hidden">↓ Drag to play</span>
                    <span className="hidden lg:inline">↓ Drag the card to play with it!</span>
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Section 1: Origin Story - Light */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={3}
            blurStrength={8}
            containerClassName="mb-16"
            textClassName="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900"
          >
            Where It All Started
          </ScrollReveal>

          <ScrollFadeIn delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                <strong>2015.</strong> A handful of students. One shared frustration: lectures taught theory, but nobody
                was building anything real.
              </p>

              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                So they started meeting. Coding together. Learning from each other. Teaching what they knew. Building
                projects that actually solved problems on campus.
              </p>

              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                Word spread. 10 became 50. 50 became 200. Today, we're 500+ strong—the largest, most active tech
                community Babcock has ever seen.
              </p>

              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                But size isn't the point. <strong>Impact is.</strong>
              </p>

              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
                BUCC exists because every student with a laptop and a dream deserves a community that pushes them to
                build it. Because Nigeria's tech future shouldn't be built in Lagos and Silicon Valley alone—it should
                be built here, on our campus, by us.
              </p>

              <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-semibold">
                We're not waiting for permission. We're not waiting for the "right time."
                <br />
                <span className="text-blue-600">We're building now.</span>
              </p>
            </div>
          </ScrollFadeIn>

          {/* Pull Quote */}
          <ScrollFadeIn delay={0.2}>
            <div className="mt-16 relative">
              <div className="text-6xl md:text-8xl font-black text-yellow-500 leading-none mb-4">"</div>
              <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 italic pl-8 border-l-4 border-yellow-500">
                The best way to predict the future is to build it.
              </blockquote>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Section 2: What Drives Us - Raw & Real */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 mb-20">No corporate speak. Just facts.</p>
          </ScrollFadeIn>

          {/* Big Image Hero */}
          <ScrollFadeIn delay={0.1}>
            <div className="relative h-[70vh] rounded-3xl overflow-hidden mb-20">
              <img
                src="/placeholder.svg?height=800&width=1400"
                alt="BUCC in action"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <p className="text-6xl md:text-7xl font-black mb-6">500+ people who actually give a damn.</p>
                <p className="text-2xl text-gray-200 max-w-3xl">
                  That's the difference. We're not networking—we're building friendships. 
                  We're not competing—we're winning together.
                </p>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Grid of Values - Minimal Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <ScrollFadeIn delay={0.2}>
              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="text-3xl font-black text-gray-900 mb-4">We Build.</h3>
                <p className="text-lg text-gray-700">
                  Not just code. Careers. Confidence. Products that solve real problems. 
                  Every workshop ends with something tangible.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.25}>
              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="text-3xl font-black text-gray-900 mb-4">No Gatekeeping.</h3>
                <p className="text-lg text-gray-700">
                  First-year? Final-year? Don't know CSS from Python? Doesn't matter. 
                  If you're curious and willing to learn, you belong here.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.3}>
              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="text-3xl font-black text-gray-900 mb-4">Mediocre Isn't Welcome.</h3>
                <p className="text-lg text-gray-700">
                  We ship products people use. We win hackathons. We place at top companies. 
                  Being here means you're serious about excellence.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.35}>
              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="text-3xl font-black text-gray-900 mb-4">For Africa. By Africans.</h3>
                <p className="text-lg text-gray-700">
                  We're solving problems that matter here. Local impact. World-class execution. 
                  The future of this continent starts with us.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.4}>
              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="text-3xl font-black text-gray-900 mb-4">Your Success = Our Success.</h3>
                <p className="text-lg text-gray-700">
                  Got an internship? We celebrate. Launched a product? We share it. 
                  Failed a deployment? We help you fix it. Community over everything.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.45}>
              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h3 className="text-3xl font-black text-gray-900 mb-4">Theory Is Useless Without Execution.</h3>
                <p className="text-lg text-gray-700">
                  Lectures teach algorithms. BUCC teaches you to ship. 
                  Your GitHub stars, deployed apps, and real users are proof you were here.
                </p>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Full Width Statement */}
          <ScrollFadeIn delay={0.5}>
            <div className="bg-gray-900 p-12 md:p-16 rounded-3xl">
              <p className="text-3xl md:text-4xl lg:text-5xl text-white font-black leading-tight">
                We're not preparing students for the tech industry.
                <br />
                <span className="text-blue-400">We're creating the people who will redefine it.</span>
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Section 3: Mission & Vision - Split Dark/Light */}
      <section className="grid lg:grid-cols-2">
        {/* Mission - Dark */}
        <div className="py-24 md:py-32 px-8 md:px-12" style={{ backgroundColor: "#0A1F44" }}>
          <ScrollFadeIn>
            <div className="max-w-xl">
              <h3 className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6">OUR MISSION</h3>
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-8"
                style={{ fontFamily: "Funnel Display, sans-serif" }}
              >
                Empower. Equip. Elevate.
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We exist to transform curious students into world-class technologists. Through hands-on learning,
                real-world projects, and an unshakeable community, we're building the developers, founders, and
                innovators who will define Nigeria's tech future.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every workshop we run. Every hackathon we host. Every line of code we write together. It's all in
                service of one goal: <span className="text-blue-400 font-semibold">turning potential into impact.</span>
              </p>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Vision - Light */}
        <div className="py-24 md:py-32 px-8 md:px-12 bg-blue-50">
          <ScrollFadeIn delay={0.2}>
            <div className="max-w-xl lg:ml-auto">
              <h3 className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-6">OUR VISION</h3>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 mb-8"
                style={{ fontFamily: "Funnel Display, sans-serif" }}
              >
                Africa's Leading Student Tech Community
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                By 2030, BUCC will be the gold standard for student-led tech innovation across Africa. A community where
                world-changing ideas are born, where the impossible becomes routine, where the next unicorn founder is
                sitting in our next workshop.
              </p>
              <p className="text-lg text-gray-900 leading-relaxed font-semibold">
                We're not just preparing for the future of tech.
                <br />
                <span className="text-blue-600">We're creating it.</span>
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Section 4: Stats Part 1 - Dark - Image Right, Stats Left */}
      <section className="py-24 md:py-32 px-4 md:px-8" style={{ backgroundColor: "#0A1F44" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-16">The BUCC Effect</h2>
          </ScrollFadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            {/* Stats 1-3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stats.slice(0, 3).map((stat, index) => (
                <ScrollFadeIn key={index} delay={0.1 * index}>
                  <div className="text-center group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all">
                    <div className="text-5xl md:text-6xl font-black text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-sm font-bold text-white tracking-wider mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.description}</div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>

            {/* Image */}
            <ScrollFadeIn delay={0.3}>
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=700&width=600"
                  alt="BUCC Impact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2">Real Numbers</p>
                  <p className="text-3xl font-bold mb-4">Making Measurable Impact</p>
                  <p className="text-gray-200">From campus to companies, BUCC alumni are everywhere.</p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Section 4: Stats Part 2 - Image Left, Stats Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <ScrollFadeIn>
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=700&width=600"
                  alt="BUCC Success Stories"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2">Success Stories</p>
                  <p className="text-3xl font-bold mb-4">Building Careers That Matter</p>
                  <p className="text-gray-200">Every stat represents a student whose life changed here.</p>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Stats 4-6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stats.slice(3, 6).map((stat, index) => (
                <ScrollFadeIn key={index} delay={0.1 * index}>
                  <div className="text-center group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all">
                    <div className="text-5xl md:text-6xl font-black text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-sm font-bold text-white tracking-wider mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.description}</div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>

          {/* Pull Quote */}
          <ScrollFadeIn delay={0.6}>
            <div className="mt-24 text-center max-w-4xl mx-auto">
              <div className="relative inline-block">
                <div className="text-8xl md:text-9xl font-black text-yellow-500/20 absolute -top-8 -left-8">"</div>
                <p className="text-3xl md:text-4xl text-white italic font-bold relative z-10 px-8">
                  Not bad for a club that started in a dorm room.
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Section 5: Programs - Light */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-16 text-center">How We Build</h2>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ScrollFadeIn key={index} delay={0.1 * index}>
                <div className="group cursor-pointer">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{program.description}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Leadership - Light Gray */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollFadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Who Runs This?</h2>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
              BUCC is student-led and student-driven. Our executive team, senators, and committee leads are elected by
              members, for members.
            </p>

            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-12">
              But this isn't just about titles—it's about responsibility. Our leaders organize events, build
              partnerships, mentor members, and make sure BUCC stays true to its mission: empowering every student who
              walks through our doors.
            </p>

            <a
              href="/leadership"
              className="cursor-target inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-colors relative"
            >
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400 pointer-events-none" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400 pointer-events-none" />
              <span>Meet the Team →</span>
            </a>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Section 7: Final CTA - Bold Split Screen */}
      <section className="relative overflow-hidden">
        {/* Split Background */}
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Side - Dark with Grid */}
          <div className="relative py-24 px-8 md:px-12 flex items-center" style={{ backgroundColor: "#0A1F44" }}>
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-cta-left" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-cta-left)" />
              </svg>
            </div>

            <div className="relative z-10 max-w-xl mx-auto lg:ml-auto lg:mr-12">
              <ScrollFadeIn>
                <h2
                  className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
                  style={{ fontFamily: "Funnel Display, sans-serif" }}
                >
                  Your Move.
                </h2>
              </ScrollFadeIn>

              <ScrollFadeIn delay={0.1}>
                <div className="space-y-6 text-lg md:text-xl text-gray-300">
                  <p className="flex items-start gap-4">
                    <span className="text-blue-400 text-2xl flex-shrink-0">→</span>
                    <span>You can watch from the sidelines, or you can be part of the story.</span>
                  </p>
                  <p className="flex items-start gap-4">
                    <span className="text-blue-400 text-2xl flex-shrink-0">→</span>
                    <span>You can learn alone, or you can build with 500+ people who want you to win.</span>
                  </p>
                  <p className="flex items-start gap-4">
                    <span className="text-blue-400 text-2xl flex-shrink-0">→</span>
                    <span>You can play it safe, or you can build something that changes everything.</span>
                  </p>
                </div>
              </ScrollFadeIn>
            </div>
          </div>

          {/* Right Side - White with CTA */}
          <div className="relative py-24 px-8 md:px-12 flex items-center bg-white">
            {/* Dot Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dots-cta" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#0A1F44" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots-cta)" />
              </svg>
            </div>

            <div className="relative z-10 max-w-xl mx-auto lg:mr-auto lg:ml-12">
              <ScrollFadeIn delay={0.2}>
                <div className="mb-12">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                    BUCC is here.
                  </p>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                    The question is:{" "}
                    <span className="text-blue-600 underline decoration-4 underline-offset-4">are you ready?</span>
                  </p>
                </div>

                <p className="mt-8 text-sm text-gray-700 font-semibold">
                  ↳ Join 500+ students building the future. Right here. Right now.
                </p>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
