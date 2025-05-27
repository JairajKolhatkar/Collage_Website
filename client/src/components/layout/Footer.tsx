import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About College */}
          <div>
            <h3 className="text-xl font-bold mb-4">Late Vasantrao Kolhatkar  College</h3>
            <p className="text-gray-300 mb-4">
              Providing quality education since 1999. Our mission is to empower students with knowledge and skills for a successful future.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-white">Academics</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-white">Admissions</Link></li>
              <li><Link to="/departments" className="text-gray-300 hover:text-white">Departments</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/academics" className="text-gray-300 hover:text-white">Bachelor of Arts</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-white">Bachelor of Science</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-white">Diploma in Education</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-white">B.A. in English</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-white">B.A. in Economics</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-white">B.A. in History</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gray-300 mt-1" />
                <span className="text-gray-300">At. Post. Rohana, Tah. Arvi, Dist. Wardha, Maharashtra 442309, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-300" />
                <span className="text-gray-300">+91 07157-203445</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-300" />
                <span className="text-gray-300">info@vkcollegerohana.co.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {currentYear} Late Vasantrao Kolhatkar College. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 