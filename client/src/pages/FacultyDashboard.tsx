import { useState } from 'react'
import AssignmentUploader from '../components/Faculty/AssignmentUploader'
import ExamScheduler from '../components/Faculty/ExamScheduler'
import AttendanceManager from '../components/Faculty/AttendanceManager'
import AnnouncementBoard from '../components/Faculty/AnnouncementBoard'
import MessageSystem from '../components/Faculty/MessageSystem'
import CourseManager from '../components/Faculty/CourseManager'

const FacultyDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  // Mock faculty data
  const facultyData = {
    id: 'FAC2023005',
    name: 'Dr. Rajesh Kumar',
    department: 'Computer Science',
    position: 'Associate Professor & Head',
    email: 'rajesh.kumar@vkcollege.edu.in',
    phone: '+91 98765-43210',
    joiningYear: '2010',
    specialization: 'Artificial Intelligence, Machine Learning',
    image: '/images/faculty-profile.jpg'
  }

  // Mock navigation items
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'home' },
    { id: 'courses', label: 'My Courses', icon: 'book' },
    { id: 'assignments', label: 'Assignments', icon: 'tasks' },
    { id: 'attendance', label: 'Attendance', icon: 'user-check' },
    { id: 'exams', label: 'Exams', icon: 'file-alt' },
    { id: 'announcements', label: 'Announcements', icon: 'bullhorn' },
    { id: 'messages', label: 'Messages', icon: 'envelope' },
    { id: 'research', label: 'Research', icon: 'flask' },
    { id: 'settings', label: 'Settings', icon: 'cog' }
  ]

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container-custom py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Faculty Profile Summary */}
              <div className="p-6 bg-primary-700 text-white">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-white text-primary-700 flex items-center justify-center text-2xl font-bold mr-4">
                    {facultyData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{facultyData.name}</h2>
                    <p className="text-primary-100">{facultyData.position}</p>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <p>ID: {facultyData.id}</p>
                  <p>{facultyData.department} Department</p>
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
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome, {facultyData.name.split(' ')[0]}!</h1>
                  <p className="text-gray-600">
                    Here's an overview of your teaching activities and responsibilities.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">Active Courses</h3>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-gray-800">4</span>
                      <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Current Semester
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">Pending Assignments</h3>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-gray-800">12</span>
                      <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        To Grade
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">Student Messages</h3>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-gray-800">5</span>
                      <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        Unread
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Course Manager */}
                <CourseManager />
                
                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AssignmentUploader />
                  <ExamScheduler />
                </div>
                
                {/* Third Row */}
                <div className="grid grid-cols-1 gap-6">
                  <AttendanceManager />
                  <AnnouncementBoard />
                </div>
              </div>
            )}
            
            {activeTab === 'courses' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">My Courses</h2>
                <p className="text-gray-600">Manage your courses here.</p>
              </div>
            )}
            
            {activeTab === 'assignments' && (
              <AssignmentUploader />
            )}
            
            {activeTab === 'attendance' && (
              <AttendanceManager />
            )}
            
            {activeTab === 'exams' && (
              <ExamScheduler />
            )}
            
            {activeTab === 'announcements' && (
              <AnnouncementBoard />
            )}
            
            {activeTab === 'messages' && (
              <MessageSystem />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacultyDashboard 