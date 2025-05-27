import React, { useState } from 'react'
import { FaFileUpload, FaFileAlt, FaEye, FaDownload, FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa'

interface Assignment {
  id: string
  title: string
  course: {
    id: string
    code: string
    name: string
  }
  dueDate: string
  status: 'draft' | 'published'
  submissionsCount: number
  totalStudents: number
  attachments?: {
    name: string
    type: string
    size: string
  }[]
}

const AssignmentUploader: React.FC = () => {
  // Sample assignments data
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 'asgn1',
      title: 'Implementation of Advanced Data Structures',
      course: {
        id: 'course1',
        code: 'CS301',
        name: 'Data Structures and Algorithms'
      },
      dueDate: '2023-11-15T23:59:59',
      status: 'published',
      submissionsCount: 35,
      totalStudents: 45,
      attachments: [
        {
          name: 'Assignment_Details.pdf',
          type: 'application/pdf',
          size: '1.2 MB'
        },
        {
          name: 'Sample_Input_Output.txt',
          type: 'text/plain',
          size: '256 KB'
        }
      ]
    },
    {
      id: 'asgn2',
      title: 'Neural Network Implementation',
      course: {
        id: 'course2',
        code: 'CS405',
        name: 'Artificial Intelligence'
      },
      dueDate: '2023-11-20T23:59:59',
      status: 'published',
      submissionsCount: 28,
      totalStudents: 38,
      attachments: [
        {
          name: 'Neural_Network_Assignment.pdf',
          type: 'application/pdf',
          size: '1.5 MB'
        }
      ]
    },
    {
      id: 'asgn3',
      title: 'Database Design Project',
      course: {
        id: 'course3',
        code: 'CS210',
        name: 'Database Management Systems'
      },
      dueDate: '2023-11-25T23:59:59',
      status: 'draft',
      submissionsCount: 0,
      totalStudents: 50,
      attachments: [
        {
          name: 'DB_Design_Project.pdf',
          type: 'application/pdf',
          size: '890 KB'
        }
      ]
    }
  ])

  // Sample courses for dropdown
  const courses = [
    { id: 'course1', code: 'CS301', name: 'Data Structures and Algorithms' },
    { id: 'course2', code: 'CS405', name: 'Artificial Intelligence' },
    { id: 'course3', code: 'CS210', name: 'Database Management Systems' },
    { id: 'course4', code: 'CS450', name: 'Machine Learning' }
  ]

  // State for assignment form
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  const initialFormState = {
    title: '',
    courseId: '',
    dueDate: '',
    dueTime: '',
    instructions: '',
    files: [] as File[]
  }
  
  const [formData, setFormData] = useState(initialFormState)

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Handle file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        files: Array.from(e.target.files)
      })
    }
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    return new Date(dateString).toLocaleString('en-US', options)
  }

  // Calculate days left
  const getDaysLeft = (dueDate: string) => {
    const now = new Date()
    const due = new Date(dueDate)
    
    // Reset time part for accurate day calculation
    now.setHours(0, 0, 0, 0)
    const dueDateOnly = new Date(due)
    dueDateOnly.setHours(0, 0, 0, 0)
    
    const diffTime = dueDateOnly.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays < 0) return 'Overdue'
    if (diffDays === 0) return 'Due Today'
    if (diffDays === 1) return '1 day left'
    return `${diffDays} days left`
  }

  // Edit assignment
  const handleEdit = (id: string) => {
    const assignment = assignments.find(a => a.id === id)
    if (!assignment) return

    const dueDate = new Date(assignment.dueDate)
    const formattedDate = dueDate.toISOString().split('T')[0]
    const formattedTime = dueDate.toTimeString().split(' ')[0].substring(0, 5)

    setFormData({
      title: assignment.title,
      courseId: assignment.course.id,
      dueDate: formattedDate,
      dueTime: formattedTime,
      instructions: 'Please complete this assignment according to the given specifications.',
      files: []
    })
    
    setEditingId(id)
    setShowForm(true)
  }

  // Delete assignment
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this assignment?')) {
      setAssignments(assignments.filter(a => a.id !== id))
    }
  }

  // Toggle assignment status
  const toggleStatus = (id: string) => {
    setAssignments(assignments.map(assignment => 
      assignment.id === id
        ? { ...assignment, status: assignment.status === 'draft' ? 'published' : 'draft' }
        : assignment
    ))
  }

  // Save assignment
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    
    const dueDateTime = `${formData.dueDate}T${formData.dueTime}:00`
    
    if (editingId) {
      // Update existing assignment
      const updatedAssignments = assignments.map(assignment => 
        assignment.id === editingId
          ? {
              ...assignment,
              title: formData.title,
              course: courses.find(c => c.id === formData.courseId) || assignment.course,
              dueDate: dueDateTime
            }
          : assignment
      )
      
      setAssignments(updatedAssignments)
    } else {
      // Add new assignment
      const course = courses.find(c => c.id === formData.courseId)
      if (!course) return
      
      const newAssignment: Assignment = {
        id: `asgn${Date.now()}`,
        title: formData.title,
        course: course,
        dueDate: dueDateTime,
        status: 'draft',
        submissionsCount: 0,
        totalStudents: 0
      }
      
      setAssignments([...assignments, newAssignment])
    }
    
    // Reset form
    setFormData(initialFormState)
    setEditingId(null)
    setShowForm(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaFileUpload className="text-primary-600 text-xl mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Assignment Manager</h2>
          </div>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center text-sm bg-primary-600 text-white px-3 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Create Assignment
            </button>
          )}
        </div>
      </div>

      {/* Assignment Form */}
      {showForm && (
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            {editingId ? 'Edit Assignment' : 'Create New Assignment'}
          </h3>
          <form onSubmit={handleSave}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="md:col-span-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Assignment Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter assignment title"
                />
              </div>
              <div>
                <label htmlFor="courseId" className="block text-sm font-medium text-gray-700 mb-1">
                  Course *
                </label>
                <select
                  id="courseId"
                  name="courseId"
                  value={formData.courseId}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">-- Select Course --</option>
                  {courses.map(course => (
                    <option key={course.id} value={course.id}>
                      {course.code}: {course.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Due Date *
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="dueTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Due Time *
                  </label>
                  <input
                    type="time"
                    id="dueTime"
                    name="dueTime"
                    value={formData.dueTime}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">
                  Instructions
                </label>
                <textarea
                  id="instructions"
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter assignment instructions"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Attach Files
                </label>
                <div className="flex items-center">
                  <label className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition-colors">
                    <span>Choose Files</span>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <span className="ml-3 text-sm text-gray-600">
                    {formData.files.length > 0
                      ? `${formData.files.length} file(s) selected`
                      : 'No files selected'}
                  </span>
                </div>
                {formData.files.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {Array.from(formData.files).map((file, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {file.name} ({(file.size / 1024).toFixed(1)} KB)
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setEditingId(null)
                  setFormData(initialFormState)
                }}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                {editingId ? 'Update Assignment' : 'Create Assignment'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Assignments List */}
      <div className="p-6">
        {assignments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assignment
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submissions
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {assignments.map(assignment => (
                  <tr key={assignment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 bg-primary-100 text-primary-600 rounded-md flex items-center justify-center">
                          <FaFileAlt />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-800">{assignment.title}</div>
                          <div className="text-xs text-gray-500">
                            {assignment.attachments ? `${assignment.attachments.length} attachments` : 'No attachments'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-800">{assignment.course.code}</div>
                      <div className="text-xs text-gray-500">{assignment.course.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-800">{formatDate(assignment.dueDate)}</div>
                      <div className="text-xs text-gray-500">{getDaysLeft(assignment.dueDate)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          assignment.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {assignment.status === 'published' ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-800">
                        {assignment.submissionsCount} / {assignment.totalStudents}
                      </div>
                      <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-primary-600 h-2 rounded-full"
                          style={{
                            width: `${
                              assignment.totalStudents
                                ? (assignment.submissionsCount / assignment.totalStudents) * 100
                                : 0
                            }%`
                          }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => toggleStatus(assignment.id)}
                          className={`${
                            assignment.status === 'published'
                              ? 'text-yellow-600 hover:text-yellow-800'
                              : 'text-green-600 hover:text-green-800'
                          }`}
                          title={assignment.status === 'published' ? 'Unpublish' : 'Publish'}
                        >
                          {assignment.status === 'published' ? <FaTimes /> : <FaCheck />}
                        </button>
                        <button
                          className="text-blue-600 hover:text-blue-800"
                          title="View Submissions"
                        >
                          <FaEye />
                        </button>
                        <button
                          onClick={() => handleEdit(assignment.id)}
                          className="text-indigo-600 hover:text-indigo-800"
                          title="Edit Assignment"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(assignment.id)}
                          className="text-red-600 hover:text-red-800"
                          title="Delete Assignment"
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
          <div className="text-center py-6">
            <FaFileUpload className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No assignments</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating a new assignment.</p>
            <div className="mt-6">
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Create Assignment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AssignmentUploader 