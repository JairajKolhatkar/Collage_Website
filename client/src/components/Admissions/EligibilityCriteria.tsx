import React from 'react'

const EligibilityCriteria = () => {
  const programs = [
    {
      name: 'Bachelor of Arts (BA)',
      criteria: 'Minimum 50% marks in 10+2 from a recognized board in any stream.'
    },
    {
      name: 'Bachelor of Science (BSc)',
      criteria: 'Minimum 50% marks in 10+2 with Physics, Chemistry, Mathematics/Biology from a recognized board.'
    },
    {
      name: 'Bachelor of Commerce (BCom)',
      criteria: 'Minimum 50% marks in 10+2 from a recognized board, preferably with Commerce/Mathematics.'
    },
    {
      name: 'Master of Arts (MA)',
      criteria: 'Bachelor\'s degree with minimum 50% marks in the relevant subject or related discipline.'
    },
    {
      name: 'Master of Science (MSc)',
      criteria: 'Bachelor\'s degree with minimum 55% marks in the relevant subject.'
    },
    {
      name: 'PhD Programs',
      criteria: 'Master\'s degree with minimum 55% marks in the relevant subject and qualification in entrance test.'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Eligibility Criteria</h2>
      
      <div className="space-y-6">
        <p className="text-gray-700">
          To be eligible for admission to VK College, candidates must meet the following general and program-specific criteria:
        </p>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-bold text-lg mb-2 text-gray-800">General Requirements</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Completion of qualifying examination with required minimum marks</li>
            <li>Valid score in entrance examination (if applicable)</li>
            <li>Proficiency in English language</li>
            <li>Submission of all required documents by the specified deadline</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-800">Program-Specific Requirements</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold">Program</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold">Eligibility Criteria</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border-b border-gray-200">{program.name}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{program.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
          <h3 className="font-bold text-lg mb-2 text-yellow-800">Important Note</h3>
          <p className="text-yellow-800">
            Relaxation in eligibility criteria may be provided to candidates from reserved categories as per government norms. 
            International students should contact the International Students Office for specific requirements.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EligibilityCriteria 