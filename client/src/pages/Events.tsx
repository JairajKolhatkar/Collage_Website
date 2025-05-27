import { useState } from 'react'
import EventCalendar from '../components/Events/EventCalendar'
import EventRegistration from '../components/Events/EventRegistration'
import EventGallery from '../components/Events/EventGallery'
import BlogArticles from '../components/Events/BlogArticles'

const Events = () => {
  const [activeTab, setActiveTab] = useState('calendar')
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  // Handler for when an event is selected for registration
  const handleEventSelect = (event: any) => {
    setSelectedEvent(event)
    setActiveTab('registration')
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Events & News</h1>
          <p className="text-xl max-w-2xl">
            Stay updated with the latest happenings, events, and news from our vibrant campus community.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        {/* Navigation Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex flex-wrap -mb-px">
            <button
              onClick={() => setActiveTab('calendar')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'calendar'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('registration')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'registration'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Event Registration
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'gallery'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Event Gallery
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'blog'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Blog & Articles
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="mt-8">
          {activeTab === 'calendar' && <EventCalendar onEventSelect={handleEventSelect} />}
          {activeTab === 'registration' && <EventRegistration selectedEvent={selectedEvent} />}
          {activeTab === 'gallery' && <EventGallery />}
          {activeTab === 'blog' && <BlogArticles />}
        </div>
      </div>
    </div>
  )
}

export default Events 