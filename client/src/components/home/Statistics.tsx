import { FaUserGraduate, FaChalkboardTeacher, FaAward, FaCalendarAlt } from 'react-icons/fa'

const Statistics = () => {
  const stats = [
    {
      icon: <FaUserGraduate className="text-4xl text-primary-500 mb-4" />,
      value: '5,000+',
      label: 'Students'
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-primary-500 mb-4" />,
      value: '200+',
      label: 'Faculty Members'
    },
    {
      icon: <FaAward className="text-4xl text-primary-500 mb-4" />,
      value: '50+',
      label: 'Awards & Recognitions'
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-primary-500 mb-4" />,
      value: '1954',
      label: 'Established'
    }
  ]

  return (
    <section className="py-20 bg-primary-700 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p className="max-w-2xl mx-auto text-primary-100">
            For over six decades, we have been committed to academic excellence and holistic development of our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-primary-800 hover:bg-primary-900 transition-colors">
              {stat.icon}
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics 