import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiSend,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from 'react-icons/fi'

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phoneNumber: '',
  })
  const [submissionStatus, setSubmissionStatus] = useState(null)

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmissionStatus('sending')
    await new Promise(resolve => setTimeout(resolve, 2000))
    if (Math.random() > 0.2) {
      setSubmissionStatus('success')
      setTimeout(() => setSubmissionStatus(null), 5000)
      setFormData({ name: '', email: '', message: '', phoneNumber: '' })
    } else {
      setSubmissionStatus('error')
      setTimeout(() => setSubmissionStatus(null), 5000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 },
    },
  }

  return (
    <div className="bg-slate-50 text-slate-800 font-sans pt-30 md:pt-20">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-50 via-white to-amber-50 -z-10" />

      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/60 backdrop-blur-lg border-b border-slate-200/80 md:h-[35vh] h-[20vh] flex items-center"
        >
          <div className="w-full lg:w-[60%] mx-auto px-6 text-center justify-center">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-teal-900 tracking-tighter"
            >
              Let's Connect
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-5 text-lg md:text-xl max-w-3xl mx-auto text-slate-600"
            >
              Have a question or a project in mind? Drop us a line. We'd love to
              hear from you.
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="py-24">
          <div className="w-full lg:w-[60%] mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid lg:grid-cols-2 gap-16 items-stretch"
            >
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="flex flex-col">
                <div className="p-8 flex-grow">
                  <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest">
                    Contact
                  </h2>
                  <h3 className="text-4xl font-bold text-teal-800 mt-2">
                    Get In Touch ✋
                  </h3>
                  <p className="text-slate-600 mt-4">
                    Let’s discuss your project. Our team is ready to help you
                    bring your ideas to life.
                  </p>

                  <div className="mt-8 space-y-5 text-base text-slate-600 border-t border-slate-200 pt-8">
                    <p className="flex text-2xl font-semibold items-center">
                      <FiMail
                        className="mr-4 text-xl text-teal-500 flex-shrink-0"
                        size={20}
                      />{' '}
                      info@ajnalab.com
                    </p>
                    <p className="flex text-2xl font-semibold items-center">
                      <FiPhone
                        className="mr-4 text-xl text-teal-500 flex-shrink-0"
                        size={20}
                      />{' '}
                      +977 980-1912821
                    </p>
                    <p className="flex text-2xl font-semibold items-start">
                      <FiMapPin
                        className="mr-4 text-xl mt-1 text-teal-500 flex-shrink-0"
                        size={20}
                      />
                      Old Baneshwor Road, <br />
                      Kathmandu 44600
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants} className=" p-8 ">
                <h2 className="text-3xl font-bold text-teal-800 mb-8">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="peer w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base placeholder-transparent transition-colors duration-300"
                      placeholder="Full Name"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 -top-3 text-sm text-slate-600 bg-white/0 px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-teal-600 peer-focus:bg-white/0 backdrop-blur-sm rounded-md"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base placeholder-transparent transition-colors duration-300"
                      placeholder="you@example.com"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 -top-3 text-sm text-slate-600 bg-white/0 px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-teal-600 peer-focus:bg-white/0 backdrop-blur-sm rounded-md"
                    >
                      Your Email
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="peer w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base placeholder-transparent transition-colors duration-300"
                      placeholder="Phone Number"
                      required
                    />
                    <label
                      htmlFor="phoneNumber"
                      className="absolute left-4 -top-3 text-sm text-slate-600 bg-white/0 px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-teal-600 peer-focus:bg-white/0 backdrop-blur-sm rounded-md"
                    >
                      Phone Number
                    </label>
                  </div>
                  <div className="relative group">
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="peer w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base placeholder-transparent transition-colors duration-300"
                      placeholder="Your message..."
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-4 -top-3 text-sm text-slate-600 bg-white/0 px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-teal-600 peer-focus:bg-white/0 backdrop-blur-sm rounded-md"
                    >
                      Your Message
                    </label>
                  </div>

                  <AnimatePresence>
                    {submissionStatus && submissionStatus !== 'sending' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`p-4 rounded-lg text-center font-medium text-sm ${
                          submissionStatus === 'success'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {submissionStatus === 'success' && (
                          <p className="flex items-center justify-center">
                            <FiCheckCircle className="mr-2" /> Message sent!
                            We'll get back to you soon.
                          </p>
                        )}
                        {submissionStatus === 'error' && (
                          <p className="flex items-center justify-center">
                            <FiAlertCircle className="mr-2" /> An error
                            occurred. Please try again.
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      boxShadow: '0px 12px 24px rgba(20, 184, 166, 0.2)',
                    }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    disabled={submissionStatus === 'sending'}
                    className="w-full bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 flex items-center justify-center text-lg disabled:bg-teal-400 disabled:cursor-wait"
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={
                          submissionStatus === 'sending' ? 'sending' : 'default'
                        }
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center"
                      >
                        {submissionStatus === 'sending' ? (
                          <>
                            <FiLoader className="animate-spin mr-3" />{' '}
                            Sending...
                          </>
                        ) : (
                          <>
                            <FiSend className="mr-3" /> Send Message
                          </>
                        )}
                      </motion.span>
                    </AnimatePresence>
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Map Section - Now Full Width */}
        <motion.div
          variants={itemVariants}
          className="w-full h-[50vh]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507.6755557058428!2d85.34374398385701!3d27.699484701487446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44d6fb68ef64c3d7%3A0xdf8d870ce024a2f4!2sAjna%20Lab!5e0!3m2!1sen!2snp!4v1757920620793!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location of AjnaLab"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactUsPage
