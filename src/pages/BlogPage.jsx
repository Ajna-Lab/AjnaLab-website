import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiDownload,
  FiUser,
  FiClock,
  FiChevronLeft,
  FiChevronRight,
  FiBookOpen,
} from 'react-icons/fi'

import { blogPosts } from '../data/blogData'

const guidesAndWhitepapers = [
  {
    id: 1,
    title: 'The Complete Guide to Hospital Digitalization',
    description:
      'A step-by-step PDF guide for administrators on planning and executing a successful digital transformation.',
    slug: 'guide-hospital-digitalization',
  },
  {
    id: 2,
    title: 'Whitepaper: Analyzing the ROI of Modern Clinic Software',
    description:
      'An in-depth analysis showcasing the financial and operational benefits of upgrading your clinic management system.',
    slug: 'whitepaper-roi-clinic-software',
  },
]

const caseStudies = [
  {
    id: 1,
    title: 'Case Study: How a Leading Hospital Improved Efficiency by 40%',
    description:
      'Learn how Ajna hOS helped a major hospital streamline its operations, reduce patient wait times, and improve overall care quality.',
    slug: 'case-study-hospital-efficiency',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
}

const BlogCard = ({ post }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-2xl shadow-lg overflow-hidden group border border-transparent hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
  >
    <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </Link>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        <Link
          to={`/blog/${post.slug}`}
          className="hover:text-indigo-600 transition-colors"
        >
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
        {post.description}
      </p>
      <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
        <FiUser className="mr-2 text-indigo-500" /> {post.author}
        <span className="mx-2">|</span>
        <FiClock className="mr-2 text-indigo-500" /> {post.readTime}
      </div>
      <div className="mt-6">
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group-hover:text-indigo-700"
        >
          Read Full Post{' '}
          <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </motion.div>
)

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="mt-20 flex justify-center">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            <FiChevronLeft />
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 leading-tight border ${
                currentPage === number
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-100'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            <FiChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  )
}

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="py-24 sm:py-32 bg-gray-50 ">
      <header className="bg-white">
        <div className="w-full lg:w-[70%] mx-auto py-16 px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            Our Insights Hub
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Explore our latest articles, guides, and research on the future of
            technology and healthcare management.
          </motion.p>
        </div>
      </header>

      <main className="py-20">
        <div className="w-full lg:w-[70%] mx-auto px-4">
          <section id="blog">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {currentPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </motion.div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={blogPosts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </section>
        </div>
      </main>
    </div>
  )
}

export default BlogPage