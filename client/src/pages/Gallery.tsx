import React, { useState } from 'react'
import { FaCamera, FaFilter, FaSearch, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'

const Gallery = () => {
  // State for filtering
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  // State for lightbox
  const [selectedImage, setSelectedImage] = useState<null | number>(null)

  // Categories
  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'campus', name: 'Campus' },
    { id: 'events', name: 'Events & Festivals' },
    { id: 'academic', name: 'Academic Activities' },
    { id: 'sports', name: 'Sports' },
    { id: 'cultural', name: 'Cultural Programs' }
  ]

  // Mock gallery images data
  const galleryImages = [
    {
      id: 1,
      title: 'VK College Rohana Main Building',
      description: 'The iconic main building of VK College Rohana, established in 1985.',
      category: 'campus',
      date: 'January 2023',
      url: '/images/campus/main-building.jpg',
      // Using placeholder for demo
      placeholder: 'bg-primary-100'
    },
    {
      id: 2,
      title: 'Annual Tech Symposium 2023',
      description: 'Students showcasing innovative projects at the annual technology symposium.',
      category: 'events',
      date: 'March 2023',
      url: '/images/events/tech-symposium.jpg',
      placeholder: 'bg-blue-100'
    },
    {
      id: 3,
      title: 'Science Laboratory',
      description: 'State-of-the-art science laboratory equipped with modern instruments.',
      category: 'academic',
      date: 'February 2023',
      url: '/images/academic/science-lab.jpg',
      placeholder: 'bg-yellow-100'
    },
    {
      id: 4,
      title: 'Inter-College Cricket Tournament',
      description: 'VK College Rohana cricket team celebrating victory in the inter-college tournament.',
      category: 'sports',
      date: 'April 2023',
      url: '/images/sports/cricket.jpg',
      placeholder: 'bg-green-100'
    },
    {
      id: 5,
      title: 'Annual Cultural Festival',
      description: 'Students performing traditional dance during the annual cultural festival.',
      category: 'cultural',
      date: 'February 2023',
      url: '/images/cultural/dance.jpg',
      placeholder: 'bg-red-100'
    },
    {
      id: 6,
      title: 'Library Building',
      description: 'The modern library building housing over 50,000 books and digital resources.',
      category: 'campus',
      date: 'January 2023',
      url: '/images/campus/library.jpg',
      placeholder: 'bg-primary-100'
    },
    {
      id: 7,
      title: 'Graduation Ceremony 2023',
      description: 'Students celebrating their achievements at the 2023 graduation ceremony.',
      category: 'events',
      date: 'May 2023',
      url: '/images/events/graduation.jpg',
      placeholder: 'bg-blue-100'
    },
    {
      id: 8,
      title: 'Computer Science Lab',
      description: 'Students working on programming projects in the computer science laboratory.',
      category: 'academic',
      date: 'March 2023',
      url: '/images/academic/cs-lab.jpg',
      placeholder: 'bg-yellow-100'
    },
    {
      id: 9,
      title: 'Annual Sports Meet',
      description: 'Athletes competing in the track and field events during the annual sports meet.',
      category: 'sports',
      date: 'April 2023',
      url: '/images/sports/athletics.jpg',
      placeholder: 'bg-green-100'
    },
    {
      id: 10,
      title: 'Music Concert',
      description: 'Student band performing at the annual music concert.',
      category: 'cultural',
      date: 'February 2023',
      url: '/images/cultural/music.jpg',
      placeholder: 'bg-red-100'
    },
    {
      id: 11,
      title: 'Hostel Buildings',
      description: 'Modern hostel facilities providing comfortable accommodation for students.',
      category: 'campus',
      date: 'January 2023',
      url: '/images/campus/hostel.jpg',
      placeholder: 'bg-primary-100'
    },
    {
      id: 12,
      title: 'Guest Lecture Series',
      description: 'Distinguished speakers sharing knowledge during the guest lecture series.',
      category: 'events',
      date: 'April 2023',
      url: '/images/events/guest-lecture.jpg',
      placeholder: 'bg-blue-100'
    },
    {
      id: 13,
      title: 'Physics Experiment',
      description: 'Students conducting advanced physics experiments in the laboratory.',
      category: 'academic',
      date: 'March 2023',
      url: '/images/academic/physics.jpg',
      placeholder: 'bg-yellow-100'
    },
    {
      id: 14,
      title: 'Basketball Tournament',
      description: 'Exciting moment from the inter-departmental basketball tournament.',
      category: 'sports',
      date: 'April 2023',
      url: '/images/sports/basketball.jpg',
      placeholder: 'bg-green-100'
    },
    {
      id: 15,
      title: 'Theater Production',
      description: 'Students performing a play at the annual theater festival.',
      category: 'cultural',
      date: 'February 2023',
      url: '/images/cultural/theater.jpg',
      placeholder: 'bg-red-100'
    },
    {
      id: 16,
      title: 'Campus Aerial View',
      description: 'Breathtaking aerial view of VK College Rohana campus.',
      category: 'campus',
      date: 'January 2023',
      url: '/images/campus/aerial.jpg',
      placeholder: 'bg-primary-100'
    },
    {
      id: 17,
      title: 'Alumni Meet 2023',
      description: 'Former students reuniting at the annual alumni meet.',
      category: 'events',
      date: 'May 2023',
      url: '/images/events/alumni.jpg',
      placeholder: 'bg-blue-100'
    },
    {
      id: 18,
      title: 'Engineering Workshop',
      description: 'Students working on engineering projects in the mechanical workshop.',
      category: 'academic',
      date: 'March 2023',
      url: '/images/academic/workshop.jpg',
      placeholder: 'bg-yellow-100'
    }
  ]

  // Filter images based on category and search query
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = activeCategory === 'all' || image.category === activeCategory
    const matchesSearch = searchQuery === '' || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })

  // Navigate through images in lightbox
  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
    if (currentIndex === -1) return
    
    let newIndex
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    }
    
    setSelectedImage(filteredImages[newIndex].id)
  }

  // Close lightbox with Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev')
      } else if (e.key === 'ArrowRight') {
        navigateImage('next')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  // Get selected image data
  const getSelectedImage = () => {
    if (selectedImage === null) return null
    return galleryImages.find(img => img.id === selectedImage)
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore memorable moments and beautiful views of VK College Rohana
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center">
              <FaFilter className="text-primary-600 mr-2" />
              <div className="font-medium text-gray-700 mr-4">Filter by:</div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      activeCategory === category.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map(image => (
              <div 
                key={image.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedImage(image.id)}
              >
                {/* Image Placeholder - In a real app, this would be an actual image */}
                <div className={`h-48 ${image.placeholder} flex items-center justify-center`}>
                  <FaCamera className="text-4xl text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{image.date}</p>
                  <p className="text-sm text-gray-700 line-clamp-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <FaCamera className="text-5xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Images Found</h3>
            <p className="text-gray-600">
              We couldn't find any images matching your criteria. Please try another search or filter.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery('') }}
              className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full"
                aria-label="Close lightbox"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full"
                aria-label="Previous image"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full"
                aria-label="Next image"
              >
                <FaArrowRight />
              </button>

              {/* Image Container */}
              <div className="bg-white rounded-lg overflow-hidden">
                {getSelectedImage() && (
                  <>
                    {/* Image Placeholder - In a real app, this would be an actual image */}
                    <div className={`aspect-w-16 aspect-h-9 ${getSelectedImage()?.placeholder} flex items-center justify-center`}>
                      <FaCamera className="text-8xl text-gray-400" />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{getSelectedImage()?.title}</h2>
                      <p className="text-gray-600 mb-4">{getSelectedImage()?.date}</p>
                      <p className="text-gray-700">{getSelectedImage()?.description}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery 