import React, { useState } from 'react'
import { FaFilePdf, FaDownload, FaSearch, FaFilter } from 'react-icons/fa'

const SyllabusSection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    department: 'all',
    level: 'all'
  })

  const syllabusData = [
    {
      id: 1,
      name: 'Bachelor of Arts in English Literature',
      department: 'Arts & Humanities',
      level: 'undergraduate',
      year: '2023-24',
      size: '1.2 MB',
      link: '/syllabus/ba-english-2023.pdf'
    },
    {
      id: 2,
      name: 'Bachelor of Science in Computer Science',
      department: 'Science & Technology',
      level: 'undergraduate',
      year: '2023-24',
      size: '1.5 MB',
      link: '/syllabus/bsc-cs-2023.pdf'
    },
    {
      id: 3,
      name: 'Bachelor of Commerce',
      department: 'Commerce & Management',
      level: 'undergraduate',
      year: '2023-24',
      size: '1.3 MB',
      link: '/syllabus/bcom-2023.pdf'
    },
    {
      id: 4,
      name: 'Master of Arts in History',
      department: 'Arts & Humanities',
      level: 'postgraduate',
      year: '2023-24',
      size: '1.1 MB',
      link: '/syllabus/ma-history-2023.pdf'
    },
    {
      id: 5,
      name: 'Master of Science in Physics',
      department: 'Science & Technology',
      level: 'postgraduate',
      year: '2023-24',
      size: '1.4 MB',
      link: '/syllabus/msc-physics-2023.pdf'
    },
    {
      id: 6,
      name: 'PhD in Economics',
      department: 'Commerce & Management',
      level: 'doctorate',
      year: '2023-24',
      size: '0.9 MB',
      link: '/syllabus/phd-economics-2023.pdf'
    },
    {
      id: 7,
      name: 'Bachelor of Arts in Psychology',
      department: 'Arts & Humanities',
      level: 'undergraduate',
      year: '2023-24',
      size: '1.2 MB',
      link: '/syllabus/ba-psychology-2023.pdf'
    },
    {
      id: 8,
      name: 'Master of Commerce',
      department: 'Commerce & Management',
      level: 'postgraduate',
      year: '2023-24',
      size: '1.3 MB',
      link: '/syllabus/mcom-2023.pdf'
    }
  ]

  const handleFilterChange = (key: string, value: string) => {
    setFilters({
      ...filters,
      [key]: value
    })
  }

  const filteredSyllabus = syllabusData.filter(item => {
    const matchesDepartment = filters.department === 'all' || item.department === filters.department
    const matchesLevel = filters.level === 'all' || item.level === filters.level
    const matchesSearch = 
      searchTerm === '' || 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.department.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesDepartment && matchesLevel && matchesSearch
  })

  const departments = [...new Set(syllabusData.map(item => item.department))]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Syllabus & Resources</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <FaFilter className="text-primary-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Filter Resources</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search syllabus..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
              {departments.map((dept, index) => (
                <option key={index} value={dept}>{dept}</option>
              ))}
            </select>
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
        </div>
      </div>
      
      {/* Syllabus List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Program
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Level
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Academic Year
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Download
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSyllabus.length > 0 ? (
                filteredSyllabus.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaFilePdf className="text-red-500 mr-3" />
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-100 text-primary-800">
                        {item.level.charAt(0).toUpperCase() + item.level.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.year}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a 
                        href={item.link} 
                        className="text-primary-600 hover:text-primary-900 flex items-center justify-end"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Download</span>
                        <FaDownload className="ml-1" />
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                    No syllabus documents match your search criteria.
                    <div className="mt-2">
                      <button
                        onClick={() => { setSearchTerm(''); setFilters({ department: 'all', level: 'all' }); }}
                        className="text-primary-600 hover:text-primary-900 font-medium"
                      >
                        Clear Filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Additional Resources */}
      <div className="mt-8 bg-primary-50 p-6 rounded-lg border border-primary-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Academic Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a 
            href="/resources/academic-calendar.pdf" 
            className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <FaFilePdf className="text-red-500 mr-3 text-xl" />
            <div>
              <p className="font-medium text-gray-800">Academic Calendar 2023-24</p>
              <p className="text-sm text-gray-500">0.8 MB</p>
            </div>
          </a>
          <a 
            href="/resources/exam-schedule.pdf" 
            className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <FaFilePdf className="text-red-500 mr-3 text-xl" />
            <div>
              <p className="font-medium text-gray-800">Examination Schedule</p>
              <p className="text-sm text-gray-500">0.6 MB</p>
            </div>
          </a>
          <a 
            href="/resources/library-guidelines.pdf" 
            className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <FaFilePdf className="text-red-500 mr-3 text-xl" />
            <div>
              <p className="font-medium text-gray-800">Library Guidelines</p>
              <p className="text-sm text-gray-500">0.5 MB</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SyllabusSection 