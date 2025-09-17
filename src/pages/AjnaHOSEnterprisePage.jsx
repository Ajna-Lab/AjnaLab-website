import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowRight,
  FiShield,
  FiTrendingUp,
  FiCheckSquare,
  FiGitMerge,
  FiCheckCircle,
  FiChevronDown,
} from 'react-icons/fi'

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
const corePillars = [
  {
    icon: FiShield,
    title: 'Enterprise-Grade Security',
    description:
      'End-to-end encryption, multi-factor authentication, granular RBAC, and comprehensive audit logs to protect sensitive data.',
  },
  {
    icon: FiTrendingUp,
    title: 'Massive Scalability',
    description:
      'Engineered to perform from a 500-bed hospital to a nationwide chain, with flexible cloud, on-premise, or hybrid deployment.',
  },
  {
    icon: FiCheckSquare,
    title: 'Compliance First',
    description:
      'Built with a compliance-first architecture to align with HIPAA, GDPR, HL7, and FHIR standards from the ground up.',
  },
  {
    icon: FiGitMerge,
    title: 'Radical Interoperability',
    description:
      'API-first design allows seamless integration with labs, insurance providers, government systems, and third-party applications.',
  },
]

const benefits = [
  {
    title: 'Achieve Unprecedented Operational Control',
    description:
      'Ajna hOS Enterprise provides a single source of truth, breaking down silos between clinical, financial, and administrative departments for data-driven decision-making.',
    points: [
      'Gain 360-degree visibility with enterprise-wide analytics.',
      'Optimize revenue cycles and supply chain management.',
      'Streamline workforce management, from rostering to payroll.',
    ],
    image:
      'https://images.unsplash.com/photo-1516542076529-1ea0855399f2?q=80&w=1471',
  },
  {
    title: 'Build a Future-Ready Healthcare Ecosystem',
    description:
      "Our platform is not just a system of record; it's a foundation for innovation. Leverage built-in AI capabilities and a flexible architecture to adapt to the future of healthcare.",
    points: [
      'Utilize predictive analytics to improve patient flow and outcomes.',
      'Ready for integration with IoT, telehealth, and AI diagnostic tools.',
      'Manage multi-branch hospital networks under one unified command center.',
    ],
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484',
  },
]

const comparisonData = [
  {
    feature: 'Compliance',
    traditional: 'Limited or as a paid add-on',
    ajna: 'HIPAA, GDPR, HL7, FHIR built-in',
  },
  {
    feature: 'Scalability',
    traditional: 'Department-focused, limited',
    ajna: 'Enterprise, multi-branch, national scale',
  },
  {
    feature: 'Interoperability',
    traditional: 'Siloed, difficult to integrate',
    ajna: 'API-first, multi-system integration',
  },
  {
    feature: 'Analytics',
    traditional: 'Basic, retrospective reports',
    ajna: 'Predictive, AI-driven, real-time insights',
  },
  {
    feature: 'Deployment',
    traditional: 'Primarily on-premise',
    ajna: 'Cloud, on-premise, hybrid, multi-tenant',
  },
  {
    feature: 'Security',
    traditional: 'Standard, often requires patching',
    ajna: 'Enterprise-grade, OWASP-compliant',
  },
]

const faqData = [
  {
    question: 'How does Ajna hOS handle data migration from our legacy system?',
    answer:
      "We have a dedicated data migration team that works closely with your IT department. Our process involves a thorough data mapping, validation, and a phased rollout to ensure a seamless and secure transition with minimal disruption to your hospital's operations.",
  },
  {
    question:
      'What level of customization is possible for our specific workflows?',
    answer:
      'Ajna hOS Enterprise is highly modular and configurable. While our core system is built on best practices, we understand that every hospital is unique. Our implementation specialists will work with you to configure modules and workflows to match your specific operational needs.',
  },
  {
    question:
      'What are the security and compliance certifications of the platform?',
    answer:
      'Security is at the core of our architecture. The platform is designed to be HIPAA and GDPR compliant and supports standards like HL7 and FHIR for interoperability. Our cloud infrastructure follows ISO 27001 practices for information security management.',
  },
  {
    question: 'How does the system scale for a multi-branch hospital network?',
    answer:
      'The Enterprise Edition is built on a multi-tenant architecture, allowing you to manage multiple hospitals or clinics from a single, centralized platform. This provides unified analytics and control while allowing for branch-specific configurations and data segregation.',
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
const AjnaHOSEnterprisePage = () => {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <section className="relative bg-slate-900 text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-700/10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
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
                className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-300 ring-1 ring-inset ring-blue-400/20 mb-4"
              >
                Ajna hOS: Enterprise Edition
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter"
              >
                The Operating System for Enterprise Healthcare
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg max-w-xl mx-auto lg:mx-0 text-slate-300 leading-8"
              >
                A powerful, secure, and scalable platform that integrates
                clinical, financial, and administrative workflows to manage
                complexity and drive outcomes at scale.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-10 flex justify-center lg:justify-start gap-4"
              >
                <a
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1"
                >
                  Request a Demo <FiArrowRight className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img
                src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1470"
                alt="Ajna hOS Enterprise dashboard on a modern display"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
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
              Engineered for the Enterprise
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Ajna hOS Enterprise is built on four pillars of trust, ensuring
              your institution can operate with confidence and clarity.
            </motion.p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {corePillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80"
              >
                <div className="bg-white text-blue-600 rounded-lg w-14 h-14 flex items-center justify-center mb-6 shadow-sm">
                  <pillar.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {pillar.description}
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
                      <FiCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
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
              The Enterprise Advantage
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed"
            >
              See how Ajna hOS Enterprise moves beyond the limitations of
              traditional hospital management systems.
            </motion.p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <div className="min-w-full bg-slate-50/80 rounded-2xl border border-slate-200/60 p-2">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="p-4 text-left text-sm font-semibold text-slate-900">
                      Feature
                    </th>
                    <th className="p-4 text-left text-sm font-semibold text-slate-500">
                      Traditional HMS
                    </th>
                    <th className="p-4 text-left text-sm font-semibold text-slate-900">
                      Ajna hOS Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t border-slate-200">
                      <td className="p-4 font-medium text-slate-700">
                        {row.feature}
                      </td>
                      <td className="p-4 text-slate-500">{row.traditional}</td>
                      <td className="p-4 font-semibold text-blue-600 flex items-center">
                        <FiCheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                        {row.ajna}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW FAQ Section */}
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Your questions, answered. Here is what enterprise leaders often
              ask about our platform.
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
              Ready for a Strategic Healthcare Backbone?
            </h2>
            <p className="mt-6 text-lg max-w-2xl mx-auto text-slate-300">
              Ajna hOS Enterprise is more than a software—it's a partnership.
              Let's discuss how we can build the future of your institution,
              together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/book-a-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1"
              >
                Request a Demo
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-slate-700/80 px-6 py-3 text-base font-semibold text-white hover:bg-slate-700 transition-colors"
              >
                Talk to an Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AjnaHOSEnterprisePage
