import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <span className="font-serif text-2xl font-bold text-primary-700">VK College</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium">About</Link>
            <Link to="/academics" className="text-gray-700 hover:text-primary-600 font-medium">Academics</Link>
            <Link to="/admissions" className="text-gray-700 hover:text-primary-600 font-medium">Admissions</Link>
            <Link to="/departments" className="text-gray-700 hover:text-primary-600 font-medium">Departments</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-primary-600 font-medium">Gallery</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</Link>
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link to="/login" className="btn-primary">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium" onClick={toggleMenu}>About</Link>
              <Link to="/academics" className="text-gray-700 hover:text-primary-600 font-medium" onClick={toggleMenu}>Academics</Link>
              <Link to="/admissions" className="text-gray-700 hover:text-primary-600 font-medium" onClick={toggleMenu}>Admissions</Link>
              <Link to="/departments" className="text-gray-700 hover:text-primary-600 font-medium" onClick={toggleMenu}>Departments</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-primary-600 font-medium" onClick={toggleMenu}>Gallery</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium" onClick={toggleMenu}>Contact</Link>
              <Link to="/login" className="btn-primary inline-block text-center" onClick={toggleMenu}>Login</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 