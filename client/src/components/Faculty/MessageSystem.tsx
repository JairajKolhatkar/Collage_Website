import React, { useState } from 'react'
import { FaEnvelope, FaSearch, FaTrash, FaReply, FaStar, FaRegStar, FaPaperPlane, FaUserCircle } from 'react-icons/fa'

interface Message {
  id: string
  sender: {
    id: string
    name: string
    role: 'student' | 'faculty' | 'admin'
    avatar?: string
  }
  recipient: {
    id: string
    name: string
  }
  subject: string
  content: string
  timestamp: string
  read: boolean
  starred: boolean
  attachments?: {
    name: string
    type: string
    size: string
    url: string
  }[]
}

const MessageSystem: React.FC = () => {
  // Sample messages data
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg1',
      sender: {
        id: 'std1',
        name: 'Amit Kumar',
        role: 'student'
      },
      recipient: {
        id: 'fac1',
        name: 'Dr. Rajesh Kumar'
      },
      subject: 'Regarding Assignment Submission',
      content: 'Dear Sir,\n\nI wanted to inquire about the deadline for the Data Structures assignment. Is it possible to get a small extension as I am facing some technical issues with the implementation?\n\nThank you for your consideration.\n\nRegards,\nAmit Kumar\nRoll No: CS2023001',
      timestamp: '2023-11-02T14:30:00',
      read: true,
      starred: false
    },
    {
      id: 'msg2',
      sender: {
        id: 'std2',
        name: 'Priya Sharma',
        role: 'student'
      },
      recipient: {
        id: 'fac1',
        name: 'Dr. Rajesh Kumar'
      },
      subject: 'Doubt in Graph Algorithms',
      content: 'Respected Professor,\n\nI am having difficulty understanding the Dijkstra\'s algorithm covered in the last lecture. Could you please suggest some additional resources or provide some examples to help me understand better?\n\nThank you,\nPriya Sharma\nRoll No: CS2023002',
      timestamp: '2023-11-03T09:15:00',
      read: false,
      starred: true
    },
    {
      id: 'msg3',
      sender: {
        id: 'adm1',
        name: 'Academic Office',
        role: 'admin'
      },
      recipient: {
        id: 'fac1',
        name: 'Dr. Rajesh Kumar'
      },
      subject: 'Mid-term Examination Schedule',
      content: 'Dear Faculty Members,\n\nThe mid-term examination schedule has been finalized. Please find attached the schedule for your reference. You are requested to submit your question papers by November 10, 2023.\n\nRegards,\nAcademic Office\nVK College Rohana',
      timestamp: '2023-11-01T11:45:00',
      read: true,
      starred: true,
      attachments: [
        {
          name: 'Midterm_Schedule_Nov2023.pdf',
          type: 'application/pdf',
          size: '1.2 MB',
          url: '#'
        }
      ]
    },
    {
      id: 'msg4',
      sender: {
        id: 'fac2',
        name: 'Prof. Sunita Mehta',
        role: 'faculty'
      },
      recipient: {
        id: 'fac1',
        name: 'Dr. Rajesh Kumar'
      },
      subject: 'Department Meeting',
      content: 'Hello Rajesh,\n\nJust a reminder about the department meeting scheduled for tomorrow at 3:00 PM in the conference room. We will be discussing the curriculum updates for the next semester.\n\nBest regards,\nSunita',
      timestamp: '2023-11-03T16:20:00',
      read: false,
      starred: false
    },
    {
      id: 'msg5',
      sender: {
        id: 'std3',
        name: 'Rahul Singh',
        role: 'student'
      },
      recipient: {
        id: 'fac1',
        name: 'Dr. Rajesh Kumar'
      },
      subject: 'Request for Recommendation Letter',
      content: 'Dear Dr. Kumar,\n\nI hope this email finds you well. I am applying for a summer internship program and would like to request a letter of recommendation from you. I have been a student in your Data Structures and Algorithms class and have maintained an A grade.\n\nThe deadline for submission is November 20, 2023. I have attached my resume and the internship details for your reference.\n\nThank you for your time and consideration.\n\nSincerely,\nRahul Singh\nRoll No: CS2023003',
      timestamp: '2023-11-02T10:05:00',
      read: true,
      starred: false,
      attachments: [
        {
          name: 'Rahul_Singh_Resume.pdf',
          type: 'application/pdf',
          size: '850 KB',
          url: '#'
        },
        {
          name: 'Internship_Details.docx',
          type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          size: '620 KB',
          url: '#'
        }
      ]
    }
  ])

  // State for selected message, compose mode, and filters
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null)
  const [composeMode, setComposeMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<'all' | 'unread' | 'starred'>('all')
  
  // Compose form state
  const [composeForm, setComposeForm] = useState({
    recipient: '',
    subject: '',
    content: ''
  })

  // Reply form state
  const [replyMode, setReplyMode] = useState(false)
  const [replyContent, setReplyContent] = useState('')

  // Handle compose form input changes
  const handleComposeInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setComposeForm({
      ...composeForm,
      [name]: value
    })
  }

  // Send message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    
    // In a real app, this would send the message to a backend API
    alert('Message sent successfully!')
    
    // Reset form and exit compose mode
    setComposeForm({
      recipient: '',
      subject: '',
      content: ''
    })
    setComposeMode(false)
  }

  // Send reply
  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault()
    
    // In a real app, this would send the reply to a backend API
    alert('Reply sent successfully!')
    
    // Reset form and exit reply mode
    setReplyContent('')
    setReplyMode(false)
  }

  // Mark message as read
  const handleMarkAsRead = (id: string) => {
    setMessages(messages.map(message => 
      message.id === id ? { ...message, read: true } : message
    ))
  }

  // Toggle star status
  const handleToggleStar = (id: string) => {
    setMessages(messages.map(message => 
      message.id === id ? { ...message, starred: !message.starred } : message
    ))
  }

  // Delete message
  const handleDeleteMessage = (id: string) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      setMessages(messages.filter(message => message.id !== id))
      if (selectedMessageId === id) {
        setSelectedMessageId(null)
      }
    }
  }

  // Filter messages based on active filter and search query
  const filteredMessages = messages.filter(message => {
    // Apply active filter
    if (activeFilter === 'unread' && message.read) return false
    if (activeFilter === 'starred' && !message.starred) return false
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        message.sender.name.toLowerCase().includes(query) ||
        message.subject.toLowerCase().includes(query) ||
        message.content.toLowerCase().includes(query)
      )
    }
    
    return true
  })

  // Get selected message
  const selectedMessage = messages.find(message => message.id === selectedMessageId)

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    
    // If the message is from today, show only the time
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
    
    // If the message is from this year, show the month and day
    if (date.getFullYear() === now.getFullYear()) {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }
    
    // Otherwise show the full date
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  // Get role badge color
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'student':
        return 'bg-blue-100 text-blue-800'
      case 'faculty':
        return 'bg-green-100 text-green-800'
      case 'admin':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaEnvelope className="text-primary-600 text-xl mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Message System</h2>
          </div>
          <button
            onClick={() => {
              setComposeMode(true)
              setSelectedMessageId(null)
            }}
            className="flex items-center text-sm bg-primary-600 text-white px-3 py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            <FaPaperPlane className="mr-1" /> Compose
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 h-full">
        {/* Sidebar */}
        <div className="md:col-span-1 border-r border-gray-200">
          {/* Search and Filters */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 rounded-md text-sm ${
                  activeFilter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter('unread')}
                className={`px-3 py-1 rounded-md text-sm ${
                  activeFilter === 'unread'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Unread
              </button>
              <button
                onClick={() => setActiveFilter('starred')}
                className={`px-3 py-1 rounded-md text-sm ${
                  activeFilter === 'starred'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Starred
              </button>
            </div>
          </div>

          {/* Message List */}
          <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
            {filteredMessages.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {filteredMessages.map(message => (
                  <li
                    key={message.id}
                    onClick={() => {
                      setSelectedMessageId(message.id)
                      setComposeMode(false)
                      setReplyMode(false)
                      if (!message.read) {
                        handleMarkAsRead(message.id)
                      }
                    }}
                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedMessageId === message.id ? 'bg-gray-100' : ''
                    } ${!message.read ? 'font-semibold' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-2">
                          {message.sender.name.charAt(0)}
                        </div>
                        <span className="text-gray-800">{message.sender.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{formatDate(message.timestamp)}</span>
                    </div>
                    <div className="pl-10">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-800 truncate">{message.subject}</span>
                        {message.starred && <FaStar className="text-yellow-500" />}
                      </div>
                      <p className="text-sm text-gray-500 truncate">
                        {message.content.split('\n')[0]}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No messages found.</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 p-6">
          {composeMode ? (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Compose New Message</h3>
              <form onSubmit={handleSendMessage}>
                <div className="mb-4">
                  <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">
                    To:
                  </label>
                  <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    value={composeForm.recipient}
                    onChange={handleComposeInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter recipient name or email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={composeForm.subject}
                    onChange={handleComposeInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter message subject"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                    Message:
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={composeForm.content}
                    onChange={handleComposeInputChange}
                    required
                    rows={10}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <button
                      type="button"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Attach File
                    </button>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={() => setComposeMode(false)}
                      className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : selectedMessage ? (
            <div>
              {/* Message Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{selectedMessage.subject}</h3>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-2">
                      {selectedMessage.sender.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-800">{selectedMessage.sender.name}</span>
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${getRoleBadgeColor(selectedMessage.sender.role)}`}>
                          {selectedMessage.sender.role.charAt(0).toUpperCase() + selectedMessage.sender.role.slice(1)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        To: {selectedMessage.recipient.name}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{formatDate(selectedMessage.timestamp)}</span>
                  <button
                    onClick={() => handleToggleStar(selectedMessage.id)}
                    className="text-gray-400 hover:text-yellow-500"
                    title={selectedMessage.starred ? 'Unstar' : 'Star'}
                  >
                    {selectedMessage.starred ? <FaStar className="text-yellow-500" /> : <FaRegStar />}
                  </button>
                  <button
                    onClick={() => handleDeleteMessage(selectedMessage.id)}
                    className="text-gray-400 hover:text-red-600"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              
              {/* Message Content */}
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <div className="whitespace-pre-line text-gray-700">
                  {selectedMessage.content}
                </div>
                
                {/* Attachments */}
                {selectedMessage.attachments && selectedMessage.attachments.length > 0 && (
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments:</h4>
                    <div className="space-y-2">
                      {selectedMessage.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center p-2 bg-white rounded-md border border-gray-200">
                          <div className="bg-gray-100 p-2 rounded-md mr-2">
                            <span className="text-gray-500 text-sm">{attachment.name.split('.').pop()?.toUpperCase()}</span>
                          </div>
                          <div className="flex-grow">
                            <div className="text-sm font-medium text-gray-800">{attachment.name}</div>
                            <div className="text-xs text-gray-500">{attachment.size}</div>
                          </div>
                          <a
                            href={attachment.url}
                            className="text-primary-600 hover:text-primary-800 text-sm"
                            download
                          >
                            Download
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Reply Section */}
              {replyMode ? (
                <div>
                  <h4 className="text-md font-medium text-gray-800 mb-2">Reply to {selectedMessage.sender.name}</h4>
                  <form onSubmit={handleSendReply}>
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      required
                      rows={6}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 mb-3"
                      placeholder="Write your reply here..."
                    ></textarea>
                    
                    <div className="flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setReplyMode(false)}
                        className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                      >
                        Send Reply
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="flex justify-end">
                  <button
                    onClick={() => setReplyMode(true)}
                    className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                  >
                    <FaReply className="mr-1" /> Reply
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <FaEnvelope className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">Select a message to read</h3>
              <p className="text-gray-500">
                Or click the compose button to create a new message.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MessageSystem 