import React, { useState, useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiBookOpen,
  FiBriefcase,
  FiHome,
  FiUsers,
  FiMessageSquare,
  FiTrendingUp,
} from 'react-icons/fi'
import Logos from '../../../assets/logo.png'

const navItemsData = [
  { to: '/', label: 'Home', type: 'link' },
  { to: '/about', label: 'About Us', type: 'link' },
  {
    label: 'Solutions',
    type: 'mega',
    subItems: [
      {
        to: '/palika-care',
        label: 'Palika Care',
        icon: FiHome,
        description: 'For municipal-level healthcare.',
      },
      {
        to: '/clinic-pro',
        label: 'Clinic Pro',
        icon: FiUsers,
        description: 'For solo doctors & small clinics.',
      },
      {
        to: '/clinic-care',
        label: 'Clinic Care',
        icon: FiBriefcase,
        description: 'For busy, high-tech polyclinics.',
      },
      {
        to: '/ajna-hos-standard',
        label: 'Ajna hOS Standard',
        icon: FiTrendingUp,
        description: 'Comprehensive hospital solution.',
      },
      {
        to: '/ajna-hos-enterprise',
        label: 'Ajna hOS Enterprise',
        icon: FiTrendingUp,
        description: 'For large-scale hospital networks.',
      },
    ],
  },
  {
    label: 'Resources',
    type: 'mega',
    subItems: [
      {
        to: '/blog',
        label: 'Blog / Insights',
        icon: FiBookOpen,
        description: 'Latest news and industry analysis.',
      },
      {
        to: '/case-studies',
        label: 'Case Studies',
        icon: FiBriefcase,
        description: 'See our solutions in action.',
      },
      {
        to: '/whitepapers',
        label: 'Whitepapers',
        icon: FiMessageSquare,
        description: 'In-depth research and reports.',
      },
    ],
  },
  { to: '/careers', label: 'Careers', type: 'link' },
  { to: '/contact', label: 'Contact Us', type: 'link' },
]

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null)
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(location.pathname)

  useEffect(() => {
    setActiveTab(location.pathname)
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenMobileDropdown(null)
  }

  const MegaMenu = ({ subItems }) => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="absolute left-1/2 -translate-x-1/2 mt-4 w-[36rem] bg-white shadow-2xl rounded-lg border border-slate-200/80 p-6"
    >
      <motion.ul
        className="grid grid-cols-2 gap-x-8 gap-y-6"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        initial="hidden"
        animate="visible"
      >
        {subItems.map(subItem => (
          <motion.li
            key={subItem.label}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <RouterLink
              to={subItem.to}
              className="group flex items-start gap-4 p-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="bg-indigo-50 text-indigo-600 rounded-md p-2 mt-1">
                <subItem.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 group-hover:text-indigo-600">
                  {subItem.label}
                </p>
                <p className="text-sm text-slate-500">{subItem.description}</p>
              </div>
            </RouterLink>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-in-out pt-4">
        <div
          className={`transition-all duration-500 ease-in-out ${
            isScrolled
              ? 'w-full rounded-none bg-white/80 backdrop-blur-lg shadow-md'
              : 'w-11/12 lg:w-[70%] rounded-full bg-white/60 backdrop-blur-xl shadow-lg'
          }`}
        >
          <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
            <RouterLink to="/" className="flex-shrink-0">
              <img src={Logos} className="h-12 w-auto" alt="Ajna Lab Logo" />
            </RouterLink>

            <ul className="hidden lg:flex items-center space-x-8">
              {navItemsData.map(item => (
                <li key={item.label}>
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setHoveredItem(item.label)
                      if (item.type === 'link') setActiveTab(item.to)
                    }}
                    onMouseLeave={() => {
                      setHoveredItem(null)
                      setActiveTab(location.pathname)
                    }}
                  >
                    {item.type === 'link' ? (
                      <RouterLink
                        to={item.to}
                        className="block relative text-slate-700 hover:text-indigo-600 transition-colors py-2"
                      >
                        <span
                          className={
                            location.pathname === item.to
                              ? 'font-semibold text-indigo-600'
                              : ''
                          }
                        >
                          {item.label}
                        </span>
                        {activeTab === item.to && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600"
                            layoutId="underline"
                          />
                        )}
                      </RouterLink>
                    ) : (
                      <button className="flex items-center text-slate-700 hover:text-indigo-600 transition-colors py-2">
                        {item.label}
                        <FiChevronDown
                          className={`ml-1 transition-transform duration-300 ${
                            hoveredItem === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}

                    <AnimatePresence>
                      {item.type === 'mega' && hoveredItem === item.label && (
                        <MegaMenu subItems={item.subItems} />
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center">
              <RouterLink to="/book-a-demo">
                <motion.button
                  className="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-indigo-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Demo
                </motion.button>
              </RouterLink>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 p-2"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 pt-20"
          >
            <ul className="px-6 py-4">
              {navItemsData.map(item => (
                <li key={item.label} className="py-2 border-b border-slate-100">
                  {item.type === 'link' ? (
                    <RouterLink
                      to={item.to}
                      className="block text-slate-700 hover:text-indigo-600 py-2"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </RouterLink>
                  ) : (
                    <div>
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(
                            openMobileDropdown === item.label
                              ? null
                              : item.label
                          )
                        }
                        className="w-full flex justify-between items-center text-slate-700 py-2"
                      >
                        <span>{item.label}</span>
                        <FiChevronDown
                          className={`transition-transform ${
                            openMobileDropdown === item.label
                              ? 'rotate-180'
                              : ''
                          }`}
                        />
                      </button>
                      {openMobileDropdown === item.label && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {item.subItems.map(subItem => (
                            <li key={subItem.label}>
                              <RouterLink
                                to={subItem.to}
                                className="block text-slate-600 hover:text-indigo-600"
                                onClick={closeMobileMenu}
                              >
                                {subItem.label}
                              </RouterLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
              <li className="mt-6">
                <RouterLink
                  to="/book-a-demo"
                  className="block text-center w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-all"
                  onClick={closeMobileMenu}
                >
                  Book a Demo
                </RouterLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
