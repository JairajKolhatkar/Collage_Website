import React, { useState } from 'react'
import BookRepository from '../components/Library/BookRepository'
import BorrowReturn from '../components/Library/BorrowReturn'
import RecommendedResources from '../components/Library/RecommendedResources'
import PDFViewer from '../components/Library/PDFViewer'
import LibraryRules from '../components/Library/LibraryRules'

const Library = () => {
  const [activeTab, setActiveTab] = useState('repository')
  const [selectedBook, setSelectedBook] = useState<any>(null)

  // Handler for when a book is selected for viewing
  const handleBookSelect = (book: any) => {
    setSelectedBook(book)
    setActiveTab('viewer')
  }

  // Handler for closing the PDF viewer
  const handleCloseViewer = () => {
    setSelectedBook(null)
    setActiveTab('repository')
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Library & Resources</h1>
          <p className="text-xl max-w-2xl">
            Access our extensive collection of books, journals, and digital resources to support your academic journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        {/* Navigation Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex flex-wrap -mb-px">
            <button
              onClick={() => setActiveTab('repository')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'repository'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Book Repository
            </button>
            <button
              onClick={() => setActiveTab('borrow')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'borrow'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Borrow / Return
            </button>
            <button
              onClick={() => setActiveTab('recommended')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'recommended'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Recommended Resources
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'rules'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Library Rules
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="mt-8">
          {activeTab === 'repository' && <BookRepository onBookSelect={handleBookSelect} />}
          {activeTab === 'borrow' && <BorrowReturn />}
          {activeTab === 'recommended' && <RecommendedResources onBookSelect={handleBookSelect} />}
          {activeTab === 'rules' && <LibraryRules />}
          {activeTab === 'viewer' && selectedBook && (
            <PDFViewer book={selectedBook} onClose={handleCloseViewer} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Library 