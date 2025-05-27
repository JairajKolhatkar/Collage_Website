import { FC } from 'react'

const ResourceLinks: FC = () => {
  // Mock resource links
  const resourceLinks = [
    { 
      id: 1, 
      title: 'Learning Management System', 
      url: 'https://lms.vkcollegerohana.co.in',
      icon: 'laptop-code'
    },
    { 
      id: 2, 
      title: 'Digital Library', 
      url: 'https://library.vkcollegerohana.co.in',
      icon: 'book-reader'
    },
    { 
      id: 3, 
      title: 'Academic Calendar', 
      url: 'https://vkcollegerohana.co.in/calendar',
      icon: 'calendar-alt'
    },
    { 
      id: 4, 
      title: 'Student Handbook', 
      url: 'https://vkcollegerohana.co.in/handbook',
      icon: 'book'
    },
    { 
      id: 5, 
      title: 'Career Services', 
      url: 'https://vkcollegerohana.co.in/career',
      icon: 'briefcase'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-primary-700 text-white">
        <h3 className="font-bold">Quick Links</h3>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {resourceLinks.map(link => (
            <li key={link.id}>
              <a 
                href={link.url} 
                className="flex items-center p-2 hover:bg-gray-50 rounded transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3">
                  <i className={`fas fa-${link.icon}`}></i>
                </span>
                <span className="text-gray-700">{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResourceLinks 