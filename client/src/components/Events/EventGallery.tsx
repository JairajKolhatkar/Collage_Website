import React, { useState } from 'react'
import { FaImage, FaSearch, FaCalendarAlt, FaFilter, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

interface GalleryItem {
  id: string
  title: string
  date: string
  category: 'academic' | 'cultural' | 'sports' | 'workshop' | 'fest'
  thumbnail: string
  images: string[]
  description: string
}

const EventGallery: React.FC = () => {
  // Sample gallery data
  const galleryItems: GalleryItem[] = [
    {
      id: 'gal001',
      title: 'Annual Tech Symposium 2023',
      date: '2023-10-15',
      category: 'academic',
      thumbnail: 'https://source.unsplash.com/random/400x300/?technology',
      images: [
        'https://source.unsplash.com/random/1200x800/?technology',
        'https://source.unsplash.com/random/1200x800/?computer',
        'https://source.unsplash.com/random/1200x800/?seminar',
        'https://source.unsplash.com/random/1200x800/?conference',
        'https://source.unsplash.com/random/1200x800/?students'
      ],
      description: 'Our annual technology symposium featured keynote speakers from leading tech companies, interactive workshops, and project showcases by students.'
    },
    {
      id: 'gal002',
      title: 'Cultural Fest "Rhythms 2023"',
      date: '2023-09-25',
      category: 'cultural',
      thumbnail: 'https://source.unsplash.com/random/400x300/?dance',
      images: [
        'https://source.unsplash.com/random/1200x800/?dance',
        'https://source.unsplash.com/random/1200x800/?music',
        'https://source.unsplash.com/random/1200x800/?performance',
        'https://source.unsplash.com/random/1200x800/?stage',
        'https://source.unsplash.com/random/1200x800/?concert'
      ],
      description: 'The annual cultural festival featured performances in dance, music, drama and various other forms of art, showcasing the talents of our students.'
    },
    {
      id: 'gal003',
      title: 'Annual Sports Meet 2023',
      date: '2023-11-10',
      category: 'sports',
      thumbnail: 'https://source.unsplash.com/random/400x300/?sports',
      images: [
        'https://source.unsplash.com/random/1200x800/?athletics',
        'https://source.unsplash.com/random/1200x800/?sports',
        'https://source.unsplash.com/random/1200x800/?running',
        'https://source.unsplash.com/random/1200x800/?medal',
        'https://source.unsplash.com/random/1200x800/?stadium'
      ],
      description: 'The sports meet included track and field events, team sports, and individual competitions, with enthusiastic participation from students across departments.'
    },
    {
      id: 'gal004',
      title: 'Machine Learning Workshop',
      date: '2023-10-05',
      category: 'workshop',
      thumbnail: 'https://source.unsplash.com/random/400x300/?coding',
      images: [
        'https://source.unsplash.com/random/1200x800/?coding',
        'https://source.unsplash.com/random/1200x800/?programming',
        'https://source.unsplash.com/random/1200x800/?laptop',
        'https://source.unsplash.com/random/1200x800/?developer',
        'https://source.unsplash.com/random/1200x800/?algorithm'
      ],
      description: 'Students learned about machine learning algorithms, neural networks, and practical applications through hands-on exercises and real-world examples.'
    },
    {
      id: 'gal005',
      title: 'Foundation Day Celebrations',
      date: '2023-08-15',
      category: 'fest',
      thumbnail: 'https://source.unsplash.com/random/400x300/?celebration',
      images: [
        'https://source.unsplash.com/random/1200x800/?celebration',
        'https://source.unsplash.com/random/1200x800/?ceremony',
        'https://source.unsplash.com/random/1200x800/?event',
        'https://source.unsplash.com/random/1200x800/?audience',
        'https://source.unsplash.com/random/1200x800/?speech'
      ],
      description: 'The college celebrated its foundation day with cultural performances, speeches, and recognition of outstanding achievements by students and faculty.'
    },
    {
      id: 'gal006',
      title: 'Science Exhibition 2023',
      date: '2023-09-10',
      category: 'academic',
      thumbnail: 'https://source.unsplash.com/random/400x300/?science',
      images: [
        'https://source.unsplash.com/random/1200x800/?science',
        'https://source.unsplash.com/random/1200x800/?laboratory',
        'https://source.unsplash.com/random/1200x800/?experiment',
        'https://source.unsplash.com/random/1200x800/?research',
        'https://source.unsplash.com/random/1200x800/?innovation'
      ],
      description: 'Students showcased their scientific projects and innovations at the annual science exhibition, demonstrating practical applications of theoretical concepts.'
    }
  ]

  // State for search, filter, and lightbox
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Filter gallery items based on search term and category
  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter
    
    return matchesSearch && matchesFilter
  })

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  // Get category badge color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic':
        return 'bg-blue-100 text-blue-800'
      case 'cultural':
        return 'bg-purple-100 text-purple-800'
      case 'sports':
        return 'bg-green-100 text-green-800'
      case 'workshop':
        return 'bg-yellow-100 text-yellow-800'
      case 'fest':
        return 'bg-pink-100 text-pink-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // Handle lightbox navigation
  const handlePrevImage = () => {
    if (!selectedItem) return
    setCurrentImageIndex(prev => 
      prev === 0 ? selectedItem.images.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    if (!selectedItem) return
    setCurrentImageIndex(prev => 
      prev === selectedItem.images.length - 1 ? 0 : prev + 1
    )
  }

  // Close lightbox when clicking outside or pressing escape
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
      } else if (event.key === 'ArrowLeft') {
        handlePrevImage()
      } else if (event.key === 'ArrowRight') {
        handleNextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem])

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 bg-primary-700 text-white">
        <div className="flex items-center">
          <FaImage className="text-xl mr-2" />
          <h2 className="text-xl font-bold">Event Gallery</h2>
        </div>
        <p className="text-primary-100 mt-1">
          Browse photos from our recent events and activities
        </p>
      </div>

      {/* Search and Filters */}
      <div className="p-6 border-b border-gray-200 bg-gray-50">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div className="flex items-center">
            <FaFilter className="text-gray-500 mr-2" />
            <span className="text-sm text-gray-700 mr-2">Filter by:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeFilter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter('academic')}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeFilter === 'academic'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
              >
                Academic
              </button>
              <button
                onClick={() => setActiveFilter('cultural')}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeFilter === 'cultural'
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                }`}
              >
                Cultural
              </button>
              <button
                onClick={() => setActiveFilter('sports')}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeFilter === 'sports'
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
              >
                Sports
              </button>
              <button
                onClick={() => setActiveFilter('workshop')}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeFilter === 'workshop'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                }`}
              >
                Workshops
              </button>
              <button
                onClick={() => setActiveFilter('fest')}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeFilter === 'fest'
                    ? 'bg-pink-600 text-white'
                    : 'bg-pink-100 text-pink-800 hover:bg-pink-200'
                }`}
              >
                Fests
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="p-6">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div key={item.id} className="group rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative aspect-w-16 aspect-h-9 cursor-pointer" onClick={() => {
                  setSelectedItem(item)
                  setCurrentImageIndex(0)
                }}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    onError={(e) => {
                      // Fallback if image fails to load
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Event+Image'
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
                      View Gallery
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-gray-800 font-medium">{item.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(item.category)}`}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <FaCalendarAlt className="mr-1" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                  <button
                    onClick={() => {
                      setSelectedItem(item)
                      setCurrentImageIndex(0)
                    }}
                    className="mt-3 text-sm text-primary-600 hover:text-primary-800"
                  >
                    View all {item.images.length} photos
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <FaImage className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No images found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-0 top-0 -mt-12 text-white hover:text-gray-300 z-10"
            >
              <FaTimes className="text-2xl" />
            </button>
            
            {/* Image container */}
            <div className="relative bg-black">
              <img
                src={selectedItem.images[currentImageIndex]}
                alt={`${selectedItem.title} - Photo ${currentImageIndex + 1}`}
                className="max-h-[80vh] mx-auto"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Image+Not+Available'
                }}
              />
              
              {/* Navigation buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              >
                <FaChevronLeft />
              </button>
              
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              >
                <FaChevronRight />
              </button>
            </div>
            
            {/* Caption and thumbnails */}
            <div className="bg-white p-4 rounded-b-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-gray-800">{selectedItem.title}</h3>
                <span className="text-gray-500 text-sm">
                  {currentImageIndex + 1} / {selectedItem.images.length}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              
              {/* Thumbnails */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {selectedItem.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                      currentImageIndex === index ? 'border-primary-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventGallery 