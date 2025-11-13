"use client"

import { useState } from "react"
import {
  PaperAirplaneIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  UserGroupIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  PhotoIcon,
  SparklesIcon,
  CalendarDaysIcon,
  NewspaperIcon,
  BellAlertIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline"

interface EmailHistory {
  id: number
  to: string
  subject: string
  sentDate: string
  status: "sent" | "failed" | "scheduled"
  recipientCount: number
  template: string
}

// EmailJS Template Options
const emailTemplates = [
  {
    id: "welcome_template",
    name: "Welcome Email",
    description: "Welcome new members with BUCC branding and getting started guide",
    preview: "Hi {{name}}, Welcome to BUCC! We're excited to have you...",
    icon: SparklesIcon,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "event_announcement",
    name: "Event Announcement",
    description: "Announce upcoming events with images, date, location, and RSVP button",
    preview: "You're invited to {{event_name}}! Join us on {{date}}...",
    icon: CalendarDaysIcon,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "newsletter_template",
    name: "Newsletter",
    description: "Monthly newsletter with multiple sections, images, and article previews",
    preview: "BUCC Newsletter - {{month}}. Check out what's new...",
    icon: NewspaperIcon,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "application_status",
    name: "Application Status",
    description: "Send application acceptance or rejection emails",
    preview: "Hi {{name}}, Thank you for applying to BUCC...",
    icon: EnvelopeIcon,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "reminder_template",
    name: "Event Reminder",
    description: "Remind members about upcoming events with countdown",
    preview: "Don't forget! {{event_name}} is happening {{when}}...",
    icon: BellAlertIcon,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "thank_you_template",
    name: "Thank You",
    description: "Thank attendees after events with photos and feedback form",
    preview: "Thank you for attending {{event_name}}! We hope you enjoyed...",
    icon: HandThumbUpIcon,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
]

export default function EmailPage() {
  const [activeTab, setActiveTab] = useState<"compose" | "history">("compose")
  const [isSending, setIsSending] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
    template: "",
    templateParams: {} as Record<string, string>,
    schedule: false,
    scheduleDate: "",
    scheduleTime: "",
  })

  const [emailHistory, setEmailHistory] = useState<EmailHistory[]>([
    {
      id: 1,
      to: "All Members",
      subject: "Hackathon 2025 Registration Now Open!",
      sentDate: "2024-01-15 10:30 AM",
      status: "sent",
      recipientCount: 245,
      template: "Event Announcement",
    },
    {
      id: 2,
      to: "All Executives",
      subject: "Executive Meeting - This Friday",
      sentDate: "2024-01-12 02:15 PM",
      status: "sent",
      recipientCount: 12,
      template: "Event Reminder",
    },
    {
      id: 3,
      to: "New Applicants",
      subject: "Welcome to BUCC!",
      sentDate: "2024-01-10 09:00 AM",
      status: "sent",
      recipientCount: 34,
      template: "Welcome Email",
    },
    {
      id: 4,
      to: "All Members",
      subject: "Workshop Reminder - Tomorrow",
      sentDate: "2024-01-08 05:45 PM",
      status: "failed",
      recipientCount: 0,
      template: "Event Reminder",
    },
    {
      id: 5,
      to: "Event Attendees",
      subject: "Thank You for Attending!",
      sentDate: "2024-01-20 12:00 PM",
      status: "scheduled",
      recipientCount: 156,
      template: "Thank You",
    },
  ])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    
    // Simulate EmailJS API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    // In production, this would be:
    // await emailjs.send('YOUR_SERVICE_ID', formData.template, {
    //   to_email: recipientEmails,
    //   subject: formData.subject,
    //   ...formData.templateParams
    // }, 'YOUR_PUBLIC_KEY')
    
    const newEmail: EmailHistory = {
      id: emailHistory.length + 1,
      to: recipientGroups.find((g) => g.value === formData.to)?.label || formData.to,
      subject: formData.subject,
      sentDate: formData.schedule 
        ? `${formData.scheduleDate} ${formData.scheduleTime}`
        : new Date().toLocaleString(),
      status: formData.schedule ? "scheduled" : "sent",
      recipientCount: getRecipientCount(formData.to),
      template: emailTemplates.find(t => t.id === formData.template)?.name || "Custom",
    }

    setEmailHistory([newEmail, ...emailHistory])
    setFormData({
      to: "",
      subject: "",
      message: "",
      template: "",
      templateParams: {},
      schedule: false,
      scheduleDate: "",
      scheduleTime: "",
    })
    setSelectedTemplate("")
    setIsSending(false)
    alert(formData.schedule ? "Email scheduled successfully!" : "Email sent successfully!")
    setActiveTab("history")
  }

  const recipientGroups = [
    { value: "all-members", label: "All Members", count: 245 },
    { value: "executives", label: "All Executives", count: 12 },
    { value: "senators", label: "All Senators", count: 25 },
    { value: "new-applicants", label: "New Applicants", count: 34 },
    { value: "event-attendees", label: "Recent Event Attendees", count: 156 },
  ]

  const getRecipientCount = (to: string) => {
    return recipientGroups.find((g) => g.value === to)?.count || 0
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return (
          <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            <CheckCircleIcon className="h-4 w-4" />
            Sent
          </span>
        )
      case "failed":
        return (
          <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            <ExclamationCircleIcon className="h-4 w-4" />
            Failed
          </span>
        )
      case "scheduled":
        return (
          <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            <ClockIcon className="h-4 w-4" />
            Scheduled
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Email System</h1>
        <p className="text-sm text-gray-600 mt-1">Send emails using EmailJS templates with BUCC branding</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("compose")}
          className={`px-4 py-2 font-medium transition-colors border-b-2 ${
            activeTab === "compose"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          <span className="flex items-center gap-2">
            <PaperAirplaneIcon className="h-5 w-5" />
            Compose Email
          </span>
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`px-4 py-2 font-medium transition-colors border-b-2 ${
            activeTab === "history"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          <span className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5" />
            Email History
          </span>
        </button>
      </div>

      {/* Compose Tab */}
      {activeTab === "compose" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Email Form - 2/3 width */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow">
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* EmailJS Info Banner */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-900">Powered by EmailJS</p>
                    <p className="text-xs text-blue-700 mt-1">
                      Using EmailJS templates with BUCC branding, images, and responsive design. 
                      the junior devs will integrate the API keys in production.
                    </p>
                  </div>
                </div>
              </div>

              {/* Template Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Email Template <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {emailTemplates.map((template) => (
                    <button
                      key={template.id}
                      type="button"
                      onClick={() => {
                        setSelectedTemplate(template.id)
                        setFormData({ ...formData, template: template.id })
                      }}
                      className={`p-4 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                        selectedTemplate === template.id
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${template.bgColor} mb-2`}>
                        <template.icon className={`h-6 w-6 ${template.iconColor}`} />
                      </div>
                      <div className="font-medium text-sm text-gray-900">{template.name}</div>
                      <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {template.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recipient Selection */}
              <div>
                <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
                  To <span className="text-red-500">*</span>
                </label>
                <select
                  id="to"
                  required
                  value={formData.to}
                  onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select recipient group</option>
                  {recipientGroups.map((group) => (
                    <option key={group.value} value={group.value}>
                      {group.label} ({group.count} recipients)
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Email subject..."
                />
              </div>

              {/* Template Variables */}
              {selectedTemplate && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Template Variables</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Recipient Name
                      </label>
                      <input
                        type="text"
                        placeholder="{{name}}"
                        className="w-full px-3 py-2 bg-white text-black text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    {selectedTemplate === "event_announcement" && (
                      <>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Event Name
                          </label>
                          <input
                            type="text"
                            placeholder="{{event_name}}"
                            className="w-full px-3 py-2 bg-white text-black text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Event Image URL
                          </label>
                          <input
                            type="text"
                            placeholder="https://example.com/event-image.jpg"
                            className="w-full px-3 py-2 bg-white text-black text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    These variables will be replaced in the EmailJS template
                  </p>
                </div>
              )}

              {/* Additional Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Message <span className="text-gray-400">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                  placeholder="Add custom message to append to template..."
                />
              </div>

              {/* Schedule Option */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="schedule"
                    checked={formData.schedule}
                    onChange={(e) => setFormData({ ...formData, schedule: e.target.checked })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="schedule" className="ml-2 block text-sm text-gray-700">
                    Schedule for later
                  </label>
                </div>

                {formData.schedule && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="scheduleDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="scheduleDate"
                        required={formData.schedule}
                        value={formData.scheduleDate}
                        onChange={(e) => setFormData({ ...formData, scheduleDate: e.target.value })}
                        className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="scheduleTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        id="scheduleTime"
                        required={formData.schedule}
                        value={formData.scheduleTime}
                        onChange={(e) => setFormData({ ...formData, scheduleTime: e.target.value })}
                        className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setFormData({
                      to: "",
                      subject: "",
                      message: "",
                      template: "",
                      templateParams: {},
                      schedule: false,
                      scheduleDate: "",
                      scheduleTime: "",
                    })
                    setSelectedTemplate("")
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={isSending || !selectedTemplate}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                  {isSending ? "Sending..." : formData.schedule ? "Schedule Email" : "Send Email"}
                </button>
              </div>
            </form>
          </div>

          {/* Template Preview Sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <DocumentTextIcon className="h-5 w-5 text-blue-600" />
                Template Preview
              </h3>
              
              {selectedTemplate ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300">
                    <div className="flex items-center justify-center mb-4">
                      {(() => {
                        const template = emailTemplates.find(t => t.id === selectedTemplate)
                        return template ? (
                          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-lg ${template.bgColor}`}>
                            <template.icon className={`h-12 w-12 ${template.iconColor}`} />
                          </div>
                        ) : null
                      })()}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {emailTemplates.find(t => t.id === selectedTemplate)?.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {emailTemplates.find(t => t.id === selectedTemplate)?.description}
                    </p>
                    <div className="bg-white rounded border border-gray-200 p-3 text-xs text-gray-700 italic">
                      {emailTemplates.find(t => t.id === selectedTemplate)?.preview}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-600" />
                      BUCC Logo & Branding
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-600" />
                      Responsive Design
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-600" />
                      Image Support
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-600" />
                      Dynamic Variables
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      <strong>Template ID:</strong> {selectedTemplate}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Configure this template in your EmailJS dashboard
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <PhotoIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">
                    Select a template to see preview
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* History Tab */}
      {activeTab === "history" && (
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recipients
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Template
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date/Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Count
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {emailHistory.map((email) => (
                    <tr key={email.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <UserGroupIcon className="h-5 w-5 text-gray-400" />
                          <span className="text-sm font-medium text-gray-900">{email.to}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{email.subject}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                          {email.template}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {email.sentDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {email.recipientCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(email.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-green-600 mb-1">
                <CheckCircleIcon className="h-5 w-5" />
                <div className="text-sm font-medium">Sent</div>
              </div>
              <div className="text-2xl font-bold text-green-900">
                {emailHistory.filter((e) => e.status === "sent").length}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <ClockIcon className="h-5 w-5" />
                <div className="text-sm font-medium">Scheduled</div>
              </div>
              <div className="text-2xl font-bold text-blue-900">
                {emailHistory.filter((e) => e.status === "scheduled").length}
              </div>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-red-600 mb-1">
                <ExclamationCircleIcon className="h-5 w-5" />
                <div className="text-sm font-medium">Failed</div>
              </div>
              <div className="text-2xl font-bold text-red-900">
                {emailHistory.filter((e) => e.status === "failed").length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
