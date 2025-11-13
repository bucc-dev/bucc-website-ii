import { Cog6ToothIcon } from "@heroicons/react/24/outline"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-600 mt-1">Website configuration and preferences</p>
      </div>

      {/* Placeholder Content */}
      <div className="bg-white rounded-lg shadow p-12">
        <div className="text-center max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Cog6ToothIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Settings Coming Soon</h2>
          <p className="text-gray-600">
            Website settings and configuration options will be available in a future update. 
            For now, please contact the development team to make any necessary changes.
          </p>
        </div>
      </div>
    </div>
  )
}
