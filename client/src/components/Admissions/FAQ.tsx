import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const faqs = [
    {
      question: 'What are the admission requirements for undergraduate programs?',
      answer: 'For undergraduate programs, candidates must have completed 10+2 or equivalent examination from a recognized board with a minimum of 50% marks. Specific programs may have additional subject requirements. Admission is based on merit and/or entrance examination scores.'
    },
    {
      question: 'How do I apply for admission?',
      answer: 'You can apply online through our admission portal. Visit the "Admissions" section on our website, create an account, fill in the application form, upload required documents, and pay the application fee. You can also visit our campus and apply in person at the Admissions Office.'
    },
    {
      question: 'What documents are required for the application?',
      answer: 'Required documents include: 1) Completed application form, 2) 10th and 12th mark sheets, 3) Transfer certificate, 4) Character certificate, 5) Passport-size photographs, 6) ID proof (Aadhar card/passport), 7) Caste certificate (if applicable), 8) Income certificate (for scholarship applicants), and 9) Sports/extracurricular certificates (if applicable).'
    },
    {
      question: 'When does the academic year begin?',
      answer: 'The academic year typically begins in the first week of August. Orientation programs for new students are conducted in the last week of July.'
    },
    {
      question: 'Is hostel accommodation available?',
      answer: 'Yes, we provide separate hostel facilities for boys and girls. Rooms are available on a first-come, first-served basis. Hostel fees include accommodation, meals, and basic amenities. You can apply for hostel accommodation during the admission process.'
    },
    {
      question: 'Are there any scholarships available?',
      answer: 'Yes, we offer various scholarships based on merit, sports achievements, and financial need. These include Merit Scholarships, Sports Excellence Scholarships, Financial Need Scholarships, and Girl Child Scholarships. Detailed information is available in the Scholarships section.'
    },
    {
      question: 'Can I change my program after admission?',
      answer: 'Program changes are considered on a case-by-case basis and are subject to seat availability in the desired program. Requests for program changes must be submitted within the first month of the academic year. Approval depends on eligibility criteria and academic performance.'
    },
    {
      question: 'What are the payment options for fees?',
      answer: 'Fees can be paid online through our payment portal using credit/debit cards, net banking, or UPI. Other payment options include demand draft in favor of "VK College" or direct bank transfer. Fees can also be paid in installments as per the schedule announced by the college.'
    },
    {
      question: 'Is there a dress code?',
      answer: 'We do not have a strict uniform policy, but students are expected to dress modestly and appropriately. Specific departments may have dress codes for laboratory sessions or special events.'
    },
    {
      question: 'What extracurricular activities are available?',
      answer: 'We offer a wide range of extracurricular activities including sports (cricket, basketball, volleyball, etc.), cultural clubs (music, dance, drama, art), literary clubs, technical clubs, NSS, NCC, and various departmental associations. Students are encouraged to participate in these activities for holistic development.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
      
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="space-y-4">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-medium text-gray-800">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No FAQs match your search. Please try different keywords.</p>
          </div>
        )}
      </div>

      <div className="mt-8 p-4 bg-primary-50 rounded-md border border-primary-100">
        <h3 className="font-bold text-primary-800 mb-2">Still have questions?</h3>
        <p className="text-gray-700">
          If you couldn't find the answer to your question, please feel free to contact our admissions team:
        </p>
        <div className="mt-3">
          <p><strong>Email:</strong> admissions@vkcollege.edu.in</p>
          <p><strong>Phone:</strong> +91 123-456-7890</p>
          <p><strong>Timing:</strong> Monday to Friday, 9:00 AM to 5:00 PM</p>
        </div>
      </div>
    </div>
  )
}

export default FAQ 