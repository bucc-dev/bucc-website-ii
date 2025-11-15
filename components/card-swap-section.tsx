"use client"

import { useState } from "react"
import CardSwap, { Card } from "./card-swap"
import ScrollFadeIn from "./scroll-fade-in"
import {
  ComputerDesktopIcon,
  Cog6ToothIcon,
  WrenchIcon,
  UserIcon,
  EnvelopeIcon,
  PlusIcon,
} from "@heroicons/react/24/solid"
import { XMarkIcon } from "@heroicons/react/24/outline"
import type React from "react"

export default function CardSwapSection() {
  const [showModal, setShowModal] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reasonToJoin: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Join BUCC form submitted:", formData)
    setShowConfirmation(true)
    setTimeout(() => {
      setShowModal(false)
      setShowConfirmation(false)
      setFormData({
        name: "",
        email: "",
        reasonToJoin: "",
      })
    }, 2000)
  }

  return (
    <>
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Content */}
            <ScrollFadeIn>
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight text-balance">
                  Our Departments
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  BUCC offers three specialized departments dedicated to providing industry-leading education in
                  Computer Science, Software Engineering, and Information Technology.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Right CardSwap - Hidden on mobile */}
            <ScrollFadeIn delay={0.2}>
              <div
                className="hidden lg:block rounded-2xl overflow-hidden"
                style={{ height: "450px", position: "relative" }}
              >
                <CardSwap cardDistance={50} verticalDistance={60} delay={5000} pauseOnHover={true}>
                  <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-0 p-8 flex flex-col items-center justify-center gap-4 rounded-xl">
                    <ComputerDesktopIcon className="w-12 h-12 text-white" />
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">Computer Science</h3>
                      <p className="text-sm text-blue-100">Theoretical foundations and computational thinking</p>
                    </div>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-0 p-8 flex flex-col items-center justify-center gap-4 rounded-xl">
                    <Cog6ToothIcon className="w-12 h-12 text-white" />
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">Software Engineering</h3>
                      <p className="text-sm text-purple-100">Building robust and scalable applications</p>
                    </div>
                  </Card>
                  <Card className="bg-gradient-to-br from-indigo-600 to-indigo-800 border-0 p-8 flex flex-col items-center justify-center gap-4 rounded-xl">
                    <WrenchIcon className="w-12 h-12 text-white" />
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">Information Technology</h3>
                      <p className="text-sm text-indigo-100">Systems, networks, and infrastructure solutions</p>
                    </div>
                  </Card>
                </CardSwap>
              </div>

              {/* Mobile Stacked Cards with Animation */}
              <div className="lg:hidden flex flex-col gap-4">
                <style>{`
                  @keyframes stackUp {
                    0% {
                      opacity: 0;
                      transform: translateY(20px);
                    }
                    100% {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                  .stack-card {
                    animation: stackUp 0.6s ease-out forwards;
                  }
                  .stack-card:nth-child(1) { animation-delay: 0.1s; }
                  .stack-card:nth-child(2) { animation-delay: 0.2s; }
                  .stack-card:nth-child(3) { animation-delay: 0.3s; }
                `}</style>
                <div className="stack-card bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl flex flex-col items-center justify-center gap-3">
                  <ComputerDesktopIcon className="w-10 h-10 text-white" />
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-1">Computer Science</h3>
                    <p className="text-sm text-blue-100">Theoretical foundations and computational thinking</p>
                  </div>
                </div>
                <div className="stack-card bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl flex flex-col items-center justify-center gap-3">
                  <Cog6ToothIcon className="w-10 h-10 text-white" />
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-1">Software Engineering</h3>
                    <p className="text-sm text-purple-100">Building robust and scalable applications</p>
                  </div>
                </div>
                <div className="stack-card bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 rounded-xl flex flex-col items-center justify-center gap-3">
                  <WrenchIcon className="w-10 h-10 text-white" />
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-1">Information Technology</h3>
                    <p className="text-sm text-indigo-100">Systems, networks, and infrastructure solutions</p>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Join BUCC Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-60">
          <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {showConfirmation ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-black mb-2">Thank You!</h3>
                <p className="text-gray-600">Welcome to BUCC! We're excited to have you join our community.</p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join?</label>
                    <div className="relative">
                      <PlusIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="reasonToJoin"
                        value={formData.reasonToJoin}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                        placeholder="Tell us why you're interested in joining BUCC..."
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors mt-6"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
