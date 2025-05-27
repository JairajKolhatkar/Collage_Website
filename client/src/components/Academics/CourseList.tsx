import React, { useState } from 'react'
import { FaFilter, FaSearch, FaInfoCircle, FaArrowRight } from 'react-icons/fa'

const CourseList = () => {
  const [filters, setFilters] = useState({
    level: 'all',
    department: 'all',
    duration: 'all',
    search: ''
  })

  const courses = [
    {
      id: 1,
      name: 'Bachelor of Arts in English Literature',
      department: 'Arts & Humanities',
      level: 'undergraduate',
      duration: '3 years',
      description: 'This program focuses on the study of literary texts and theories, enhancing critical thinking and analytical skills.',
      eligibility: 'Minimum 50% marks in 10+2 from a recognized board',
      image: 'english.jpg'
    },
    {
      id: 2,
      name: 'Bachelor of Science in Computer Science',
      department: 'Science & Technology',
      level: 'undergraduate',
      duration: '3 years',
      description: 'This program covers algorithms, programming languages, software development, and computer systems.',
      eligibility: 'Minimum 50% marks in 10+2 with Mathematics',
      image: 'computer-science.jpg'
    },
    {
      id: 3,
      name: 'Bachelor of Commerce',
      department: 'Commerce & Management',
      level: 'undergraduate',
      duration: '3 years',
      description: 'This program provides knowledge in accounting, finance, business law, taxation, and economics.',
      eligibility: 'Minimum 50% marks in 10+2 from a recognized board',
      image: 'commerce.jpg'
    },
    {
      id: 4,
      name: 'Master of Arts in History',
      department: 'Arts & Humanities',
      level: 'postgraduate',
      duration: '2 years',
      description: 'This program offers advanced study of historical events, movements, and personalities with research methodologies.',
      eligibility: 'Bachelor\'s degree with minimum 50% marks',
      image: 'history.jpg'
    },
    {
      id: 5,
      name: 'Master of Science in Physics',
      department: 'Science & Technology',
      level: 'postgraduate',
      duration: '2 years',
      description: 'This program covers advanced topics in theoretical and experimental physics with research opportunities.',
      eligibility: 'B.Sc. in Physics with minimum 55% marks',
      image: 'physics.jpg'
    },
    {
      id: 6,
      name: 'PhD in Economics',
      department: 'Commerce & Management',
      level: 'doctorate',
      duration: '3-5 years',
      description: 'This research program allows scholars to contribute to the field through original research and analysis.',
      eligibility: 'Master\'s degree in Economics with minimum 55% marks',
      image: 'economics.jpg'
    }
  ]

  const handleFilterChange = (key: string, value: string) => {
    setFilters({
      ...filters,
      [key]: value
    })
  }

  const filteredCourses = courses.filter(course => {
    const matchesLevel = filters.level === 'all' || course.level === filters.level
    const matchesDepartment = filters.department === 'all' || course.department === filters.department
    const matchesDuration = filters.duration === 'all' || course.duration === filters.duration
    const matchesSearch = 
      filters.search === '' || 
      course.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.description.toLowerCase().includes(filters.search.toLowerCase())

    return matchesLevel && matchesDepartment && matchesDuration && matchesSearch
  })

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Course Listings</h2>
        
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center mb-4">
            <FaFilter className="text-primary-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Filter Courses</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            {/* Level Filter */}
            <div>
              <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">Level</label>
              <select
                id="level"
                value={filters.level}
                onChange={(e) => handleFilterChange('level', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Levels</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="doctorate">Doctorate</option>
              </select>
            </div>
            
            {/* Department Filter */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <select
                id="department"
                value={filters.department}
                onChange={(e) => handleFilterChange('department', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Departments</option>
                <option value="Arts & Humanities">Arts & Humanities</option>
                <option value="Science & Technology">Science & Technology</option>
                <option value="Commerce & Management">Commerce & Management</option>
              </select>
            </div>
            
            {/* Duration Filter */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <select
                id="duration"
                value={filters.duration}
                onChange={(e) => handleFilterChange('duration', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Durations</option>
                <option value="3 years">3 Years</option>
                <option value="2 years">2 Years</option>
                <option value="3-5 years">3-5 Years</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center p-4">
                  <h3 className="text-xl font-bold text-white text-center">{course.name}</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap mb-4">
                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      {course.department}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mb-2">
                      {course.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="bg-gray-50 p-3 rounded-md mb-4">
                    <div className="flex items-start">
                      <FaInfoCircle className="text-primary-600 mt-1 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Eligibility:</p>
                        <p className="text-sm text-gray-600">{course.eligibility}</p>
                      </div>
                    </div>
                  </div>
                  <a href={`/academics/courses/${course.id}`} className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                    View Course Details
                    <FaArrowRight className="ml-1" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 mb-4">No courses match your filter criteria.</p>
              <button
                onClick={() => setFilters({ level: 'all', department: 'all', duration: 'all', search: '' })}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseList 