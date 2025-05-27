import { FC } from 'react'

const Timetable: FC = () => {
  // Mock timetable data
  const timetableData = [
    { day: 'Monday', slots: [
      { time: '09:00 - 10:00', course: 'Data Structures', room: 'CS-101' },
      { time: '11:00 - 12:00', course: 'Database Systems', room: 'CS-204' },
      { time: '14:00 - 15:30', course: 'Web Development Lab', room: 'LAB-301' },
    ]},
    { day: 'Tuesday', slots: [
      { time: '10:00 - 11:00', course: 'Algorithms', room: 'CS-102' },
      { time: '12:00 - 13:00', course: 'Software Engineering', room: 'CS-303' },
    ]},
    { day: 'Wednesday', slots: [
      { time: '09:00 - 10:00', course: 'Data Structures', room: 'CS-101' },
      { time: '11:00 - 12:00', course: 'Database Systems', room: 'CS-204' },
      { time: '14:00 - 15:30', course: 'Project Work', room: 'LAB-302' },
    ]},
    { day: 'Thursday', slots: [
      { time: '10:00 - 11:00', course: 'Algorithms', room: 'CS-102' },
      { time: '12:00 - 13:00', course: 'Software Engineering', room: 'CS-303' },
      { time: '15:00 - 16:00', course: 'Technical Communication', room: 'HU-201' },
    ]},
    { day: 'Friday', slots: [
      { time: '09:00 - 10:30', course: 'Web Development', room: 'CS-205' },
      { time: '13:00 - 14:00', course: 'Ethics in Computing', room: 'HU-102' },
    ]},
  ]

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-primary-700 text-white">
        <h3 className="font-bold">Weekly Timetable</h3>
      </div>
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Day</th>
                <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Time</th>
                <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Course</th>
                <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Room</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {timetableData.map((day, dayIndex) => (
                day.slots.map((slot, slotIndex) => (
                  <tr key={`${dayIndex}-${slotIndex}`} className="hover:bg-gray-50">
                    {slotIndex === 0 ? (
                      <td className="py-2 px-3 text-sm font-medium text-gray-900 border-r" rowSpan={day.slots.length}>
                        {day.day}
                      </td>
                    ) : null}
                    <td className="py-2 px-3 text-sm text-gray-500">{slot.time}</td>
                    <td className="py-2 px-3 text-sm text-gray-900">{slot.course}</td>
                    <td className="py-2 px-3 text-sm text-gray-500">{slot.room}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Timetable 