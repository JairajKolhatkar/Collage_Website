import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaUser, FaComment, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: 'general'
  })

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // In a real application, you would send the form data to a backend API
    // Simulating form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    })
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        department: 'general'
      })
    }, 500)
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with VK College Rohana. We're here to answer your questions and provide any information you need.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 text-primary-600 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Our Location</h3>
            <p className="text-gray-600">VK College Campus, Rohana Road, Rohana - 110001, India</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 text-primary-600 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
              <FaPhone className="text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">Main Office: +91 123-456-7890</p>
            <p className="text-gray-600">Admissions: +91 123-456-7891</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 text-primary-600 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600">info@vkcollegerohana.co.in</p>
            <p className="text-gray-600">admissions@vkcollegerohana.co.in</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 text-primary-600 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
              <FaClock className="text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Office Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>

        {/* Map and Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Find Us</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
              {/* In a real application, this would be an embedded Google Map */}
              <div className="flex items-center justify-center h-full">
                <FaMapMarkerAlt className="text-5xl text-gray-400 mr-2" />
                <span className="text-gray-500 text-lg">Interactive Map Placeholder</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-gray-800 mb-2">Getting Here</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>By Bus: Routes 101, 102, 103 stop directly in front of the college</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>By Train: Rohana Railway Station is 2 km away, with shuttle service available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>By Car: Parking available on campus for visitors (Gate 2)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            
            {formStatus?.submitted ? (
              <div className={`p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="pl-3 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academics</option>
                      <option value="finance">Finance & Fees</option>
                      <option value="hostel">Hostel & Accommodation</option>
                      <option value="placement">Placement Cell</option>
                      <option value="alumni">Alumni Relations</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="pl-3 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <FaComment className="text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Department Contact Information */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Department Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Admissions Department</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">+91 123-456-7891</p>
                    <p className="text-gray-600 text-sm">Monday - Saturday, 9:00 AM - 5:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">admissions@vkcollegerohana.co.in</p>
                    <p className="text-gray-600 text-sm">For admission inquiries and applications</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Academic Affairs</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">+91 123-456-7892</p>
                    <p className="text-gray-600 text-sm">Monday - Friday, 9:00 AM - 4:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">academics@vkcollegerohana.co.in</p>
                    <p className="text-gray-600 text-sm">For course and faculty related queries</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Hostel Administration</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">+91 123-456-7893</p>
                    <p className="text-gray-600 text-sm">Monday - Sunday, 8:00 AM - 8:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">hostel@vkcollegerohana.co.in</p>
                    <p className="text-gray-600 text-sm">For accommodation and hostel facilities</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Finance & Accounts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">+91 123-456-7894</p>
                    <p className="text-gray-600 text-sm">Monday - Friday, 10:00 AM - 3:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">finance@vkcollegerohana.co.in</p>
                    <p className="text-gray-600 text-sm">For fee payments and scholarships</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Placement Cell</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">+91 123-456-7895</p>
                    <p className="text-gray-600 text-sm">Monday - Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">placements@vkcollegerohana.co.in</p>
                    <p className="text-gray-600 text-sm">For placement and internship opportunities</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Alumni Relations</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">+91 123-456-7896</p>
                    <p className="text-gray-600 text-sm">Monday - Friday, 10:00 AM - 4:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">alumni@vkcollegerohana.co.in</p>
                    <p className="text-gray-600 text-sm">For alumni networking and events</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">What are the admission requirements?</h3>
              <p className="text-gray-600">
                Admission requirements vary by program. Generally, we require completed application forms, academic transcripts, entrance exam scores, and sometimes interviews. Visit our Admissions page for detailed requirements for each course.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How can I schedule a campus tour?</h3>
              <p className="text-gray-600">
                Campus tours are available Monday through Friday from 10:00 AM to 3:00 PM. Please contact our admissions office at admissions@vkcollegerohana.co.in or call +91 123-456-7891 to schedule a tour.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Are scholarships available?</h3>
              <p className="text-gray-600">
                Yes, VK College Rohana offers various merit-based and need-based scholarships. Contact our finance department or visit the Scholarships section on our website for more information.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I apply for hostel accommodation?</h3>
              <p className="text-gray-600">
                Hostel applications are available online through the student portal. New students can apply for accommodation as part of the admission process. For further inquiries, contact our hostel administration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 