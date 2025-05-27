import React, { useState } from 'react'
import { FaBook, FaVideo, FaGlobe, FaFilePdf, FaEye, FaDownload, FaStar, FaFilter } from 'react-icons/fa'

interface RecommendedResourcesProps {
  onBookSelect: (book: any) => void
}

const RecommendedResources: React.FC<RecommendedResourcesProps> = ({ onBookSelect }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  // Mock departments data
  const departments = [
    { id: 'cs', name: 'Computer Science' },
    { id: 'physics', name: 'Physics' },
    { id: 'chem', name: 'Chemistry' },
    { id: 'math', name: 'Mathematics' },
    { id: 'eng', name: 'English' },
    { id: 'eco', name: 'Economics' }
  ]

  // Mock resource types
  const resourceTypes = [
    { id: 'book', name: 'Books' },
    { id: 'video', name: 'Video Lectures' },
    { id: 'website', name: 'Websites' },
    { id: 'paper', name: 'Research Papers' }
  ]

  // Mock recommended resources data
  const resources = [
    {
      id: 1,
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
      type: 'book',
      department: 'cs',
      description: 'A comprehensive introduction to algorithms used in computer science and programming.',
      url: '/pdfs/sample.pdf',
      rating: 4.8,
      image: '/images/books/algorithms.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Linear Algebra and Its Applications',
      author: 'Gilbert Strang',
      type: 'book',
      department: 'math',
      description: 'A foundational textbook on linear algebra with applications in various fields.',
      url: '/pdfs/sample.pdf',
      rating: 4.7,
      image: '/images/books/linear-algebra.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Machine Learning Courses',
      author: 'Stanford University',
      type: 'video',
      department: 'cs',
      description: 'Video lectures covering machine learning concepts, algorithms, and applications.',
      url: 'https://www.example.com/ml-course',
      rating: 4.9,
      image: '/images/resources/ml-course.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Khan Academy - Physics',
      author: 'Khan Academy',
      type: 'website',
      department: 'physics',
      description: 'Comprehensive online physics lessons covering mechanics, electromagnetism, and more.',
      url: 'https://www.khanacademy.org/physics',
      rating: 4.6,
      image: '/images/resources/khan-academy.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Modern Quantum Mechanics',
      author: 'J.J. Sakurai',
      type: 'book',
      department: 'physics',
      description: 'Advanced textbook on quantum mechanics for physics students.',
      url: '/pdfs/sample.pdf',
      rating: 4.5,
      image: '/images/books/quantum.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Advances in Financial Machine Learning',
      author: 'Marcos Lopez de Prado',
      type: 'book',
      department: 'eco',
      description: 'Research on applying machine learning techniques to financial market analysis.',
      url: '/pdfs/sample.pdf',
      rating: 4.4,
      image: '/images/books/financial-ml.jpg',
      featured: false
    },
    {
      id: 7,
      title: 'Recent Advances in Natural Language Processing',
      author: 'Various Authors',
      type: 'paper',
      department: 'cs',
      description: 'Collection of research papers on natural language processing and computational linguistics.',
      url: '/pdfs/sample.pdf',
      rating: 4.3,
      image: '/images/resources/nlp-papers.jpg',
      featured: false
    },
    {
      id: 8,
      title: 'MIT OpenCourseWare - Chemistry',
      author: 'MIT',
      type: 'website',
      department: 'chem',
      description: 'Free online chemistry courses from MIT including lecture notes, videos, and assignments.',
      url: 'https://ocw.mit.edu/chemistry',
      rating: 4.8,
      image: '/images/resources/mit-ocw.jpg',
      featured: false
    }
  ]

  // Filter resources based on selected department and type
  const filteredResources = resources.filter(resource => {
    const matchesDepartment = selectedDepartment === 'all' || resource.department === selectedDepartment
    const matchesType = selectedType === 'all' || resource.type === selectedType
    return matchesDepartment && matchesType
  })

  // Get featured resources
  const featuredResources = resources.filter(resource => resource.featured)

  // Get resource icon based on type
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'book':
        return <FaBook className="text-primary-600" />
      case 'video':
        return <FaVideo className="text-red-600" />
      case 'website':
        return <FaGlobe className="text-blue-600" />
      case 'paper':
        return <FaFilePdf className="text-orange-600" />
      default:
        return <FaBook className="text-primary-600" />
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Recommended Resources</h2>
      
      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Featured Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredResources.map(resource => (
              <div key={resource.id} className="bg-primary-50 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-gray-200 flex items-center justify-center p-6">
                  {getResourceIcon(resource.type)}
                </div>
                <div className="w-full md:w-2/3 p-6">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-bold text-gray-800">{resource.title}</h4>
                    <div className="flex items-center text-yellow-500">
                      <FaStar />
                      <span className="ml-1 text-sm text-gray-600">{resource.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{resource.author}</p>
                  <p className="mt-2 text-gray-700">{resource.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                      {departments.find(d => d.id === resource.department)?.name}
                    </span>
                    {resource.type === 'book' ? (
                      <button
                        onClick={() => onBookSelect(resource)}
                        className="px-3 py-1 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700 transition-colors"
                      >
                        View Book
                      </button>
                    ) : (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700 transition-colors"
                      >
                        Access Resource
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <FaFilter className="text-primary-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Filter Resources</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Department Filter */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <select
              id="department"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
          </div>
          
          {/* Resource Type Filter */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Resource Type</label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Types</option>
              {resourceTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Resource List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-semibold text-gray-800">All Resources</h3>
        </div>
        
        {filteredResources.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {filteredResources.map(resource => (
              <li key={resource.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-1">
                    {getResourceIcon(resource.type)}
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">{resource.title}</h4>
                      <div className="flex items-center text-yellow-500">
                        <FaStar />
                        <span className="ml-1 text-sm text-gray-600">{resource.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{resource.author}</p>
                    <p className="mt-1 text-sm text-gray-700">{resource.description}</p>
                    <div className="mt-2 flex items-center">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full mr-2">
                        {departments.find(d => d.id === resource.department)?.name}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        {resourceTypes.find(t => t.id === resource.type)?.name}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex items-center space-x-2">
                    {resource.type === 'book' ? (
                      <>
                        <button
                          onClick={() => onBookSelect(resource)}
                          className="p-2 text-primary-600 hover:text-primary-800"
                          title="View"
                        >
                          <FaEye />
                        </button>
                        <a
                          href={resource.url}
                          download
                          className="p-2 text-gray-600 hover:text-gray-800"
                          title="Download"
                        >
                          <FaDownload />
                        </a>
                      </>
                    ) : (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-primary-600 hover:text-primary-800"
                        title="Access Resource"
                      >
                        <FaGlobe />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500">No resources match your filter criteria.</p>
            <button
              onClick={() => { setSelectedDepartment('all'); setSelectedType('all'); }}
              className="mt-2 text-primary-600 hover:text-primary-800 font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      
      {/* Resource Request */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-2">Can't Find What You Need?</h3>
        <p className="text-gray-700 mb-4">
          If you're looking for specific resources that aren't listed here, please let us know and our library team will help you find them.
        </p>
        <a
          href="/library/request"
          className="inline-block px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          Request a Resource
        </a>
      </div>
    </div>
  )
}

export default RecommendedResources 