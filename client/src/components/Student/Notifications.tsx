import { FC } from 'react'

const Notifications: FC = () => {
  // Mock notifications
  const notifications = [
    { 
      id: 1, 
      type: 'academic', 
      message: 'End semester exams start from June 15, 2023', 
      date: '2 days ago' 
    },
    { 
      id: 2, 
      type: 'assignment', 
      message: 'New assignment posted for Database Systems', 
      date: '5 hours ago' 
    },
    { 
      id: 3, 
      type: 'event', 
      message: 'Annual Tech Symposium registration open now', 
      date: '1 day ago' 
    },
    { 
      id: 4, 
      type: 'result', 
      message: 'Mid-term results have been published', 
      date: '3 days ago' 
    }
  ]

  // Get icon based on notification type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return <i className="fas fa-graduation-cap text-blue-500"></i>
      case 'assignment':
        return <i className="fas fa-book text-green-500"></i>
      case 'event':
        return <i className="fas fa-calendar text-purple-500"></i>
      case 'result':
        return <i className="fas fa-chart-bar text-orange-500"></i>
      default:
        return <i className="fas fa-bell text-gray-500"></i>
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-primary-700 text-white flex justify-between items-center">
        <h3 className="font-bold">Notifications</h3>
        <span className="text-xs bg-white text-primary-700 px-2 py-1 rounded-full">
          {notifications.length} New
        </span>
      </div>
      <div className="p-4">
        <ul className="divide-y divide-gray-200">
          {notifications.map(notification => (
            <li key={notification.id} className="py-3">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-3 text-center">
          <a href="#" className="text-sm text-primary-600 hover:text-primary-800">
            View All Notifications
          </a>
        </div>
      </div>
    </div>
  )
}

export default Notifications 