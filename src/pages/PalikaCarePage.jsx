import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowRight,
  FiUsers,
  FiBarChart2,
  FiDatabase,
  FiShield,
  FiHeart,
  FiCheckCircle,
  FiChevronDown,
} from 'react-icons/fi'
import PalikaCareMockup from '../assets/palika-care-mockup.png'
import CommunityImage from '../assets/community-health.png'
import DataDashboardImage from '../assets/data-dashboard.png'

// --- ANIMATION VARIANTS ---
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

// --- DATA ---
const features = [
  {
    icon: FiDatabase,
    title: 'Community Health Records',
    description:
      'A secure, centralized digital health record system accessible across all local facilities.',
  },
  {
    icon: FiHeart,
    title: 'Primary & Public Health',
    description:
      'Manage vaccination, maternal health, chronic diseases, and OPD care seamlessly.',
  },
  {
    icon: FiBarChart2,
    title: 'Data & Analytics',
    description:
      'Access real-time health dashboards for data-driven decisions and policy-making.',
  },
  {
    icon: FiUsers,
    title: 'Integrated Local Network',
    description:
      'Connect community clinics, health posts, and municipal hospitals on one unified platform.',
  },
  {
    icon: FiShield,
    title: 'Secure & Compliant',
    description:
      'Built with role-based access and aligned with global digital health standards for data privacy.',
  },
]

const stats = [
  { number: '2M+', label: 'Citizens Covered' },
  { number: '50+', label: 'Municipalities Powered' },
  { number: '30%', label: 'Reduction in Paperwork' },
  { number: '100%', label: 'Data-Driven Reporting' },
]

const benefits = [
  {
    title: 'Empower Municipalities & Local Governments',
    description:
      'Palika Care provides the tools to simplify healthcare administration, optimize resource allocation, and deliver efficient, citizen-focused care with full transparency.',
    points: [
      'Digitize and streamline all health governance tasks.',
      'Gain real-time insights into community health trends.',
      'Improve budget allocation with accurate data.',
    ],
    image: CommunityImage,
  },
  {
    title: 'Enhance Community & Public Health',
    description:
      'By connecting health facilities and digitizing records, the platform expands access to quality healthcare in rural and underserved areas, ensuring no one is left behind.',
    points: [
      'Ensure continuity of care with shared digital records.',
      'Monitor public health programs like vaccination drives.',
      'Build a strong foundation for a national digital health ecosystem.',
    ],
    image: DataDashboardImage,
  },
]

const faqData = [
  {
    question: 'How does Palika Care improve citizen health outcomes?',
    answer:
      'By creating a unified digital health record, Palika Care ensures continuity of care across all local health posts. This leads to better diagnoses, reduced errors, and allows for proactive public health interventions based on real-time data.',
  },
  {
    question: 'Is the system difficult for non-technical staff to use?',
    answer:
      'No. Palika Care is designed with a simple, intuitive interface. We prioritize user-friendliness to ensure that healthcare workers, regardless of their technical skill level, can adopt and use the system efficiently with minimal training.',
  },
  {
    question: 'What kind of data and reports can the municipality access?',
    answer:
      'Municipal leaders can access a secure dashboard with real-time data on disease prevalence, vaccination coverage, maternal health metrics, and more. These insights are crucial for effective policy-making and resource allocation.',
  },
  {
    question: 'How is the data secured and who owns it?',
    answer:
      'Data security is our top priority. The platform uses end-to-end encryption and strict role-based access controls. The municipality and the respective health authorities retain full ownership of their data.',
  },
]

// --- REUSABLE FAQ COMPONENT ---
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div variants={itemVariants} className="border-b border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <span className="text-lg font-semibold text-slate-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="w-5 h-5 text-slate-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-10 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// --- MAIN PAGE COMPONENT ---
const PalikaCarePage = () => {
  return (
    <div className="bg-white text-slate-800 font-sans">
      <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a7f3d0] to-[#38bdf8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="w-full lg:w-[60%] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.span
                variants={itemVariants}
                className="inline-block rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700 ring-1 ring-inset ring-teal-600/10 mb-4"
              >
                Digital Public Health Solution
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter"
              >
                Digital Healthcare for Every Municipality
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg max-w-xl mx-auto lg:mx-0 text-slate-600 leading-8"
              >
                Palika Care is a complete healthcare management system that
                enables local governments to deliver accessible, efficient, and
                data-driven healthcare for their citizens.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-10 flex justify-center lg:justify-start gap-4"
              >
                <a
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-teal-700 transition-all hover:-translate-y-1"
                >
                  Request a Demo <FiArrowRight className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              animate={{ y: [-5, 5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            >
              <img
                src={PalikaCareMockup}
                alt="Palika Care dashboard on a tablet"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="w-full lg:w-[60%] mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter mb-4"
            >
              A Complete Platform for Public Health
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Palika Care integrates every aspect of municipal healthcare into
              one powerful, easy-to-use system.
            </motion.p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:border-teal-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-teal-50 text-teal-600 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white">
        <div className="w-full lg:w-[60%] mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter mb-4"
            >
              Impact by the Numbers
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Our platform is already making a tangible difference in
              communities across the nation.
            </motion.p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200/60 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <p className="text-4xl md:text-5xl font-extrabold text-teal-600">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm md:text-base text-slate-500 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="w-full lg:w-[60%] mx-auto px-6 space-y-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={` ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                <motion.h3
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tighter mb-6"
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600 leading-relaxed mb-6"
                >
                  {benefit.description}
                </motion.p>
                <ul className="space-y-3">
                  {benefit.points.map((point, pIndex) => (
                    <motion.li
                      key={pIndex}
                      variants={itemVariants}
                      className="flex items-start"
                    >
                      <FiCheckCircle className="text-teal-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                variants={itemVariants}
                className={` ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW FAQ Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="w-full lg:w-[60%] mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Have questions? We've got answers. If your question isn't listed
              here, feel free to contact us directly.
            </motion.p>
          </motion.div>
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="w-full lg:w-[60%] mx-auto px-6 py-20 sm:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              Transform Your Municipality's Healthcare
            </h2>
            <p className="mt-6 text-lg max-w-2xl mx-auto text-slate-300">
              Palika Care is the trusted solution for local governments. Let's
              build a healthier future for your community, together.
            </p>
            <div className="mt-10">
              <a
                href="/book-a-demo"
                className="inline-flex items-center rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-teal-700 transition-all hover:-translate-y-1"
              >
                Request a Demo <FiArrowRight className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PalikaCarePage
