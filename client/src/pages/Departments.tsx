import React, { useState } from 'react'
import { FaGraduationCap, FaBook, FaUsers, FaFlask, FaLaptopCode, FaBriefcase, FaChalkboardTeacher, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Departments = () => {
  // State to track which department is currently expanded
  const [expandedDept, setExpandedDept] = useState<string | null>(null)

  // Toggle department expansion
  const toggleDepartment = (deptId: string) => {
    if (expandedDept === deptId) {
      setExpandedDept(null)
    } else {
      setExpandedDept(deptId)
    }
  }

  // Department data
  const departments = [
    {
      id: 'cs',
      name: 'Computer Science & Engineering',
      icon: <FaLaptopCode className="text-4xl text-primary-600" />,
      description: 'The Department of Computer Science & Engineering offers cutting-edge programs in software development, artificial intelligence, data science, and cybersecurity.',
      programs: [
        'B.Tech in Computer Science & Engineering',
        'M.Tech in Computer Science & Engineering',
        'PhD in Computer Science',
        'B.Tech in Artificial Intelligence & Machine Learning',
        'B.Tech in Data Science'
      ],
      facultyCount: 45,
      studentCount: 1200,
      facilities: [
        'Advanced Computing Labs',
        'AI & Machine Learning Center',
        'Cybersecurity Lab',
        'Software Development Studio',
        'IoT Research Center'
      ],
      achievements: [
        'ACM Student Chapter ranked in top 10 nationally',
        'Faculty published over 100 research papers in international journals',
        'Secured ₹2 crore research funding from government and industry',
        'Students placed in top tech companies with packages up to ₹40 LPA'
      ],
      headOfDept: {
        name: 'Dr. Sunil Mehta',
        qualification: 'PhD in Computer Science, Stanford University',
        experience: '25 years'
      }
    },
    {
      id: 'ee',
      name: 'Electrical Engineering',
      icon: <FaFlask className="text-4xl text-primary-600" />,
      description: 'The Department of Electrical Engineering provides comprehensive education in power systems, electronics, control systems, and renewable energy technologies.',
      programs: [
        'B.Tech in Electrical Engineering',
        'M.Tech in Power Systems',
        'M.Tech in Control & Instrumentation',
        'PhD in Electrical Engineering'
      ],
      facultyCount: 35,
      studentCount: 900,
      facilities: [
        'Power Systems Laboratory',
        'Renewable Energy Research Center',
        'Electrical Machines Laboratory',
        'High Voltage Testing Laboratory',
        'Digital Signal Processing Lab'
      ],
      achievements: [
        'Developed smart grid technology adopted by local power distribution companies',
        'Secured patents for innovations in renewable energy solutions',
        'Conducted energy audits for over 50 industries',
        'Faculty recognized with IEEE Outstanding Engineer Award'
      ],
      headOfDept: {
        name: 'Prof. Anita Sharma',
        qualification: 'PhD in Electrical Engineering, IIT Delhi',
        experience: '22 years'
      }
    },
    {
      id: 'me',
      name: 'Mechanical Engineering',
      icon: <FaGraduationCap className="text-4xl text-primary-600" />,
      description: 'The Department of Mechanical Engineering offers specialized programs in thermal engineering, manufacturing processes, CAD/CAM, robotics, and industrial automation.',
      programs: [
        'B.Tech in Mechanical Engineering',
        'M.Tech in Thermal Engineering',
        'M.Tech in Manufacturing Engineering',
        'PhD in Mechanical Engineering'
      ],
      facultyCount: 40,
      studentCount: 1000,
      facilities: [
        'Advanced Manufacturing Lab',
        'CAD/CAM Center',
        'Fluid Mechanics and Hydraulics Lab',
        'Robotics and Automation Lab',
        'Material Testing Laboratory'
      ],
      achievements: [
        'Designed and built fuel-efficient vehicles for national competitions',
        'Developed low-cost prosthetics for community service',
        'Established industry partnerships with major automobile manufacturers',
        'Students secured first prize in national robotics competition'
      ],
      headOfDept: {
        name: 'Dr. Rajiv Gupta',
        qualification: 'PhD in Mechanical Engineering, MIT',
        experience: '28 years'
      }
    },
    {
      id: 'civil',
      name: 'Civil Engineering',
      icon: <FaUsers className="text-4xl text-primary-600" />,
      description: 'The Department of Civil Engineering provides education in structural engineering, transportation, geotechnical engineering, and environmental engineering.',
      programs: [
        'B.Tech in Civil Engineering',
        'M.Tech in Structural Engineering',
        'M.Tech in Environmental Engineering',
        'PhD in Civil Engineering'
      ],
      facultyCount: 30,
      studentCount: 850,
      facilities: [
        'Structural Engineering Laboratory',
        'Geotechnical Engineering Lab',
        'Environmental Engineering Lab',
        'Transportation Engineering Lab',
        'Surveying and GIS Lab'
      ],
      achievements: [
        'Consultancy services provided to government infrastructure projects',
        'Developed sustainable construction methods adopted by local builders',
        'Faculty members serving on national building code committees',
        'Students won national design competition for earthquake-resistant structures'
      ],
      headOfDept: {
        name: 'Prof. K.L. Verma',
        qualification: 'PhD in Civil Engineering, IIT Bombay',
        experience: '24 years'
      }
    },
    {
      id: 'chem',
      name: 'Chemical Engineering',
      icon: <FaFlask className="text-4xl text-primary-600" />,
      description: 'The Department of Chemical Engineering offers programs in process engineering, petroleum refining, biochemical engineering, and polymer technology.',
      programs: [
        'B.Tech in Chemical Engineering',
        'M.Tech in Process Engineering',
        'M.Tech in Petrochemical Engineering',
        'PhD in Chemical Engineering'
      ],
      facultyCount: 25,
      studentCount: 600,
      facilities: [
        'Unit Operations Laboratory',
        'Process Control Laboratory',
        'Polymer Processing Lab',
        'Biochemical Engineering Lab',
        'Reaction Engineering Lab'
      ],
      achievements: [
        'Developed eco-friendly processes for industrial waste treatment',
        'Research collaboration with pharmaceutical and petroleum companies',
        'Patented technology for biofuel production',
        'Students placed in top chemical and process industries'
      ],
      headOfDept: {
        name: 'Dr. Meena Patel',
        qualification: 'PhD in Chemical Engineering, University of California',
        experience: '20 years'
      }
    },
    {
      id: 'mgt',
      name: 'Management Studies',
      icon: <FaBriefcase className="text-4xl text-primary-600" />,
      description: 'The Department of Management Studies offers comprehensive programs in business administration, finance, marketing, human resources, and operations management.',
      programs: [
        'Bachelor of Business Administration (BBA)',
        'Master of Business Administration (MBA)',
        'Executive MBA',
        'PhD in Management'
      ],
      facultyCount: 30,
      studentCount: 750,
      facilities: [
        'Finance Lab with Bloomberg Terminals',
        'Marketing Research Center',
        'Business Incubation Center',
        'Digital Marketing Lab',
        'HR Training and Development Center'
      ],
      achievements: [
        'Students consistently securing placements in Fortune 500 companies',
        'Incubated 25+ successful startups founded by students',
        'Faculty published in top management journals',
        'Industry-sponsored research projects worth ₹1.5 crore'
      ],
      headOfDept: {
        name: 'Prof. Sanjay Malhotra',
        qualification: 'PhD in Management, London Business School',
        experience: '18 years'
      }
    },
    {
      id: 'sci',
      name: 'Basic Sciences',
      icon: <FaBook className="text-4xl text-primary-600" />,
      description: 'The Department of Basic Sciences offers fundamental programs in Physics, Chemistry, Mathematics, and Biology, forming the cornerstone of engineering education.',
      programs: [
        'BSc in Physics',
        'BSc in Chemistry',
        'BSc in Mathematics',
        'MSc in Applied Physics',
        'MSc in Applied Mathematics',
        'PhD in Basic Sciences'
      ],
      facultyCount: 50,
      studentCount: 1100,
      facilities: [
        'Advanced Physics Laboratory',
        'Chemistry Research Center',
        'Mathematical Modeling Lab',
        'Computational Physics Lab',
        'Material Science Laboratory'
      ],
      achievements: [
        'Research published in prestigious journals like Nature and Science',
        'Faculty recognized with national science awards',
        'Secured research grants from DST and other national agencies',
        'Students selected for international science Olympiads'
      ],
      headOfDept: {
        name: 'Dr. P.K. Sharma',
        qualification: 'PhD in Physics, University of Cambridge',
        experience: '30 years'
      }
    },
    {
      id: 'hum',
      name: 'Humanities & Social Sciences',
      icon: <FaChalkboardTeacher className="text-4xl text-primary-600" />,
      description: 'The Department of Humanities & Social Sciences offers courses in communication, economics, psychology, and sociology, enhancing the holistic development of students.',
      programs: [
        'BA in English',
        'BA in Economics',
        'MA in Communication',
        'MA in Psychology',
        'PhD in Humanities & Social Sciences'
      ],
      facultyCount: 35,
      studentCount: 800,
      facilities: [
        'Language Laboratory',
        'Psychology Research Center',
        'Economics & Data Analysis Lab',
        'Communication Skills Development Center',
        'Cultural Studies Center'
      ],
      achievements: [
        'Developed innovative pedagogical methods for technical communication',
        'Research on socio-economic impact of technology adoption',
        'Faculty authored textbooks widely used across universities',
        'Students excelling in civil services and management entrances'
      ],
      headOfDept: {
        name: 'Prof. Leela Krishnan',
        qualification: 'PhD in Linguistics, Oxford University',
        experience: '26 years'
      }
    }
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Academic Departments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse academic departments offering cutting-edge programs and research opportunities at VK College Rohana
          </p>
        </div>

        {/* Departments List */}
        <div className="space-y-8">
          {departments.map(dept => (
            <div key={dept.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Department Header - Always visible */}
              <div 
                className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer"
                onClick={() => toggleDepartment(dept.id)}
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="mr-4 flex-shrink-0">
                    {dept.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{dept.name}</h2>
                    <p className="text-gray-600 mt-1">{dept.description}</p>
                  </div>
                </div>
                <div className="flex items-center text-primary-600">
                  <span className="mr-2 font-medium">
                    {expandedDept === dept.id ? 'Hide Details' : 'View Details'}
                  </span>
                  {expandedDept === dept.id ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {/* Department Details - Expandable */}
              {expandedDept === dept.id && (
                <div className="border-t border-gray-200">
                  <div className="p-6 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                          <FaGraduationCap className="mr-2 text-primary-600" />
                          Programs Offered
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {dept.programs.map((program, index) => (
                            <li key={index}>{program}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                          <FaFlask className="mr-2 text-primary-600" />
                          Facilities
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {dept.facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                          <FaUsers className="mr-2 text-primary-600" />
                          Key Achievements
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {dept.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">Department Head</h3>
                        <p className="text-gray-700 font-medium">{dept.headOfDept.name}</p>
                        <p className="text-gray-600 text-sm">{dept.headOfDept.qualification}</p>
                        <p className="text-gray-600 text-sm">Experience: {dept.headOfDept.experience}</p>
                      </div>

                      <div className="mt-4 md:mt-0 flex items-center space-x-8">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-primary-600">{dept.facultyCount}</p>
                          <p className="text-gray-600">Faculty Members</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-primary-600">{dept.studentCount}</p>
                          <p className="text-gray-600">Students</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <button className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors">
                        Visit Department Website
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-primary-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in Joining VK College Rohana?</h2>
          <p className="text-primary-100 mb-6 max-w-3xl mx-auto">
            Explore our admission process and take the first step towards a successful career with our world-class faculty and facilities.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="/admissions" className="bg-white text-primary-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Apply for Admission
            </a>
            <a href="/contact" className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Departments 