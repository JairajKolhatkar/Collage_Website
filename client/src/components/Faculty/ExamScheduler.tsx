import React, { useState } from 'react'
import { FaCalendarAlt, FaEdit, FaTrash, FaPlus, FaCheck, FaTimes } from 'react-icons/fa'

interface Exam {
  id: string
  courseCode: string
  courseName: string
  examType: string
  date: string
  startTime: string
  endTime: string
  location: string
  status: 'scheduled' | 'completed' | 'cancelled'
}

const ExamScheduler: React.FC = () => {
  // Sample exam data
  const [exams, setExams] = useState<Exam[]>([
    {
      id: 'EX001',
      courseCode: 'CS301',
      courseName: 'Data Structures and Algorithms',
      examType: 'Mid-term',
      date: '2023-11-15',
      startTime: '10:00',
      endTime: '12:00',
      location: 'Main Hall 101',
      status: 'scheduled'
    },
    {
      id: 'EX002',
      courseCode: 'CS405',
      courseName: 'Artificial Intelligence',
      examType: 'Quiz',
      date: '2023-11-20',
      startTime: '14:00',
      endTime: '15:00',
      location: 'Lab 204',
      status: 'scheduled'
    },
    {
      id: 'EX003',
      courseCode: 'CS210',
      courseName: 'Database Management Systems',
      examType: 'Final',
      date: '2023-12-10',
      startTime: '09:00',
      endTime: '12:00',
      location: 'Examination Hall A',
      status: 'scheduled'
    }
  ])

  // New exam form state
  const [isAddingExam, setIsAddingExam] = useState(false)
  const [editingExamId, setEditingExamId] = useState<string | null>(null)
  
  const initialFormState = {
    courseCode: '',
    courseName: '',
    examType: 'Mid-term',
    date: '',
    startTime: '',
    endTime: '',
    location: ''
  }
  
  const [formData, setFormData] = useState(initialFormState)

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Add new exam
  const handleAddExam = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newExam: Exam = {
      id: `EX${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      ...formData,
      status: 'scheduled'
    }
    
    setExams([...exams, newExam])
    setFormData(initialFormState)
    setIsAddingExam(false)
  }

  // Start editing an exam
  const handleStartEdit = (exam: Exam) => {
    setEditingExamId(exam.id)
    setFormData({
      courseCode: exam.courseCode,
      courseName: exam.courseName,
      examType: exam.examType,
      date: exam.date,
      startTime: exam.startTime,
      endTime: exam.endTime,
      location: exam.location
    })
  }

  // Save edited exam
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const updatedExams = exams.map(exam => 
      exam.id === editingExamId 
        ? { ...exam, ...formData }
        : exam
    )
    
    setExams(updatedExams)
    setEditingExamId(null)
    setFormData(initialFormState)
  }

  // Delete an exam
  const handleDeleteExam = (id: string) => {
    setExams(exams.filter(exam => exam.id !== id))
  }

  // Update exam status
  const handleUpdateStatus = (id: string, newStatus: 'scheduled' | 'completed' | 'cancelled') => {
    const updatedExams = exams.map(exam => 
      exam.id === id ? { ...exam, status: newStatus } : exam
    )
    setExams(updatedExams)
  }

  // Cancel adding or editing
  const handleCancel = () => {
    setIsAddingExam(false)
    setEditingExamId(null)
    setFormData(initialFormState)
  }

  // Get status badge color
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaCalendarAlt className="text-primary-600 text-xl mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Exam Scheduler</h2>
          </div>
          {!isAddingExam && !editingExamId && (
            <button
              onClick={() => setIsAddingExam(true)}
              className="flex items-center text-sm bg-primary-600 text-white px-3 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              <FaPlus className="mr-1" /> Add Exam
            </button>
          )}
        </div>
      </div>

      {/* Add/Edit Exam Form */}
      {(isAddingExam || editingExamId) && (
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            {editingExamId ? 'Edit Exam' : 'Schedule New Exam'}
          </h3>
          <form onSubmit={editingExamId ? handleSaveEdit : handleAddExam}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="courseCode" className="block text-sm font-medium text-gray-700 mb-1">Course Code</label>
                <input
                  type="text"
                  id="courseCode"
                  name="courseCode"
                  value={formData.courseCode}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="courseName" className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="examType" className="block text-sm font-medium text-gray-700 mb-1">Exam Type</label>
                <select
                  id="examType"
                  name="examType"
                  value={formData.examType}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="Mid-term">Mid-term</option>
                  <option value="Final">Final</option>
                  <option value="Quiz">Quiz</option>
                  <option value="Practical">Practical</option>
                  <option value="Viva">Viva</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                {editingExamId ? 'Save Changes' : 'Schedule Exam'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Exams List */}
      <div className="p-6">
        {exams.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Exam Details
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {exams.map((exam) => (
                  <tr key={exam.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-800">{exam.courseCode}</div>
                      <div className="text-sm text-gray-500">{exam.courseName}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-800">{exam.examType}</div>
                      <div className="text-sm text-gray-500">{exam.location}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-800">
                        {new Date(exam.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="text-sm text-gray-500">
                        {exam.startTime} - {exam.endTime}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeColor(exam.status)}`}>
                        {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        {exam.status === 'scheduled' && (
                          <>
                            <button
                              onClick={() => handleUpdateStatus(exam.id, 'completed')}
                              className="text-green-600 hover:text-green-800"
                              title="Mark as Completed"
                            >
                              <FaCheck />
                            </button>
                            <button
                              onClick={() => handleUpdateStatus(exam.id, 'cancelled')}
                              className="text-red-600 hover:text-red-800"
                              title="Mark as Cancelled"
                            >
                              <FaTimes />
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => handleStartEdit(exam)}
                          className="text-blue-600 hover:text-blue-800"
                          title="Edit Exam"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteExam(exam.id)}
                          className="text-red-600 hover:text-red-800"
                          title="Delete Exam"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-gray-500">No exams scheduled yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExamScheduler 