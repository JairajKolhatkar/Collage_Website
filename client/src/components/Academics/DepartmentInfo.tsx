import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaUniversity, FaUsers, FaBook, FaAward } from 'react-icons/fa'

const DepartmentInfo = () => {
  const [activeDepartment, setActiveDepartment] = useState<number | null>(null)

  const departments = [
    {
      id: 1,
      name: 'Department of Arts & Humanities',
      shortDescription: 'Exploring human experience through literature, language, history, and culture.',
      longDescription: 'The Department of Arts & Humanities offers a vibrant environment for intellectual inquiry and creative expression. Our programs cover literature, history, philosophy, languages, and cultural studies, preparing students for a wide range of careers while developing critical thinking and communication skills.',
      hod: 'Dr. Manoj Singh',
      established: '1965',
      programs: ['Bachelor of Arts in English Literature', 'Bachelor of Arts in History', 'Bachelor of Arts in Psychology', 'Master of Arts in English', 'Master of Arts in History', 'PhD in Humanities'],
      highlights: [
        'State-of-the-art Language Lab',
        'Annual Literary Festival',
        'Archaeological Study Group',
        'Cultural Exchange Programs'
      ]
    },
    {
      id: 2,
      name: 'Department of Science & Technology',
      shortDescription: 'Advancing knowledge through scientific inquiry and technological innovation.',
      longDescription: 'The Department of Science & Technology is dedicated to excellence in scientific education and research. With well-equipped laboratories and experienced faculty, we offer comprehensive programs in physics, chemistry, computer science, and mathematics. Our focus on hands-on learning and research prepares students for careers in academia, industry, and research institutions.',
      hod: 'Dr. Anjali Gupta',
      established: '1970',
      programs: ['Bachelor of Science in Physics', 'Bachelor of Science in Chemistry', 'Bachelor of Science in Computer Science', 'Master of Science in Physics', 'Master of Science in Chemistry', 'PhD in Computer Science'],
      highlights: [
        'Advanced Research Laboratories',
        'Annual Science Exhibition',
        'Coding Club',
        'Robotics Lab'
      ]
    },
    {
      id: 3,
      name: 'Department of Commerce & Management',
      shortDescription: 'Developing business leaders with analytical skills and ethical values.',
      longDescription: 'The Department of Commerce & Management is committed to nurturing future business leaders with a blend of theoretical knowledge and practical skills. Our curriculum covers accounting, finance, marketing, economics, and management, with a focus on case studies, industry projects, and internships. We maintain strong industry connections to enhance student employability and entrepreneurial capabilities.',
      hod: 'Dr. Sunita Reddy',
      established: '1975',
      programs: ['Bachelor of Commerce', 'Bachelor of Business Administration', 'Master of Commerce', 'Master of Business Administration', 'PhD in Commerce', 'PhD in Economics'],
      highlights: [
        'Finance Lab with Live Trading Terminal',
        'Business Incubation Center',
        'Annual Management Conclave',
        'Industry-Academia Partnership Cell'
      ]
    }
  ]

  const toggleDepartment = (id: number) => {
    setActiveDepartment(activeDepartment === id ? null : id)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Academic Departments</h2>
      
      <div className="space-y-6">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
              onClick={() => toggleDepartment(dept.id)}
            >
              <div className="flex items-center">
                <FaUniversity className="text-primary-600 mr-3 text-xl" />
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-800">{dept.name}</h3>
                  <p className="text-gray-600">{dept.shortDescription}</p>
                </div>
              </div>
              {activeDepartment === dept.id ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
            </button>
            
            {activeDepartment === dept.id && (
              <div className="px-6 py-4 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-6">{dept.longDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-start mb-3">
                      <FaUsers className="text-primary-600 mt-1 mr-2" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Department Head</h4>
                        <p className="text-gray-700">{dept.hod}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaUniversity className="text-primary-600 mt-1 mr-2" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Established</h4>
                        <p className="text-gray-700">{dept.established}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-start">
                      <FaAward className="text-primary-600 mt-1 mr-2" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Department Highlights</h4>
                        <ul className="list-disc pl-5 mt-1 text-gray-700">
                          {dept.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <FaBook className="text-primary-600 mr-2" />
                    <h4 className="font-semibold text-gray-800">Programs Offered</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {dept.programs.map((program, index) => (
                      <div key={index} className="bg-primary-50 px-4 py-2 rounded-md text-primary-800">
                        {program}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <a 
                    href={`/academics/departments/${dept.id}`} 
                    className="text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Visit Department Page →
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Department News */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Department News & Updates</h3>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <h4 className="font-semibold text-gray-800">Department of Science & Technology Secures Research Grant</h4>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">New</span>
            </div>
            <p className="text-gray-600 mt-1 mb-2">
              The Physics division has been awarded a prestigious research grant for quantum computing research.
            </p>
            <p className="text-sm text-gray-500">May 15, 2023</p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <h4 className="font-semibold text-gray-800">Department of Arts & Humanities Hosts International Conference</h4>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Upcoming</span>
            </div>
            <p className="text-gray-600 mt-1 mb-2">
              An international conference on "Cultural Heritage and Modern Identity" will be held next month.
            </p>
            <p className="text-sm text-gray-500">April 30, 2023</p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <h4 className="font-semibold text-gray-800">Commerce Department Students Win National Business Competition</h4>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Achievement</span>
            </div>
            <p className="text-gray-600 mt-1 mb-2">
              A team of five students from the Department of Commerce & Management secured first place in the National Business Plan Competition.
            </p>
            <p className="text-sm text-gray-500">March 22, 2023</p>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <a href="/news" className="text-primary-600 hover:text-primary-800 font-medium">
            View All Department News →
          </a>
        </div>
      </div>
    </div>
  )
}

export default DepartmentInfo 