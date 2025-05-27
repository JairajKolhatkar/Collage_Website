import { Link } from 'react-router-dom'
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
              <p className="text-primary-100 max-w-2xl mx-auto">
                Take the next step towards a bright future with VK College. Our admissions team is ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3">Apply Now</h3>
                <p className="text-primary-100 mb-4">Start your application process for the upcoming academic year</p>
                <Link to="/admissions" className="inline-flex items-center text-white font-medium hover:underline">
                  Begin Application <FaArrowRight className="ml-2" />
                </Link>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3">Contact Us</h3>
                <p className="text-primary-100 mb-4">Have questions? Our team is here to help you</p>
                <Link to="/contact" className="inline-flex items-center text-white font-medium hover:underline">
                  Get in Touch <FaEnvelope className="ml-2" />
                </Link>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3">Visit Campus</h3>
                <p className="text-primary-100 mb-4">Schedule a campus tour to explore our facilities</p>
                <Link to="/contact#visit" className="inline-flex items-center text-white font-medium hover:underline">
                  Plan Your Visit <FaMapMarkerAlt className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction 