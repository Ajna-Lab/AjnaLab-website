import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Users, Clipboard, Activity, Server, Cpu } from 'lucide-react';

const solutions = [
  {
    id: 1,
    title: 'Palika Care',
    tagline: 'Digital health at the community level.',
    description:
      'Designed for local governments, Palika Care empowers municipalities to manage healthcare delivery with data-driven insights, citizen health records, and seamless coordination across health posts and wards. Because healthy communities build a stronger nation.',
    imageUrl:
      'https://images.unsplash.com/photo-1603807022254-c752783a3444?q=80&w=2940&auto=format&fit=crop',
    Icon: Users,
  },
  {
    id: 2,
    title: 'Clinic Standalone',
    tagline: 'Less admin, more healing.',
    description:
      'For individual doctors and small practices, Clinic Pro makes patient management effortless. From appointments to prescriptions, billing to reports—it’s the all-in-one tool to help doctors focus on care, not paperwork.',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2940&auto=format&fit=crop',
    Icon: Clipboard,
  },
  {
    id: 3,
    title: 'Clinic Care',
    tagline: 'See More. Do More. Care Better.',
    description:
      'When clinics grow, complexity grows with them. Clinic Care is built for high-tech clinics and polyclinics that handle multiple doctors, specialties, and high patient volume. Streamlined workflows keep care efficient and patients satisfied.',
    imageUrl:
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2940&auto=format&fit=crop',
    Icon: Activity,
  },
  {
    id: 4,
    title: 'Ajna hOS Standard Edition',
    tagline: 'One platform. Total care.',
    description:
      'From OPD to IPD, diagnostics to discharge—Ajna hOS Standard Edition brings every hospital department together in one seamless system. With role-based access, secure records, and real-time analytics, it’s healthcare aligned with your vision.',
    imageUrl:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2940&auto=format&fit=crop',
    Icon: Server,
  },
  {
    id: 5,
    title: 'Ajna hOS Enterprise Edition',
    tagline: 'Your third eye for smarter healthcare.',
    description:
      'For large hospitals and networks, the Enterprise Edition offers advanced integrations, scalability, and intelligence. AI-driven insights, modular expansions, and enterprise-grade security ensure smarter healthcare decisions at every level.',
    imageUrl:
      'https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2940&auto=format&fit=crop',
    Icon: Cpu,
  },
];

const Solutions = () => {
  const parallaxRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const container = parallaxRef.current.container.current;
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;
        const progress = scrollTop / scrollHeight;

        setScrollProgress(progress);

        const newIndex = Math.floor(progress * solutions.length);
        const clampedIndex = Math.min(
          Math.max(newIndex, 0),
          solutions.length - 1
        );

        if (clampedIndex !== activeIndex) {
          setActiveIndex(clampedIndex);
        }
      }
    };

    const container = parallaxRef.current?.container?.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  const scrollToSection = (index) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(index);
    }
  };

  return (
    <div className="relative h-screen font-sans">
      <Parallax
        ref={parallaxRef}
        pages={solutions.length}
        style={{ top: 0, left: 0 }}
        className="bg-black"
      >
        {/* Background Images */}
        {solutions.map((solution, index) => (
          <ParallaxLayer
            key={`bg-${solution.id}`}
            offset={index}
            speed={0.2}
            style={{
              backgroundImage: `url(${solution.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </ParallaxLayer>
        ))}

        {/* Content */}
        {solutions.map((solution, index) => (
          <ParallaxLayer
            key={`content-${solution.id}`}
            offset={index}
            speed={0.6}
            className="flex items-center justify-center"
          >
            <motion.div
              className="max-w-4xl text-white text-center p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0.3,
                y: activeIndex === index ? 0 : 20,
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight"
                style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.7)' }}
              >
                {solution.title}
              </motion.h1>
              <motion.p
                className="text-2xl md:text-3xl font-light italic text-teal-300 mb-6"
                style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.6)' }}
              >
                {solution.tagline}
              </motion.p>
              <motion.p className="text-lg md:text-xl leading-relaxed mb-10">
                {solution.description}
              </motion.p>
              <motion.button
                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-2xl transform transition-all duration-300 hover:shadow-cyan-500/50"
                whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Demo
              </motion.button>
            </motion.div>
          </ParallaxLayer>
        ))}

        <ParallaxLayer
          sticky={{ start: 0, end: solutions.length - 1 }}
          className="z-40 flex items-center justify-end pointer-events-none pr-8"
        >
          <div className="flex flex-col space-y-4 pointer-events-auto">
            {solutions.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-white scale-150' : 'bg-white/40'}`}
                whileHover={{ scale: 1.8 }}
              />
            ))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          factor={solutions.length}
          className="pointer-events-none"
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Solutions;
