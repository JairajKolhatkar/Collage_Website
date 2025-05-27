import React from 'react'
import EligibilityCriteria from '../components/Admissions/EligibilityCriteria'
import AdmissionProcess from '../components/Admissions/AdmissionProcess'
import ApplicationForm from '../components/Admissions/ApplicationForm'
import FeeScholarship from '../components/Admissions/FeeScholarship'
import FAQ from '../components/Admissions/FAQ'
import LiveSupport from '../components/Admissions/LiveSupport'

const Admissions = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-2xl">
            Join our vibrant academic community and embark on a journey of excellence, innovation, and growth.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Quick Links */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#eligibility" className="text-primary-600 hover:text-primary-800">
                    Eligibility Criteria
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-primary-600 hover:text-primary-800">
                    Admission Process
                  </a>
                </li>
                <li>
                  <a href="#application" className="text-primary-600 hover:text-primary-800">
                    Online Application
                  </a>
                </li>
                <li>
                  <a href="#fees" className="text-primary-600 hover:text-primary-800">
                    Fees & Scholarships
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-primary-600 hover:text-primary-800">
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
                <h3 className="font-bold text-primary-800">Admission Helpline</h3>
                <p className="text-gray-700 mt-2">
                  Have questions? Contact our admission counselors:
                </p>
                <p className="mt-2">
                  <strong>Phone:</strong> +91 123-456-7890
                </p>
                <p>
                  <strong>Email:</strong> admissions@vkcollege.edu.in
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            <section id="eligibility">
              <EligibilityCriteria />
            </section>

            <section id="process">
              <AdmissionProcess />
            </section>

            <section id="application">
              <ApplicationForm />
            </section>

            <section id="fees">
              <FeeScholarship />
            </section>

            <section id="faq">
              <FAQ />
            </section>

            <section id="support">
              <LiveSupport />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admissions 