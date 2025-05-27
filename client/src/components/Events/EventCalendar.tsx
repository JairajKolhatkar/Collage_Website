import React, { useState } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaChevronLeft, FaChevronRight, FaFilter } from 'react-icons/fa'

interface EventCalendarProps {
  onEventSelect: (event: any) => void
}

const EventCalendar: React.FC<EventCalendarProps> = ({ onEventSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar')
  
  // Mock events data
  const events = [
    {
      id: 1,
      title: 'Annual Tech Symposium',
      date: new Date(2023, 5, 15), // June 15, 2023
      time: '10:00 AM - 4:00 PM',
      location: 'VK College Rohana Main Auditorium',
      category: 'academic',
      description: 'A technical symposium featuring presentations, workshops, and competitions related to emerging technologies.',
      image: '/images/events/tech-symposium.jpg',
      capacity: 300,
      registrationRequired: true,
      featured: true
    },
    {
      id: 2,
      title: 'Cultural Festival',
      date: new Date(2023, 5, 25), // June 25, 2023
      time: '5:00 PM - 9:00 PM',
      location: 'VK College Rohana Grounds',
      category: 'cultural',
      description: 'Annual cultural festival celebrating diverse art forms, music, dance, and theatrical performances.',
      image: '/images/events/cultural-fest.jpg',
      capacity: 500,
      registrationRequired: false,
      featured: true
    },
    {
      id: 3,
      title: 'Guest Lecture: AI Ethics',
      date: new Date(2023, 5, 10), // June 10, 2023
      time: '2:00 PM - 3:30 PM',
      location: 'VK College Rohana Conference Hall',
      category: 'academic',
      description: 'A lecture on the ethical considerations in artificial intelligence by Dr. Priya Sharma.',
      image: '/images/events/guest-lecture.jpg',
      capacity: 150,
      registrationRequired: true,
      featured: false
    },
    {
      id: 4,
      title: 'Alumni Meet',
      date: new Date(2023, 6, 8), // July 8, 2023
      time: '11:00 AM - 3:00 PM',
      location: 'VK College Rohana Auditorium',
      category: 'networking',
      description: 'Annual gathering of college alumni to connect, network, and share experiences with current students.',
      image: '/images/events/alumni-meet.jpg',
      capacity: 200,
      registrationRequired: true,
      featured: false
    },
    {
      id: 5,
      title: 'Sports Tournament',
      date: new Date(2023, 6, 15), // July 15, 2023
      time: '9:00 AM - 6:00 PM',
      location: 'VK College Rohana Sports Complex',
      category: 'sports',
      description: 'Inter-departmental sports tournament featuring cricket, football, basketball, and athletics.',
      image: '/images/events/sports-tournament.jpg',
      capacity: 400,
      registrationRequired: true,
      featured: false
    },
    {
      id: 6,
      title: 'Career Fair',
      date: new Date(2023, 5, 20), // June 20, 2023
      time: '10:00 AM - 5:00 PM',
      location: 'VK College Rohana Grounds',
      category: 'career',
      description: 'Annual career fair with representatives from various companies offering internships and job opportunities.',
      image: '/images/events/career-fair.jpg',
      capacity: 350,
      registrationRequired: true,
      featured: false
    }
  ]

  // Event categories
  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'academic', name: 'Academic' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'sports', name: 'Sports' },
    { id: 'career', name: 'Career' },
    { id: 'networking', name: 'Networking' }
  ]

  // Filter events by category
  const filteredEvents = events.filter(event => 
    categoryFilter === 'all' || event.category === categoryFilter
  )

  // Get days in month
  const getDaysInMonth = (month: Date) => {
    return new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
  }

  // Get day of week for first day of month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (month: Date) => {
    return new Date(month.getFullYear(), month.getMonth(), 1).getDay()
  }

  // Get events for a specific day
  const getEventsForDay = (day: number) => {
    return filteredEvents.filter(event => 
      event.date.getDate() === day && 
      event.date.getMonth() === currentMonth.getMonth() && 
      event.date.getFullYear() === currentMonth.getFullYear()
    )
  }

  // Previous month
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  // Next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Get month name
  const getMonthName = (month: Date) => {
    return month.toLocaleString('default', { month: 'long' })
  }

  // Determine if a date is today
  const isToday = (day: number) => {
    const today = new Date()
    return day === today.getDate() && 
      currentMonth.getMonth() === today.getMonth() && 
      currentMonth.getFullYear() === today.getFullYear()
  }

  // Get all days for calendar
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200 bg-gray-50"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const eventsForDay = getEventsForDay(day)
      days.push(
        <div 
          key={day} 
          className={`h-24 border border-gray-200 p-1 ${isToday(day) ? 'bg-primary-50' : 'bg-white'}`}
        >
          <div className={`text-right mb-1 ${isToday(day) ? 'font-bold text-primary-600' : 'text-gray-500'}`}>
            {day}
          </div>
          <div className="overflow-y-auto max-h-16">
            {eventsForDay.map(event => (
              <div 
                key={event.id} 
                className="text-xs p-1 mb-1 rounded bg-primary-100 text-primary-800 truncate cursor-pointer hover:bg-primary-200"
                onClick={() => onEventSelect(event)}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      )
    }

    return days
  }

  // Get upcoming events
  const upcomingEvents = [...filteredEvents].sort((a, b) => a.date.getTime() - b.date.getTime())
    .filter(event => event.date >= new Date())

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Upcoming Events</h2>
      
      {/* Featured Events */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Featured Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.filter(event => event.featured).map(event => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onEventSelect(event)}
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <FaCalendarAlt className="text-6xl text-gray-400" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold text-gray-800">{event.title}</h4>
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                    {categories.find(cat => cat.id === event.category)?.name}
                  </span>
                </div>
                <div className="flex items-center mt-2 text-gray-600 text-sm">
                  <FaCalendarAlt className="mr-2" />
                  <span>{event.date.toLocaleDateString()}</span>
                  <span className="mx-2">|</span>
                  <FaClock className="mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center mt-1 text-gray-600 text-sm">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="mt-3 text-gray-700">{event.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="flex items-center text-sm text-gray-600">
                    <FaUsers className="mr-1" /> Capacity: {event.capacity}
                  </span>
                  <button className="px-3 py-1 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Filters and View Toggle */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FaFilter className="text-primary-600 mr-2" />
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
              <select
                id="category"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex">
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 rounded-l-md ${
                viewMode === 'calendar'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Calendar View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-r-md ${
                viewMode === 'list'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              List View
            </button>
          </div>
        </div>
      </div>
      
      {/* Calendar View */}
      {viewMode === 'calendar' && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-primary-600 text-white flex justify-between items-center">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-primary-700 rounded"
              aria-label="Previous month"
            >
              <FaChevronLeft />
            </button>
            <h3 className="text-xl font-bold">{getMonthName(currentMonth)} {currentMonth.getFullYear()}</h3>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-primary-700 rounded"
              aria-label="Next month"
            >
              <FaChevronRight />
            </button>
          </div>
          
          <div className="grid grid-cols-7">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <div key={index} className="py-2 text-center font-medium text-gray-500 bg-gray-50 border-b border-gray-200">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7">
            {renderCalendarDays()}
          </div>
          
          <div className="p-4 bg-gray-50 border-t border-gray-200 text-center text-sm text-gray-600">
            Click on an event to view details and register
          </div>
        </div>
      )}
      
      {/* List View */}
      {viewMode === 'list' && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-primary-600 text-white">
            <h3 className="text-xl font-bold">Upcoming Events</h3>
          </div>
          
          {upcomingEvents.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {upcomingEvents.map(event => (
                <li 
                  key={event.id} 
                  className="p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => onEventSelect(event)}
                >
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-lg p-3 mr-4">
                      <FaCalendarAlt className="text-primary-600 text-xl" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h4 className="font-bold text-gray-900">{event.title}</h4>
                        <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                          {categories.find(cat => cat.id === event.category)?.name}
                        </span>
                      </div>
                      <div className="flex items-center mt-1 text-gray-600 text-sm">
                        <FaCalendarAlt className="mr-2" />
                        <span>{event.date.toLocaleDateString()}</span>
                        <span className="mx-2">|</span>
                        <FaClock className="mr-2" />
                        <span>{event.time}</span>
                        <span className="mx-2">|</span>
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <p className="mt-2 text-gray-700">{event.description}</p>
                      <div className="mt-3 flex justify-between items-center">
                        <span className="flex items-center text-sm text-gray-600">
                          <FaUsers className="mr-1" /> Capacity: {event.capacity}
                        </span>
                        <button className="px-3 py-1 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-8 text-center text-gray-500">
              No upcoming events match your filter criteria.
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default EventCalendar 