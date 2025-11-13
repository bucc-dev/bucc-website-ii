"use client"

import { ChartBarIcon } from "@heroicons/react/24/outline"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-sm text-gray-600 mt-1">Real-time website traffic and user insights powered by Vercel Analytics</p>
      </div>

      {/* Embedded Vercel Analytics */}
      <div className="bg-white rounded-lg shadow overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
        <div className="p-4 border-b border-gray-200 flex items-center gap-2 bg-gray-50">
          <ChartBarIcon className="h-5 w-5 text-blue-600" />
          <h2 className="text-sm font-semibold text-gray-900">Vercel Analytics</h2>
        </div>
        <div className="w-full h-full">
          <iframe
            src="https://vercel.com/analytics"
            className="w-full h-full border-0"
            title="Vercel Analytics"
            loading="lazy"
          />
        </div>
      </div>

      {/* Info Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> The analytics dashboard is embedded from Vercel Analytics. Make sure you're logged into your Vercel account to view the data. 
          You can also access analytics directly at{" "}
          <a 
            href="https://vercel.com/dashboard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-blue-900"
          >
            vercel.com/dashboard
          </a>
        </p>
      </div>
    </div>
  )
}
