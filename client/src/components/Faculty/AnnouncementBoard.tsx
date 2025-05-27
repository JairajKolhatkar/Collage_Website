import React, { useState } from 'react'
import { FaBullhorn, FaTrash, FaEdit, FaPlus, FaTimes, FaClock } from 'react-icons/fa'

interface Announcement {
  id: string
  title: string
  message: string
  category: 'general' | 'academic' | 'event' | 'urgent'
  date: string
  expiry?: string
  author: {
    name: string
    department: string
  }
}

const AnnouncementBoard: React.FC = () => {
  // Sample data
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: 'ann1',
      title: 'Mid-term Examination Schedule',
      message: 'The mid-term examinations for all courses will begin from November 15, 2023. The detailed schedule has been uploaded to the college portal. Students are advised to prepare accordingly.',
      category: 'academic',
      date: '2023-11-01T10:30:00',
      expiry: '2023-11-20T23:59:59',
      author: {
        name: 'Dr. Rajesh Kumar',
        department: 'Computer Science'
      }
    },
    {
      id: 'ann2',
      title: 'Annual College Festival',
      message: 'The annual college festival "Techfest 2023" will be held from December 5-7, 2023. Various technical and cultural events have been planned. Registration for participation will begin from November 10.',
      category: 'event',
      date: '2023-11-02T14:15:00',
      author: {
        name: 'Dr. Rajesh Kumar',
        department: 'Computer Science'
      }
    },
    {
      id: 'ann3',
      title: 'Syllabus Revision Notice',
      message: 'The syllabus for CS301: Data Structures and Algorithms has been revised. The updated syllabus includes advanced topics on graph algorithms. Please check the course page for details.',
      category: 'academic',
      date: '2023-10-28T09:45:00',
      author: {
        name: 'Dr. Rajesh Kumar',
        department: 'Computer Science'
      }
    }
  ])

  // Form state
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  const initialFormState = {
    title: '',
    message: '',
    category: 'general',
    expiry: ''
  }
  
  const [formData, setFormData] = useState(initialFormState)

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    return new Date(dateString).toLocaleString('en-US', options)
  }

  // Get time ago string
  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) {
      return 'just now'
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60)
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
    }
    
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 30) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
    }
    
    const diffInMonths = Math.floor(diffInDays / 30)
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`
  }

  // Get category badge color
  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'academic':
        return 'bg-blue-100 text-blue-800'
      case 'event':
        return 'bg-purple-100 text-purple-800'
      case 'urgent':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // Start editing announcement
  const handleEdit = (id: string) => {
    const announcement = announcements.find(a => a.id === id)
    if (!announcement) return

    setFormData({
      title: announcement.title,
      message: announcement.message,
      category: announcement.category,
      expiry: announcement.expiry || ''
    })
    
    setEditingId(id)
    setShowForm(true)
  }

  // Delete announcement
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      setAnnouncements(announcements.filter(a => a.id !== id))
    }
  }

  // Save announcement
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    
    const currentDate = new Date().toISOString()
    
    if (editingId) {
      // Update existing announcement
      const updatedAnnouncements = announcements.map(announcement => 
        announcement.id === editingId
          ? {
              ...announcement,
              title: formData.title,
              message: formData.message,
              category: formData.category as 'general' | 'academic' | 'event' | 'urgent',
              expiry: formData.expiry || undefined
            }
          : announcement
      )
      
      setAnnouncements(updatedAnnouncements)
    } else {
      // Add new announcement
      const newAnnouncement: Announcement = {
        id: `ann${Date.now()}`,
        title: formData.title,
        message: formData.message,
        category: formData.category as 'general' | 'academic' | 'event' | 'urgent',
        date: currentDate,
        expiry: formData.expiry || undefined,
        author: {
          name: 'Dr. Rajesh Kumar',
          department: 'Computer Science'
        }
      }
      
      setAnnouncements([newAnnouncement, ...announcements])
    }
    
    // Reset form
    setFormData(initialFormState)
    setEditingId(null)
    setShowForm(false)
  }

  // Cancel form
  const handleCancel = () => {
    setFormData(initialFormState)
    setEditingId(null)
    setShowForm(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaBullhorn className="text-primary-600 text-xl mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Announcement Board</h2>
          </div>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center text-sm bg-primary-600 text-white px-3 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              <FaPlus className="mr-1" /> New Announcement
            </button>
          )}
        </div>
      </div>

      {/* Announcement Form */}
      {showForm && (
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              {editingId ? 'Edit Announcement' : 'Create New Announcement'}
            </h3>
            <button
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close form"
            >
              <FaTimes />
            </button>
          </div>
          
          <form onSubmit={handleSave}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter announcement title"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter announcement details"
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="general">General</option>
                  <option value="academic">Academic</option>
                  <option value="event">Event</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date (Optional)
                </label>
                <input
                  type="datetime-local"
                  id="expiry"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                {editingId ? 'Update Announcement' : 'Post Announcement'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Announcements List */}
      <div className="p-6">
        {announcements.length > 0 ? (
          <div className="space-y-6">
            {announcements.map(announcement => (
              <div key={announcement.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{announcement.title}</h3>
                    <div className="flex items-center mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryBadgeColor(announcement.category)}`}>
                        {announcement.category.charAt(0).toUpperCase() + announcement.category.slice(1)}
                      </span>
                      <span className="text-xs text-gray-500 ml-2 flex items-center">
                        <FaClock className="mr-1" /> {getTimeAgo(announcement.date)}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(announcement.id)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit Announcement"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(announcement.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete Announcement"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3 whitespace-pre-line">{announcement.message}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div>
                    By: {announcement.author.name}, {announcement.author.department}
                  </div>
                  {announcement.expiry && (
                    <div>
                      Expires: {formatDate(announcement.expiry)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-gray-500">
            <p>No announcements available.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AnnouncementBoard 