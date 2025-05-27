import React, { useState } from 'react'
import { FaSearch, FaEnvelope, FaPhone, FaGraduationCap, FaAward } from 'react-icons/fa'

const FacultyDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [departmentFilter, setDepartmentFilter] = useState('all')

  const faculty = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      position: 'Associate Professor & Head',
      department: 'Computer Science',
      qualification: 'Ph.D. in Computer Science',
      specialization: 'Artificial Intelligence, Machine Learning',
      email: 'rajesh.kumar@vkcollege.edu.in',
      phone: '+91 98765-43210',
      image: 'faculty1.jpg',
      bio: 'Dr. Kumar has over 15 years of teaching and research experience. He has published numerous papers in international journals and conferences on artificial intelligence and machine learning applications.'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      position: 'Professor',
      department: 'English',
      qualification: 'Ph.D. in English Literature',
      specialization: 'Victorian Literature, Literary Theory',
      email: 'priya.sharma@vkcollege.edu.in',
      phone: '+91 98765-43211',
      image: 'faculty2.jpg',
      bio: 'Dr. Sharma is an accomplished scholar in Victorian literature with several books and research papers to her credit. She has been teaching at VK College for the past 12 years.'
    },
    {
      id: 3,
      name: 'Prof. Amit Verma',
      position: 'Assistant Professor',
      department: 'Physics',
      qualification: 'M.Sc., Ph.D. in Theoretical Physics',
      specialization: 'Quantum Mechanics, Astrophysics',
      email: 'amit.verma@vkcollege.edu.in',
      phone: '+91 98765-43212',
      image: 'faculty3.jpg',
      bio: 'Prof. Verma is a passionate physicist with research interests in quantum mechanics and theoretical astrophysics. He has collaborated with various international research groups and has published extensively.'
    },
    {
      id: 4,
      name: 'Dr. Sunita Reddy',
      position: 'Associate Professor',
      department: 'Commerce',
      qualification: 'Ph.D. in Commerce, CA',
      specialization: 'Financial Accounting, Corporate Taxation',
      email: 'sunita.reddy@vkcollege.edu.in',
      phone: '+91 98765-43213',
      image: 'faculty4.jpg',
      bio: 'Dr. Reddy combines academic excellence with professional expertise as a Chartered Accountant. She has industry experience and brings practical insights to her teaching of financial accounting and taxation.'
    },
    {
      id: 5,
      name: 'Dr. Manoj Singh',
      position: 'Professor',
      department: 'History',
      qualification: 'Ph.D. in Modern Indian History',
      specialization: 'Colonial India, Freedom Movement',
      email: 'manoj.singh@vkcollege.edu.in',
      phone: '+91 98765-43214',
      image: 'faculty5.jpg',
      bio: 'Dr. Singh is a renowned historian specializing in modern Indian history. He has authored several books on colonial India and the Indian freedom movement. He is actively involved in archaeological explorations.'
    },
    {
      id: 6,
      name: 'Dr. Anjali Gupta',
      position: 'Assistant Professor',
      department: 'Chemistry',
      qualification: 'Ph.D. in Organic Chemistry',
      specialization: 'Medicinal Chemistry, Green Chemistry',
      email: 'anjali.gupta@vkcollege.edu.in',
      phone: '+91 98765-43215',
      image: 'faculty6.jpg',
      bio: 'Dr. Gupta is an organic chemist with research focus on medicinal compounds and environmentally friendly chemical processes. She has several patents and publications in reputed international journals.'
    }
  ]

  const departments = [...new Set(faculty.map(f => f.department))]

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleDepartmentFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartmentFilter(e.target.value)
  }

  const filteredFaculty = faculty.filter(f => {
    const matchesDepartment = departmentFilter === 'all' || f.department === departmentFilter
    const matchesSearch = 
      searchTerm === '' || 
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.department.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesDepartment && matchesSearch
  })

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Faculty Directory</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, department, or specialization..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          {/* Department Filter */}
          <div>
            <select
              value={departmentFilter}
              onChange={handleDepartmentFilter}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Departments</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Faculty Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.length > 0 ? (
          filteredFaculty.map(f => (
            <div key={f.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {/* In a real application, use actual faculty images */}
                <div className="w-32 h-32 rounded-full bg-primary-600 flex items-center justify-center text-white text-3xl font-bold">
                  {f.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{f.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{f.position}</p>
                <p className="text-sm text-gray-600 mb-4">{f.department} Department</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <FaGraduationCap className="text-gray-500 mr-2" />
                    <span className="text-sm text-gray-700">{f.qualification}</span>
                  </div>
                  <div className="flex items-center">
                    <FaAward className="text-gray-500 mr-2" />
                    <span className="text-sm text-gray-700">{f.specialization}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{f.bio}</p>
                
                <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2">
                  <a href={`mailto:${f.email}`} className="text-sm text-primary-600 hover:text-primary-700 flex items-center">
                    <FaEnvelope className="mr-2" />
                    {f.email}
                  </a>
                  <a href={`tel:${f.phone}`} className="text-sm text-primary-600 hover:text-primary-700 flex items-center">
                    <FaPhone className="mr-2" />
                    {f.phone}
                  </a>
                </div>
                
                <a href={`/academics/faculty/${f.id}`} className="block mt-4 text-center py-2 px-4 bg-primary-50 text-primary-600 rounded-md hover:bg-primary-100 transition-colors">
                  View Full Profile
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 mb-4">No faculty members match your search criteria.</p>
            <button
              onClick={() => { setSearchTerm(''); setDepartmentFilter('all'); }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default FacultyDirectory 