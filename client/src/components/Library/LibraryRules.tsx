import React from 'react'
import { FaInfoCircle, FaBook, FaClock, FaUserCheck, FaMoneyBillWave, FaExclamationTriangle } from 'react-icons/fa'

const LibraryRules: React.FC = () => {
  // Sample library rules
  const generalRules = [
    'Maintain silence in the library premises at all times.',
    'Mobile phones must be kept on silent mode inside the library.',
    'Eating and drinking are not permitted in the library.',
    'Library cards are non-transferable and must be presented when requested.',
    'Bags and personal belongings should be kept at the designated area near the entrance.',
    'Students are responsible for their personal belongings. The library is not responsible for any loss or damage.',
    'Respect the library staff and follow their instructions.'
  ]

  const borrowingRules = [
    'Students can borrow up to 3 books at a time.',
    'Faculty members can borrow up to 5 books at a time.',
    'The borrowing period for students is 14 days.',
    'The borrowing period for faculty members is 30 days.',
    'Reference books, rare books, and journals cannot be borrowed and must be used within the library.',
    'Books must be returned on or before the due date.',
    'Renewal of borrowed books is allowed twice, provided there are no reservations for the same.'
  ]

  const finesAndPenalties = [
    'Late return fine: Rs. 5 per day per book.',
    'For lost or damaged books, the borrower must replace the book or pay twice the current price of the book.',
    'Repeated violations may result in suspension of library privileges.',
    'Marking, underlining, or writing in library books is strictly prohibited and will be treated as damage to the book.',
    'Library users with overdue books will not be allowed to borrow additional items until they have returned the overdue materials and paid any associated fines.'
  ]

  const timings = {
    'Monday - Friday': '8:00 AM - 8:00 PM',
    'Saturday': '9:00 AM - 5:00 PM',
    'Sunday': 'Closed',
    'Holidays': 'As per college holiday schedule'
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-primary-700 text-white p-6">
        <h3 className="text-xl font-bold flex items-center">
          <FaInfoCircle className="mr-2" /> 
          Library Rules and Regulations
        </h3>
        <p className="mt-2 text-primary-100">
          Please adhere to these guidelines to maintain a conducive environment for learning and research.
        </p>
      </div>

      {/* Library Timings */}
      <div className="p-6 border-b border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <FaClock className="text-primary-600 mr-2" /> Library Timings
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(timings).map(([day, time]) => (
            <div key={day} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
              <span className="font-medium text-gray-700">{day}</span>
              <span className="text-gray-600">{time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* General Rules */}
      <div className="p-6 border-b border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <FaUserCheck className="text-primary-600 mr-2" /> General Rules
        </h4>
        <ul className="space-y-2">
          {generalRules.map((rule, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span className="text-gray-700">{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Borrowing Rules */}
      <div className="p-6 border-b border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <FaBook className="text-primary-600 mr-2" /> Borrowing Rules
        </h4>
        <ul className="space-y-2">
          {borrowingRules.map((rule, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span className="text-gray-700">{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Fines and Penalties */}
      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <FaMoneyBillWave className="text-primary-600 mr-2" /> Fines and Penalties
        </h4>
        <ul className="space-y-2">
          {finesAndPenalties.map((fine, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span className="text-gray-700">{fine}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Note */}
      <div className="p-6 bg-yellow-50 border-t border-yellow-100">
        <div className="flex items-start">
          <FaExclamationTriangle className="text-yellow-600 mr-2 mt-1" />
          <p className="text-gray-700">
            The Head Librarian reserves the right to modify these rules as necessary. Any changes will be communicated through the library notice board and college website.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LibraryRules 