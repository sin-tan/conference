import { CalendarIcon, MapPinIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'International Conference on Computer Science, ML and AI',
  description: 'Join us for the International Conference on Computer Science, Machine Learning and Artificial Intelligence in Malappuram, Kerala, India.',
}

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-primary px-6 py-8">
            <h1 className="text-3xl font-bold text-white">
              International Conference on Computer Science, Machine Learning and Artificial Intelligence
            </h1>
            <p className="mt-2 text-white text-lg">
              May 23, 2025 • Malappuram, Kerala, India
            </p>
          </div>

          {/* Main Content */}
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conference Details</h2>
                  <p className="text-gray-600">
                    The key motive of ICCSMLAI is to provide a world-class platform for the global participants 
                    to share their ideas and experience in person with their peers expected to join from different 
                    parts of the world. In addition, this gathering will help the delegates to establish research 
                    or business relations as well as to find international linkage for future collaborations in 
                    their career path.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Dates</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-6 w-6 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Deadline for submission</p>
                        <p className="text-gray-600">May 8, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-6 w-6 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Conference Date</p>
                        <p className="text-gray-600">May 23, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conference Purpose Dropdown */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Conference Purpose</h3>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue=""
                  >
                    <option value="" disabled>Select your purpose</option>
                    <option value="presenter">Presenter</option>
                    <option value="attendee">Attendee</option>
                    <option value="researcher">Researcher</option>
                    <option value="student">Student</option>
                    <option value="industry">Industry Professional</option>
                    <option value="academic">Academic</option>
                    <option value="other">Other</option>
                  </select>
                  <p className="mt-2 text-sm text-gray-500">
                    Please select your primary purpose for attending the conference
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <UserIcon className="h-6 w-6 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Organizer</p>
                        <p className="text-gray-600">Irfconference</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <EnvelopeIcon className="h-6 w-6 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">info.irfconference@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="h-6 w-6 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600">Malappuram, Kerala, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Register Now</h3>
                  <p className="mb-4">Don't miss this opportunity to connect with experts in the field.</p>
                  <Link href="/register">
                    <button className="bg-white text-primary px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                      Register Here
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 