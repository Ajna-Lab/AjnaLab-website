import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  FiArrowRight,
  FiEye,
  FiAward,
  FiCompass,
  FiHeart,
  FiUsers,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiCpu,
  FiLayers,
  FiShield,
} from 'react-icons/fi'
import { Users, Clipboard, Activity, Server, Cpu } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import MainImg from '../assets/homepagedoctor.jpg'
import LogoImg from '../assets/logo.png'
import underline from '../assets/one.png'
import CurveLine from '../assets/curve-blue.png'
import { Link } from 'react-router-dom'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, duration: 0.8 },
  },
}

const valueThemes = [
  {
    icon: FiAward,
    title: 'Proven Expertise',
    text: 'Years of experience building robust EMR, HMIS, and complex enterprise-grade systems for leading institutions.',
    theme: {
      borderColor: 'border-green-500',
      textColor: 'text-green-500',
      bgColor: 'bg-green-50',
    },
  },
  {
    icon: FiCompass,
    title: 'Vision-Driven',
    text: 'Guided by our HAT (Health, Agriculture, Technology) philosophy for sustainable and impactful innovation.',
    theme: {
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
  },
  {
    icon: FiUsers,
    title: 'Trusted Partnerships',
    text: 'We are committed to serving reputed institutions with the utmost integrity, building relationships that last.',
    theme: {
      borderColor: 'border-blue-500',
      textColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
  },
  {
    icon: FiHeart,
    title: 'Human-Centered',
    text: 'Our technology is meticulously designed to empower people and enhance workflows, not to overwhelm them.',
    theme: {
      borderColor: 'border-red-500',
      textColor: 'text-red-500',
      bgColor: 'bg-red-50',
    },
  },
]

const solutions = [
  {
    id: 1,
    title: 'Palika Care',
    description:
      'Empower local governments with data-driven insights, citizen health records, and seamless coordination across health posts.',
    imageUrl:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2940&auto=format&fit=crop',
    Icon: Users,
  },
  {
    id: 2,
    title: 'Clinic Standalone',
    description:
      'An all-in-one tool for solo doctors. Manage appointments, prescriptions, and billing effortlessly to focus on care, not paperwork.',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2940&auto=format&fit=crop',
    Icon: Clipboard,
  },
  {
    id: 3,
    title: 'Clinic Care',
    description:
      'Built for high-tech polyclinics managing multiple doctors and high patient volume. Streamlined workflows keep care efficient and patients satisfied.',
    imageUrl:
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2940&auto=format&fit=crop',
    Icon: Activity,
  },
  {
    id: 4,
    title: 'Ajna hOS Standard',
    description:
      'Bring every hospital department together in one seamless system from OPD to IPD. Features role-based access, secure records, and real-time analytics.',
    imageUrl:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2940&auto=format&fit=crop',
    Icon: Server,
  },
  {
    id: 5,
    title: 'Ajna hOS Enterprise',
    description:
      'For large hospitals and networks, the Enterprise Edition offers advanced integrations, AI-driven insights, and modular expansions for smarter decisions.',
    imageUrl:
      'https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2940&auto=format&fit=crop',
    Icon: Cpu,
  },
]

const values = [
  {
    icon: FiCpu,
    title: 'Innovation with Intuition',
    description:
      'We build forward-thinking technology that is not just powerful, but also intuitive and perfectly aligned with the needs of healthcare professionals.',
  },
  {
    icon: FiLayers,
    title: 'Simplicity with Scale',
    description:
      'Our solutions are designed to be simple and easy to use, yet robust enough to scale with the ambitions of a single clinic or a nationwide hospital network.',
  },
  {
    icon: FiShield,
    title: 'Impact with Integrity',
    description:
      'We are committed to making a real-world impact while operating with complete transparency, ensuring our partners and users can trust us implicitly.',
  },
]

const testimonials = [
  {
    quote:
      "Ajna hOS has completely transformed our hospital's workflow. The efficiency gains are remarkable, and the support team is always responsive and incredibly helpful.",
    author: 'Dr. Ram Sharma',
    title: 'Medical Director, City Hospital',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    quote:
      'The Clinic Care solution is perfect for our polyclinic. It’s intuitive for our staff, powerful in its features, and has significantly reduced our administrative overhead.',
    author: 'Sita Rai',
    title: 'Clinic Manager, HealWell Polyclinic',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    quote:
      'As a solo practitioner, Clinic Pro is a lifesaver. I can finally focus more on my patients and less on paperwork. I would highly recommend it to any small practice.',
    author: 'Dr. Anjali Gurung',
    title: 'General Practitioner',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
]

const clients = [
  {
    name: 'Client 1',
    logo: 'https://dursikshya.com/_next/image?url=%2FEsteemdPartners%2Flogo2.png&w=128&q=75',
  },
  { name: 'Client 2', logo: 'https://ajnalab.com/images/logo.png' },
  {
    name: 'Client 3',
    logo: 'https://presidential.edu.np/file-manager/photos/1/logo.svg',
  },
  { name: 'Client 4', logo: 'https://ajnalab.com/images/logo.png' },
  { name: 'Client 5', logo: 'https://via.placeholder.com/80' },
  { name: 'Client 6', logo: 'https://via.placeholder.com/80' },
  { name: 'Client 7', logo: 'https://via.placeholder.com/80' },
  { name: 'Client 8', logo: 'https://via.placeholder.com/80' },
  { name: 'Client 9', logo: 'https://via.placeholder.com/80' },
]

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
    alt: 'Team meeting with laptops',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    alt: 'Team collaborating around a whiteboard',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    alt: 'People in a conference room',
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
    alt: 'Two colleagues discussing work',
  },
  {
    src: 'https://images.unsplash.com/photo-1587560699334-cc426240169f?w=800',
    alt: 'Celebrating a team success',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    alt: 'Team members looking at a laptop',
  },
]

const ValueCard = ({ number, title, text, theme, icon: Icon }) => (
  <div className="relative w-full max-w-sm mx-auto">
    <div className={`absolute -translate-x-1/2 -top-7 left-1/4 z-40`}>
      <div
        className={`w-15 h-15 rounded-full border-4 flex items-center justify-center text-lg font-semibold ${theme.borderColor} ${theme.bgColor} ${theme.textColor}`}
      >
        {number}
      </div>
    </div>
    <div
      className={`z-20 relative w-full rounded-2xl shadow-md bg-white p-5 border-t-[6px] ${theme.borderColor}`}
    >
      <div className="flex flex-col h-full pt-6 text-left">
        <div className="flex flex-col items-start mb-6 gap-5">
          <div className={`p-4 rounded-full text-gray-700 bg-gray-200 mr-4`}>
            <Icon size={48} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-base text-gray-800 leading-relaxed">{text}</p>
      </div>
    </div>
  </div>
)

const SolutionSection = ({ solution }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section
      ref={ref}
      className="h-screen w-full relative flex items-center justify-start snap-start"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${solution.imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="w-full lg:w-[70%] mx-auto px-8 max-w-7xl relative z-10">
        <motion.div
          className="max-w-3xl text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-7xl md:text-8xl font-bold mb-10 leading-tight"
            style={{
              textShadow: '2px 2px 10px rgba(0,0,0,0.7)',
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
            }}
          >
            {solution.title}
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl mb-12 leading-relaxed text-white/95"
            style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.6)' }}
          >
            {solution.description}
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform transition-all duration-300 hover:shadow-3xl"
            whileHover={{
              scale: 1.1,
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // --- NEW: Refs for auto-scrolling logic ---
  const solutionsContainerRef = useRef(null)
  const isScrolling = useRef(false)
  const currentSolutionIndex = useRef(0)

  // --- NEW: useEffect to handle the scroll logic ---
  useEffect(() => {
    const container = solutionsContainerRef.current
    if (!container) return

    const handleWheel = event => {
      // Prevent default scroll behavior to avoid jitter
      event.preventDefault()

      // If an auto-scroll is already happening, do nothing
      if (isScrolling.current) return

      const scrollDown = event.deltaY > 0
      const scrollUp = event.deltaY < 0

      let nextIndex = currentSolutionIndex.current

      if (scrollDown && currentSolutionIndex.current < solutions.length - 1) {
        nextIndex++
      } else if (scrollUp && currentSolutionIndex.current > 0) {
        nextIndex--
      } else {
        return
      }

      if (nextIndex !== currentSolutionIndex.current) {
        isScrolling.current = true
        currentSolutionIndex.current = nextIndex

        container.scrollTo({
          top: window.innerHeight * nextIndex,
          behavior: 'smooth',
        })
        setTimeout(() => {
          isScrolling.current = false
        }, 1000)
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <>
      <div className="bg-gray-100 text-gray-700 font-inter">
        <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden flex items-center justify-center">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
              backgroundSize: '2rem 2rem',
            }}
          />
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(67,56,202,0.15),transparent_80%)]"></div>

          <div className="w-full lg:w-[70%] mx-auto px-6 py-24 relative z-10">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Left Column: Text Content */}
              <div className="text-center lg:text-left">
                <motion.p
                  variants={itemVariants}
                  className="text-base font-semibold text-teal-400 mb-4 uppercase tracking-wider"
                >
                  Ajna Lab Pvt. Ltd.
                </motion.p>
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tighter"
                >
                  Inner Vision.{' '}
                  <span className="text-teal-400">Outer Impact.</span>
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                >
                  We harness Health, Agriculture, and Technology (HAT) to create
                  digital ecosystems that empower communities and shape a
                  smarter future in Nepal and beyond.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                >
                  <motion.a
                    href="/healthcare-solutions"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: '0 10px 20px rgba(20, 184, 166, 0.25)',
                    }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    className="w-full sm:w-auto bg-teal-500 text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-teal-400 transition-all duration-300 flex items-center justify-center shadow-lg text-base"
                  >
                    Explore Solutions <FiArrowRight className="ml-2" />
                  </motion.a>
                  <motion.a
                    href="/book-a-demo"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    className="w-full sm:w-auto bg-transparent ring-1 ring-slate-700 text-slate-300 font-semibold py-3 px-8 rounded-lg hover:bg-slate-800 hover:text-white transition-colors text-base"
                  >
                    Book a Demo
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Column: Image */}
              <motion.div
                className="mt-16 lg:mt-0 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              >
                <div className="relative w-full max-w-xl">
                  {/* Animated Aura Effect */}
                  <motion.div
                    className="absolute inset-[-10px] bg-[conic-gradient(from_90deg_at_50%_50%,#2ED573_0%,#1E90FF_50%,#2ED573_100%)] rounded-full blur-3xl opacity-40"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Floating Image */}
                  <motion.div
                    animate={{ y: [-10, 10] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'mirror',
                      ease: 'easeInOut',
                    }}
                  >
                    <img
                      src={MainImg}
                      alt="Doctor working on Hospital Management Software"
                      className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* About Ajna (Philosophy Highlight) */}
        <div className="bg-slate-50 py-24 sm:py-32 overflow-hidden">
          <div className="w-full lg:w-[70%] mx-auto px-6">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {/* Left Column: Image with Decorative Background */}
              <motion.div
                className="relative flex justify-center items-center"
                variants={imageVariants}
              >
                {/* Decorative background shape */}
                <div className="absolute w-full h-full bg-gradient-to-tr from-indigo-200 to-teal-100 rounded-3xl blur-3xl opacity-60"></div>

                <motion.div
                  className="relative"
                  whileHover={{
                    scale: 1.05,
                    transition: { type: 'spring', stiffness: 200 },
                  }}
                >
                  <img
                    src={LogoImg}
                    alt="Ajna Lab Logo"
                    className="relative z-10 w-full max-w-sm mx-auto rounded-lg"
                  />
                </motion.div>
              </motion.div>

              {/* Right Column: Text Content */}
              <div className="text-center lg:text-left">
                <motion.span
                  variants={itemVariants}
                  className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4"
                >
                  Our Story
                </motion.span>
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter"
                >
                  Innovation Driven by{' '}
                  <span className="text-indigo-600">Intuition</span>
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="mt-6 text-lg text-slate-600 leading-relaxed"
                >
                  Ajna Lab is a technology company founded on the philosophy of
                  the Ajna Chakra—the eye of intuition and insight. Since 2018,
                  we've been building meaningful software solutions that bridge
                  innovation with real-world impact.
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="mt-4 text-lg text-slate-600 leading-relaxed"
                >
                  Our journey has led us to develop Ajna hOS, a comprehensive
                  Healthcare Operating System designed for the complex needs of
                  modern clinics, hospitals, and healthcare networks.
                </motion.p>

                <motion.div variants={itemVariants} className="mt-8">
                  <motion.a
                    href="/about"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    className="inline-flex items-center gap-2 text-base font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    Learn More About Our Mission
                    <FiArrowRight />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Ajna Lab? */}
        <div className="py-24 my-10 bg-white">
          <div className="mb-16">
            <h1 className="text-7xl font-bold text-gray-800 text-center">
              Why{' '}
              <span
                className={`relative inline-block font-bold text-indigo-600 before:content-[''] before:absolute before:-bottom-40 before:left-1 before:w-full before:h-[300px] before:bg-[url(${underline})] before:bg-contain before:bg-no-repeat before:bg-center`}
              >
                Ajna Lab
              </span>
            </h1>
            <p className="text-3xl py-8 font-medium text-gray-600 text-center">
              From Ideas to Impact
            </p>
          </div>
          <div className="w-full lg:w-[70%] mx-auto relative px-8">
            <div className="absolute inset-0 flex justify-center items-center">
              <img
                src={CurveLine}
                alt="Arrow line"
                className="object-contain hidden lg:block w-full max-w-5xl"
              />
            </div>

            <motion.div
              className="flex flex-col lg:flex-row justify-center items-start gap-y-20 lg:gap-10 relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {valueThemes.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="w-full"
                >
                  <ValueCard
                    number={`0${index + 1}`}
                    title={value.title}
                    text={value.text}
                    theme={value.theme}
                    icon={value.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- MODIFIED: Our Solutions with auto-scroll --- */}
        <div
          ref={solutionsContainerRef} // NEW: Attach the ref here
          className="h-screen w-full overflow-y-scroll" // MODIFIED: snap properties removed to allow smooth scrolling
        >
          {solutions.map(solution => (
            <SolutionSection key={solution.id} solution={solution} />
          ))}
        </div>

        {/* --- All sections after "Our Solutions" remain unchanged --- */}
        <div className="bg-slate-50 py-24 sm:py-32 overflow-hidden">
          <div className="w-full lg:w-[70%] mx-auto px-6">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {/* Left Column: Text Content */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: 'easeOut' },
                  },
                }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter">
                  Our Work Beyond Healthcare
                </h2>
                <blockquote className="mt-6 border-l-4 border-slate-300 pl-6">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    “Before healthcare, we partnered with institutions to build
                    learning platforms, consultancy systems, and
                    enterprise-grade web and mobile applications. Innovation is
                    in our DNA.”
                  </p>
                </blockquote>
              </motion.div>

              {/* Right Column: Client Logo Slider */}
              <motion.div
                className="w-full"
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: 'easeOut' },
                  },
                }}
              >
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={40}
                  // Responsive slidesPerView is a key improvement
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                    },
                    640: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                  className="mySwiper"
                >
                  {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex justify-center items-center h-24">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-12 w-auto object-contain filter grayscale hover:filter-none transition-all duration-300"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="bg-slate-50 py-24 sm:py-32">
          <div className="w-full lg:w-[70%] mx-auto px-6">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter mb-6"
              >
                Our Vision & Values
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 mb-16 leading-relaxed"
              >
                “The road is long, but our vision is clear. Ajna Lab is
                committed to building technology that serves people,
                institutions, and society.”
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                  }}
                  className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-lg border-t-4 border-t-indigo-500 text-center"
                >
                  <div className="inline-flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-lg w-16 h-16 mb-6">
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-slate-50 py-24 sm:py-32">
          <div className="w-full lg:w-[70%] mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter mb-4"
              >
                What Our Clients Say
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 mb-16 leading-relaxed"
              >
                We're proud to have earned the trust of leading healthcare
                providers. Here's what they have to say about their experience
                with Ajna Lab.
              </motion.p>
            </motion.div>

            <motion.div
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                loop={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.testimonial-swiper-button-next',
                  prevEl: '.testimonial-swiper-button-prev',
                }}
                pagination={{
                  el: '.testimonial-swiper-pagination',
                  clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={30}
                className="mySwiper"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-lg p-8 md:p-12 relative overflow-hidden">
                      <FiChevronLeft className="absolute top-8 left-8 text-7xl text-slate-100/80 z-0" />
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="flex text-yellow-400 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg md:text-xl text-slate-600 italic flex-grow mb-8 leading-relaxed">
                          “{testimonial.quote}”
                        </p>
                        <div className="flex items-center mt-auto">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-16 h-16 rounded-full object-cover mr-5 border-2 border-slate-200"
                          />
                          <div>
                            <p className="font-bold text-lg text-slate-900">
                              {testimonial.author}
                            </p>
                            <p className="text-base text-slate-500">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="testimonial-swiper-button-prev absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 cursor-pointer p-3 bg-white rounded-full shadow-md hover:bg-slate-100 transition-colors z-20">
                <FiChevronLeft className="w-6 h-6 text-slate-600" />
              </div>
              <div className="testimonial-swiper-button-next absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 cursor-pointer p-3 bg-white rounded-full shadow-md hover:bg-slate-100 transition-colors z-20">
                <FiChevronRight className="w-6 h-6 text-slate-600" />
              </div>
              <div className="testimonial-swiper-pagination !relative !bottom-0 mt-8 flex justify-center"></div>
            </motion.div>
            <div className="mt-12 text-center">
              <Link
                href="/testimonials"
                className="w-full sm:w-auto inline-flex items-center justify-center text-base font-semibold text-blue-600 transition-all duration-300 hover:text-blue-800 hover:text-xl"
              >
                View More Testimonials
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <style jsx global>{`
            .testimonial-swiper-pagination .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background-color: #cbd5e1; /* slate-300 */
              opacity: 1;
              transition: background-color 0.3s, width 0.3s;
            }
            .testimonial-swiper-pagination .swiper-pagination-bullet-active {
              width: 24px;
              border-radius: 5px;
              background-color: #4f46e5; /* indigo-600 */
            }
          `}</style>
        </div>

        <div className="bg-white py-24 sm:py-32">
          <div className="w-full lg:w-[70%] mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter mb-4"
              >
                Our Memories
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 mb-16 leading-relaxed"
              >
                A glimpse into our journey, our team, and the moments that
                define us.
              </motion.p>
            </motion.div>

            <motion.div
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {gallery.map((image, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer break-inside-avoid"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow:
                      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                  }}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
            {/* button View More */}
            <div className="mt-12 text-center">
              <motion.a
                href="/gallery"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: '0 10px 20px rgba(79, 70, 229, 0.25)',
                }}
                whileTap={{ scale: 0.98, y: 0 }}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 transition-all duration-300"
              >
                View More Gallery
                <FiArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Lightbox Modal - The single, correct instance */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  className="relative"
                >
                  <img
                    src={selectedImage}
                    alt="Selected view"
                    className="max-w-[95vw] max-h-[90vh] lg:max-w-7xl rounded-lg shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-grid-slate-700/10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

          <div className="w-full lg:w-[70%] mx-auto px-6 text-center relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter"
              >
                Ready to See with the Third Eye?
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-8"
              >
                Discover how Ajna hOS can bring unparalleled clarity and
                efficiency to your institution. Schedule a personalized demo
                with our experts today.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  href="/book-a-demo"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: '0 10px 20px rgba(79, 70, 229, 0.25)',
                  }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 transition-all duration-300"
                >
                  Request a Demo
                  <FiArrowRight className="ml-2 h-5 w-5" />
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-slate-800/80 px-8 py-3 text-base font-semibold text-slate-300 ring-1 ring-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Add this style block for the subtle grid background */}
          <style jsx global>{`
            .bg-grid-slate-700\/10 {
              background-image: linear-gradient(white 2px, transparent 2px),
                linear-gradient(to right, white 2px, transparent 2px);
              background-size: 4rem 4rem;
              opacity: 0.1;
            }
          `}</style>
        </div>
      </div>
    </>
  )
}

export default HomePage