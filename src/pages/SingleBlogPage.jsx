import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiUser,
  FiClock,
  FiCalendar,
  FiArrowRight,
  FiSearch,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
} from 'react-icons/fi'
import { blogPosts } from '../data/blogData'
import PageNotFound from './PageNotFound'

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

// --- SUB COMPONENTS ---
const ArticleHeader = ({ post }) => (
  <header className="relative h-[60vh] min-h-[450px] flex items-end justify-center text-white text-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${post.imageUrl})` }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
    <motion.div
      className="relative z-10 max-w-4xl mx-auto px-6 pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p
        variants={itemVariants}
        className="text-sm font-semibold text-indigo-300 mb-3 uppercase tracking-wider"
      >
        {post.category}
      </motion.p>
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl font-extrabold tracking-tight"
        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
      >
        {post.title}
      </motion.h1>
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 mt-6 text-base text-slate-200"
      >
        <span className="flex items-center">
          <FiUser className="mr-2" /> {post.author}
        </span>
        <span className="flex items-center">
          <FiCalendar className="mr-2" /> {post.date}
        </span>
        <span className="flex items-center">
          <FiClock className="mr-2" /> {post.readTime}
        </span>
      </motion.div>
    </motion.div>
  </header>
)

const ArticleBody = ({ content }) => (
  <div
    className="prose prose-lg max-w-none text-slate-600 prose-headings:text-slate-900 prose-headings:font-bold prose-img:rounded-xl prose-img:shadow-lg prose-a:text-indigo-600 hover:prose-a:text-indigo-800"
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

const AuthorBio = ({ post }) => (
  <div className="bg-slate-100/80 rounded-2xl p-8 mt-16 flex flex-col sm:flex-row items-center gap-6">
    <img
      src="https://randomuser.me/api/portraits/men/32.jpg"
      alt={post.author}
      className="w-24 h-24 rounded-full object-cover flex-shrink-0"
    />
    <div>
      <p className="text-sm font-semibold text-slate-500">WRITTEN BY</p>
      <h4 className="text-xl font-bold text-slate-900 mt-1">{post.author}</h4>
      <p className="text-slate-600 mt-2">
        A leading expert in digital health transformation with over a decade of
        experience in the field.
      </p>
    </div>
  </div>
)

const SocialShare = () => (
  <div className="mt-12 pt-8 border-t border-slate-200">
    <h4 className="text-lg font-semibold text-slate-800 mb-4 text-center">
      Share this Article
    </h4>
    <div className="flex justify-center space-x-4">
      <a
        href="#"
        className="p-3 bg-slate-100 rounded-full text-slate-500 hover:bg-indigo-600 hover:text-white transition-colors"
      >
        <FiTwitter />
      </a>
      <a
        href="#"
        className="p-3 bg-slate-100 rounded-full text-slate-500 hover:bg-indigo-600 hover:text-white transition-colors"
      >
        <FiFacebook />
      </a>
      <a
        href="#"
        className="p-3 bg-slate-100 rounded-full text-slate-500 hover:bg-indigo-600 hover:text-white transition-colors"
      >
        <FiLinkedin />
      </a>
    </div>
  </div>
)

const CommentForm = () => (
  <div className="bg-white p-8 mt-16">
    <h3 className="text-2xl font-bold text-slate-900 mb-6">Leave a Comment</h3>
    <form className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField id="name" label="Your Name" type="text" required />
        <InputField id="email" label="Your Email" type="email" required />
      </div>
      <div className="relative">
        <textarea
          id="comment"
          rows="5"
          required
          className="peer w-full p-3 bg-transparent rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-transparent transition"
          placeholder="Your Comment"
        ></textarea>
        <label
          htmlFor="comment"
          className="absolute left-3 -top-2.5 text-xs px-1 bg-white text-slate-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-indigo-600"
        >
          Your Comment*
        </label>
      </div>
      <motion.button
        type="submit"
        className="font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 inline-flex items-center px-8 py-3 rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Post Comment
      </motion.button>
    </form>
  </div>
)

const InputField = ({ id, label, type, required }) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      required={required}
      className="peer w-full p-3 bg-slate-50/80 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-transparent transition"
      placeholder={label}
    />
    <label
      htmlFor={id}
      className="absolute left-3 -top-2.5 text-xs px-1 bg-white text-slate-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-indigo-600"
    >
      {label}
      {required ? '*' : ''}
    </label>
  </div>
)

const Sidebar = () => {
  const recentPosts = blogPosts.slice(0, 3)
  const categories = [...new Set(blogPosts.map(p => p.category))]

  return (
    <aside className="space-y-8 sticky top-28">
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200/80">
        <h4 className="text-xl font-bold text-slate-900 mb-4">Search</h4>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full p-3 pr-10 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 bg-slate-50/80"
          />
          <FiSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400" />
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200/80">
        <h4 className="text-xl font-bold text-slate-900 mb-4">Categories</h4>
        <ul className="space-y-3">
          {categories.map(cat => (
            <li key={cat}>
              <Link
                to="#"
                className="text-slate-600 hover:text-indigo-600 hover:font-semibold transition-all flex justify-between items-center group"
              >
                <span>{cat}</span>
                <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200/80">
        <h4 className="text-xl font-bold text-slate-900 mb-4">Recent Posts</h4>
        <ul className="space-y-4">
          {recentPosts.map(post => (
            <li key={post.id}>
              <Link to={`/blog/${post.slug}`} className="group">
                <p className="font-semibold text-slate-800 group-hover:text-indigo-600 line-clamp-2">
                  {post.title}
                </p>
                <p className="text-sm text-slate-500 mt-1">{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

const SingleBlogPage = () => {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    const placeholderPost = {
      ...blogPosts[0],
      content: `
            <p class="lead">This is a placeholder for the article content. In a real application, this HTML would come from a CMS or a database.</p>
            <p>Digital transformation in healthcare is not just about adopting new technology; it's a fundamental shift in how healthcare is delivered and managed. It involves leveraging digital tools to improve patient outcomes, enhance operational efficiency, and create a more connected healthcare ecosystem. From electronic health records (EHRs) to telemedicine and AI-powered diagnostics, the landscape is rapidly evolving.</p>
            <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1587" alt="Doctor with tablet"/>
            <h2>The Core Pillars of Digital Health</h2>
            <p>There are several key components that form the backbone of a successful digital health strategy. These include:</p>
            <ul>
                <li><strong>Electronic Medical Records (EMR):</strong> Centralizing patient data to provide a single source of truth for clinicians.</li>
                <li><strong>Telehealth and Virtual Care:</strong> Expanding access to care beyond the physical walls of a clinic or hospital.</li>
                <li><strong>Data Analytics:</strong> Using big data to identify trends, predict outbreaks, and optimize resource allocation.</li>
                <li><strong>Patient Engagement Tools:</strong> Empowering patients to take a more active role in their own health through portals and mobile apps.</li>
            </ul>
            <p>By embracing these technologies, healthcare institutions can not only improve the quality of care but also create a more sustainable and resilient health system for the future. The journey is complex, but the potential rewards are immense.</p>
        `,
    }
    return <PageNotFound />
  }

  const postWithContent = {
    ...post,
    content: post.content || placeholderPost.content,
  }

  return (
    <div className="bg-slate-50">
      <ArticleHeader post={postWithContent} />
      <div className="py-16 sm:py-24">
        <motion.div
          className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.main
            variants={itemVariants}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-200/80"
          >
            <ArticleBody content={postWithContent.content} />
            <SocialShare />
            <AuthorBio post={postWithContent} />
            <CommentForm />
          </motion.main>
          <motion.div variants={itemVariants}>
            <Sidebar />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default SingleBlogPage
