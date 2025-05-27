import React, { useState } from 'react'
import { FaUserCheck, FaCalendarAlt, FaCheck, FaTimes, FaFilter, FaDownload } from 'react-icons/fa'

interface Student {
  id: string
  name: string
  rollNumber: string
}

interface Course {
  id: string
  code: string
  name: string
  students: Student[]
}

interface AttendanceRecord {
  date: string
  courseId: string
  attendance: {
    studentId: string
    present: boolean
  }[]
}

const AttendanceManager: React.FC = () => {
  // Sample courses data
  const [courses] = useState<Course[]>([
    {
      id: 'course1',
      code: 'CS301',
      name: 'Data Structures and Algorithms',
      students: [
        { id: 'std1', name: 'Amit Kumar', rollNumber: 'CS2023001' },
        { id: 'std2', name: 'Priya Sharma', rollNumber: 'CS2023002' },
        { id: 'std3', name: 'Rahul Singh', rollNumber: 'CS2023003' },
        { id: 'std4', name: 'Neha Gupta', rollNumber: 'CS2023004' },
        { id: 'std5', name: 'Rajesh Verma', rollNumber: 'CS2023005' }
      ]
    },
    {
      id: 'course2',
      code: 'CS405',
      name: 'Artificial Intelligence',
      students: [
        { id: 'std6', name: 'Aarav Patel', rollNumber: 'CS2022001' },
        { id: 'std7', name: 'Meera Joshi', rollNumber: 'CS2022002' },
        { id: 'std8', name: 'Vikram Singh', rollNumber: 'CS2022003' },
        { id: 'std9', name: 'Ananya Desai', rollNumber: 'CS2022004' }
      ]
    },
    {
      id: 'course3',
      code: 'CS210',
      name: 'Database Management Systems',
      students: [
        { id: 'std10', name: 'Sanjay Mehta', rollNumber: 'CS2021001' },
        { id: 'std11', name: 'Kavita Reddy', rollNumber: 'CS2021002' },
        { id: 'std12', name: 'Deepak Sharma', rollNumber: 'CS2021003' }
      ]
    }
  ])

  // State for selected course and date
  const [selectedCourseId, setSelectedCourseId] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [viewMode, setViewMode] = useState<'take' | 'view'>('take')
  
  // State for attendance records
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([
    {
      date: '2023-11-01',
      courseId: 'course1',
      attendance: [
        { studentId: 'std1', present: true },
        { studentId: 'std2', present: true },
        { studentId: 'std3', present: false },
        { studentId: 'std4', present: true },
        { studentId: 'std5', present: true }
      ]
    },
    {
      date: '2023-11-03',
      courseId: 'course1',
      attendance: [
        { studentId: 'std1', present: true },
        { studentId: 'std2', present: false },
        { studentId: 'std3', present: true },
        { studentId: 'std4', present: true },
        { studentId: 'std5', present: false }
      ]
    },
    {
      date: '2023-11-02',
      courseId: 'course2',
      attendance: [
        { studentId: 'std6', present: true },
        { studentId: 'std7', present: true },
        { studentId: 'std8', present: true },
        { studentId: 'std9', present: false }
      ]
    }
  ])

  // Current attendance being taken
  const [currentAttendance, setCurrentAttendance] = useState<{
    [key: string]: boolean
  }>({})

  // Get selected course
  const getSelectedCourse = () => {
    return courses.find(course => course.id === selectedCourseId)
  }

  // Handle attendance toggle
  const toggleAttendance = (studentId: string) => {
    setCurrentAttendance(prev => ({
      ...prev,
      [studentId]: !prev[studentId]
    }))
  }

  // Initialize attendance for all students in a course
  const initializeAttendance = (courseId: string) => {
    const course = courses.find(c => c.id === courseId)
    if (!course) return

    const initialAttendance: { [key: string]: boolean } = {}
    course.students.forEach(student => {
      initialAttendance[student.id] = false
    })

    setCurrentAttendance(initialAttendance)
  }

  // Handle course selection
  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const courseId = e.target.value
    setSelectedCourseId(courseId)
    if (courseId) {
      initializeAttendance(courseId)
    }
  }

  // Save attendance
  const saveAttendance = () => {
    if (!selectedCourseId || !selectedDate) {
      alert('Please select a course and date')
      return
    }

    const course = courses.find(c => c.id === selectedCourseId)
    if (!course) return

    // Check if attendance for this date and course already exists
    const existingRecordIndex = attendanceRecords.findIndex(
      record => record.date === selectedDate && record.courseId === selectedCourseId
    )

    const newAttendanceRecord: AttendanceRecord = {
      date: selectedDate,
      courseId: selectedCourseId,
      attendance: course.students.map(student => ({
        studentId: student.id,
        present: !!currentAttendance[student.id]
      }))
    }

    if (existingRecordIndex >= 0) {
      // Update existing record
      const updatedRecords = [...attendanceRecords]
      updatedRecords[existingRecordIndex] = newAttendanceRecord
      setAttendanceRecords(updatedRecords)
    } else {
      // Add new record
      setAttendanceRecords([...attendanceRecords, newAttendanceRecord])
    }

    // Reset form
    setCurrentAttendance({})
    setSelectedCourseId('')
    setSelectedDate('')
    alert('Attendance saved successfully!')
  }

  // Get attendance record for selected date and course
  const getAttendanceRecord = () => {
    return attendanceRecords.find(
      record => record.date === selectedDate && record.courseId === selectedCourseId
    )
  }

  // Calculate attendance statistics
  const calculateAttendanceStats = (courseId: string) => {
    const courseRecords = attendanceRecords.filter(record => record.courseId === courseId)
    if (courseRecords.length === 0) return { present: 0, absent: 0, percentage: 0 }

    let totalPresent = 0
    let totalStudents = 0

    courseRecords.forEach(record => {
      record.attendance.forEach(att => {
        totalStudents++
        if (att.present) totalPresent++
      })
    })

    return {
      present: totalPresent,
      absent: totalStudents - totalPresent,
      percentage: Math.round((totalPresent / totalStudents) * 100)
    }
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUserCheck className="text-primary-600 text-xl mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Attendance Manager</h2>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('take')}
              className={`px-3 py-1 rounded-md text-sm ${
                viewMode === 'take'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Take Attendance
            </button>
            <button
              onClick={() => setViewMode('view')}
              className={`px-3 py-1 rounded-md text-sm ${
                viewMode === 'view'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              View Records
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'take' ? (
        <div className="p-6">
          {/* Take Attendance Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                Select Course
              </label>
              <select
                id="course"
                value={selectedCourseId}
                onChange={handleCourseChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">-- Select Course --</option>
                {courses.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.code}: {course.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Select Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="text-gray-400" />
                </div>
                <input
                  type="date"
                  id="date"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {selectedCourseId && selectedDate ? (
            <>
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <h3 className="font-medium text-gray-800 mb-2">
                  Taking attendance for {getSelectedCourse()?.code}: {getSelectedCourse()?.name} on {formatDate(selectedDate)}
                </h3>
                <p className="text-sm text-gray-600">
                  Click on a student's status to toggle between present and absent.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Roll Number
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {getSelectedCourse()?.students.map(student => (
                      <tr key={student.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {student.rollNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {student.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => toggleAttendance(student.id)}
                            className={`px-4 py-1 rounded-full text-sm font-medium ${
                              currentAttendance[student.id]
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {currentAttendance[student.id] ? (
                              <>
                                <FaCheck className="inline mr-1" /> Present
                              </>
                            ) : (
                              <>
                                <FaTimes className="inline mr-1" /> Absent
                              </>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={saveAttendance}
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  Save Attendance
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-gray-500">
              Please select a course and date to take attendance.
            </div>
          )}
        </div>
      ) : (
        <div className="p-6">
          {/* View Attendance Records */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="viewCourse" className="block text-sm font-medium text-gray-700 mb-1">
                Select Course
              </label>
              <select
                id="viewCourse"
                value={selectedCourseId}
                onChange={handleCourseChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">-- Select Course --</option>
                {courses.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.code}: {course.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="viewDate" className="block text-sm font-medium text-gray-700 mb-1">
                Select Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="text-gray-400" />
                </div>
                <select
                  id="viewDate"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">-- Select Date --</option>
                  {attendanceRecords
                    .filter(record => record.courseId === selectedCourseId)
                    .map(record => (
                      <option key={record.date} value={record.date}>
                        {formatDate(record.date)}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          {selectedCourseId && !selectedDate && (
            <div className="mb-6">
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <h3 className="font-medium text-gray-800 mb-2">
                  Attendance Summary for {getSelectedCourse()?.code}: {getSelectedCourse()?.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <div className="text-sm text-gray-500">Total Classes</div>
                    <div className="text-xl font-bold text-gray-800">
                      {attendanceRecords.filter(record => record.courseId === selectedCourseId).length}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <div className="text-sm text-gray-500">Overall Attendance</div>
                    <div className="text-xl font-bold text-green-600">
                      {calculateAttendanceStats(selectedCourseId).percentage}%
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <div className="text-sm text-gray-500">Total Students</div>
                    <div className="text-xl font-bold text-gray-800">
                      {getSelectedCourse()?.students.length || 0}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800">Attendance History</h3>
                <button className="flex items-center text-sm text-primary-600 hover:text-primary-800">
                  <FaDownload className="mr-1" /> Export Report
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Present
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Absent
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Percentage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attendanceRecords
                      .filter(record => record.courseId === selectedCourseId)
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .map(record => {
                        const presentCount = record.attendance.filter(a => a.present).length
                        const totalCount = record.attendance.length
                        const percentage = Math.round((presentCount / totalCount) * 100)
                        
                        return (
                          <tr key={record.date} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedDate(record.date)}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              {formatDate(record.date)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                              {presentCount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                              {totalCount - presentCount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <span className="text-sm font-medium text-gray-800 mr-2">{percentage}%</span>
                                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                                  <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedCourseId && selectedDate && (
            <>
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">
                    Attendance for {getSelectedCourse()?.code} on {formatDate(selectedDate)}
                  </h3>
                  <button
                    onClick={() => setSelectedDate('')}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Back to Summary
                  </button>
                </div>
              </div>

              {getAttendanceRecord() ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Roll Number
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Student Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {getAttendanceRecord()?.attendance.map(att => {
                        const student = getSelectedCourse()?.students.find(s => s.id === att.studentId)
                        if (!student) return null

                        return (
                          <tr key={student.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              {student.rollNumber}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              {student.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                att.present
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {att.present ? 'Present' : 'Absent'}
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No attendance record found for the selected date.
                </div>
              )}
            </>
          )}

          {!selectedCourseId && (
            <div className="text-center py-8 text-gray-500">
              Please select a course to view attendance records.
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default AttendanceManager 