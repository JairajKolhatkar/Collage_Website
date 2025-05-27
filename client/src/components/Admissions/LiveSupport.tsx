import React, { useState } from 'react'
import { FaUserCircle, FaRobot, FaPaperPlane, FaVideo, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa'

const LiveSupport = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! Welcome to VK College Live Support. How can I help you today?',
      time: '10:00 AM'
    }
  ])
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    // Add user message
    const userMessage = {
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    
    setMessages([...messages, userMessage])
    setInputText('')

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        'Thank you for your question. Our admission process is detailed on our website under the Admissions section.',
        'You can apply online through our admission portal or visit our campus for in-person application.',
        'For more specific information, you can schedule a call with our admissions team.',
        'Is there anything else I can help you with?'
      ]
      
      const botMessage = {
        sender: 'bot',
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      
      setMessages(prevMessages => [...prevMessages, botMessage])
    }, 1000)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Live Support</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-primary-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <FaRobot className="text-2xl mr-2" />
                <div>
                  <h3 className="font-medium">Admission Assistant</h3>
                  <p className="text-xs text-primary-100">Online | Typically replies instantly</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="p-2 hover:bg-primary-700 rounded-full">
                  <FaPhoneAlt />
                </button>
                <button className="p-2 hover:bg-primary-700 rounded-full">
                  <FaVideo />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="flex-shrink-0 mr-3">
                      <FaRobot className="text-2xl text-primary-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-xs lg:max-w-md rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white rounded-tr-none'
                        : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'}`}>
                      {message.time}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="flex-shrink-0 ml-3">
                      <FaUserCircle className="text-2xl text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded-r-md hover:bg-primary-700 transition-colors"
                >
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Other Support Options</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <div className="p-2 bg-primary-100 rounded-full text-primary-600 mr-3">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Call Us</h4>
                    <p className="text-sm text-gray-600">Direct support over the phone</p>
                  </div>
                </div>
                <button className="mt-3 w-full btn-outline text-sm">
                  +91 123-456-7890
                </button>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <div className="p-2 bg-primary-100 rounded-full text-primary-600 mr-3">
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Schedule a Meeting</h4>
                    <p className="text-sm text-gray-600">Book a slot with an admission counselor</p>
                  </div>
                </div>
                <button className="mt-3 w-full btn-primary text-sm">
                  Book Appointment
                </button>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
                <h4 className="font-bold text-yellow-800 mb-2">Support Hours</h4>
                <ul className="space-y-1 text-gray-700">
                  <li><strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM</li>
                  <li><strong>Saturday:</strong> 9:00 AM - 1:00 PM</li>
                  <li><strong>Sunday:</strong> Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveSupport 