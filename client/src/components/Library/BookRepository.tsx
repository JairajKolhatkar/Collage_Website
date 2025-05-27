import React, { useState } from 'react'
import { FaSearch, FaFilter, FaBook, FaFileAlt, FaDownload, FaEye } from 'react-icons/fa'

interface BookRepositoryProps {
  onBookSelect: (book: any) => void
}

const BookRepository: React.FC<BookRepositoryProps> = ({ onBookSelect }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    category: 'all',
    type: 'all',
    year: 'all'
  })

  // Mock book data
  const books = [
    {
      id: 1,
      title: 'Introduction to Algorithms',
      authors: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
      publisher: 'MIT Press',
      year: '2009',
      category: 'Computer Science',
      type: 'Textbook',
      available: true,
      cover: '/images/books/algorithms.jpg',
      description: 'A comprehensive introduction to the modern study of computer algorithms.',
      pdfUrl: '/pdfs/sample.pdf'
    },
    {
      id: 2,
      title: 'Principles of Economics',
      authors: 'N. Gregory Mankiw',
      publisher: 'Cengage Learning',
      year: '2017',
      category: 'Economics',
      type: 'Textbook',
      available: true,
      cover: '/images/books/economics.jpg',
      description: 'Provides a clear introduction to economics with relevant examples.',
      pdfUrl: '/pdfs/sample.pdf'
    },
    {
      id: 3,
      title: 'Organic Chemistry',
      authors: 'Paula Yurkanis Bruice',
      publisher: 'Pearson',
      year: '2016',
      category: 'Chemistry',
      type: 'Textbook',
      available: false,
      cover: '/images/books/chemistry.jpg',
      description: 'A comprehensive guide to understanding organic chemistry concepts.',
      pdfUrl: '/pdfs/sample.pdf'
    },
    {
      id: 4,
      title: 'International Journal of Computer Science',
      authors: 'Various Authors',
      publisher: 'IEEE',
      year: '2022',
      category: 'Computer Science',
      type: 'Journal',
      available: true,
      cover: '/images/books/journal.jpg',
      description: 'Latest research in computer science and information technology.',
      pdfUrl: '/pdfs/sample.pdf'
    },
    {
      id: 5,
      title: 'A Brief History of Time',
      authors: 'Stephen Hawking',
      publisher: 'Bantam Books',
      year: '1988',
      category: 'Physics',
      type: 'Book',
      available: true,
      cover: '/images/books/history-time.jpg',
      description: 'Explores concepts like space, time, black holes, and the Big Bang.',
      pdfUrl: '/pdfs/sample.pdf'
    },
    {
      id: 6,
      title: 'Journal of Advanced Mathematics',
      authors: 'Various Authors',
      publisher: 'Mathematical Society',
      year: '2021',
      category: 'Mathematics',
      type: 'Journal',
      available: true,
      cover: '/images/books/math-journal.jpg',
      description: 'Research papers on advanced mathematical concepts and theories.',
      pdfUrl: '/pdfs/sample.pdf'
    }
  ]

  // Extract unique categories, types, and years for filters
  const categories = [...new Set(books.map(book => book.category))]
  const types = [...new Set(books.map(book => book.type))]
  const years = [...new Set(books.map(book => book.year))]

  const handleFilterChange = (key: string, value: string) => {
    setFilters({
      ...filters,
      [key]: value
    })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  // Filter books based on search term and filters
  const filteredBooks = books.filter(book => {
    const matchesSearch = 
      searchTerm === '' || 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = filters.category === 'all' || book.category === filters.category
    const matchesType = filters.type === 'all' || book.type === filters.type
    const matchesYear = filters.year === 'all' || book.year === filters.year

    return matchesSearch && matchesCategory && matchesType && matchesYear
  })

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Book Repository</h2>
      
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <FaFilter className="text-primary-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Search & Filter</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search books, authors..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          {/* Category Filter */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              id="category"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          {/* Type Filter */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select
              id="type"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Types</option>
              {types.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          {/* Year Filter */}
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Publication Year</label>
            <select
              id="year"
              value={filters.year}
              onChange={(e) => handleFilterChange('year', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Years</option>
              {years.sort((a, b) => parseInt(b) - parseInt(a)).map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Book Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <FaBook className="text-6xl text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{book.authors}</p>
                
                <div className="flex flex-wrap mb-4">
                  <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    {book.category}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    {book.type}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mb-2">
                    {book.year}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{book.description}</p>
                
                <div className="pt-4 border-t border-gray-100 flex justify-between">
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      book.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {book.available ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onBookSelect(book)}
                      className="p-2 bg-primary-50 text-primary-600 rounded-md hover:bg-primary-100 transition-colors"
                      title="View"
                    >
                      <FaEye />
                    </button>
                    <a
                      href={book.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100 transition-colors"
                      title="Download"
                    >
                      <FaDownload />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <FaFileAlt className="mx-auto text-4xl text-gray-400 mb-4" />
            <p className="text-gray-500 mb-4">No books match your search criteria.</p>
            <button
              onClick={() => { 
                setSearchTerm(''); 
                setFilters({ category: 'all', type: 'all', year: 'all' }); 
              }}
              className="text-primary-600 hover:text-primary-800 font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      
      {/* Pagination */}
      {filteredBooks.length > 0 && (
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center">
            <button className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 bg-primary-50 text-primary-600 font-medium">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  )
}

export default BookRepository 