import React from 'react'
import { FaFileAlt, FaClipboardCheck, FaMoneyBillWave, FaUserCheck, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

const AdmissionProcess = () => {
  const steps = [
    {
      id: 1,
      title: 'Online Registration',
      description: 'Create an account on our admission portal and fill in your basic details.',
      icon: <FaFileAlt className="text-primary-500 text-3xl" />,
      deadline: 'May 15, 2023'
    },
    {
      id: 2,
      title: 'Application Submission',
      description: 'Complete the application form with academic details and upload required documents.',
      icon: <FaClipboardCheck className="text-primary-500 text-3xl" />,
      deadline: 'May 30, 2023'
    },
    {
      id: 3,
      title: 'Application Fee Payment',
      description: 'Pay the non-refundable application fee through online payment methods.',
      icon: <FaMoneyBillWave className="text-primary-500 text-3xl" />,
      deadline: 'June 5, 2023'
    },
    {
      id: 4,
      title: 'Entrance Examination',
      description: 'Appear for the entrance examination (if applicable for your chosen program).',
      icon: <FaClipboardCheck className="text-primary-500 text-3xl" />,
      deadline: 'June 15-20, 2023'
    },
    {
      id: 5,
      title: 'Selection & Offer Letter',
      description: 'Selected candidates will receive an offer letter via email.',
      icon: <FaUserCheck className="text-primary-500 text-3xl" />,
      deadline: 'July 5, 2023'
    },
    {
      id: 6,
      title: 'Fee Payment & Enrollment',
      description: 'Pay the admission fee and complete the enrollment process.',
      icon: <FaGraduationCap className="text-primary-500 text-3xl" />,
      deadline: 'July 15, 2023'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Admission Process</h2>
      
      <div className="space-y-8">
        <p className="text-gray-700">
          Our admission process is designed to be straightforward and student-friendly. Follow these steps to join VK College:
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-5 bottom-5 w-0.5 bg-gray-200 hidden md:block"></div>

          {/* Timeline Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col md:flex-row">
                {/* Timeline Icon */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 border-4 border-white shadow z-10 mb-4 md:mb-0">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="md:ml-6 bg-gray-50 rounded-lg p-4 md:p-6 flex-grow">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">Step {step.id}: {step.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1 md:mt-0">
                      <FaCalendarAlt className="mr-1" />
                      <span>Deadline: {step.deadline}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-50 p-4 rounded-md border border-primary-100">
          <h3 className="font-bold text-lg mb-2 text-primary-800">Important Dates</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Application Start Date:</strong> April 15, 2023</li>
            <li><strong>Application End Date:</strong> May 30, 2023</li>
            <li><strong>Entrance Examination:</strong> June 15-20, 2023</li>
            <li><strong>Result Declaration:</strong> July 5, 2023</li>
            <li><strong>Academic Session Begins:</strong> August 1, 2023</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdmissionProcess 