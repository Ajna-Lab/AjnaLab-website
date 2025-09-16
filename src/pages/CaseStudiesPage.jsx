import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiTrendingUp,
  FiClock,
  FiUsers,
  FiArrowRight,
  FiAward,
} from 'react-icons/fi'

const caseStudiesData = [
  {
    id: 1,
    client: 'City General Hospital',
    logoUrl: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg', // Placeholder logo
    title: 'How City General Hospital Reduced Patient Wait Times by 30%',
    description:
      'Discover how the implementation of Ajna hOS Standard streamlined their outpatient department, leading to significant improvements in patient flow and satisfaction.',
    metrics: [
      { value: '30%', label: 'Reduction in Wait Times' },
      { value: '25%', label: 'Increase in Daily Appointments' },
      { value: '15%', label: 'Boost in Staff Productivity' },
    ],
    slug: 'case-study-city-general-hospital',
  },
  {
    id: 2,
    client: 'HealWell Polyclinic',
    logoUrl: 'https://tailwindui.com/img/logos/reform-logo-gray-400.svg', // Placeholder logo
    title: 'Streamlining Multi-Specialty Operations with Clinic Care',
    description:
      'HealWell Polyclinic leveraged Clinic Care to unify their multi-specialty services, resulting in better inter-departmental coordination and a seamless patient experience.',
    metrics: [
      { value: '95%', label: 'Unified Patient Records' },
      { value: '50%', label: 'Faster Lab Result Turnaround' },
      { value: '20%', label: 'Higher Patient Retention' },
    ],
    slug: 'case-study-healwell-polyclinic',
  },
  {
    id: 3,
    client: "Dr. Anjali Gurung's Practice",
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-400.svg', // Placeholder logo
    title: 'Empowering a Solo Practice with Clinic Pro for Sustainable Growth',
    description:
      'Learn how Clinic Pro helped a solo practitioner automate administrative tasks, reduce paperwork, and dedicate more time to patient care, leading to practice growth.',
    metrics: [
      { value: '10 hrs/week', label: 'Time Saved on Admin' },
      { value: '40%', label: 'Reduction in No-Shows' },
      { value: '100%', label: 'Digital Patient Records' },
    ],
    slug: 'case-study-dr-anjali-gurung',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
}

const CaseStudiesPage = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <div className="relative bg-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#818cf8] to-[#c084fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-[60%] mx-auto px-6 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center bg-indigo-50 text-indigo-700 rounded-full p-2 mb-4"
          >
            <FiAward className="w-6 h-6" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter"
          >
            Our Success Stories
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg max-w-2xl mx-auto text-slate-600 leading-relaxed"
          >
            See how leading healthcare providers have transformed their
            operations and improved patient care with Ajna Lab's solutions.
          </motion.p>
        </motion.div>
      </div>

      {/* Case Studies Grid */}
      <div className="py-24 sm:py-32">
        <div className="w-full lg:w-[60%] mx-auto px-6">
          <motion.div
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {caseStudiesData.map(study => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={study.logoUrl}
                      alt={`${study.client} logo`}
                      className="h-10 w-auto"
                    />
                    <span className="text-lg font-semibold text-slate-800">
                      {study.client}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {study.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    {study.metrics.map((metric, index) => (
                      <div key={index}>
                        <p className="text-3xl font-extrabold text-indigo-600">
                          {metric.value}
                        </p>
                        <p className="text-sm text-slate-500">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      to={`/case-study/${study.slug}`}
                      className="font-semibold text-indigo-600 hover:text-indigo-800 inline-flex items-center group"
                    >
                      Read Full Study
                      <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20 sm:py-24">
        <div className="w-full lg:w-[60%] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tighter">
              Ready to write your own success story?
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-slate-600">
              Let's discuss how Ajna Lab can help you achieve your operational
              and clinical goals.
            </p>
            <div className="mt-8">
              <Link to="/book-a-demo">
                <motion.button
                  className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesPage
