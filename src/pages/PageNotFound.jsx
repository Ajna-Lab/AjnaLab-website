import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowRight } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const numberVariants = {
  hidden: { scale: 0.5, opacity: 0, rotateZ: -45 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    rotateZ: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 15,
      delay: i * 0.1,
    },
  }),
};

const PageNotFound = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [-10, 10]);
  const rotateY = useTransform(mouseX, [-200, 200], [10, -10]);

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className="min-h-screen bg-slate-50 overflow-hidden flex items-center justify-center p-6 relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a855f7] to-[#6366f1] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>

      <motion.div
        className="text-center  backdrop-blur-lg p-8 md:p-16  shadow-slate-200/80"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="relative flex justify-center items-center" 
          style={{ perspective: '800px' }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="text-[10rem] md:text-[15rem] font-black text-slate-900 leading-none tracking-tighter"
          >
            <span className="relative inline-block">
              <motion.span variants={numberVariants} custom={0} whileHover={{ y: -10, scale: 1.05, transition: { type: 'spring', stiffness: 300 }}}>4</motion.span>
            </span>
            <span className="relative inline-block mx-2 text-indigo-500">
              <motion.span variants={numberVariants} custom={1} whileHover={{ y: -10, scale: 1.05, transition: { type: 'spring', stiffness: 300 }}}>0</motion.span>
            </span>
            <span className="relative inline-block">
              <motion.span variants={numberVariants} custom={2} whileHover={{ y: -10, scale: 1.05, transition: { type: 'spring', stiffness: 300 }}}>4</motion.span>
            </span>
          </motion.div>
        </motion.div>

        <motion.h2 
          className="mt-4 text-3xl md:text-4xl font-bold text-slate-800 tracking-tight"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h2>

        <motion.p 
          className="mt-2 text-base md:text-lg text-slate-600 max-w-md mx-auto"
          variants={itemVariants}
        >
          Sorry, we couldn't find the page you’re looking for. Let's get you back on track.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 12px 24px rgba(79, 70, 229, 0.2)" }}
              whileTap={{ scale: 0.98, y: 0 }}
              className="group inline-flex items-center mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
            >
              <FiHome className="mr-2 h-5 w-5" />
              Go Back To Home
              <FiArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;