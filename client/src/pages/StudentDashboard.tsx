import { useState } from 'react'
import StudentProfile from '../components/Student/StudentProfile'
import CourseProgress from '../components/Student/CourseProgress'
import Timetable from '../components/Student/Timetable'
import Notifications from '../components/Student/Notifications'
import ResourceLinks from '../components/Student/ResourceLinks'
import UpcomingAssignments from '../components/Student/UpcomingAssignments'
import Attendance from '../components/Student/Attendance'

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  // Mock student data
  const studentData = {
    id: 'STU2023001',
    name: 'Ananya Sharma',
    program: 'Bachelor of Science in Computer Science',
    semester: '4th Semester',
    email: 'ananya.s@vkcollegerohana.co.in',
    phone: '+91 98765-43210',
    admissionYear: '2021',
    dob: '15 May 2003',
    address: '123, Park Street, Rohana - 110001',
    image: '/images/student-profile.jpg'
  }

  // Mock navigation items
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'home' },
    { id: 'courses', label: 'My Courses', icon: 'book' },
    { id: 'assignments', label: 'Assignments', icon: 'tasks' },
    { id: 'attendance', label: 'Attendance', icon: 'calendar-check' },
    { id: 'exams', label: 'Exams', icon: 'file-alt' },
    { id: 'results', label: 'Results', icon: 'chart-bar' },
    { id: 'fees', label: 'Fees', icon: 'money-bill' },
    { id: 'library', label: 'Library', icon: 'book-reader' },
    { id: 'settings', label: 'Settings', icon: 'cog' }
  ]

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container-custom py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Student Profile Summary */}
              <div className="p-6 bg-primary-700 text-white">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-white text-primary-700 flex items-center justify-center text-2xl font-bold mr-4">
                    {studentData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{studentData.name}</h2>
                    <p className="text-primary-100">{studentData.program}</p>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <p>ID: {studentData.id}</p>
                  <p>{studentData.semester}</p>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="p-4">
                <ul className="space-y-2">
                  {navigationItems.map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center p-3 rounded-md transition-colors ${
                          activeTab === item.id
                            ? 'bg-primary-50 text-primary-700 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="mr-3">
                          <i className={`fas fa-${item.icon}`}></i>
                        </span>
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="p-4 border-t border-gray-200">
                <a href="/logout" className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                  <span className="mr-3">
                    <i className="fas fa-sign-out-alt"></i>
                  </span>
                  Logout
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Welcome Banner */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome back, {studentData.name.split(' ')[0]}!</h1>
                  <p className="text-gray-600">
                    Here's a summary of your academic progress and upcoming activities.
                  </p>
                </div>
                
                {/* Course Progress Cards */}
                <CourseProgress />
                
                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Timetable />
                  <UpcomingAssignments />
                </div>
                
                {/* Third Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Attendance />
                  <Notifications />
                  <ResourceLinks />
                </div>
              </div>
            )}
            
            {activeTab === 'courses' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">My Courses</h2>
                <p className="text-gray-600">Your enrolled courses will appear here.</p>
              </div>
            )}
            
            {activeTab === 'assignments' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Assignments</h2>
                <p className="text-gray-600">Your assignments will appear here.</p>
              </div>
            )}
            
            {/* Similar placeholders for other tabs */}
            {activeTab === 'attendance' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Attendance</h2>
                <p className="text-gray-600">Your attendance records will appear here.</p>
              </div>
            )}
            
            {activeTab === 'profile' && (
              <StudentProfile studentData={studentData} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard 