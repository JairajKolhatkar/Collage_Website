import React, { useState } from 'react'
import { FaBook, FaUsers, FaCalendarAlt, FaFileAlt, FaClipboardList, FaChartBar, FaLink } from 'react-icons/fa'

interface Course {
  id: string
  code: string
  name: string
  semester: string
  students: number
  schedule: {
    day: string
    time: string
    location: string
  }[]
  progress: number
  nextClass: string
  nextTopic: string
  assignments: {
    total: number
    pending: number
  }
}

const CourseManager: React.FC = () => {
  // Sample course data
  const [courses] = useState<Course[]>([
    {
      id: 'course1',
      code: 'CS301',
      name: 'Data Structures and Algorithms',
      semester: 'Fall 2023',
      students: 45,
      schedule: [
        { day: 'Monday', time: '10:00 AM - 11:30 AM', location: 'Room 101' },
        { day: 'Wednesday', time: '10:00 AM - 11:30 AM', location: 'Room 101' }
      ],
      progress: 65,
      nextClass: '2023-11-06T10:00:00',
      nextTopic: 'Advanced Graph Algorithms',
      assignments: {
        total: 5,
        pending: 2
      }
    },
    {
      id: 'course2',
      code: 'CS405',
      name: 'Artificial Intelligence',
      semester: 'Fall 2023',
      students: 38,
      schedule: [
        { day: 'Tuesday', time: '2:00 PM - 3:30 PM', location: 'Lab 204' },
        { day: 'Thursday', time: '2:00 PM - 3:30 PM', location: 'Lab 204' }
      ],
      progress: 55,
      nextClass: '2023-11-07T14:00:00',
      nextTopic: 'Neural Networks',
      assignments: {
        total: 4,
        pending: 1
      }
    },
    {
      id: 'course3',
      code: 'CS210',
      name: 'Database Management Systems',
      semester: 'Fall 2023',
      students: 50,
      schedule: [
        { day: 'Monday', time: '1:00 PM - 2:30 PM', location: 'Room 105' },
        { day: 'Friday', time: '1:00 PM - 2:30 PM', location: 'Lab 202' }
      ],
      progress: 70,
      nextClass: '2023-11-06T13:00:00',
      nextTopic: 'Transaction Processing',
      assignments: {
        total: 6,
        pending: 3
      }
    },
    {
      id: 'course4',
      code: 'CS450',
      name: 'Machine Learning',
      semester: 'Fall 2023',
      students: 30,
      schedule: [
        { day: 'Wednesday', time: '3:00 PM - 4:30 PM', location: 'Lab 205' },
        { day: 'Friday', time: '3:00 PM - 4:30 PM', location: 'Lab 205' }
      ],
      progress: 60,
      nextClass: '2023-11-08T15:00:00',
      nextTopic: 'Support Vector Machines',
      assignments: {
        total: 4,
        pending: 2
      }
    }
  ])

  // Calculate days until next class
  const getDaysUntilNextClass = (nextClassDate: string) => {
    const today = new Date()
    const nextClass = new Date(nextClassDate)
    
    // Reset time part for accurate day calculation
    today.setHours(0, 0, 0, 0)
    nextClass.setHours(0, 0, 0, 0)
    
    const diffTime = nextClass.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Tomorrow'
    return `In ${diffDays} days`
  }

  // Format date for display
  const formatDateTime = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    return new Date(dateString).toLocaleString('en-US', options)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <FaBook className="text-primary-600 text-xl mr-2" />
          <h2 className="text-xl font-bold text-gray-800">My Courses</h2>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 gap-6">
          {courses.map(course => (
            <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-5 bg-gray-50">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {course.code}: {course.name}
                    </h3>
                    <p className="text-gray-600">{course.semester}</p>
                  </div>
                  
                  <div className="mt-2 md:mt-0 flex items-center">
                    <div className="flex items-center text-gray-700 mr-4">
                      <FaUsers className="mr-1" />
                      <span>{course.students} Students</span>
                    </div>
                    <div className="flex-1 md:w-48">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Course Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Next Class */}
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="flex items-center text-primary-700 mb-2">
                      <FaCalendarAlt className="mr-2" />
                      <h4 className="font-medium">Next Class</h4>
                    </div>
                    <p className="text-gray-800 font-medium">{formatDateTime(course.nextClass)}</p>
                    <p className="text-gray-600 text-sm">{getDaysUntilNextClass(course.nextClass)}</p>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>Topic: {course.nextTopic}</p>
                    </div>
                  </div>
                  
                  {/* Schedule */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center text-blue-700 mb-2">
                      <FaClipboardList className="mr-2" />
                      <h4 className="font-medium">Schedule</h4>
                    </div>
                    <ul className="space-y-1 text-sm">
                      {course.schedule.map((session, index) => (
                        <li key={index} className="text-gray-700">
                          <span className="font-medium">{session.day}:</span> {session.time}
                          <div className="text-xs text-gray-600">{session.location}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Assignments */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center text-green-700 mb-2">
                      <FaFileAlt className="mr-2" />
                      <h4 className="font-medium">Assignments</h4>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-green-200 flex items-center justify-center mr-3">
                        <span className="text-green-700 font-bold">{course.assignments.pending}</span>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Pending to Grade</p>
                        <p className="text-gray-600 text-sm">
                          {course.assignments.total} Total Assignments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between">
                  <div className="flex space-x-2">
                    <a
                      href={`/course/${course.id}/materials`}
                      className="flex items-center text-primary-600 hover:text-primary-800 text-sm"
                    >
                      <FaLink className="mr-1" /> Course Materials
                    </a>
                    <a
                      href={`/course/${course.id}/grades`}
                      className="flex items-center text-primary-600 hover:text-primary-800 text-sm"
                    >
                      <FaChartBar className="mr-1" /> Grade Book
                    </a>
                  </div>
                  <a
                    href={`/course/${course.id}`}
                    className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                  >
                    Manage Course →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseManager 