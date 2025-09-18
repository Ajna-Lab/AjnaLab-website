import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiDownload, FiBookOpen } from 'react-icons/fi'
import { resourcesData } from '../data/whitepaperData'

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

const WhitePaperPage = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <div className="relative bg-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a7f3d0] to-[#38bdf8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-[65%] mx-auto px-6 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center bg-teal-50 text-[#1e88e5] rounded-full p-2 mb-4"
          >
            <FiBookOpen className="w-6 h-6" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter"
          >
            Expert Guides & Whitepapers
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg max-w-2xl mx-auto text-slate-600 leading-relaxed"
          >
            Access our library of in-depth resources, research, and guides
            designed to help you navigate the complexities of healthcare
            technology.
          </motion.p>
        </motion.div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="w-full lg:w-[65%] mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {resourcesData.map(resource => (
              <motion.div
                key={resource.id}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-lg p-8 group flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-sm font-semibold text-[#1e88e5] mb-2">
                  {resource.type}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex-grow">
                  {resource.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {resource.description}
                </p>
                <div className="mt-auto">
                  <Link to={`/download/${resource.slug}`}>
                    <motion.button
                      className="bg-[#1e88e5] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#1e88e5] transition-all inline-flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiDownload className="mr-2" /> Download PDF
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-20 sm:py-24">
        <div className="w-full lg:w-[65%] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tighter">
              Have a specific question?
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-slate-600">
              Our experts are here to help. Get in touch to discuss your
              specific challenges and how we can assist.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <motion.button
                  className="bg-[#1e88e5] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#1e88e5] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact an Expert
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default WhitePaperPage
