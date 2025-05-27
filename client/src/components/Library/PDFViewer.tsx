import React, { useState } from 'react'
import { FaTimes, FaArrowLeft, FaArrowRight, FaSearch, FaSearchPlus, FaSearchMinus, FaDownload, FaBookmark } from 'react-icons/fa'

interface PDFViewerProps {
  book: any
  onClose: () => void
}

const PDFViewer: React.FC<PDFViewerProps> = ({ book, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)
  const [totalPages] = useState(10) // Mock total pages

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleZoomIn = () => {
    if (zoom < 200) {
      setZoom(zoom + 25)
    }
  }

  const handleZoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 25)
    }
  }

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = parseInt(e.target.value)
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const handleBookmark = () => {
    alert(`Page ${currentPage} has been bookmarked!`)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-primary-700 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold truncate">{book.title}</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-primary-600 rounded"
          aria-label="Close viewer"
        >
          <FaTimes />
        </button>
      </div>
      
      {/* Toolbar */}
      <div className="bg-gray-100 border-b border-gray-200 p-2 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`p-2 rounded ${
              currentPage === 1 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Previous page"
          >
            <FaArrowLeft />
          </button>
          
          <div className="flex items-center">
            <input
              type="number"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={handlePageChange}
              className="w-12 text-center border border-gray-300 rounded-md py-1"
              aria-label="Page number"
            />
            <span className="mx-1 text-gray-600">of {totalPages}</span>
          </div>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded ${
              currentPage === totalPages 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Next page"
          >
            <FaArrowRight />
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleZoomOut}
            disabled={zoom <= 50}
            className={`p-2 rounded ${
              zoom <= 50 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Zoom out"
          >
            <FaSearchMinus />
          </button>
          
          <span className="text-gray-600">{zoom}%</span>
          
          <button
            onClick={handleZoomIn}
            disabled={zoom >= 200}
            className={`p-2 rounded ${
              zoom >= 200 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Zoom in"
          >
            <FaSearchPlus />
          </button>
          
          <div className="h-6 border-l border-gray-300 mx-2"></div>
          
          <button
            onClick={handleBookmark}
            className="p-2 text-gray-700 hover:bg-gray-200 rounded"
            aria-label="Bookmark page"
            title="Bookmark this page"
          >
            <FaBookmark />
          </button>
          
          <a
            href={book.url || '#'}
            download
            className="p-2 text-gray-700 hover:bg-gray-200 rounded"
            aria-label="Download"
            title="Download PDF"
          >
            <FaDownload />
          </a>
        </div>
      </div>
      
      {/* PDF Content */}
      <div className="p-4 bg-gray-50 min-h-[60vh] flex justify-center items-center">
        <div 
          className="bg-white shadow-md border border-gray-200 w-full max-w-4xl"
          style={{
            aspectRatio: '8.5/11',
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'center top',
            transition: 'transform 0.2s'
          }}
        >
          {/* Mock PDF Page */}
          <div className="p-8 h-full flex flex-col">
            <h1 className="text-2xl font-bold mb-6 text-center">{book.title}</h1>
            <p className="text-center text-gray-600 mb-12">{book.author || book.authors}</p>
            
            <div className="flex-grow flex flex-col justify-center items-center">
              <p className="text-center text-gray-500 mb-4">Page {currentPage} of {totalPages}</p>
              <p className="text-center">
                This is a preview of the book content. In a real application, this would display the actual PDF content.
              </p>
              <div className="mt-8 p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                [PDF content would be rendered here]
              </div>
            </div>
            
            <div className="mt-auto pt-8 text-center text-gray-500 text-sm">
              Page {currentPage}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 p-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <p><strong>Author:</strong> {book.author || book.authors}</p>
            {book.publisher && <p><strong>Publisher:</strong> {book.publisher}</p>}
          </div>
          <div className="text-sm text-gray-600">
            <p>© {new Date().getFullYear()} VK College Rohana Library</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PDFViewer 