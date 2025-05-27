import { Link } from 'react-router-dom'
import { FaGraduationCap, FaBook, FaPhone, FaUserPlus } from 'react-icons/fa'

const QuickNavigation = () => {
  const navItems = [
    {
      icon: <FaUserPlus className="text-3xl mb-3 text-primary-500" />,
      title: 'Admissions',
      description: 'Apply online or learn about the admission process',
      link: '/admissions'
    },
    {
      icon: <FaGraduationCap className="text-3xl mb-3 text-primary-500" />,
      title: 'Academics',
      description: 'Explore our programs, courses and departments',
      link: '/academics'
    },
    {
      icon: <FaBook className="text-3xl mb-3 text-primary-500" />,
      title: 'Library',
      description: 'Access our extensive collection of resources',
      link: '/library'
    },
    {
      icon: <FaPhone className="text-3xl mb-3 text-primary-500" />,
      title: 'Contact',
      description: 'Get in touch with our administration',
      link: '/contact'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {navItems.map((item, index) => (
            <Link 
              to={item.link} 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center"
            >
              {item.icon}
              <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickNavigation 