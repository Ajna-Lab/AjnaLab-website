import React from 'react'
import { motion } from 'framer-motion'
import { FiTarget, FiHeart, FiCheckCircle, FiSend } from 'react-icons/fi'
import {
  FaHeartbeat,
  FaClinicMedical,
  FaHospital,
  FaUserMd,
  FaStethoscope,
} from 'react-icons/fa'
import AboutHeroImage from '../assets/about-hero.jpg'

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
const principles = [
  {
    icon: FaHeartbeat,
    title: 'Our Vision',
    description:
      'To be a global leader in Health, Agriculture, and Technology (HAT) innovation, creating intelligent, human-centered digital ecosystems that improve lives.',
  },
  {
    icon: FiTarget,
    title: 'Our Mission',
    description:
      'To build scalable healthcare solutions that strengthen patient care, empower doctors, and modernize hospitals, unlocking growth in the healthcare sector.',
  },
]

const solutions = [
  {
    icon: FaClinicMedical,
    title: 'Palika Care',
    description: 'Strengthening municipal-level healthcare.',
  },
  {
    icon: FaUserMd,
    title: 'Clinic Pro',
    description: 'For small clinics & solo practitioners.',
  },
  {
    icon: FaStethoscope,
    title: 'Clinic Care',
    description: 'For busy, high-tech polyclinics.',
  },
  {
    icon: FaHospital,
    title: 'Ajna hOS Standard',
    description: 'Comprehensive hospital solution.',
  },
  {
    icon: FaHeartbeat,
    title: 'Ajna hOS Enterprise',
    description: 'Advanced insights for healthcare networks.',
  },
]

const values = [
  {
    title: 'Innovation with Purpose',
    description:
      'We create solutions that are technologically advanced, practical, impactful, and future-ready.',
  },
  {
    title: 'Integrity & Trust',
    description:
      'We operate with transparency and honesty, building relationships based on trust with our partners and clients.',
  },
  {
    title: 'Excellence in Delivery',
    description:
      'We are committed to the highest standards of quality, ensuring our products are reliable and exceed expectations.',
  },
  {
    title: 'Collaboration & Growth',
    description:
      'We foster a collaborative environment where ideas flourish and invest in the growth of our team and partners.',
  },
  {
    title: 'Sustainability & Impact',
    description:
      'We aim to create long-term value and positive social impact, ensuring our solutions are beneficial for the long run.',
  },
  {
    title: 'Human-Centered Design',
    description:
      'We place people at the heart of our technology, designing intuitive solutions that genuinely improve lives.',
  },
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
const consultants = [
  'Cardiologist',
  'Neurologist',
  'Pediatrician',
  'Radiologist',
  'Surgeon',
  'General Physician',
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
    <div className="w-full lg:w-[70%] mx-auto px-6">{children}</div>
  </motion.section>
)

const SectionTitle = ({ children }) => (
  <motion.h2
    variants={itemVariants}
    className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter text-center mb-16"
  >
    {children}
  </motion.h2>
)

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
  return (
    <div className="bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d8b4fe] to-[#818cf8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="w-full lg:w-[70%] mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="text-center lg:text-left">
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
                src={AboutHeroImage}
                alt="Healthcare professionals collaborating in a modern setting"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <Section className="bg-slate-50">
        <SectionTitle>Our Journey in Healthcare IT</SectionTitle>
        <motion.div
          variants={itemVariants}
          className="prose prose-xl max-w-4xl mx-auto text-slate-600 text-center"
        >
          <p>
            Founded on April 27, 2018, Ajna Lab Pvt. Ltd. began with a mission
            to use technology for meaningful impact. Our journey into healthcare
            was inspired by the potential to transform patient care and
            streamline hospital operations.
          </p>
          <p>
            With co-founders experienced in EMR and HMIS development, we set out
            to build Ajna hOS, a comprehensive Healthcare Operating System. Our
            goal was to empower clinics, hospitals, and healthcare networks to
            function smarter, more efficiently, and more humanely.
          </p>
          <p>
            Today, Ajna hOS is at the heart of our work, a testament to our
            dedication to innovation in digital health. We are proud to be a
            trusted partner for healthcare providers, helping them to deliver
            better outcomes for their patients.
          </p>
        </motion.div>
      </Section>

      {/* Principles Section */}
      <Section>
        <SectionTitle>Our Guiding Principles</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-lg border-t-4 border-t-indigo-500"
            >
              <div className="text-indigo-500 mb-4">
                <p.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {p.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Solutions Section */}
      <Section className="bg-slate-50">
        <SectionTitle>Our Healthcare Solutions</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white p-8 text-center rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex bg-teal-50 text-teal-600 rounded-lg w-16 h-16 items-center justify-center mb-6">
                <s.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {s.title}
              </h3>
              <p className="text-slate-600">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionTitle>Our Core Values</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-indigo-600">
                {v.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Clients Section */}
      <Section className="bg-slate-50">
        <SectionTitle>Trusted by Healthcare Leaders</SectionTitle>
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

      {/* Team Section */}
      <Section>
        <SectionTitle>Our Expert Consultants</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {consultants.map((c, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white text-center p-6 rounded-2xl border border-slate-200/80 shadow-sm"
            >
              <p className="font-semibold text-slate-700">{c}</p>
            </motion.div>
          ))}
        </div>
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

      {/* Add this style block for the client marquee scrolling animation */}
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
