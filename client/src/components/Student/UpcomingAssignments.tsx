import { FC } from 'react'

const UpcomingAssignments: FC = () => {
  // Mock assignments data
  const assignments = [
    {
      id: 1,
      course: 'Data Structures',
      title: 'Implementation of AVL Trees',
      dueDate: 'June 10, 2023',
      status: 'pending',
      priority: 'high'
    },
    {
      id: 2,
      course: 'Database Systems',
      title: 'ER Diagram for College Management System',
      dueDate: 'June 15, 2023',
      status: 'pending',
      priority: 'medium'
    },
    {
      id: 3,
      course: 'Web Development',
      title: 'Creating a Responsive Portfolio Website',
      dueDate: 'June 8, 2023',
      status: 'pending',
      priority: 'high'
    },
    {
      id: 4,
      course: 'Software Engineering',
      title: 'Software Requirements Specification Document',
      dueDate: 'June 20, 2023',
      status: 'pending',
      priority: 'medium'
    }
  ]

  // Get priority color class
  const getPriorityColorClass = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-primary-700 text-white">
        <h3 className="font-bold">Upcoming Assignments</h3>
      </div>
      <div className="p-4">
        {assignments.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {assignments.map(assignment => (
              <li key={assignment.id} className="py-3">
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium text-gray-900">{assignment.title}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColorClass(assignment.priority)}`}>
                      {assignment.priority}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{assignment.course}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">Due: {assignment.dueDate}</span>
                    <a href="#" className="text-xs text-primary-600 hover:text-primary-800">
                      View Details
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center py-4 text-gray-500">No upcoming assignments</p>
        )}
        <div className="mt-3 text-center">
          <a href="#" className="text-sm text-primary-600 hover:text-primary-800">
            View All Assignments
          </a>
        </div>
      </div>
    </div>
  )
}

export default UpcomingAssignments 