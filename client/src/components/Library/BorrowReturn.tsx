import React, { useState } from 'react'
import { FaSearch, FaBook, FaExchangeAlt, FaHistory, FaCalendarAlt } from 'react-icons/fa'

const BorrowReturn = () => {
  const [activeSection, setActiveSection] = useState('borrow')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBook, setSelectedBook] = useState<any>(null)

  // Mock borrowed books data
  const borrowedBooks = [
    {
      id: 1,
      title: 'Introduction to Algorithms',
      authors: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
      borrowDate: '2023-05-10',
      dueDate: '2023-06-10',
      status: 'borrowed'
    },
    {
      id: 3,
      title: 'Organic Chemistry',
      authors: 'Paula Yurkanis Bruice',
      borrowDate: '2023-04-25',
      dueDate: '2023-05-25',
      status: 'overdue'
    }
  ]

  // Mock available books data
  const availableBooks = [
    {
      id: 2,
      title: 'Principles of Economics',
      authors: 'N. Gregory Mankiw',
      publisher: 'Cengage Learning',
      year: '2017',
      category: 'Economics'
    },
    {
      id: 4,
      title: 'International Journal of Computer Science',
      authors: 'Various Authors',
      publisher: 'IEEE',
      year: '2022',
      category: 'Computer Science'
    },
    {
      id: 5,
      title: 'A Brief History of Time',
      authors: 'Stephen Hawking',
      publisher: 'Bantam Books',
      year: '1988',
      category: 'Physics'
    }
  ]

  // Mock borrowing history
  const borrowingHistory = [
    {
      id: 6,
      title: 'The Art of Computer Programming',
      authors: 'Donald E. Knuth',
      borrowDate: '2023-01-15',
      returnDate: '2023-02-15',
      status: 'returned'
    },
    {
      id: 7,
      title: 'Introduction to Statistical Learning',
      authors: 'Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani',
      borrowDate: '2023-02-10',
      returnDate: '2023-03-10',
      status: 'returned'
    }
  ]

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleBookSelect = (book: any) => {
    setSelectedBook(book)
  }

  const handleBorrow = () => {
    alert(`Book "${selectedBook.title}" has been borrowed successfully!`)
    setSelectedBook(null)
  }

  const handleReturn = (bookId: number) => {
    alert(`Book has been returned successfully!`)
  }

  const handleRenew = (bookId: number) => {
    alert(`Book has been renewed for another 30 days!`)
  }

  // Filter books based on search term
  const filteredAvailableBooks = availableBooks.filter(book => 
    searchTerm === '' || 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.authors.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Borrow & Return</h2>
      
      {/* Section Tabs */}
      <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveSection('borrow')}
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeSection === 'borrow'
                ? 'bg-primary-50 text-primary-600 border-b-2 border-primary-500'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FaBook className="inline mr-2" /> Borrow Books
          </button>
          <button
            onClick={() => setActiveSection('return')}
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeSection === 'return'
                ? 'bg-primary-50 text-primary-600 border-b-2 border-primary-500'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FaExchangeAlt className="inline mr-2" /> Return Books
          </button>
          <button
            onClick={() => setActiveSection('history')}
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeSection === 'history'
                ? 'bg-primary-50 text-primary-600 border-b-2 border-primary-500'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FaHistory className="inline mr-2" /> Borrowing History
          </button>
        </div>
        
        <div className="p-6">
          {/* Borrow Books Section */}
          {activeSection === 'borrow' && (
            <div>
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search available books by title or author..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Author(s)
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Year
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredAvailableBooks.length > 0 ? (
                      filteredAvailableBooks.map((book) => (
                        <tr key={book.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <FaBook className="text-gray-500 mr-3" />
                              <div className="text-sm font-medium text-gray-900">{book.title}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{book.authors}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-100 text-primary-800">
                              {book.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {book.year}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => handleBookSelect(book)}
                              className="text-primary-600 hover:text-primary-900"
                            >
                              Select
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                          No books match your search criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              {selectedBook && (
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-lg mb-2">Confirm Borrowing</h3>
                  <p>You are about to borrow the following book:</p>
                  <div className="my-3 p-3 bg-white rounded border border-gray-200">
                    <p className="font-medium">{selectedBook.title}</p>
                    <p className="text-sm text-gray-600">{selectedBook.authors}</p>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button 
                      onClick={() => setSelectedBook(null)}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleBorrow}
                      className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                    >
                      Confirm Borrow
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Return Books Section */}
          {activeSection === 'return' && (
            <div>
              <h3 className="font-bold text-lg mb-4">Currently Borrowed Books</h3>
              
              {borrowedBooks.length > 0 ? (
                <div className="space-y-4">
                  {borrowedBooks.map(book => (
                    <div key={book.id} className={`p-4 rounded-lg border ${
                      book.status === 'overdue' ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'
                    }`}>
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{book.title}</h4>
                          <p className="text-sm text-gray-600">{book.authors}</p>
                          <div className="flex items-center mt-2 text-sm">
                            <FaCalendarAlt className="text-gray-400 mr-1" />
                            <span className="text-gray-500">Borrowed: {book.borrowDate}</span>
                            <span className="mx-2 text-gray-300">|</span>
                            <FaCalendarAlt className={`mr-1 ${
                              book.status === 'overdue' ? 'text-red-500' : 'text-gray-400'
                            }`} />
                            <span className={
                              book.status === 'overdue' ? 'text-red-500 font-medium' : 'text-gray-500'
                            }>
                              Due: {book.dueDate}
                              {book.status === 'overdue' && ' (Overdue)'}
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleRenew(book.id)}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"
                          >
                            Renew
                          </button>
                          <button
                            onClick={() => handleReturn(book.id)}
                            className="px-3 py-1 bg-primary-50 text-primary-600 rounded hover:bg-primary-100"
                          >
                            Return
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">You don't have any books currently borrowed.</p>
                </div>
              )}
            </div>
          )}
          
          {/* Borrowing History Section */}
          {activeSection === 'history' && (
            <div>
              <h3 className="font-bold text-lg mb-4">Your Borrowing History</h3>
              
              {borrowingHistory.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Author(s)
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Borrowed Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Returned Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {borrowingHistory.map((book) => (
                        <tr key={book.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{book.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{book.authors}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {book.borrowDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {book.returnDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {book.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">No borrowing history available.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Library Information */}
      <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
        <h3 className="font-bold text-lg mb-2 text-primary-800">VK College Rohana Library Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Borrowing Rules</h4>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Students can borrow up to 5 books at a time</li>
              <li>Borrowing period is 30 days</li>
              <li>Books can be renewed once for another 30 days</li>
              <li>Late returns incur a fine of ₹5 per day</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Library Hours</h4>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li><strong>Monday to Friday:</strong> 8:00 AM - 8:00 PM</li>
              <li><strong>Saturday:</strong> 9:00 AM - 5:00 PM</li>
              <li><strong>Sunday:</strong> Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BorrowReturn 