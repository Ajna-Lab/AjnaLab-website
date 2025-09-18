import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiCheckCircle, FiArrowRight } from 'react-icons/fi'

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

const benefits = [
  'A personalized walkthrough tailored to your specific needs.',
  'See how Ajna hOS can solve your biggest operational challenges.',
  'Get all your questions answered by a product expert.',
]

const BookDemoPage = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex items-center justify-center p-6">
      <div className="w-full lg:w-[65%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-white p-8 md:p-12 rounded-2xl shadow-2xl shadow-slate-200/80">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter"
            >
              See Ajna hOS in Action
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg text-slate-600 leading-relaxed"
            >
              Discover how our platform can unify your operations, enhance
              patient care, and provide the clarity you need to lead. In this
              personalized demo, you'll get:
            </motion.p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <FiCheckCircle className="text-indigo-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              variants={itemVariants}
              className="mt-12 border-t border-slate-200 pt-8"
            >
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Trusted by Leading Healthcare Providers
              </p>
              <div className="flex items-center gap-6 mt-4 text-slate-300">
                <p className="font-bold text-2xl">ClientLogo</p>
                <p className="font-bold text-2xl">AnotherCo</p>
                <p className="font-bold text-2xl">Health Inc.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thankyou"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <FiCheckCircle className="mx-auto text-7xl text-green-500 mb-6" />
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">
                    Thank You!
                  </h2>
                  <p className="text-lg text-slate-600">
                    Your demo request has been submitted. Our team will be in
                    touch shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-slate-900 mb-2 lg:hidden">
                    Request a Demo
                  </h2>
                  <p className="text-slate-600 mb-8 lg:hidden">
                    Fill out the form below to get started.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField
                        id="fullName"
                        label="Full Name"
                        type="text"
                        required
                      />
                      <InputField
                        id="workEmail"
                        label="Work Email"
                        type="email"
                        required
                      />
                    </div>
                    <InputField
                      id="organization"
                      label="Organization Name"
                      type="text"
                      required
                    />

                    <div className="relative">
                      <select
                        id="solution"
                        className="peer w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base placeholder-transparent transition-colors duration-300 bg-transparent"
                        required
                      >
                        <option value="" disabled selected></option>
                        <option value="palika-care">Palika Care</option>
                        <option value="clinic-standalone">
                          Clinic Standalone
                        </option>
                        <option value="clinic-care">Clinic Care</option>
                        <option value="hos-standard">Ajna hOS Standard</option>
                        <option value="hos-enterprise">
                          Ajna hOS Enterprise
                        </option>
                      </select>
                      <label
                        htmlFor="solution"
                        className="absolute left-4 -top-3 text-sm text-slate-600 bg-white px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-indigo-600"
                      >
                        Solution of Interest
                      </label>
                    </div>

                    <InputField id="phone" label="Phone Number" type="tel" />

                    <div className="relative">
                      <textarea
                        id="questions"
                        rows="3"
                        className="peer w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base placeholder-transparent transition-colors duration-300"
                        placeholder="Any specific questions?"
                      ></textarea>
                      <label
                        htmlFor="questions"
                        className="absolute left-4 -top-3 text-sm text-slate-600 bg-white px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-indigo-600"
                      >
                        Any specific questions? (Optional)
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        boxShadow: '0px 12px 24px rgba(79, 70, 229, 0.2)',
                      }}
                      whileTap={{ scale: 0.98, y: 0 }}
                      className="w-full bg-indigo-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center text-lg"
                    >
                      <FiSend className="inline mr-3" />
                      Submit Request
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

const InputField = ({ id, label, type, required = false }) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      className="peer w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base placeholder-transparent transition-colors duration-300"
      placeholder={label}
      required={required}
    />
    <label
      htmlFor={id}
      className="absolute left-4 -top-3 text-sm text-slate-600 bg-white px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-indigo-600"
    >
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  </div>
)

export default BookDemoPage
