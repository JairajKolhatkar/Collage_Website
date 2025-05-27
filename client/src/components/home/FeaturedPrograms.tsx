import { Link } from 'react-router-dom'

const FeaturedPrograms = () => {
  const programs = [
    {
      title: 'Bachelor of Arts',
      description: 'Comprehensive programs in English Literature, History, Economics, and more.',
      image: 'arts.jpg',
      link: '/academics#arts'
    },
    {
      title: 'Bachelor of Science',
      description: 'Cutting-edge programs in Physics, Chemistry, Mathematics, and Computer Science.',
      image: 'science.jpg',
      link: '/academics#science'
    },
    {
      title: 'Bachelor of Commerce',
      description: 'Industry-focused programs with specializations in Accounting and Finance.',
      image: 'commerce.jpg',
      link: '/academics#commerce'
    },
    {
      title: 'Master\'s Programs',
      description: 'Advanced studies in various disciplines to enhance your career prospects.',
      image: 'masters.jpg',
      link: '/academics#masters'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our diverse range of undergraduate and postgraduate programs designed to prepare you for a successful career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-primary-100 flex items-center justify-center">
                {/* Placeholder for image */}
                <span className="text-4xl text-primary-600 font-bold">{program.title.split(' ')[0]}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link to={program.link} className="text-primary-600 font-medium hover:text-primary-700">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/academics" className="btn-primary">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPrograms 