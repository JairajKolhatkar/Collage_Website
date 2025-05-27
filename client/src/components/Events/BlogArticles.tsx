import React, { useState } from 'react'
import { FaNewspaper, FaCalendarAlt, FaUser, FaTags, FaSearch, FaArrowRight, FaClock } from 'react-icons/fa'

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  date: string
  readTime: number
  category: string
  tags: string[]
  thumbnail: string
  featured?: boolean
}

const BlogArticles: React.FC = () => {
  // Sample blog data
  const articles: Article[] = [
    {
      id: 'blog001',
      title: 'The Future of Technology Education in India',
      excerpt: 'Exploring how technology education is evolving in Indian colleges and what it means for students in the coming decade.',
      content: `
        <p>The landscape of technology education in India is rapidly changing. With the increasing demand for skilled professionals in various technology domains, educational institutions are adapting their curricula to meet industry needs.</p>
        
        <p>Several factors are driving this transformation:</p>
        <ul>
          <li>The rapid pace of technological advancement</li>
          <li>Changing industry requirements</li>
          <li>Global competition</li>
          <li>The need for practical, hands-on learning</li>
        </ul>
        
        <p>At VK College Rohana, we're committed to staying at the forefront of this educational revolution. Our recently updated computer science curriculum now includes emerging fields like artificial intelligence, machine learning, and blockchain technology.</p>
        
        <p>Industry partnerships play a crucial role in modern technology education. Through collaborations with leading tech companies, we're able to provide our students with relevant, real-world experience that prepares them for successful careers.</p>
        
        <p>The future of technology education will likely see even greater integration of online and offline learning models, increased focus on project-based learning, and more specialized courses catering to niche technology domains.</p>
        
        <p>For students considering a career in technology, the opportunities have never been more diverse. From software development to data science, cybersecurity to user experience design, the technology field offers pathways for a wide range of interests and aptitudes.</p>
      `,
      author: {
        name: 'Dr. Rajesh Kumar',
        role: 'Head of Computer Science Department',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      date: '2023-10-25',
      readTime: 8,
      category: 'Technology',
      tags: ['Education', 'Technology', 'Future', 'Career'],
      thumbnail: 'https://source.unsplash.com/random/800x500/?technology',
      featured: true
    },
    {
      id: 'blog002',
      title: 'Celebrating Cultural Diversity on Campus',
      excerpt: 'How our recent cultural festival brought together traditions from across India and fostered a spirit of unity and appreciation.',
      content: `
        <p>Last week, VK College Rohana hosted its annual cultural festival, bringing together diverse cultural expressions from across India. The three-day event featured performances, exhibitions, and workshops that showcased the rich tapestry of Indian heritage.</p>
        
        <p>Students from different states presented folk dances, music, and theatrical performances representing their regional traditions. The festival also included food stalls offering cuisine from various parts of the country, allowing everyone to experience India's culinary diversity.</p>
        
        <p>Cultural diversity in educational institutions provides numerous benefits:</p>
        <ul>
          <li>Exposure to different perspectives and worldviews</li>
          <li>Development of empathy and cultural sensitivity</li>
          <li>Preparation for working in diverse environments</li>
          <li>Enrichment of the learning experience</li>
        </ul>
        
        <p>The festival's highlight was a collaborative performance featuring elements from multiple regional dance forms, symbolizing unity in diversity - a core principle that our college strives to uphold.</p>
        
        <p>As we continue to welcome students from increasingly diverse backgrounds, we remain committed to creating an inclusive environment where all cultural identities are respected and celebrated.</p>
      `,
      author: {
        name: 'Prof. Anita Sharma',
        role: 'Cultural Committee Chairperson',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
      },
      date: '2023-10-15',
      readTime: 6,
      category: 'Campus Life',
      tags: ['Culture', 'Diversity', 'Festival', 'Arts'],
      thumbnail: 'https://source.unsplash.com/random/800x500/?festival'
    },
    {
      id: 'blog003',
      title: 'Student Research Team Wins National Competition',
      excerpt: 'Our college\'s robotics team secured first place at the National Robotics Challenge with their innovative waste management solution.',
      content: `
        <p>We are proud to announce that the VK College Robotics Team has won first place at the prestigious National Robotics Challenge held in Delhi last weekend. The team, comprising five final-year engineering students, impressed the judges with their innovative automated waste segregation system.</p>
        
        <p>The winning project, titled "EcoSort," uses machine learning and computer vision to automatically identify and sort different types of waste materials, improving recycling efficiency. The system demonstrated an impressive 95% accuracy rate during the competition trials.</p>
        
        <p>Team leader Aditya Patel explained that the project was inspired by the waste management challenges faced in urban India. "We wanted to create a solution that could make a real difference in our communities while also showcasing the technical skills we've developed during our time at VK College," he said.</p>
        
        <p>The team received a cash prize of ₹2,00,000 and an opportunity to incubate their project with a leading technology company. This achievement highlights the quality of research and innovation happening at our institution.</p>
        
        <p>Dr. Mehta, Dean of Engineering, attributes this success to the college's emphasis on practical, project-based learning. "We encourage our students to apply their theoretical knowledge to solve real-world problems. This victory is a testament to their hard work and creativity."</p>
        
        <p>The winning team members include:</p>
        <ul>
          <li>Aditya Patel (Team Leader)</li>
          <li>Priya Sharma</li>
          <li>Rahul Singh</li>
          <li>Neha Gupta</li>
          <li>Vikram Desai</li>
        </ul>
      `,
      author: {
        name: 'Dr. Sunil Mehta',
        role: 'Dean of Engineering',
        avatar: 'https://randomuser.me/api/portraits/men/59.jpg'
      },
      date: '2023-11-02',
      readTime: 5,
      category: 'Achievements',
      tags: ['Robotics', 'Competition', 'Research', 'Technology'],
      thumbnail: 'https://source.unsplash.com/random/800x500/?robotics'
    },
    {
      id: 'blog004',
      title: 'Tips for Maintaining Mental Health During Exam Season',
      excerpt: 'Our college counselor shares practical strategies to help students manage stress and maintain wellbeing during examination periods.',
      content: `
        <p>As exam season approaches, many students experience increased stress and anxiety. Taking care of your mental health is just as important as studying for your exams. Here are some practical strategies to help you maintain balance during this challenging time.</p>
        
        <h3>Effective Study Techniques</h3>
        <p>Rather than cramming, try distributed practice - spreading your study sessions over time. Research shows this leads to better retention than marathon study sessions. Also, test yourself regularly instead of just reviewing notes. Active recall strengthens memory and identifies gaps in your understanding.</p>
        
        <h3>Time Management</h3>
        <p>Create a realistic study schedule that includes breaks. The Pomodoro Technique - studying for 25 minutes followed by a 5-minute break - works well for many students. Don't forget to schedule time for sleep, meals, and some physical activity.</p>
        
        <h3>Physical Wellbeing</h3>
        <p>Your physical and mental health are closely connected. Try to:</p>
        <ul>
          <li>Get 7-8 hours of sleep each night</li>
          <li>Eat nutritious meals rather than relying on caffeine and sugar</li>
          <li>Include some form of physical activity daily, even if it's just a 15-minute walk</li>
        </ul>
        
        <h3>Stress Management</h3>
        <p>When you feel overwhelmed, try deep breathing exercises or progressive muscle relaxation. Mindfulness meditation can also help calm your mind - even 5 minutes can make a difference.</p>
        
        <h3>Seek Support</h3>
        <p>Remember that you don't have to face exam stress alone. Connect with classmates for study groups, talk to friends and family about how you're feeling, or visit the college counseling center. Sometimes just voicing your concerns can provide relief.</p>
        
        <p>Remember that your worth is not determined by your exam results. Do your best, but also be kind to yourself during this challenging period.</p>
      `,
      author: {
        name: 'Ms. Deepa Khanna',
        role: 'College Counselor',
        avatar: 'https://randomuser.me/api/portraits/women/42.jpg'
      },
      date: '2023-10-30',
      readTime: 7,
      category: 'Wellness',
      tags: ['Mental Health', 'Exams', 'Stress Management', 'Student Life'],
      thumbnail: 'https://source.unsplash.com/random/800x500/?study'
    },
    {
      id: 'blog005',
      title: 'Alumni Spotlight: From College Project to Successful Startup',
      excerpt: 'How a final year project at VK College evolved into a thriving edutech startup that\'s changing how students learn programming.',
      content: `
        <p>Five years ago, Vikram Malhotra was a final-year computer science student working on a project to make programming more accessible to beginners. Today, his company CodeCraft has over 500,000 users and recently secured ₹8 crore in Series A funding.</p>
        
        <p>"It all started in the college lab," says Vikram. "We were trying to solve a problem we faced ourselves - how to visualize programming concepts in a way that makes them easier to grasp."</p>
        
        <p>The project, initially called "CodeVis," used interactive visualizations to illustrate programming concepts like data structures and algorithms. Vikram's professor, Dr. Rajesh Kumar, recognized its potential and encouraged him to develop it further.</p>
        
        <p>After graduation, Vikram teamed up with two classmates to transform the project into a web platform. They spent a year refining the product while participating in the college's incubation program, which provided mentorship and initial funding.</p>
        
        <p>The platform gained traction among computer science students and self-taught programmers, growing primarily through word of mouth. Today, CodeCraft offers courses in multiple programming languages and has users from over 50 countries.</p>
        
        <p>Vikram attributes much of his success to the foundation he received at VK College. "The emphasis on practical projects and the encouragement to think creatively really prepared me for entrepreneurship," he reflects.</p>
        
        <p>His advice to current students? "Find problems that genuinely interest you, and don't be afraid to pursue your ideas beyond the classroom. The project that seems like just an assignment today could be the beginning of something much bigger."</p>
      `,
      author: {
        name: 'Alumni Relations Office',
        role: 'VK College Rohana',
        avatar: 'https://randomuser.me/api/portraits/lego/1.jpg'
      },
      date: '2023-10-10',
      readTime: 6,
      category: 'Alumni',
      tags: ['Success Story', 'Startup', 'Technology', 'Entrepreneurship'],
      thumbnail: 'https://source.unsplash.com/random/800x500/?startup'
    }
  ]

  // State
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  
  // Get unique categories
  const categories = Array.from(new Set(articles.map(article => article.category)))
  
  // Filter articles based on search and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = !selectedCategory || article.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })
  
  // Get featured articles
  const featuredArticles = articles.filter(article => article.featured)

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  // Reset filters
  const resetFilters = () => {
    setSearchTerm('')
    setSelectedCategory(null)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {selectedArticle ? (
        // Article Detail View
        <div>
          <div className="relative h-64 md:h-96 bg-gray-300">
            <img
              src={selectedArticle.thumbnail}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=Article+Image'
              }}
            />
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Back to articles"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2 gap-4">
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-1" />
                  {formatDate(selectedArticle.date)}
                </span>
                <span className="flex items-center">
                  <FaUser className="mr-1" />
                  {selectedArticle.author.name}
                </span>
                <span className="flex items-center">
                  <FaClock className="mr-1" />
                  {selectedArticle.readTime} min read
                </span>
                <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">
                  {selectedArticle.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedArticle.title}</h1>
              
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                  {selectedArticle.author.avatar ? (
                    <img
                      src={selectedArticle.author.avatar}
                      alt={selectedArticle.author.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-700">
                      {selectedArticle.author.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{selectedArticle.author.name}</div>
                  <div className="text-sm text-gray-500">{selectedArticle.author.role}</div>
                </div>
              </div>
            </div>
            
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-700 font-medium">Tags:</span>
                {selectedArticle.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setSearchTerm(tag)
                      setSelectedArticle(null)
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">More Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {articles
                  .filter(article => article.id !== selectedArticle.id)
                  .slice(0, 2)
                  .map(article => (
                    <div
                      key={article.id}
                      className="flex cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={article.thumbnail}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-800 line-clamp-2">{article.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{formatDate(article.date)}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Articles List View
        <>
          <div className="p-6 bg-primary-700 text-white">
            <div className="flex items-center">
              <FaNewspaper className="text-xl mr-2" />
              <h2 className="text-xl font-bold">College Blog & Articles</h2>
            </div>
            <p className="text-primary-100 mt-1">
              Stay updated with the latest news, stories, and insights from our campus
            </p>
          </div>

          {/* Search and Filters */}
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-700">Filter by category:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(prevCat => prevCat === category ? null : category)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        selectedCategory === category
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                  
                  {(searchTerm || selectedCategory) && (
                    <button
                      onClick={resetFilters}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-white hover:bg-gray-700"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Featured Articles */}
            {featuredArticles.length > 0 && !searchTerm && !selectedCategory && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Featured Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredArticles.map(article => (
                    <div
                      key={article.id}
                      className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                        <img
                          src={article.thumbnail}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <div className="flex items-center mb-2">
                          <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span className="ml-2 text-xs opacity-90">
                            {formatDate(article.date)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                        <p className="text-sm opacity-90 line-clamp-2">{article.excerpt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Articles */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {searchTerm || selectedCategory ? 'Search Results' : 'Recent Articles'}
              </h3>
              
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredArticles.map(article => (
                    <div
                      key={article.id}
                      className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                        <img
                          src={article.thumbnail}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-primary-100 text-primary-800 rounded-full text-xs">
                            {article.category}
                          </span>
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs flex items-center">
                            <FaClock className="mr-1 text-gray-500" size={10} />
                            {article.readTime} min read
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
                              {article.author.avatar ? (
                                <img
                                  src={article.author.avatar}
                                  alt={article.author.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-700">
                                  {article.author.name.charAt(0)}
                                </div>
                              )}
                            </div>
                            <span className="text-xs text-gray-500">{article.author.name}</span>
                          </div>
                          <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <FaNewspaper className="mx-auto h-12 w-12 text-gray-300" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No articles found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or filter criteria.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                  >
                    View All Articles
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default BlogArticles 