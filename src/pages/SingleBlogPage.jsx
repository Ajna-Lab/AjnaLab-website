import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiUser,
  FiClock,
  FiCalendar,
  FiChevronsRight,
  FiSearch,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
} from 'react-icons/fi'
import { blogPosts } from '../data/blogData'
import PageNotFound from './PageNotFound'

const ArticleHeader = ({ post }) => (
  <header className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${post.imageUrl})` }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
    <motion.div
      className="relative z-10 max-w-4xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 shadow-text">
        {post.title}
      </h1>
      <div className="flex items-center justify-center space-x-6 text-lg text-gray-200">
        <span className="flex items-center">
          <FiUser className="mr-2" /> {post.author}
        </span>
        <span className="flex items-center">
          <FiClock className="mr-2" /> {post.readTime}
        </span>
      </div>
    </motion.div>
  </header>
)

const ArticleBody = ({ content }) => (
  <div
    className="prose prose-lg max-w-none prose-indigo prose-img:rounded-xl prose-img:shadow-lg prose-a:text-indigo-600 hover:prose-a:text-indigo-800"
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

const AuthorBio = ({ post }) => (
  <div className="bg-white rounded-2xl p-8 mt-16 flex items-center space-x-6 shadow-lg">
    <img
      src="https://randomuser.me/api/portraits/men/32.jpg"
      alt={post.author}
      className="w-24 h-24 rounded-full object-cover"
    />
    <div>
      <h4 className="text-xl font-bold text-gray-900">About The Author</h4>
      <p className="text-gray-600 mt-2">
        {post.author} is a leading expert in digital health transformation with
        over a decade of experience in the field.
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-gray-500 hover:text-indigo-600">
          <FiTwitter />
        </a>
        <a href="#" className="text-gray-500 hover:text-indigo-600">
          <FiLinkedin />
        </a>
      </div>
    </div>
  </div>
)

const CommentForm = () => (
  <div className="bg-white rounded-2xl p-8 mt-16 shadow-lg">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Leave a Comment</h3>
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name *"
          className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
        <input
          type="email"
          placeholder="Your Email *"
          className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>
      <textarea
        placeholder="Your Comment *"
        rows="6"
        className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      ></textarea>
      <button
        type="submit"
        className="font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 inline-flex items-center px-8 py-3 rounded-full shadow-lg transform hover:scale-105"
      >
        Post Comment
      </button>
    </form>
  </div>
)

const Sidebar = () => (
  <aside className="space-y-8">
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h4 className="text-xl font-bold text-gray-900 mb-4">Search</h4>
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
        />
        <FiSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h4 className="text-xl font-bold text-gray-900 mb-4">Categories</h4>
      <ul className="space-y-2">
        {['Digital Health', 'HMS', 'Clinic Software', 'Telemedicine'].map(
          cat => (
            <li key={cat}>
              <Link
                to="#"
                className="flex justify-between items-center text-gray-600 hover:text-indigo-600"
              >
                <span>{cat}</span> <FiChevronsRight />
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  </aside>
)

const SingleBlogPage = () => {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return <PageNotFound />
  }

  return (
    <div className="bg-gray-50">
      <ArticleHeader post={post} />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <main className="lg:col-span-2">
            <ArticleBody content={post.content || "<p>Content not available.</p>"} />
            <AuthorBio post={post} />
            <CommentForm />
          </main>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default SingleBlogPage