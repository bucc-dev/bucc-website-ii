"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import ScrollFadeIn from "@/components/scroll-fade-in"
import { ArrowLeftIcon, HeartIcon, ShareIcon, MapIcon, CalendarIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"

// Sample event data
const eventDatabase: Record<string, any> = {
  "1": {
    id: "1",
    title: "BUCC Annual Hackathon 2025",
    date: "Saturday, December 15, 2025",
    time: "8:00 AM - 8:00 AM (Next Day)",
    location: "Babcock University, Computer Science Department, Main Campus",
    price: "FREE",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Get ready for BUCC's biggest event of the year! Our 24-hour hackathon brings together the brightest minds on campus to code, collaborate, and create innovative solutions to real-world problems. Whether you're a seasoned developer or just starting your coding journey, this is your chance to learn, network, and compete for amazing prizes.\n\nWhat to expect:\n• Form teams of 3-5 members (or join one at the event)\n• Build a working prototype in 24 hours\n• Access to mentors from top tech companies\n• Free meals, snacks, and energy drinks throughout\n• Workshops on emerging technologies\n• Networking with industry professionals and sponsors\n• Prizes worth over ₦500,000 for winning teams\n\nPrize Categories:\n1st Place: ₦200,000 + Internship opportunities\n2nd Place: ₦100,000 + Tech gadgets\n3rd Place: ₦50,000 + BUCC merchandise\nBest UI/UX: ₦50,000\nBest First-Year Project: ₦50,000\nMost Innovative Solution: ₦50,000",
    organizer: "BUCC Events Team",
    tags: ["Hackathon", "Coding", "Competition", "Networking"],
    additionalTags: ["24-hour event", "Team building", "Innovation", "Tech"],
    hours: {
      day1: "Saturday 8:00 AM - 11:59 PM",
      day2: "Sunday 12:00 AM - 8:00 AM (Closing Ceremony)",
    },
    contact: "For questions, contact events@bucc.club or reach out to the Events Director on our social media channels.",
    agenda: [
      "8:00 AM - Registration & Breakfast",
      "9:00 AM - Opening Ceremony & Team Formation",
      "10:00 AM - Hackathon Begins",
      "1:00 PM - Lunch Break",
      "3:00 PM - Workshop: Building Scalable Apps",
      "7:00 PM - Dinner",
      "10:00 PM - Late Night Snacks",
      "12:00 AM - Midnight Workshop: UI/UX Tips",
      "8:00 AM - Submissions Close",
      "9:00 AM - Presentations Begin",
      "2:00 PM - Awards Ceremony"
    ]
  },
  "2": {
    id: "2",
    title: "Web3 & Blockchain Workshop",
    date: "Tuesday, December 10, 2025",
    time: "4:00 PM - 7:00 PM",
    location: "Babcock University, Lecture Hall 5, Technology Building",
    price: "FREE",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Dive into the world of Web3 and blockchain technology! This comprehensive workshop will take you from blockchain basics to building your first smart contract. Perfect for developers curious about decentralized applications and the future of the internet.\n\nWhat You'll Learn:\n• Blockchain fundamentals and how it works\n• Understanding cryptocurrencies and tokens\n• Introduction to Ethereum and smart contracts\n• Writing your first smart contract in Solidity\n• Building a simple DApp (Decentralized Application)\n• NFTs and their real-world applications\n• Career opportunities in Web3\n\nWhat to Bring:\n• Your laptop with Node.js installed\n• Basic knowledge of JavaScript (helpful but not required)\n• Enthusiasm to learn!\n\nOur workshop leader has 5+ years of experience in blockchain development and has worked with major DeFi protocols. This is a rare opportunity to learn from someone actively building in the space.",
    organizer: "BUCC Development Team",
    tags: ["Web3", "Blockchain", "Workshop", "Smart Contracts"],
    additionalTags: ["Ethereum", "DApps", "Solidity", "Crypto"],
    hours: {
      duration: "3 hours with a 15-minute break",
      schedule: "4:00 PM - 7:00 PM",
    },
    contact: "For registration and questions, email tech@bucc.club or DM us on Twitter @bucc_babcock"
  },
  "3": {
    id: "3",
    title: "AI/ML Bootcamp Series",
    date: "Thursday, December 5, 2025",
    time: "5:00 PM - 8:00 PM",
    location: "Babcock University, Computer Lab 3, Science Complex",
    price: "FREE",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Unlock the power of Artificial Intelligence and Machine Learning! This intensive bootcamp is the first in our AI/ML series, covering everything you need to start building intelligent applications. From neural networks to natural language processing, we've got you covered.\n\nBootcamp Highlights:\n• Python for Machine Learning (libraries: NumPy, Pandas, Scikit-learn)\n• Understanding ML algorithms (Linear Regression, Decision Trees, Neural Networks)\n• Hands-on project: Build a prediction model\n• Introduction to Deep Learning with TensorFlow\n• Computer Vision basics with OpenCV\n• Natural Language Processing fundamentals\n• Deploying ML models to production\n\nThis is a 4-week series (meeting weekly). By the end, you'll have built:\n✓ An image classification model\n✓ A sentiment analysis tool\n✓ A recommendation system\n✓ A portfolio-worthy ML project\n\nPrerequisites:\n• Basic Python knowledge\n• Understanding of basic mathematics (algebra, statistics helpful)\n• Laptop with 8GB+ RAM",
    organizer: "BUCC AI/ML Committee",
    tags: ["AI", "Machine Learning", "Python", "Deep Learning"],
    additionalTags: ["TensorFlow", "Data Science", "Neural Networks", "Bootcamp"],
    hours: {
      series: "4-week bootcamp, every Thursday",
      time: "5:00 PM - 8:00 PM",
    },
    contact: "Register at bit.ly/bucc-ml-bootcamp or contact ml@bucc.club"
  },
  "4": {
    id: "4",
    title: "UI/UX Design Masterclass",
    date: "Thursday, November 28, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Babcock University, Creative Studio, Arts Building",
    price: "FREE",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Transform your design skills from good to exceptional! Join us for an intensive UI/UX masterclass where you'll learn the principles, tools, and techniques used by professional designers at top tech companies.\n\nMasterclass Curriculum:\n• Design Thinking: Understanding user needs\n• User Research & Persona Creation\n• Information Architecture & User Flows\n• Wireframing & Prototyping in Figma\n• Visual Design Principles (Color, Typography, Spacing)\n• Designing for Accessibility\n• Usability Testing & Iteration\n• Building a Design System\n• Portfolio building tips\n\nHands-on Project:\nYou'll redesign a mobile app from scratch, going through the entire design process from research to high-fidelity prototype.\n\nTools Covered:\n• Figma (primary tool)\n• Adobe XD\n• Miro (for brainstorming)\n• Maze (for user testing)\n\nGuest Speaker:\nWe're hosting a Senior Product Designer from a leading Nigerian fintech company who will share insights on breaking into the industry.\n\nWhat to Bring:\n• Laptop with Figma installed (free)\n• Examples of apps you love (for inspiration)\n• Open mind ready to learn!",
    organizer: "BUCC Design Team",
    tags: ["UI/UX", "Design", "Figma", "Workshop"],
    additionalTags: ["Product Design", "User Experience", "Prototyping", "Visual Design"],
    hours: {
      duration: "3 hours + Q&A session",
      time: "3:00 PM - 6:00 PM",
    },
    contact: "Register via design@bucc.club or fill out the form at bucc.club/design-masterclass"
  },
  "5": {
    id: "5",
    title: "Career Fair & Networking Night",
    date: "Wednesday, November 20, 2025",
    time: "5:00 PM - 9:00 PM",
    location: "Babcock University, Grand Hall, Student Center",
    price: "FREE",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Your next career opportunity awaits! BUCC's annual Career Fair brings together leading tech companies, startups, and industry professionals looking to connect with talented students like you. Whether you're seeking internships, full-time roles, or just want to expand your network, this is the event you can't miss.\n\nCompanies Attending:\n• Andela\n• Flutterwave\n• Paystack\n• Microsoft Nigeria\n• Interswitch\n• Kuda Bank\n• Piggyvest\n• And 15+ more startups and tech companies!\n\nEvent Schedule:\n5:00 PM - 6:30 PM: Company Booths & Networking\n6:30 PM - 7:30 PM: Panel Discussion: 'Breaking Into Tech'\n7:30 PM - 8:00 PM: Resume Review Sessions\n8:00 PM - 9:00 PM: Informal Networking & Refreshments\n\nWhat You'll Gain:\n• Direct access to recruiters and hiring managers\n• On-the-spot interview opportunities\n• Resume reviews from industry professionals\n• Insights on job search strategies\n• Connections with alumni working at top companies\n• Understanding of various tech career paths\n\nHow to Prepare:\n✓ Bring printed copies of your resume (15-20 copies)\n✓ Dress in business casual attire\n✓ Prepare your elevator pitch (30-second intro)\n✓ Research the attending companies beforehand\n✓ Bring a notepad for important contacts/info\n✓ Have questions ready for recruiters\n\nBonus: LinkedIn headshots will be taken by a professional photographer (free for attendees)!",
    organizer: "BUCC Career Development Team",
    tags: ["Career Fair", "Networking", "Jobs", "Internships"],
    additionalTags: ["Recruitment", "Tech Companies", "Professional Development", "Alumni"],
    hours: {
      main: "5:00 PM - 9:00 PM",
      booths: "5:00 PM - 6:30 PM",
    },
    contact: "RSVP required: careers@bucc.club | Limited spots available, register early!"
  },
  "6": {
    id: "6",
    title: "Full-Stack Development Workshop",
    date: "Friday, November 15, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Babcock University, Software Lab 1, Engineering Wing",
    price: "FREE",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Build real web applications from scratch! This comprehensive full-stack workshop will take you through the entire process of creating a modern web application, from frontend to backend, database to deployment.\n\nWhat We'll Build:\nA complete Task Management Application with user authentication, real-time updates, and cloud deployment.\n\nTech Stack:\n• Frontend: React.js + Tailwind CSS\n• Backend: Node.js + Express\n• Database: MongoDB\n• Authentication: JWT\n• Deployment: Vercel (frontend) + Railway (backend)\n\nTopics Covered:\n1. Setting up your development environment\n2. React fundamentals and hooks\n3. Building RESTful APIs with Express\n4. Database design and MongoDB operations\n5. User authentication & authorization\n6. State management (Context API)\n7. Connecting frontend to backend\n8. Error handling and validation\n9. Deployment and going live\n10. Best practices and security\n\nBy the End:\n✓ You'll have a fully functional web app\n✓ Understanding of client-server architecture\n✓ Code pushed to GitHub\n✓ Live deployed application\n✓ Portfolio project to show employers\n\nPrerequisites:\n• Basic JavaScript knowledge\n• HTML & CSS fundamentals\n• Node.js and Git installed on laptop\n• VS Code or any code editor\n\nWorkshop Materials:\nAll code will be shared via GitHub. You'll get access to:\n• Complete project repository\n• Step-by-step documentation\n• Additional learning resources\n• BUCC Discord community for continued support",
    organizer: "BUCC Development Team",
    tags: ["Full-Stack", "Web Development", "React", "Node.js"],
    additionalTags: ["JavaScript", "MongoDB", "Workshop", "Hands-on"],
    hours: {
      duration: "4 hours intensive workshop",
      time: "2:00 PM - 6:00 PM",
    },
    contact: "Register at bucc.club/fullstack-workshop or email tech@bucc.club | Bring your laptop fully charged!"
  },
  "7": {
    id: "7",
    title: "Cloud Computing Workshop",
    date: "Sunday, November 10, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Babcock University, Conference Room B, Admin Building",
    price: "FREE",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Master the cloud! Learn how to leverage cloud platforms to build, deploy, and scale applications. This hands-on workshop covers the three major cloud providers and gives you practical experience with cloud architecture.\n\nWhat You'll Learn:\n• Cloud computing fundamentals\n• AWS, Azure, and Google Cloud Platform overview\n• Virtual machines and container orchestration\n• Serverless architecture and functions\n• Cloud storage solutions\n• Deploying applications to the cloud\n• Cost optimization strategies\n• Security best practices\n\nHands-on Labs:\n• Deploy a web app on AWS EC2\n• Create serverless functions with AWS Lambda\n• Set up a database on Cloud SQL\n• Container deployment with Docker\n\nBonus: Free cloud credits provided for practice!",
    organizer: "BUCC Infrastructure Team",
    tags: ["Cloud Computing", "AWS", "DevOps", "Workshop"],
    additionalTags: ["Azure", "Google Cloud", "Serverless", "Containers"],
    hours: {
      duration: "4 hours with hands-on labs",
      time: "10:00 AM - 2:00 PM",
    },
    contact: "Email cloud@bucc.club to register | AWS account recommended"
  },
  "8": {
    id: "8",
    title: "Data Science for Beginners",
    date: "Tuesday, November 5, 2025",
    time: "4:00 PM - 7:00 PM",
    location: "Babcock University, Data Lab, Statistics Department",
    price: "FREE",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Start your data science journey! This beginner-friendly workshop introduces you to the exciting world of data analysis, visualization, and predictive modeling. No prior experience needed!\n\nWorkshop Outline:\n• Introduction to Data Science\n• Python for data analysis (Pandas, NumPy)\n• Data cleaning and preprocessing\n• Exploratory Data Analysis (EDA)\n• Data visualization with Matplotlib & Seaborn\n• Basic statistics for data science\n• Introduction to machine learning\n• Building your first prediction model\n\nProject:\nAnalyze a real dataset and create visualizations to tell a story with data.\n\nWhat to Bring:\n• Laptop with Python installed (we'll help with setup)\n• Curiosity and willingness to learn!\n\nDatasets Provided:\nWe'll work with real-world datasets from healthcare, finance, and social media.",
    organizer: "BUCC Data Science Team",
    tags: ["Data Science", "Python", "Analytics", "Beginner"],
    additionalTags: ["Pandas", "Visualization", "Machine Learning", "Workshop"],
    hours: {
      duration: "3 hours interactive session",
      time: "4:00 PM - 7:00 PM",
    },
    contact: "Register at bucc.club/data-science or email data@bucc.club"
  },
}

export default function EventDetailPage() {
  const params = useParams()
  const eventId = params.id as string
  const event = eventDatabase[eventId]
  const [isFavorited, setIsFavorited] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)

  const handleShare = (platform?: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const text = `Check out this event: ${event?.title}`
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
    } else if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank')
    } else {
      // Copy to clipboard
      navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    }
    setShowShareMenu(false)
  }

  const handleAddToCalendar = () => {
    if (!event) return
    
    // Create Google Calendar link
    const title = encodeURIComponent(event.title)
    const details = encodeURIComponent(event.description.substring(0, 200))
    const location = encodeURIComponent(event.location)
    const dateTime = event.date // You would need to format this properly for production
    
    // For demo purposes, opening Google Calendar add event page
    window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`, '_blank')
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center overflow-x-hidden">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event not found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back</span>
          </Link>
          <div className="flex gap-2 relative">
            <button 
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ShareIcon className="w-5 h-5 text-gray-700" />
            </button>
            {showShareMenu && (
              <div className="absolute right-12 top-0 bg-white shadow-lg rounded-lg p-2 border border-gray-200 min-w-[160px]">
                <button onClick={() => handleShare('twitter')} className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded text-gray-900 font-medium">Twitter</button>
                <button onClick={() => handleShare('facebook')} className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded text-gray-900 font-medium">Facebook</button>
                <button onClick={() => handleShare('linkedin')} className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded text-gray-900 font-medium">LinkedIn</button>
                <button onClick={() => handleShare('whatsapp')} className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded text-gray-900 font-medium">WhatsApp</button>
                <button onClick={() => handleShare()} className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded text-gray-900 font-medium">Copy Link</button>
              </div>
            )}
            <button 
              onClick={() => setIsFavorited(!isFavorited)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isFavorited ? (
                <HeartIconSolid className="w-5 h-5 text-red-600" />
              ) : (
                <HeartIcon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-[#1a3a52] to-[#0a1f44] py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end">
            {/* Left: Title and organizer */}
            <ScrollFadeIn>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight text-balance">
                  {event.title}
                </h1>
                <p className="text-lg text-gray-300 mb-4">By {event.organizer || "Event Team"}</p>
                <p className="text-gray-300 mb-6">{event.location}</p>
                <button className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <MapIcon className="w-5 h-5" />
                  <span>View Map</span>
                </button>
              </div>
            </ScrollFadeIn>

            {/* Right: Info Card */}
            <ScrollFadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                {/* Date & Time */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-3">Date & Time</h3>
                  <p className="text-gray-900 font-semibold mb-1">{event.date}</p>
                  <p className="text-gray-600 mb-4">{event.time}</p>
                  <p className="text-sm text-gray-600 mb-6">
                    <MapIcon className="w-4 h-4 inline mr-1" />
                    {event.location}
                  </p>
                  <button 
                    onClick={handleAddToCalendar}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <CalendarIcon className="w-5 h-5" />
                    <span>Add to Calendar</span>
                  </button>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 opacity-20 -z-10">
          <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content - Left (2 columns) */}
          <div className="md:col-span-2 space-y-12">
            {/* Description */}
            <ScrollFadeIn>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">About This Event</h2>
                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{event.description}</div>
              </div>
            </ScrollFadeIn>

            {/* Event Agenda */}
            {event.agenda && (
              <ScrollFadeIn delay={0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Schedule</h2>
                  <div className="space-y-2 bg-gray-50 p-6 rounded-lg">
                    {event.agenda.map((item: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <p className="text-gray-900">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>
            )}

            {/* Event Hours */}
            {event.hours && (
              <ScrollFadeIn delay={0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Hours</h2>
                  <div className="space-y-3 bg-gray-50 p-6 rounded-lg">
                    {Object.entries(event.hours).map(([key, value]: [string, any]) => (
                      <div key={key}>
                        <p className="text-sm text-gray-600 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</p>
                        <p className="text-gray-900">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>
            )}

            {/* Contact */}
            <ScrollFadeIn delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact the Organizers
                </h2>
                <p className="text-gray-700 leading-relaxed">{event.contact}</p>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Sidebar - Right (1 column) */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Event Location Map */}
              <ScrollFadeIn delay={0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Location</h2>
                  <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden mb-4">
                    <img
                      src="/placeholder.svg?height=256&width=100%25"
                      alt="Event location map"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{event.location}</p>
                </div>
              </ScrollFadeIn>

              {/* Tags */}
              {(event.tags || event.additionalTags) && (
                <ScrollFadeIn delay={0.2}>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                      {[...(event.tags || []), ...(event.additionalTags || [])].map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollFadeIn>
              )}

              {/* Share */}
              <ScrollFadeIn delay={0.3}>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Share With Friends</h2>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleShare('facebook')}
                      className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
                      title="Share on Facebook"
                    >
                      <span className="text-white font-bold">f</span>
                    </button>
                    <button 
                      onClick={() => handleShare('twitter')}
                      className="w-12 h-12 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center transition-colors"
                      title="Share on Twitter"
                    >
                      <span className="text-white font-bold">𝕏</span>
                    </button>
                    <button 
                      onClick={() => handleShare('linkedin')}
                      className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors"
                      title="Share on LinkedIn"
                    >
                      <span className="text-white font-bold">in</span>
                    </button>
                    <button 
                      onClick={() => handleShare('whatsapp')}
                      className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors"
                      title="Share on WhatsApp"
                    >
                      <span className="text-white font-bold text-xl">⟪</span>
                    </button>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
