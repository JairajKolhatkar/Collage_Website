import { FC } from 'react'

interface StudentProfileProps {
  studentData: {
    id: string
    name: string
    program: string
    semester: string
    email: string
    phone: string
    admissionYear: string
    dob: string
    address: string
    image?: string
  }
}

const StudentProfile: FC<StudentProfileProps> = ({ studentData }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Student Profile</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-4xl font-bold">
            {studentData.image ? (
              <img src={studentData.image} alt={studentData.name} className="w-full h-full rounded-full object-cover" />
            ) : (
              studentData.name.split(' ').map(n => n[0]).join('')
            )}
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-500">Student ID</h3>
              <p>{studentData.id}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500">Name</h3>
              <p>{studentData.name}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500">Program</h3>
              <p>{studentData.program}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500">Semester</h3>
              <p>{studentData.semester}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500">Email</h3>
              <p>{studentData.email}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500">Phone</h3>
              <p>{studentData.phone}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500">Admission Year</h3>
              <p>{studentData.admissionYear}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500">Date of Birth</h3>
              <p>{studentData.dob}</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-semibold text-gray-500">Address</h3>
              <p>{studentData.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile 