import { useState } from 'react'
import CourseList from '../components/Academics/CourseList'
import FacultyDirectory from '../components/Academics/FacultyDirectory'
import SyllabusSection from '../components/Academics/SyllabusSection'
import DepartmentInfo from '../components/Academics/DepartmentInfo'

const Academics = () => {
  const [activeTab, setActiveTab] = useState('courses')

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Academics</h1>
          <p className="text-xl max-w-2xl">
            Discover our comprehensive range of programs designed to prepare you for success in your chosen field.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="mb-8 border-b border-gray-200">
          <div className="flex flex-wrap -mb-px">
            <button
              onClick={() => setActiveTab('courses')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'courses'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Course Listings
            </button>
            <button
              onClick={() => setActiveTab('faculty')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'faculty'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Faculty Directory
            </button>
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'syllabus'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Syllabus & Resources
            </button>
            <button
              onClick={() => setActiveTab('departments')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'departments'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Departments
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="mt-8">
          {activeTab === 'courses' && <CourseList />}
          {activeTab === 'faculty' && <FacultyDirectory />}
          {activeTab === 'syllabus' && <SyllabusSection />}
          {activeTab === 'departments' && <DepartmentInfo />}
        </div>
      </div>
    </div>
  )
}

export default Academics 