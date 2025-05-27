import React, { useState } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaEnvelope, FaPhone, FaUserGraduate, FaCheck, FaInfoCircle } from 'react-icons/fa'

interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  organizer: string
  category: 'academic' | 'cultural' | 'sports' | 'workshop' | 'seminar'
  registrationOpen: boolean
  seatsTotal: number
  seatsAvailable: number
  image?: string
}

interface RegistrationFormData {
  name: string
  email: string
  phone: string
  rollNumber: string
  department: string
  year: string
  accommodationRequired: boolean
  dietaryRequirements: string
  comments: string
}

interface EventRegistrationProps {
  selectedEvent?: Event | null
}

const EventRegistration: React.FC<EventRegistrationProps> = ({ selectedEvent }) => {
  // Sample event data
  const sampleEvents: Event[] = [
    {
      id: 'evt001',
      title: 'Annual Tech Symposium',
      date: '2023-12-05T09:00:00',
      location: 'Main Auditorium',
      description: 'A day-long event featuring keynote speakers, panel discussions, and hands-on workshops on emerging technologies.',
      organizer: 'Computer Science Department',
      category: 'academic',
      registrationOpen: true,
      seatsTotal: 200,
      seatsAvailable: 75,
      image: '/images/events/tech-symposium.jpg'
    },
    {
      id: 'evt002',
      title: 'Cultural Fest "Rhythms 2023"',
      date: '2023-12-15T16:00:00',
      location: 'College Grounds',
      description: 'Annual cultural festival featuring music, dance, drama, and various competitions.',
      organizer: 'Cultural Committee',
      category: 'cultural',
      registrationOpen: true,
      seatsTotal: 500,
      seatsAvailable: 320,
      image: '/images/events/cultural-fest.jpg'
    },
    {
      id: 'evt003',
      title: 'Machine Learning Workshop',
      date: '2023-11-25T10:00:00',
      location: 'Computer Lab 3',
      description: 'Hands-on workshop on machine learning algorithms and their practical applications.',
      organizer: 'AI Club',
      category: 'workshop',
      registrationOpen: true,
      seatsTotal: 50,
      seatsAvailable: 12,
      image: '/images/events/ml-workshop.jpg'
    }
  ]

  // State for currently displayed event
  const [displayedEvent, setDisplayedEvent] = useState<Event | null>(selectedEvent || null)
  
  // State for registration form
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    phone: '',
    rollNumber: '',
    department: '',
    year: '',
    accommodationRequired: false,
    dietaryRequirements: '',
    comments: ''
  })

  // Registration success state
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  // Handle event selection from dropdown
  const handleEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const eventId = e.target.value
    if (!eventId) {
      setDisplayedEvent(null)
      return
    }
    
    const event = sampleEvents.find(e => e.id === eventId)
    setDisplayedEvent(event || null)
    setRegistrationSuccess(false)
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // In a real app, this would send the registration data to a backend API
    console.log('Registration submitted:', { eventId: displayedEvent?.id, ...formData })
    
    // Show success message
    setRegistrationSuccess(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      rollNumber: '',
      department: '',
      year: '',
      accommodationRequired: false,
      dietaryRequirements: '',
      comments: ''
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 bg-primary-700 text-white">
        <h2 className="text-xl font-bold">Event Registration</h2>
        <p className="text-primary-100 mt-1">Register for upcoming events at VK College Rohana</p>
      </div>

      {/* Event Selection */}
      {!selectedEvent && (
        <div className="p-6 border-b border-gray-200">
          <label htmlFor="eventSelect" className="block text-sm font-medium text-gray-700 mb-2">
            Select Event
          </label>
          <select
            id="eventSelect"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            onChange={handleEventChange}
            value={displayedEvent?.id || ''}
          >
            <option value="">-- Select an event to register --</option>
            {sampleEvents.map(event => (
              <option key={event.id} value={event.id} disabled={!event.registrationOpen || event.seatsAvailable <= 0}>
                {event.title} {!event.registrationOpen ? '(Closed)' : event.seatsAvailable <= 0 ? '(Full)' : ''}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Event Details */}
      {displayedEvent ? (
        <>
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-6">
              {displayedEvent.image && (
                <div className="md:w-1/3">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={displayedEvent.image}
                      alt={displayedEvent.title}
                      className="object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x225?text=Event+Image'
                      }}
                    />
                  </div>
                </div>
              )}
              
              <div className={displayedEvent.image ? 'md:w-2/3' : 'w-full'}>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{displayedEvent.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start">
                    <FaCalendarAlt className="text-primary-600 mt-1 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Date & Time</p>
                      <p className="text-gray-800">{formatDate(displayedEvent.date)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary-600 mt-1 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-800">{displayedEvent.location}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{displayedEvent.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="bg-primary-50 text-primary-800 px-3 py-1 rounded-full">
                    Organized by: {displayedEvent.organizer}
                  </div>
                  
                  <div className="bg-green-50 text-green-800 px-3 py-1 rounded-full">
                    {displayedEvent.seatsAvailable} seats available
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full ${
                    displayedEvent.category === 'academic' ? 'bg-blue-50 text-blue-800' :
                    displayedEvent.category === 'cultural' ? 'bg-purple-50 text-purple-800' :
                    displayedEvent.category === 'sports' ? 'bg-green-50 text-green-800' :
                    displayedEvent.category === 'workshop' ? 'bg-yellow-50 text-yellow-800' :
                    'bg-gray-50 text-gray-800'
                  }`}>
                    {displayedEvent.category.charAt(0).toUpperCase() + displayedEvent.category.slice(1)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          {displayedEvent.registrationOpen && displayedEvent.seatsAvailable > 0 ? (
            <div className="p-6">
              {registrationSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                  <div className="flex">
                    <FaCheck className="text-green-600 mt-1 mr-3" />
                    <div>
                      <h3 className="text-green-800 font-medium">Registration Successful!</h3>
                      <p className="text-green-700 mt-1">
                        Thank you for registering for {displayedEvent.title}. You will receive a confirmation email shortly with further details.
                      </p>
                      <button
                        onClick={() => setRegistrationSuccess(false)}
                        className="mt-3 text-sm bg-white text-green-700 px-3 py-1 rounded-md border border-green-300 hover:bg-green-50"
                      >
                        Register for another participant
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Registration Form</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaEnvelope className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaPhone className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Roll Number / Employee ID*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUserGraduate className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="rollNumber"
                          name="rollNumber"
                          value={formData.rollNumber}
                          onChange={handleInputChange}
                          required
                          className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Enter your ID"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                        Department*
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">-- Select Department --</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Civil">Civil</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Arts">Arts</option>
                        <option value="Science">Science</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                        Year of Study
                      </label>
                      <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">-- Select Year --</option>
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                        <option value="Third Year">Third Year</option>
                        <option value="Final Year">Final Year</option>
                        <option value="Faculty/Staff">Faculty/Staff</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="flex items-center mb-4">
                        <input
                          type="checkbox"
                          id="accommodationRequired"
                          name="accommodationRequired"
                          checked={formData.accommodationRequired}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="accommodationRequired" className="ml-2 text-sm text-gray-700">
                          I require accommodation (for outstation participants)
                        </label>
                      </div>
                      
                      <div>
                        <label htmlFor="dietaryRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                          Dietary Requirements (if any)
                        </label>
                        <input
                          type="text"
                          id="dietaryRequirements"
                          name="dietaryRequirements"
                          value={formData.dietaryRequirements}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="E.g., Vegetarian, Allergies, etc."
                        />
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Comments
                      </label>
                      <textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Any additional information you'd like to share"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-6">
                    <div className="flex">
                      <FaInfoCircle className="text-blue-500 mt-1 mr-3" />
                      <div className="text-sm text-blue-700">
                        <p>By submitting this form, you agree to abide by the rules and regulations of the event.</p>
                        <p className="mt-1">Please bring your college ID card for verification on the day of the event.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                    >
                      Register Now
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="p-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                <div className="flex">
                  <FaInfoCircle className="text-yellow-600 mt-1 mr-3" />
                  <div>
                    <h3 className="text-yellow-800 font-medium">Registration Unavailable</h3>
                    <p className="text-yellow-700 mt-1">
                      {displayedEvent.seatsAvailable <= 0
                        ? 'This event is currently full. Please check back later as spots may open up due to cancellations.'
                        : 'Registration for this event is currently closed. Please contact the event organizer for more information.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="p-6 text-center text-gray-500">
          {selectedEvent === null
            ? 'Select an event from the dropdown above to register.'
            : 'No event details available. Please try again later.'}
        </div>
      )}
    </div>
  )
}

export default EventRegistration 