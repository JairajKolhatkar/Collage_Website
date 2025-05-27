import { FC } from 'react'

const Attendance: FC = () => {
  // Mock attendance data
  const attendanceData = {
    overall: 85,
    courses: [
      { id: 1, name: 'Data Structures', percentage: 90 },
      { id: 2, name: 'Database Systems', percentage: 85 },
      { id: 3, name: 'Web Development', percentage: 75 },
      { id: 4, name: 'Software Engineering', percentage: 88 }
    ]
  }

  // Get color based on attendance percentage
  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 85) return 'bg-green-500'
    if (percentage >= 75) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-primary-700 text-white">
        <h3 className="font-bold">Attendance</h3>
      </div>
      <div className="p-4">
        {/* Overall Attendance */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <h4 className="text-sm font-medium text-gray-700">Overall Attendance</h4>
            <span className="text-sm font-medium text-gray-700">{attendanceData.overall}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`${getAttendanceColor(attendanceData.overall)} h-2 rounded-full`} 
              style={{ width: `${attendanceData.overall}%` }}
            ></div>
          </div>
        </div>

        {/* Course-wise Attendance */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Course-wise Attendance</h4>
          <ul className="space-y-2">
            {attendanceData.courses.map(course => (
              <li key={course.id}>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-gray-600">{course.name}</p>
                  <span className="text-xs font-medium text-gray-700">{course.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className={`${getAttendanceColor(course.percentage)} h-1.5 rounded-full`} 
                    style={{ width: `${course.percentage}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-3 text-center">
          <a href="#" className="text-sm text-primary-600 hover:text-primary-800">
            View Detailed Report
          </a>
        </div>
      </div>
    </div>
  )
}

export default Attendance 