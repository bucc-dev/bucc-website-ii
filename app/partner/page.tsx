"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import TargetCursor from "@/components/target-cursor"
import ScrollFadeIn from "@/components/scroll-fade-in"
import Footer from "@/components/footer"
import Squares from "@/components/squares"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircleIcon, ChevronRightIcon, ChevronLeftIcon, UserGroupIcon, MegaphoneIcon, LightBulbIcon, ChartBarIcon, TrophyIcon, HandRaisedIcon } from "@heroicons/react/24/solid"

type PartnerFormData = {
  // Step 1
  companyName: string
  industry: string
  website: string
  companySize: string
  // Step 2
  contactName: string
  position: string
  email: string
  phone: string
  linkedin: string
  // Step 3
  partnershipTypes: string[]
  goals: string
  timeline: string
  budget: string
  additionalDetails: string
}

export default function PartnerPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<PartnerFormData>({
    companyName: "",
    industry: "",
    website: "",
    companySize: "",
    contactName: "",
    position: "",
    email: "",
    phone: "",
    linkedin: "",
    partnershipTypes: [],
    goals: "",
    timeline: "",
    budget: "",
    additionalDetails: ""
  })

  const updateField = (field: keyof PartnerFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const togglePartnershipType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      partnershipTypes: prev.partnershipTypes.includes(type)
        ? prev.partnershipTypes.filter(t => t !== type)
        : [...prev.partnershipTypes, type]
    }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.companyName && formData.industry && formData.website && formData.companySize)
      case 2:
        return !!(formData.contactName && formData.position && formData.email && formData.phone)
      case 3:
        return !!(formData.partnershipTypes.length > 0 && formData.goals && formData.timeline)
      default:
        return false
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
    } else {
      alert("Please fill in all required fields")
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(3)) {
      alert("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const partnershipTypes = [
    "Sponsorship",
    "Recruitment",
    "Workshops/Talks",
    "Internship Program",
    "Hackathon Partnership",
    "Other"
  ]

  if (isSubmitted) {
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
                Thank You for Your Interest!
              </h1>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We've received your partnership inquiry and we're excited about the possibility of working together.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                A member of our partnership team will review your submission and reach out to you within <span className="font-bold text-white">3-5 business days</span> to discuss next steps.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-12">
                We'll be in touch via email at <span className="font-bold text-white">{formData.email}</span>. Looking forward to building something great together.
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.3}>
              <div className="bg-blue-900/30 border border-blue-500/30 p-6 mb-12">
                <p className="text-gray-300 mb-2">For urgent inquiries, reach us at:</p>
                <a href="mailto:partnerships@bucc.club" className="text-blue-400 font-bold text-lg hover:text-blue-300 transition-colors">
                  partnerships@bucc.club
                </a>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.4}>
              <a href="/" data-cursor="block" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-colors">
                Return to Homepage
              </a>
            </ScrollFadeIn>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-white overflow-x-hidden">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-24 pb-20 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: "#0A1F44" }}>
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Squares 
            speed={0.5} 
            squareSize={40}
            direction='diagonal'
            borderColor='rgba(59, 130, 246, 0.3)'
            hoverFillColor='rgba(37, 99, 235, 0.2)'
          />
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
          <ScrollFadeIn>
            <div className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6">PARTNER WITH BUCC</div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight" style={{ fontFamily: "Funnel Display, sans-serif" }}>
              Let's Build the
              <br />
              <span className="text-blue-400">Future Together</span>
            </h1>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Partner with 500+ of Africa's most ambitious student developers. Access top talent, drive innovation, and create meaningful impact. This is where the future of tech is being built.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">Why Partner With BUCC?</h2>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tile 1 - White */}
            <ScrollFadeIn delay={0.1}>
              <div className="p-10 bg-white border-2 border-gray-200">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Access to Top Talent</h3>
                <p className="text-gray-700 leading-relaxed">
                  Get first access to 500+ ambitious developers, designers, and tech enthusiasts. These students are building real projects, winning hackathons, and ready for opportunities. Your next great hire is already here.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Tile 2 - Light Blue */}
            <ScrollFadeIn delay={0.15}>
              <div className="p-10 bg-blue-50 border-2 border-blue-100">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <MegaphoneIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Brand Visibility</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reach thousands of students through our 50+ annual events, social media, and campus presence. Position your company as a leader invested in developing Africa's tech future.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Tile 3 - Light Blue */}
            <ScrollFadeIn delay={0.2}>
              <div className="p-10 bg-blue-50 border-2 border-blue-100">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <HandRaisedIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Strategic Recruitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Post internships and job opportunities directly to our community. Host workshops and recruiting sessions. Build relationships with students before they graduate.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Tile 4 - White */}
            <ScrollFadeIn delay={0.25}>
              <div className="p-10 bg-white border-2 border-gray-200">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Innovation & Fresh Ideas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tap into student creativity through hackathons and collaborative projects. Get rapid prototypes, fresh perspectives, and solutions built at incredible speed.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Tile 5 - White */}
            <ScrollFadeIn delay={0.3}>
              <div className="p-10 bg-white border-2 border-gray-200">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Measurable Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Track engagement, applications, and hiring outcomes. We provide clear metrics showing how your investment develops talent and builds your recruitment pipeline.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Tile 6 - Light Blue */}
            <ScrollFadeIn delay={0.35}>
              <div className="p-10 bg-blue-50 border-2 border-blue-100">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <TrophyIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Join Leading Companies</h3>
                <p className="text-gray-700 leading-relaxed">
                  Microsoft, Google, Flutterwave, and 20+ top tech organizations already partner with BUCC. Join companies who understand that developing talent early is the smartest investment.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-16">
              Frequently Asked Questions
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border-2 border-gray-200 rounded-lg px-8">
                <AccordionTrigger className="text-xl font-black text-gray-900 hover:text-blue-600">
                  What types of partnerships does BUCC offer?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  We offer event sponsorships, recruitment opportunities, workshop hosting, mentorship programs, innovation challenges, and custom partnership packages. We'll work with you to design something that fits your goals and budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border-2 border-gray-200 rounded-lg px-8">
                <AccordionTrigger className="text-xl font-black text-gray-900 hover:text-blue-600">
                  How much does it cost to partner with BUCC?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Partnership investment varies based on scope and deliverables. Opportunities range from single-event sponsorships to year-long strategic partnerships. Contact us to discuss options that work for your budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border-2 border-gray-200 rounded-lg px-8">
                <AccordionTrigger className="text-xl font-black text-gray-900 hover:text-blue-600">
                  How many students will we reach?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  BUCC has 500+ active members across all levels and departments. Our events regularly attract 50-100+ attendees, and our social media and communications reach thousands of students across Babcock University.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border-2 border-gray-200 rounded-lg px-8">
                <AccordionTrigger className="text-xl font-black text-gray-900 hover:text-blue-600">
                  Can we recruit students through BUCC?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Absolutely. Partners can post job and internship opportunities, host recruiting sessions on campus, attend our career fairs, and connect directly with students through our events and platforms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border-2 border-gray-200 rounded-lg px-8">
                <AccordionTrigger className="text-xl font-black text-gray-900 hover:text-blue-600">
                  What's the partnership process?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Fill out the inquiry form below. Our partnerships team will review your submission and reach out within 3-5 business days to discuss your goals and explore how we can work together. We'll then create a custom proposal for your review.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border-2 border-gray-200 rounded-lg px-8">
                <AccordionTrigger className="text-xl font-black text-gray-900 hover:text-blue-600">
                  Do you work with startups or only large companies?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  We partner with organizations of all sizes—from early-stage startups to Fortune 500 companies. If you're committed to developing student talent and creating meaningful opportunities, we want to work with you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white border-2 border-gray-200 rounded-lg px-8">
                <AccordionTrigger className="text-xl font-black text-gray-900 hover:text-blue-600">
                  How do you ensure partnership ROI?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  We track all partnership activities and provide regular reports on reach, engagement, applications, and hiring outcomes. You'll see exactly how your investment translates into talent development and recruitment results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white border-2 border-gray-200 rounded-lg px-8">
                <AccordionTrigger className="text-xl font-black text-gray-900 hover:text-blue-600">
                  Can we customize our partnership?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes. While we have standard partnership tiers, we're happy to create custom packages that align with your specific objectives, whether that's focused recruitment, brand building, or innovation collaboration.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tell us about your organization and partnership goals. We'll be in touch within 3-5 business days.
              </p>
            </div>
          </ScrollFadeIn>

          {/* Stepper */}
          <ScrollFadeIn delay={0.1}>
            <div className="mb-12">
              <div className="flex items-center justify-between max-w-xl mx-auto">
                {[1, 2, 3].map((step, idx) => (
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
                        {step === 1 ? "Company Info" : step === 2 ? "Contact Info" : "Partnership"}
                      </span>
                    </div>
                    {idx < 2 && (
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
              {/* Step 1: Company Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Company Information</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => updateField("companyName", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Industry *</label>
                    <input
                      type="text"
                      value={formData.industry}
                      onChange={(e) => updateField("industry", e.target.value)}
                      placeholder="e.g., FinTech, EdTech, Enterprise Software"
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Website *</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => updateField("website", e.target.value)}
                      placeholder="https://"
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Size *</label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => updateField("companySize", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                      required
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
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

              {/* Step 2: Contact Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Contact Information</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => updateField("contactName", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Position/Title *</label>
                    <input
                      type="text"
                      value={formData.position}
                      onChange={(e) => updateField("position", e.target.value)}
                      placeholder="e.g., Talent Acquisition Manager"
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white placeholder:text-gray-400"
                      required
                    />
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

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => updateField("linkedin", e.target.value)}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white placeholder:text-gray-400"
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

              {/* Step 3: Partnership Interest */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Partnership Interest</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">What type of partnership are you interested in? *</label>
                    <div className="space-y-2">
                      {partnershipTypes.map(type => (
                        <label key={type} className="flex items-center gap-3 p-3 border-2 border-gray-300 hover:border-blue-600 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            checked={formData.partnershipTypes.includes(type)}
                            onChange={() => togglePartnershipType(type)}
                            className="w-5 h-5 text-blue-600"
                          />
                          <span className="font-semibold text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your partnership goals *</label>
                    <textarea
                      value={formData.goals}
                      onChange={(e) => updateField("goals", e.target.value)}
                      rows={5}
                      placeholder="What do you hope to achieve through this partnership?"
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors resize-none text-gray-900 bg-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">What's your timeline? *</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => updateField("timeline", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="Immediate">Immediate</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="Within 6 months">Within 6 months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated budget range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => updateField("budget", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $1k">Under $1,000</option>
                      <option value="$1k-$5k">$1,000 - $5,000</option>
                      <option value="$5k-$10k">$5,000 - $10,000</option>
                      <option value="$10k+">$10,000+</option>
                      <option value="To be discussed">To be discussed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional details</label>
                    <textarea
                      value={formData.additionalDetails}
                      onChange={(e) => updateField("additionalDetails", e.target.value)}
                      rows={4}
                      placeholder="Any other information you'd like to share?"
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors resize-none text-gray-900 bg-white placeholder:text-gray-400"
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
                        "Submit Inquiry"
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
