import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import Caeerimg from '../assets/career.png'
import { Link } from 'react-router-dom'
import { values, perks, openings } from '../data/careerData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      type: 'spring',
      stiffness: 120,
    },
  }),
}

const AnimatedTitle = ({ text, className }) => {
  const words = text.split(' ')
  let i = 0
  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-3 whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              custom={i++}
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  )
}

const HeroSection = () => (
  <section className="relative bg-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
    <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a7f3d0] to-[#38bdf8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    <div className="w-full lg:w-[65%] mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-base text-[#1e88e5] font-semibold uppercase tracking-wider mb-4">
            Join Our Team
          </h2>
          <AnimatedTitle
            text="Innovate. Grow. Lead."
            className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter mb-6"
          />
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
            We are a team of relentless innovators and fast learners. If you
            have a passion for solving complex problems and a desire to grow,
            let's build the future together.
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              href="#currentOpenings"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-lg bg-[#1e88e5] px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#1e88e5] transition-all"
            >
              View Open Positions <FiArrowRight className="ml-2" />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-teal-200 to-sky-200 opacity-60 blur-2xl"></div>
          <img
            src={Caeerimg}
            alt="A collaborative team working in a modern office"
            className="relative "
          />
        </motion.div>
      </div>
    </div>
  </section>
)

const themeClasses = {
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
  sky: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200' },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
  },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200' },
}

const ValueCard = ({ icon: Icon, title, text, theme }) => {
  const { bg, text: textColor, border } = themeClasses[theme]
  return (
    <motion.div
      variants={itemVariants}
      className={`p-8 rounded-2xl border ${border} ${bg} h-full`}
    >
      <div
        className={`w-14 h-14 rounded-xl ${textColor} bg-white flex items-center justify-center mb-6 shadow-sm`}
      >
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </motion.div>
  )
}

const ValuesSection = () => (
  <section className="py-24 sm:py-32 bg-slate-50">
    <div className="w-full lg:w-[65%] mx-auto px-6">
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
          The Values That Drive Us
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-600 leading-relaxed"
        >
          Our core values guide our actions, decisions, and culture every single
          day.
        </motion.p>
      </motion.div>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {values.map(value => (
          <ValueCard key={value.title} {...value} />
        ))}
      </motion.div>
    </div>
  </section>
)

const PerksAndBenefits = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(perks)[0])

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="w-full lg:w-[65%] mx-auto px-6">
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
            Perks & Benefits
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 leading-relaxed"
          >
            We invest in our team's well-being and professional growth with a
            comprehensive benefits package.
          </motion.p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <ul className="space-y-2">
              {Object.keys(perks).map(tab => (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className="w-full text-left p-4 rounded-lg font-semibold text-lg relative transition-colors"
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-teal-50 rounded-lg z-0"
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors ${
                        activeTab === tab
                          ? 'text-[#1e88e5]'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {tab}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 gap-8"
              >
                {perks[activeTab].map(perk => (
                  <div
                    key={perk.title}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-200/80"
                  >
                    <div className="text-[#1e88e5] mb-4">
                      <perk.icon size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {perk.text}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

const OpeningsSection = () => (
  <section id="currentOpenings" className="py-24 sm:py-32 bg-slate-50">
    <div className="w-full lg:w-[65%] mx-auto px-6">
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
          Current Openings
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-600 leading-relaxed"
        >
          Think you're a good fit? We'd love to hear from you. Apply now and
          let's create something amazing.
        </motion.p>
      </motion.div>
      <div className="max-w-4xl mx-auto space-y-4">
        {openings.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
          >
            <Link to={`/career/${job.id}`} className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between transition-all duration-300 group-hover:shadow-lg group-hover:border-[#1e88e5] group-hover:-translate-y-1">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1e88e5] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-slate-500 mt-2">
                    <span>{job.location}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="flex items-center text-[#1e88e5] font-semibold transition-transform duration-300 group-hover:translate-x-1">
                  Apply Now <FiArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const CareersPage = () => {
  return (
    <main className="bg-white">
      <HeroSection />
      <ValuesSection />
      <PerksAndBenefits />
      <OpeningsSection />
    </main>
  )
}

export default CareersPage
