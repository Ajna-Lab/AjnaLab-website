import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMapPin,
  FiClock,
  FiBriefcase,
  FiArrowLeft,
  FiUpload,
  FiSend,
  FiPaperclip,
  FiX,
  FiLoader,
  FiCheckCircle,
  FiAlertTriangle,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const job = {
  title: 'Senior Engineering Manager',
  location: 'Kathmandu, Nepal',
  type: 'Full-time',
  department: 'Engineering',
  description:
    'We are at the forefront of revolutionizing healthcare technology in Nepal. We are seeking an experienced and visionary Senior Engineering Manager to lead our dynamic engineering team. This role is critical in driving the technical strategy, execution, and delivery of our cutting-edge EMR and HMIS products.',
  responsibilities: [
    'Lead, manage, and mentor a high-performing team of software engineers.',
    'Oversee the end-to-end software development lifecycle.',
    'Collaborate with product leadership to define the technical roadmap.',
    'Drive architectural decisions, ensuring our systems are scalable and secure.',
    'Champion best practices in software engineering, including agile and CI/CD.',
    'Manage project timelines, resources, and stakeholder communication.',
  ],
  qualifications: [
    'Bachelor’s or Master’s degree in Computer Science, Engineering, or a related field.',
    '8+ years of hands-on software development experience.',
    '3+ years in an engineering leadership role (Manager, Team Lead).',
    'Deep understanding of modern web architectures, cloud, and databases.',
    'Excellent leadership, communication, and interpersonal skills.',
    'Experience in the HealthTech industry is a significant plus.',
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
}

const InputField = ({ id, label, type, value, onChange, error, required }) => (
  <div>
    <div className="relative">
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`peer w-full p-3 bg-transparent rounded-lg border ${
          error ? 'border-red-500' : 'border-slate-300'
        } focus:ring-2 ${
          error ? 'focus:ring-red-500' : 'focus:ring-teal-500'
        } focus:border-transparent text-base placeholder-transparent transition-colors`}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 -top-2.5 text-xs px-1 transition-all bg-white peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs ${
          error ? 'text-red-600' : 'text-slate-600 peer-focus:text-teal-600'
        }`}
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
    </div>
    {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
  </div>
)

const FileInput = ({ file, setFile, error }) => {
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = e => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }
  const handleDrag = (e, isOver) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(isOver)
  }
  const handleDrop = e => {
    handleDrag(e, false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Resume/CV<span className="text-red-500 ml-0.5">*</span>
      </label>
      {file ? (
        <div className="flex items-center justify-between p-3 bg-slate-100 border border-slate-300 rounded-lg">
          <div className="flex items-center text-sm text-slate-700">
            <FiPaperclip className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">{file.name}</span>
          </div>
          <button
            type="button"
            onClick={() => setFile(null)}
            className="p-1 rounded-full hover:bg-slate-200"
          >
            <FiX className="w-4 h-4 text-slate-500" />
          </button>
        </div>
      ) : (
        <div
          onDragEnter={e => handleDrag(e, true)}
          onDragLeave={e => handleDrag(e, false)}
          onDragOver={e => handleDrag(e, true)}
          onDrop={handleDrop}
          className={`mt-1 flex justify-center p-6 border-2 ${
            error ? 'border-red-400' : 'border-slate-300'
          } border-dashed rounded-lg transition-colors ${
            isDragging ? 'bg-teal-50 border-teal-400' : ''
          }`}
        >
          <div className="space-y-1 text-center">
            <FiUpload className="mx-auto h-10 w-10 text-slate-400" />
            <div className="flex text-sm text-slate-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md font-medium text-teal-600 hover:text-teal-700"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-slate-500">PDF, DOC, DOCX up to 10MB</p>
          </div>
        </div>
      )}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  )
}

const SingleCareerPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [file, setFile] = useState(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: null }))
    }
  }

  const handleFileChange = selectedFile => {
    setFile(selectedFile)
    if (errors.file) {
      setErrors(prev => ({ ...prev, file: null }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.'
    if (!file) newErrors.file = 'Resume/CV is required.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    await new Promise(resolve => setTimeout(resolve, 2000))

    if (Math.random() > 0.2) {
      setStatus('success')
    } else {
      setStatus('error')
    }
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '' })
    setFile(null)
    setErrors({})
    setStatus('idle')
  }

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <div className="relative bg-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a7f3d0] to-[#38bdf8] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="w-full lg:w-[65%] mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link
                to="/careers"
                className="inline-flex items-center text-[#1e88e5]/80 hover:text-[#1e88e5] transition-colors mb-6 group font-semibold"
              >
                <FiArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
                Back to all openings
              </Link>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter mb-4"
            >
              {job.title}
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600"
            >
              <div className="flex items-center">
                <FiBriefcase className="mr-2 text-[#1e88e5]" /> {job.department}
              </div>
              <div className="flex items-center">
                <FiMapPin className="mr-2 text-[#1e88e5]" /> {job.location}
              </div>
              <div className="flex items-center">
                <FiClock className="mr-2 text-[#1e88e5]" /> {job.type}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-[65%] mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-teal-600 hover:prose-a:text-teal-800 prose-li:marker:text-teal-500">
              <p className="lead text-xl !mb-10">{job.description}</p>
              <h2 className="!text-2xl !mb-4">Key Responsibilities</h2>
              <ul>
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h2 className="!text-2xl !mt-10 !mb-4">Qualifications</h2>
              <ul>
                {job.qualifications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-200/80 sticky top-24">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8"
                  >
                    <FiCheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Application Sent!
                    </h3>
                    <p className="text-slate-600 mt-2">
                      Thank you. We've received your application and will be in
                      touch shortly.
                    </p>
                    <button
                      onClick={resetForm}
                      className="mt-6 text-sm font-semibold text-teal-600 hover:underline"
                    >
                      Apply for another role
                    </button>
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8"
                  >
                    <FiAlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Submission Failed
                    </h3>
                    <p className="text-slate-600 mt-2">
                      Sorry, something went wrong. Please check your connection
                      and try again.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-sm font-semibold text-teal-600 hover:underline"
                    >
                      Try Again
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" exit={{ opacity: 0 }}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      Apply for this role
                    </h3>
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      noValidate
                    >
                      <InputField
                        id="name"
                        label="Full Name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        required
                      />
                      <InputField
                        id="email"
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                      />
                      <InputField
                        id="phone"
                        label="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        required
                      />
                      <FileInput
                        file={file}
                        setFile={handleFileChange}
                        error={errors.file}
                      />
                      <motion.button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-[#1e88e5]/90 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#1e88e5] transition-all duration-300 flex items-center justify-center disabled:bg-[#1e88e5]/40 disabled:cursor-not-allowed"
                        whileHover={{
                          scale: status !== 'submitting' ? 1.03 : 1,
                          y: status !== 'submitting' ? -2 : 0,
                        }}
                        whileTap={{ scale: status !== 'submitting' ? 0.98 : 1 }}
                      >
                        {status === 'submitting' ? (
                          <>
                            <FiLoader className="mr-2 animate-spin" />{' '}
                            Submitting...
                          </>
                        ) : (
                          <>
                            <FiSend className="mr-2" /> Submit Application
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default SingleCareerPage
