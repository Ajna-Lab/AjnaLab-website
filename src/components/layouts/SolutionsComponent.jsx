import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Users, Clipboard, Activity, Server, Cpu } from 'lucide-react'

const solutions = [
  {
    id: 1,
    title: 'Palika Care',
    description:
      'Empower local governments with data-driven insights, citizen health records, and seamless coordination across health posts.',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2940&auto=format&fit=crop',
    Icon: Users,
    logo: {
      name: 'Palika Care',
      icon: <Users className="w-8 h-8 text-white" />,
    },
  },
  {
    id: 2,
    title: 'Clinic Standalone',
    description:
      'An all-in-one tool for solo doctors. Manage appointments, prescriptions, and billing effortlessly to focus on care, not paperwork.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2940&auto=format&fit=crop',
    Icon: Clipboard,
    logo: {
      name: 'Clinic Standalone',
      icon: <Clipboard className="w-8 h-8 text-white" />,
    },
  },
  {
    id: 3,
    title: 'Clinic Care',
    description:
      'Built for high-tech polyclinics managing multiple doctors and high patient volume. Streamlined workflows keep care efficient and patients satisfied.',
    image:
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2940&auto=format&fit=crop',
    Icon: Activity,
    logo: {
      name: 'Clinic Care',
      icon: <Activity className="w-8 h-8 text-white" />,
    },
  },
  {
    id: 4,
    title: 'Ajna hOS Standard',
    description:
      'Bring every hospital department together in one seamless system from OPD to IPD. Features role-based access, secure records, and real-time analytics.',
    image:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2940&auto=format&fit=crop',
    Icon: Server,
    logo: {
      name: 'Ajna hOS Standard',
      icon: <Server className="w-8 h-8 text-white" />,
    },
  },
  {
    id: 5,
    title: 'Ajna hOS Enterprise',
    description:
      'For large hospitals and networks, the Enterprise Edition offers advanced integrations, AI-driven insights, and modular expansions for smarter decisions.',
    image:
      'https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2940&auto=format&fit=crop',
    Icon: Cpu,
    logo: {
      name: 'Ajna hOS Enterprise',
      icon: <Cpu className="w-8 h-8 text-white" />,
    },
  },
]

const SolutionsSection = () => {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    return scrollYProgress.on('change', latest => {
      const index = Math.min(
        Math.floor(latest * solutions.length),
        solutions.length - 1
      )
      setActiveIndex(index)
    })
  }, [scrollYProgress])

  const scrollbarY = useTransform(scrollYProgress, [0, 1], ['0%', '80%']) 

  return (
    <div className="bg-slate-900 text-white font-sans py-24 sm:py-32">
      <div className="container md:w-[60%] mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center">
          Our Suite of{' '}
          <span className="text-indigo-400">Healthcare Solutions</span>
        </h3>

        <div ref={scrollRef} className="hidden lg:flex mt-24 relative">
          <div className="w-20 flex-shrink-0 relative">
            <div className="sticky top-40 h-[500px]">
              <div className="w-1 h-full bg-slate-700/50 rounded-full" />
              <motion.div
                className="w-1 h-1/5 bg-indigo-500 rounded-full"
                style={{ top: scrollbarY, position: 'absolute' }}
              />
            </div>
          </div>

          <div className="w-1/3 flex-shrink-0 pr-12">
            {solutions.map((solution, index) => (
              <div key={index} className="h-[500px] flex items-center">
                <motion.div
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-3xl font-bold">{solution.title}</h4>
                  <p className="text-slate-300 mt-4 leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="w-1/2 flex-grow relative">
            <div className="sticky top-40 h-[500px]">
              <AnimatePresence>
                {solutions.map(
                  (solution, index) =>
                    activeIndex === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-800">
                          <img
                            src={solution.image}
                            alt={solution.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-slate-900/50 backdrop-blur-sm p-2 rounded-lg flex items-center gap-3">
                            {solution.logo.icon}
                            <span className="font-semibold">
                              {solution.logo.name}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-16 space-y-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full rounded-lg overflow-hidden mb-6">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-slate-900/50 backdrop-blur-sm p-2 rounded-lg flex items-center gap-2">
                  {React.cloneElement(solution.logo.icon, {
                    className: 'w-6 h-6 text-white',
                  })}
                  <span className="font-semibold text-sm">
                    {solution.logo.name}
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold">{solution.title}</h4>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SolutionsSection
