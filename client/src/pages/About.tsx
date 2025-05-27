import React from 'react'
import { FaUniversity, FaHistory, FaAward, FaHandshake, FaUsers, FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Late Vasantrao Kolhatkar College</h1>
            <p className="text-xl text-primary-100">
              Empowering students with knowledge, skills, and values since 1999
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Legacy of Excellence</h2>
              <p className="text-gray-600 mb-4">
                Late Vasantrao Kolhatkar College is a premier educational institution committed to providing quality education 
                to students from all walks of life. Established in 1999, the college has grown to become a 
                center of academic excellence and innovation in the Wardha district.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to nurture intellectual growth, creative thinking, and professional development 
                in our students. We believe in holistic education that combines theoretical knowledge with 
                practical skills, ethical values, and social responsibility.
              </p>
              <p className="text-gray-600">
                Located in Rohana, our campus provides a serene and inspiring environment for learning and growth,
                with modern facilities to support academic and extracurricular activities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <FaUniversity className="text-5xl text-primary-600 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">At a Glance</h3>
                  <p className="text-gray-600">Key facts about Late Vasantrao Kolhatkar College</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-primary-600 mr-3">•</span>
                  <span className="text-gray-700">Founded in 1999</span>
                </li>
                <li className="flex">
                  <span className="text-primary-600 mr-3">•</span>
                  <span className="text-gray-700">Affiliated with Rashtrasant Tukadoji Maharaj Nagpur University</span>
                </li>
                <li className="flex">
                  <span className="text-primary-600 mr-3">•</span>
                  <span className="text-gray-700">Accredited by NAAC B++</span>
                </li>
                <li className="flex">
                  <span className="text-primary-600 mr-3">•</span>
                  <span className="text-gray-700">Offers programs in Arts, Science, and Education</span>
                </li>
                <li className="flex">
                  <span className="text-primary-600 mr-3">•</span>
                  <span className="text-gray-700">3-acre campus with modern facilities</span>
                </li>
                <li className="flex">
                  <span className="text-primary-600 mr-3">•</span>
                  <span className="text-gray-700">Gender ratio of 154:138 (Female:Male)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <FaHistory className="text-5xl text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">Our History</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              From humble beginnings to a respected educational institution
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="bg-primary-600 text-white text-xl font-bold py-3 px-6 rounded-lg inline-block">1999</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Foundation</h3>
                <p className="text-gray-600">
                  Late Vasantrao Kolhatkar College was established in Rohana with a mission to provide quality 
                  education to rural students. The college started with Arts programs to serve the educational needs of the local community.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="bg-primary-600 text-white text-xl font-bold py-3 px-6 rounded-lg inline-block">2005</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expansion</h3>
                <p className="text-gray-600">
                  The college expanded its academic offerings with the introduction of new specializations in Arts
                  and began developing additional facilities on campus to enhance the learning environment.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="bg-primary-600 text-white text-xl font-bold py-3 px-6 rounded-lg inline-block">2010</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Modernization</h3>
                <p className="text-gray-600">
                  The college underwent significant modernization with the introduction of computer labs, digital 
                  libraries, and improved classroom facilities to enhance the educational experience.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="bg-primary-600 text-white text-xl font-bold py-3 px-6 rounded-lg inline-block">2015</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Academic Growth</h3>
                <p className="text-gray-600">
                  The college introduced B.Sc. programs in Networking and Multimedia, expanding its academic scope
                  beyond traditional Arts programs to meet the changing needs of students.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="bg-primary-600 text-white text-xl font-bold py-3 px-6 rounded-lg inline-block">Today</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence & Innovation</h3>
                <p className="text-gray-600">
                  Today, Late Vasantrao Kolhatkar College offers diverse programs in Arts, Science, and Education.
                  The college is affiliated with Rashtra Sant Tukadoji Maharaj Nagpur University and accredited by NAAC,
                  continuing its commitment to quality education for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <FaGraduationCap className="text-5xl text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">Our Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Comprehensive educational offerings to meet diverse student needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Bachelor of Arts</h3>
              <p className="text-gray-600 mb-4">
                Our B.A. programs offer specializations in English, History, Economics, Marathi Literature, and Political Science,
                providing students with a strong foundation in humanities and social sciences.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>3-year full-time program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Multiple specializations available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Focus on critical thinking and communication skills</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Bachelor of Science</h3>
              <p className="text-gray-600 mb-4">
                Our B.Sc. program in Networking and Multimedia equips students with technical skills and knowledge
                required for careers in IT and digital media.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>3-year full-time program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Hands-on technical training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Modern computer labs and multimedia facilities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Diploma in Education</h3>
              <p className="text-gray-600 mb-4">
                Our D.Ed. program prepares students for careers in teaching, providing comprehensive training
                in educational theory and practical teaching skills.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>2-year diploma program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Teaching practice in real classroom settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Focus on modern teaching methodologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <FaUsers className="text-5xl text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">Our Leadership</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Meet the visionaries guiding our institution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                {/* Image placeholder */}
                <div className="flex items-center justify-center h-48 bg-primary-100 text-primary-800">
                  <span className="text-6xl font-bold">RK</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Rajesh Kumar</h3>
                <p className="text-primary-600 font-medium mb-3">Principal</p>
                <p className="text-gray-600 mb-4">
                  Dr. Kumar has been leading Late Vasantrao Kolhatkar College since 2010. With over 30 years of experience in academia, 
                  he has transformed the institution into a center of excellence.
                </p>
                <p className="text-gray-500 text-sm">Ph.D. in Educational Leadership, Nagpur University</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                {/* Image placeholder */}
                <div className="flex items-center justify-center h-48 bg-primary-100 text-primary-800">
                  <span className="text-6xl font-bold">SM</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Prof. Sunita Mehta</h3>
                <p className="text-primary-600 font-medium mb-3">Vice Principal, Academics</p>
                <p className="text-gray-600 mb-4">
                  Prof. Mehta oversees all academic affairs and curriculum development. Her innovative approaches 
                  have enhanced the quality of education at Late Vasantrao Kolhatkar College.
                </p>
                <p className="text-gray-500 text-sm">Ph.D. in Curriculum Development, Mumbai University</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                {/* Image placeholder */}
                <div className="flex items-center justify-center h-48 bg-primary-100 text-primary-800">
                  <span className="text-6xl font-bold">AJ</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Amit Joshi</h3>
                <p className="text-primary-600 font-medium mb-3">Director of Research</p>
                <p className="text-gray-600 mb-4">
                  Dr. Joshi has established the computer lab and fostered a culture of innovation. 
                  His leadership has resulted in the college adopting modern educational technologies.
                </p>
                <p className="text-gray-500 text-sm">Ph.D. in Computer Science, Nagpur University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <FaHandshake className="text-5xl text-primary-100 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Our Core Values</h2>
            <p className="text-primary-100 max-w-3xl mx-auto mt-4">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-primary-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-primary-100">
                We strive for excellence in teaching, research, and all our endeavors.
              </p>
            </div>
            
            <div className="bg-primary-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-primary-100">
                We uphold the highest standards of ethics, honesty, and transparency.
              </p>
            </div>
            
            <div className="bg-primary-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-primary-100">
                We encourage creative thinking, innovation, and continuous improvement.
              </p>
            </div>
            
            <div className="bg-primary-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Inclusion</h3>
              <p className="text-primary-100">
                We celebrate diversity and ensure equal opportunities for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <FaUniversity className="text-5xl text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">Our Campus</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              A state-of-the-art campus designed to inspire learning and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Academic Block Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Academic Blocks</h3>
                <p className="text-gray-600">
                  Modern classrooms, lecture halls, and specialized labs equipped with the latest technologies.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Library Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Central Library</h3>
                <p className="text-gray-600">
                  A vast collection of books, journals, and digital resources with quiet study spaces.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Sports Complex Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sports Complex</h3>
                <p className="text-gray-600">
                  Indoor and outdoor sports facilities including cricket ground, football field, and gymnasium.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Auditorium Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Auditorium</h3>
                <p className="text-gray-600">
                  A 1000-seat state-of-the-art auditorium for cultural events, seminars, and conferences.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Hostel Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Residential Hostels</h3>
                <p className="text-gray-600">
                  Comfortable accommodation for boys and girls with modern amenities and dining facilities.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Cafeteria Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Food Court</h3>
                <p className="text-gray-600">
                  Multiple food outlets offering a variety of cuisines in a vibrant and hygienic environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <FaAward className="text-5xl text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">Our Achievements</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Recognition of our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                  <FaGraduationCap className="text-xl" />
                </span>
                <h3 className="text-xl font-bold text-gray-800">NAAC B++ Accreditation</h3>
              </div>
              <p className="text-gray-600">
                Achieved the highest grade in the National Assessment and Accreditation Council evaluation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                  <FaAward className="text-xl" />
                </span>
                <h3 className="text-xl font-bold text-gray-800">ISO 9001:2015 Certified</h3>
              </div>
              <p className="text-gray-600">
                Recognized for implementing quality management systems across all academic and administrative processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                  <FaUniversity className="text-xl" />
                </span>
                <h3 className="text-xl font-bold text-gray-800">Top 50 Colleges in India</h3>
              </div>
              <p className="text-gray-600">
                Consistently ranked among the top 50 colleges in India by various education ranking organizations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                  <FaHandshake className="text-xl" />
                </span>
                <h3 className="text-xl font-bold text-gray-800">International Collaborations</h3>
              </div>
              <p className="text-gray-600">
                Partnerships with over 20 international universities for student exchange, faculty development, and research.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                  <FaUsers className="text-xl" />
                </span>
                <h3 className="text-xl font-bold text-gray-800">98% Placement Record</h3>
              </div>
              <p className="text-gray-600">
                Achieved an exceptional placement record with students hired by leading companies across industries.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                  <FaGraduationCap className="text-xl" />
                </span>
                <h3 className="text-xl font-bold text-gray-800">Research Excellence</h3>
              </div>
              <p className="text-gray-600">
                Published over 500 research papers in international journals and secured patents for innovations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 