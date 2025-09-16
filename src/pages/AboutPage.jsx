import React, { useState, useEffect, useRef } from 'react'
import {
  motion,
  useInView,
  animate,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion'
import {
  FiTarget,
  FiHeart,
  FiSend,
  FiCpu,
  FiShield,
  FiAward,
  FiUsers,
  FiGlobe,
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
const stats = [
  { value: 2018, label: 'Founded', suffix: '' },
  { value: 50, label: 'Happy Clients', suffix: '+' },
  { value: 15, label: 'Team Experts', suffix: '+' },
  { value: 200, label: 'Projects Completed', suffix: 'K+' },
]

const history = [
  {
    year: '2018',
    title: 'Ajna Lab is Founded',
    description:
      'A team of co-founders with deep expertise in EMR and HMIS development established Ajna Lab, inspired by the Ajna chakra—the third eye of intuition. Recognizing a critical need for integrated and intelligent systems, their mission was to apply technology for meaningful impact across Health, Agriculture, and Technology (HAT), setting the stage for a journey to bring clarity and insight to complex industries.',
    imageUrl:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1470',
  },
  {
    year: '2020',
    title: 'Launch of Ajna hOS',
    description:
      'Ajna Lab unveiled its flagship product: Ajna hOS. This was not just another Hospital Management System, but a true Healthcare Operating System designed to address the fragmented workflows and data silos common in healthcare. The launch marked a major milestone, offering institutions a single, intuitive platform to manage everything from patient records to administrative tasks.',
    imageUrl:
      'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1470',
  },
  {
    year: '2022',
    title: 'First Enterprise Partnership',
    description:
      "Ajna hOS's capabilities were put to the ultimate test in a strategic partnership with a major national hospital. This collaboration involved deploying our system in a high-volume, high-stakes environment. The successful implementation proved the scalability and robustness of our platform and solidified our position as a trusted partner for large-scale healthcare institutions.",
    imageUrl:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470',
  },
  {
    year: '2025',
    title: 'Expanding Our Vision',
    description:
      'Building on our success, today Ajna Lab is focused on the future of interconnected healthcare. We are expanding our vision beyond individual hospitals to empower entire healthcare networks, integrating AI and predictive analytics to shape a new generation of digital health solutions and build a healthier future for the entire region.',
    imageUrl:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484',
  },
]

const values = [
  {
    icon: FiCpu,
    title: 'Innovation with Purpose',
    description:
      'We create solutions that are technologically advanced, practical, impactful, and future-ready.',
  },
  {
    icon: FiShield,
    title: 'Integrity & Trust',
    description:
      'We operate with transparency and honesty, building relationships based on trust with our partners and clients.',
  },
  {
    icon: FiAward,
    title: 'Excellence in Delivery',
    description:
      'We are committed to the highest standards of quality, ensuring our products are reliable and exceed expectations.',
  },
  {
    icon: FiUsers,
    title: 'Collaboration & Growth',
    description:
      'We foster a collaborative environment where ideas flourish and invest in the growth of our team and partners.',
  },
  {
    icon: FiGlobe,
    title: 'Sustainability & Impact',
    description:
      'We aim to create long-term value and positive social impact, ensuring our solutions are beneficial for the long run.',
  },
  {
    icon: FiHeart,
    title: 'Human-Centered Design',
    description:
      'We place people at the heart of our technology, designing intuitive solutions that genuinely improve lives.',
  },
]

const team = [
  { name: 'Dr. Ram Sharma', role: 'Chief Medical Officer' },
  { name: 'Sita Rai', role: 'Head of Product' },
  { name: 'Anjali Gurung', role: 'Lead Software Architect' },
  { name: 'Bikash Thapa', role: 'Head of Operations' },
]

const clients = [
  'City Hospital',
  'Community Clinic',
  'National Hospital',
  'District Hospital',
  'Medical College',
  'Polyclinic',
  'Specialty Clinic',
  'Rural Health Center',
]

// --- REUSABLE COMPONENTS ---
const Section = ({ children, className = '' }) => (
  <motion.section
    className={`py-24 sm:py-32 ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    <div className="w-full lg:w-[60%] mx-auto px-6">{children}</div>
  </motion.section>
)

const AnimatedStat = ({ value, label, suffix }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      animate(0, value, {
        duration: 2,
        onUpdate: latest => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toLocaleString()
          }
        },
      })
    }
  }, [isInView, value])

  return (
    <div className="text-center">
      <span className="text-5xl md:text-6xl font-extrabold text-indigo-600">
        <span ref={ref}>0</span>
        {suffix}
      </span>
      <p className="mt-2 text-base text-slate-500 font-medium">{label}</p>
    </div>
  )
}

const InputField = ({ id, label, type, required }) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      required={required}
      className="peer w-full p-3 bg-transparent rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-transparent transition"
      placeholder={label}
    />
    <label
      htmlFor={id}
      className="absolute left-3 -top-2.5 text-xs px-1 bg-white text-slate-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-indigo-600"
    >
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  </div>
)

// --- MAIN PAGE COMPONENT ---
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(history[0].year)
  const activeHistoryItem = history.find(item => item.year === activeTab)

  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])

  return (
    <div className="bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d8b4fe] to-[#818cf8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="container md:w-[60%] mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="text-center lg:text-left">
              <motion.span
                variants={itemVariants}
                className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4"
              >
                About Ajna Lab
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter"
              >
                Pioneering Digital Health
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-slate-600 leading-8"
              >
                We're building the future of healthcare with intelligent,
                human-centered technology that empowers providers and improves
                lives.
              </motion.p>
            </div>
            <motion.div variants={itemVariants}>
              <img
                src="https://www.vidyard.com/wp-content/themes/vidyard-website/img/pages/company/about-us/main-image.png.webp"
                alt="Healthcare professionals collaborating in a modern setting"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story & Mission Section */}
      <Section className="bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tighter mb-6">
              Built for Go-to-Market Teams, Powered by Intuition
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Founded in 2018, Ajna Lab was born from a mission to transform
              patient care through technology. We believe in the power of
              digital tools to foster human connections and empower healthcare
              professionals to deliver trusted and productive patient
              experiences.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We’re committed to helping our partners grow by unleashing the
              potential of our Healthcare Operating System, Ajna hOS.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white p-6 rounded-lg border border-slate-200/80">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Our Vision
              </h3>
              <p className="text-slate-600">
                To be a global leader in Health, Agriculture, and Technology
                (HAT) innovation, creating intelligent, human-centered digital
                ecosystems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200/80">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Our Mission
              </h3>
              <p className="text-slate-600">
                To build scalable healthcare solutions that strengthen patient
                care, empower doctors, and modernize hospitals.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(stat => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </Section>

      {/* History / Timeline Section */}
      <Section className="bg-slate-50">
        <motion.h5
          variants={itemVariants}
          className="text-xl font-semibold text-indigo-600 px-3 py-1 mb-4 text-center"
        >
          Our History
        </motion.h5>
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter text-center"
        >
          The Story of Ajna Lab
        </motion.h2>
        <motion.p
          className="text-center text-sm text-slate-600 leading-relaxed my-4 w-[60%] mx-auto"
          variants={itemVariants}
        >
          After identifying a critical need for integrated healthcare technology
          in Nepal, our founders launched Ajna Lab in 2018. The company's
          innovative approach led to the creation of Ajna hOS, a powerful
          Healthcare Operating System that has since become a cornerstone of our
          offerings.
        </motion.p>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ul className="space-y-2">
              {history.map(item => (
                <li key={item.year}>
                  <button
                    onClick={() => setActiveTab(item.year)}
                    className="w-full text-left p-4 rounded-lg relative transition-colors duration-300"
                  >
                    {activeTab === item.year && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-y-0 left-0 w-2"
                      >
                        <div className="w-full h-full bg-[#3B82F6] -skew-x-12" />
                      </motion.div>
                    )}
                    <div className="relative z-10">
                      <p
                        className={`font-bold text-lg ${
                          activeTab === item.year
                            ? 'text-[#3B82F6]'
                            : 'text-slate-800'
                        }`}
                      >
                        {item.year}
                      </p>
                      <p
                        className={`text-sm ${
                          activeTab === item.year
                            ? 'text-slate-600'
                            : 'text-slate-500'
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="lg:col-span-2 min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeHistoryItem && (
                <motion.div
                  key={activeHistoryItem.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="flex flex-col items-center"
                >
                  <div>
                    <img
                      src={activeHistoryItem.imageUrl}
                      alt={activeHistoryItem.title}
                      className="w-full h-64 object-fill rounded-xl shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e88e5] my-4 gap-4">
                      {activeHistoryItem.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {activeHistoryItem.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>

      {/* NEW Values Section */}
      <Section>
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-extrabold text-[#1e88e5] tracking-tighter text-center mb-4"
        >
          Our Core Values
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-600 text-center leading-relaxed max-w-3xl mx-auto mb-16"
        >
          These core principles are the compass guiding our actions, decisions,
          and culture. They are the foundation of our commitment to excellence
          and impact.
        </motion.p>
        <div ref={scrollRef} className="h-[300px]  relative ">
          <div className="sticky top-0 flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                  }}
                  className="bg-white p-8 w-[300px] rounded-2xl border border-slate-200/80 shadow-lg border-t-4 border-t-indigo-500"
                >
                  <div className="bg-indigo-50 text-indigo-600 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter text-center mb-16"
        >
          Our Leadership & Consultants
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div key={i} variants={itemVariants} className="text-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-lg text-slate-800">
                {member.name}
              </h3>
              <p className="text-slate-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Clients Section */}
      <Section className="bg-slate-50">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter text-center mb-16"
        >
          Trusted by Healthcare Leaders
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="relative h-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
        >
          <div className="absolute flex animate-scroll">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 h-20 flex items-center justify-center"
              >
                <span className="text-2xl font-semibold text-slate-400">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-slate-900">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">
              Ready to build the future of healthcare?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Let's connect. Whether you have a question or want a personalized
              demo, we're here to help.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="bg-white p-8 rounded-2xl shadow-2xl space-y-5"
          >
            <motion.div variants={itemVariants}>
              <InputField id="name" label="Full Name" type="text" required />
            </motion.div>
            <motion.div variants={itemVariants}>
              <InputField id="email" label="Work Email" type="email" required />
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="relative">
                <textarea
                  id="message"
                  rows="3"
                  required
                  className="peer w-full p-3 bg-transparent rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-transparent transition"
                  placeholder="Your Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-2.5 text-xs px-1 bg-white text-slate-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-indigo-600"
                >
                  Your Message<span className="text-red-500 ml-0.5">*</span>
                </label>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-all flex items-center justify-center"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend className="mr-2" /> Send Message
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      <style jsx global>{`
        @keyframes scroll {
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default AboutPage
