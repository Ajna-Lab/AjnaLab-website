import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiDownload,
  FiBookOpen,
  FiFileText,
  FiFilter,
} from 'react-icons/fi'

const resources = [
  {
    id: 1,
    type: 'Case Study',
    title: 'How a Leading Hospital Improved Efficiency by 40%',
    description:
      'Learn how Ajna hOS helped a major hospital streamline its operations, reduce patient wait times, and improve overall care quality.',
    slug: 'case-study-hospital-efficiency',
    imageUrl:
      'https://images.unsplash.com/photo-1551884831-bbf3b4334434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvc3BpdGFsJTIwY29ycmlkb3J8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 2,
    type: 'Whitepaper',
    title: 'The ROI of Modern Clinic Software',
    description:
      'An in-depth analysis showcasing the financial and operational benefits of upgrading your clinic management system.',
    slug: 'whitepaper-roi-clinic-software',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 3,
    type: 'Guide',
    title: 'The Complete Guide to Hospital Digitalization',
    description:
      'A step-by-step PDF guide for administrators on planning and executing a successful digital transformation.',
    slug: 'guide-hospital-digitalization',
    imageUrl:
      'https://images.unsplash.com/photo-1584820927498-f38a2821a649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3BpdGFsJTIwYWRtaW5pc3RyYXRpb258ZW58MHx8MHx8fDA%3D',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
}

const ResourceCard = ({ resource }) => {
  const typeStyles = {
    'Case Study': {
      icon: FiBookOpen,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    Whitepaper: { icon: FiFileText, color: 'text-blue-600', bg: 'bg-blue-100' },
    Guide: { icon: FiDownload, color: 'text-green-600', bg: 'bg-green-100' },
  }

  const {
    icon: Icon,
    color,
    bg,
  } = typeStyles[resource.type] || {
    icon: FiFileText,
    color: 'text-gray-600',
    bg: 'bg-gray-100',
  }

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group border border-transparent hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
    >
      <div className="overflow-hidden">
        <img
          src={resource.imageUrl}
          alt={resource.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div
          className={`inline-flex items-center ${bg} ${color} text-xs font-semibold px-2.5 py-1 rounded-full mb-3 self-start`}
        >
          <Icon className="mr-1.5" />
          {resource.type}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex-grow">
          <Link
            to={`/resources/${resource.slug}`}
            className="hover:text-indigo-600 transition-colors"
          >
            {resource.title}
          </Link>
        </h3>
        <p className="text-gray-600 line-clamp-3 mb-4">
          {resource.description}
        </p>
        <Link
          to={`/resources/${resource.slug}`}
          className="mt-auto font-semibold text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center self-start"
        >
          {resource.type === 'Guide' ? 'Download Now' : 'Read More'}{' '}
          <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </motion.div>
  )
}

const ResourcesPage = () => {
  const [filter, setFilter] = useState('All')

  const filteredResources =
    filter === 'All' ? resources : resources.filter(r => r.type === filter)

  const filters = ['All', 'Case Study', 'Whitepaper', 'Guide']

  return (
    <div className="bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="w-full lg:w-[60%] mx-auto py-16 px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 leading-tight"
          >
            Resource Center
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Explore our collection of case studies, whitepapers, and guides to
            gain insights into the future of healthcare technology.
          </motion.p>
        </div>
      </header>

      <main className="py-20">
        <div className="w-full lg:w-[60%] mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="flex items-center bg-white rounded-full shadow-md p-1.5">
              <FiFilter className="text-slate-400 mx-3" />
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                    filter === f
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default ResourcesPage
