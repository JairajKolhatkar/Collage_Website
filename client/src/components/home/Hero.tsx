import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiAxNmMyLjIgMCA0IDEuOCA0IDRzLTEuOCA0LTQgNC00LTEuOC00LTQgMS44LTQgNC00em0wIDI4YzIuMiAwIDQgMS44IDQgNHMtMS44IDQtNCA0LTQtMS44LTQtNCAxLjgtNCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="container-custom py-20 md:py-28 lg:py-36 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Late Vasantrao Kolhatkar College
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-50">
            Empowering Minds, Shaping Futures - Excellence in Education Since 1999
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/admissions" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              Apply Now
            </Link>
            <Link to="/academics" className="btn-outline border-white text-white hover:bg-white/10">
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 