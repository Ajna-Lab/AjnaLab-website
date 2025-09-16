import React from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiFileText,
  FiCreditCard,
  FiCalendar,
  FiMessageSquare,
  FiBarChart2,
  FiCheckCircle,
  FiUser,
  FiUsers,
  FiHeart,
} from 'react-icons/fi'
// import ClinicProMockup from '../assets/clinic-pro-mockup.png'; // Suggested: Add a product mockup image
// import PatientInteractionImage from '../assets/patient-interaction.jpg'; // Suggested: Add relevant images
// import ClinicGrowthImage from '../assets/clinic-growth.jpg'; // Suggested: Add relevant images

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

// Data
const features = [
  {
    icon: FiFileText,
    title: 'Electronic Medical Records',
    description:
      'Securely manage patient history, lab results, and prescriptions in one place.',
  },
  {
    icon: FiCreditCard,
    title: 'Billing & Invoicing',
    description:
      'Automate invoicing and receipts for faster, more accurate financial management.',
  },
  {
    icon: FiCalendar,
    title: 'Appointment Scheduling',
    description:
      'Use a smart calendar to reduce no-shows and optimize your patient flow.',
  },
  {
    icon: FiMessageSquare,
    title: 'Patient Engagement',
    description:
      'Send automated SMS reminders for appointments, follow-ups, and prescriptions.',
  },
  {
    icon: FiBarChart2,
    title: 'Reports & Analytics',
    description:
      'Gain insights into patient visits, revenue, and overall clinic performance.',
  },
]

const targetAudience = [
  {
    icon: FiUser,
    title: 'Solo Doctors & Practitioners',
    description:
      'Manage your entire practice from a single, intuitive dashboard.',
  },
  {
    icon: FiUsers,
    title: 'Family Clinics',
    description:
      'Keep all your family health records organized and instantly accessible.',
  },
  {
    icon: FiHeart,
    title: 'Small Healthcare Centers',
    description:
      'Deliver professional services without the complexity of large hospital systems.',
  },
]

const benefits = [
  {
    title: 'Save Time and Focus on What Matters: Your Patients',
    description:
      'Clinic Pro automates the tedious administrative tasks that consume your day, freeing you up to provide better care.',
    points: [
      'Automate appointment reminders to reduce no-shows.',
      'Generate bills and receipts in a single click.',
      'Access patient information instantly during consultations.',
    ],
    image: 'PatientInteractionImage',
  },
  {
    title: 'Grow Your Practice with Confidence and Clarity',
    description:
      'Our platform provides the tools and insights you need to run your clinic efficiently and make informed decisions for future growth.',
    points: [
      'Track revenue and performance with simple reports.',
      'Improve patient satisfaction with a modern, digital experience.',
      'Scale your operations seamlessly as your patient base grows.',
    ],
    image: 'ClinicGrowthImage',
  },
]

// Main Component
const ClinicProPage = () => {
  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a5f3fc] to-[#38bdf8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
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
                className="inline-block rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700 ring-1 ring-inset ring-sky-600/10 mb-4"
              >
                Clinic Management, Simplified
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter"
              >
                Focus on Care, Not Paperwork
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg max-w-xl mx-auto lg:mx-0 text-slate-600 leading-8"
              >
                Clinic Pro is an easy-to-use software for solo doctors and small
                clinics. Manage patient records, appointments, and billing
                seamlessly.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-10 flex justify-center lg:justify-start gap-4"
              >
                <a
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-700 transition-all hover:-translate-y-1"
                >
                  Get Started Today <FiArrowRight className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img
                src=""
                alt="Clinic Pro software on a laptop screen"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
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
              Everything You Need to Run Your Clinic
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Clinic Pro brings all your essential tasks into one simple,
              powerful platform.
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
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:border-sky-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-sky-50 text-sky-600 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
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

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-white">
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
                      <FiCheckCircle className="text-sky-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
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

      {/* Who is it for Section */}
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
              Designed For Small, Independent Practices
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed"
            >
              We built Clinic Pro specifically for the needs of small-scale
              healthcare providers.
            </motion.p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white text-center p-8 rounded-2xl border border-slate-200/80 shadow-sm"
              >
                <div className="inline-flex bg-sky-50 text-sky-600 rounded-full w-16 h-16 items-center justify-center mb-6">
                  <audience.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {audience.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Choose the plan that's right for you. No hidden fees, no
              surprises.
            </motion.p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-md mx-auto bg-slate-50/80 p-8 rounded-2xl border border-slate-200/60 shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900">Clinic Pro</h3>
            <p className="text-5xl font-extrabold text-slate-900 my-4">
              $99
              <span className="text-lg font-medium text-slate-500">/month</span>
            </p>
            <p className="text-slate-600 mb-6">
              Billed annually. All features included.
            </p>
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-center">
                <FiCheckCircle className="text-sky-500 w-5 h-5 mr-3" />{' '}
                Unlimited Patients
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-sky-500 w-5 h-5 mr-3" /> All
                Features Included
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-sky-500 w-5 h-5 mr-3" /> Phone &
                Email Support
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-sky-500 w-5 h-5 mr-3" /> Secure
                Cloud Storage
              </li>
            </ul>
            <a
              href="/get-started"
              className="w-full inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-700 transition-all hover:-translate-y-1"
            >
              Start Your Free Trial
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="w-full lg:w-[60%] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tighter">
              Ready to Simplify Your Practice?
            </h2>
            <p className="mt-6 text-lg max-w-2xl mx-auto text-slate-600">
              Join hundreds of doctors who trust Clinic Pro to manage their
              practice. Get started today with a free, no-obligation trial.
            </p>
            <div className="mt-10">
              <a
                href="/get-started"
                className="inline-flex items-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-700 transition-all hover:-translate-y-1"
              >
                Get Started Today <FiArrowRight className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ClinicProPage
