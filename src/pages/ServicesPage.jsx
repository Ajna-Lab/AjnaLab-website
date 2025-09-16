import React from 'react'
import { motion } from 'framer-motion'
import {
  FiCode,
  FiServer,
  FiSmartphone,
  FiBriefcase,
  FiArrowRight,
  FiClipboard,
  FiThumbsUp,
  FiTrendingUp,
  FiTarget,
} from 'react-icons/fi'

// Data for the services and process steps
const services = [
  {
    icon: FiCode,
    title: 'Custom Software Development',
    description:
      'We build bespoke software solutions tailored to your unique business needs, from enterprise applications to specialized tools that drive efficiency.',
  },
  {
    icon: FiServer,
    title: 'Healthcare Technology Systems',
    description:
      'Our expertise in healthcare IT allows us to develop and implement robust systems like EMR, HMIS, and our flagship Ajna hOS platform.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Application Development',
    description:
      'We create intuitive and powerful mobile apps for both iOS and Android, extending your reach to users on the go with seamless experiences.',
  },
  {
    icon: FiBriefcase,
    title: 'Strategic IT Consultation',
    description:
      'Leverage our industry knowledge and technical expertise to guide your digital transformation strategy and solve your most complex challenges.',
  },
]

const processSteps = [
  {
    icon: FiTarget,
    title: 'Discovery & Strategy',
    description:
      'We start by understanding your goals and challenges to define a clear roadmap for success.',
  },
  {
    icon: FiClipboard,
    title: 'Design & Prototyping',
    description:
      'Our team creates intuitive UI/UX designs and functional prototypes to visualize the final product.',
  },
  {
    icon: FiCode,
    title: 'Development & Testing',
    description:
      'We build your solution using agile methodologies and conduct rigorous testing to ensure quality.',
  },
  {
    icon: FiThumbsUp,
    title: 'Deployment & Support',
    description:
      'We handle the launch and provide ongoing support to ensure smooth operation and scalability.',
  },
]

// Animation Variants
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

// Main Component
const ServicesPage = () => {
  return (
    <div className="bg-slate-50 text-slate-700 font-sans">
      {/* Hero Section */}
      <div className="relative bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ffdb] to-[#38bdf8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[60%] mx-auto px-6 text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold leading-6 text-teal-700 ring-1 ring-inset ring-teal-600/10">
              Our Expertise
            </span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="mt-8 text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter"
          >
            Solutions to Elevate Your Business
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-slate-600 leading-8"
          >
            From custom software to strategic consultation, we offer a
            comprehensive suite of services designed to bring your vision to
            life and accelerate your growth.
          </motion.p>
        </motion.div>
      </div>

      {/* Services Grid Section */}
      <div className="py-24 sm:py-32">
        <div className="w-full lg:w-[60%] mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:border-teal-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-teal-50 text-teal-600 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="py-24 sm:py-32 bg-white">
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
              Our Proven Process
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed"
            >
              We follow a structured, collaborative process to ensure we deliver
              high-quality solutions on time and on budget.
            </motion.p>
          </motion.div>
          <div className="relative">
            {/* Dashed line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
              <svg width="100%" height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  strokeWidth="2"
                  strokeDasharray="8"
                  className="stroke-slate-300"
                />
              </svg>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center bg-white z-10 px-4"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-5 ring-8 ring-white">
                    <step.icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-50 py-20 sm:py-24">
        <div className="w-full lg:w-[60%] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tighter">
              Have a project in mind?
            </h2>
            <p className="mt-6 text-lg max-w-2xl mx-auto text-slate-600">
              Let's build something amazing together. Reach out to us to discuss
              your ideas.
            </p>
            <div className="mt-10">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-teal-700 transition-all"
              >
                Get in Touch <FiArrowRight className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
