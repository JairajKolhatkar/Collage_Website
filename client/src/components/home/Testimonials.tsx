import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "My experience at VK College has been transformative. The faculty's dedication and the comprehensive curriculum have prepared me well for my career.",
      name: "Priya Sharma",
      role: "BSc Computer Science, Batch of 2022",
      image: "student1.jpg"
    },
    {
      quote: "The research opportunities and industry connections at VK College are exceptional. I've gained practical skills that are highly valued in the job market.",
      name: "Rahul Patel",
      role: "BA Economics, Batch of 2021",
      image: "student2.jpg"
    },
    {
      quote: "The supportive community and diverse campus culture at VK College have enriched my educational journey beyond academics.",
      name: "Ananya Singh",
      role: "BCom, Batch of 2023",
      image: "student3.jpg"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Student Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our students have to say about their experience at VK College.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <FaQuoteLeft className="text-primary-300 text-4xl mb-4" />
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 