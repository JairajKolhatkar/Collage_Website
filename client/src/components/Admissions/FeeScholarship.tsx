import React, { useState } from 'react'
import { FaInfoCircle, FaFileAlt, FaMedal } from 'react-icons/fa'

const FeeScholarship = () => {
  const [activeTab, setActiveTab] = useState('fees')

  const feeStructure = [
    {
      program: 'Bachelor of Arts (BA)',
      tuitionFee: '₹25,000',
      developmentFee: '₹5,000',
      examFee: '₹2,500',
      totalFee: '₹32,500',
      hostelFee: '₹45,000'
    },
    {
      program: 'Bachelor of Science (BSc)',
      tuitionFee: '₹30,000',
      developmentFee: '₹7,000',
      examFee: '₹3,000',
      totalFee: '₹40,000',
      hostelFee: '₹45,000'
    },
    {
      program: 'Bachelor of Commerce (BCom)',
      tuitionFee: '₹28,000',
      developmentFee: '₹6,000',
      examFee: '₹2,500',
      totalFee: '₹36,500',
      hostelFee: '₹45,000'
    },
    {
      program: 'Master of Arts (MA)',
      tuitionFee: '₹35,000',
      developmentFee: '₹8,000',
      examFee: '₹3,500',
      totalFee: '₹46,500',
      hostelFee: '₹50,000'
    },
    {
      program: 'Master of Science (MSc)',
      tuitionFee: '₹40,000',
      developmentFee: '₹10,000',
      examFee: '₹4,000',
      totalFee: '₹54,000',
      hostelFee: '₹50,000'
    }
  ]

  const scholarships = [
    {
      name: 'Merit Scholarship',
      eligibility: 'Students with 90% or above in qualifying examination',
      benefit: '50% tuition fee waiver',
      icon: <FaMedal className="text-yellow-500 text-2xl" />
    },
    {
      name: 'Sports Excellence Scholarship',
      eligibility: 'National or state level sports achievers',
      benefit: '25-75% tuition fee waiver based on achievements',
      icon: <FaMedal className="text-blue-500 text-2xl" />
    },
    {
      name: 'Financial Need Scholarship',
      eligibility: 'Students from economically weaker sections',
      benefit: 'Up to 100% fee waiver based on financial need assessment',
      icon: <FaMedal className="text-green-500 text-2xl" />
    },
    {
      name: 'Girl Child Scholarship',
      eligibility: 'Female students with 80% or above in qualifying examination',
      benefit: '25% tuition fee waiver',
      icon: <FaMedal className="text-purple-500 text-2xl" />
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Fees & Scholarships</h2>
      
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('fees')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'fees'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Fee Structure
            </button>
            <button
              onClick={() => setActiveTab('scholarships')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'scholarships'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Scholarships
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'payment'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Payment Options
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'fees' && (
        <div>
          <div className="mb-6">
            <p className="text-gray-700">
              The following fee structure is applicable for the academic year 2023-24. All fees are in Indian Rupees (₹).
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold">Program</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold">Tuition Fee</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold">Development Fee</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold">Exam Fee</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold">Total (Per Year)</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold">Hostel Fee (Optional)</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border-b border-gray-200 font-medium">{fee.program}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{fee.tuitionFee}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{fee.developmentFee}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{fee.examFee}</td>
                    <td className="py-3 px-4 border-b border-gray-200 font-semibold">{fee.totalFee}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{fee.hostelFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-yellow-50 p-4 rounded-md border border-yellow-100">
            <div className="flex">
              <FaInfoCircle className="text-yellow-800 mt-1 mr-3" />
              <div>
                <h4 className="font-bold text-yellow-800">Additional Information</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>One-time admission fee of ₹5,000 is applicable for all programs</li>
                  <li>Caution deposit (refundable) of ₹10,000 is required</li>
                  <li>Fees can be paid in two installments (per semester)</li>
                  <li>Late payment fee of ₹100 per day is applicable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'scholarships' && (
        <div>
          <div className="mb-6">
            <p className="text-gray-700">
              VK College offers various scholarships to deserving students based on merit, sports achievements, and financial need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {scholarship.icon}
                  <h3 className="text-lg font-bold ml-3 text-gray-800">{scholarship.name}</h3>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-gray-700">Eligibility:</span>{' '}
                    <span className="text-gray-600">{scholarship.eligibility}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Benefit:</span>{' '}
                    <span className="text-gray-600">{scholarship.benefit}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-primary-50 p-4 rounded-md border border-primary-100">
            <div className="flex">
              <FaFileAlt className="text-primary-700 mt-1 mr-3" />
              <div>
                <h4 className="font-bold text-primary-700">How to Apply for Scholarships</h4>
                <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Complete the admission process</li>
                  <li>Download the scholarship application form from the college website</li>
                  <li>Fill the form with all required details</li>
                  <li>Attach supporting documents (mark sheets, certificates, income proof, etc.)</li>
                  <li>Submit the form to the Scholarship Cell before the deadline</li>
                </ol>
                <p className="mt-3 text-primary-700 font-medium">
                  Scholarship application deadline: July 31, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'payment' && (
        <div>
          <div className="mb-6">
            <p className="text-gray-700">
              VK College offers multiple payment options for the convenience of students and parents.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-800">Online Payment</h3>
              <p className="text-gray-700 mb-4">
                Pay your fees online through our secure payment gateway using credit/debit cards, net banking, or UPI.
              </p>
              <button className="btn-primary">
                Pay Online
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-800">Demand Draft</h3>
              <p className="text-gray-700 mb-2">
                Demand Draft should be drawn in favor of "VK College" payable at Rohana.
              </p>
              <p className="text-gray-700">
                Submit the DD to the Accounts Department along with your admission number and contact details.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-800">Direct Bank Transfer</h3>
              <p className="text-gray-700 mb-4">
                You can transfer the fees directly to our bank account.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="mb-1"><strong>Account Name:</strong> VK College</p>
                <p className="mb-1"><strong>Account Number:</strong> 1234567890</p>
                <p className="mb-1"><strong>Bank Name:</strong> State Bank of India</p>
                <p className="mb-1"><strong>Branch:</strong> Rohana</p>
                <p><strong>IFSC Code:</strong> SBIN0012345</p>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                After making the transfer, please email the transaction details to accounts@vkcollege.edu.in
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FeeScholarship 