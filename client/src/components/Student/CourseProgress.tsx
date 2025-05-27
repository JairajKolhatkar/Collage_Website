import React from 'react'
import { FaBook, FaChartLine, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'

const CourseProgress = () => {
  // Mock course data
  const courses = [
    {
      id: 1,
      code: 'CS201',
      name: 'Data Structures and Algorithms',
      instructor: 'Dr. Rajesh Kumar',
      progress: 75,
      grades: 'A-',
      nextClass: 'Tomorrow, 10:00 AM',
      assignments: {
        completed: 8,
        total: 10
      },
      status: 'good'
    },
    {
      id: 2,
      code: 'CS203',
      name: 'Database Management Systems',
      instructor: 'Prof. Amit Verma',
      progress: 65,
      grades: 'B+',
      nextClass: 'Today, 2:00 PM',
      assignments: {
        completed: 5,
        total: 8
      },
      status: 'warning'
    },
    {
      id: 3,
      code: 'CS205',
      name: 'Computer Networks',
      instructor: 'Dr. Priya Sharma',
      progress: 90,
      grades: 'A',
      nextClass: 'Wednesday, 11:30 AM',
      assignments: {
        completed: 7,
        total: 7
      },
      status: 'good'
    },
    {
      id: 4,
      code: 'MATH201',
      name: 'Discrete Mathematics',
      instructor: 'Dr. Sunita Reddy',
      progress: 60,
      grades: 'B',
      nextClass: 'Friday, 9:00 AM',
      assignments: {
        completed: 4,
        total: 8
      },
      status: 'warning'
    }
  ]

  // Helper function for progress color
  const getProgressColor = (progress: number, status: string) => {
    if (status === 'warning') return 'text-yellow-500'
    if (progress >= 80) return 'text-green-500'
    if (progress >= 60) return 'text-blue-500'
    return 'text-red-500'
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Course Progress</h2>
        <a href="/courses" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
          View All Courses
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 rounded-lg mr-4">
                    <FaBook className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{course.name}</h3>
                    <p className="text-sm text-gray-500">{course.code} • {course.instructor}</p>
                  </div>
                </div>
                {course.status === 'warning' ? (
                  <FaExclamationTriangle className="text-yellow-500" />
                ) : (
                  <FaCheckCircle className="text-green-500" />
                )}
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className={`text-sm font-medium ${getProgressColor(course.progress, course.status)}`}>
                    {course.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      course.status === 'warning' ? 'bg-yellow-500' : 'bg-primary-600'
                    }`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <p className="text-sm text-gray-500">Current Grade</p>
                  <p className="font-bold text-gray-800 text-lg">{course.grades}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <p className="text-sm text-gray-500">Assignments</p>
                  <p className="font-bold text-gray-800 text-lg">{course.assignments.completed}/{course.assignments.total}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Next Class</p>
                    <p className="text-sm font-medium text-gray-800">{course.nextClass}</p>
                  </div>
                  <a 
                    href={`/courses/${course.id}`} 
                    className="px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded-md hover:bg-primary-100 transition-colors"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <div className="bg-primary-50 border border-primary-100 rounded-lg p-4 flex items-start">
          <FaChartLine className="text-primary-600 mt-1 mr-3" />
          <div>
            <h3 className="font-semibold text-primary-800">Semester Progress</h3>
            <p className="text-sm text-gray-700">You're making good progress in most courses. Focus on improving Database Management Systems and Discrete Mathematics to maintain a good GPA.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseProgress 