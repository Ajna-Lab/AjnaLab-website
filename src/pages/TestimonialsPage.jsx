import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Ajna hOS has transformed our hospital's workflow. The efficiency gains are remarkable, and the support team is always responsive.",
    author: 'Dr. Ram Sharma',
    title: 'Medical Director, City Hospital',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    quote: 'The Clinic Care solution is perfect for our polyclinic. It’s intuitive, powerful, and has significantly reduced administrative overhead.',
    author: 'Sita Rai',
    title: 'Clinic Manager, HealWell Polyclinic',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    quote: 'As a solo practitioner, Clinic Standalone is a lifesaver. I can focus more on my patients and less on paperwork. Highly recommended!',
    author: 'Dr. Anjali Gurung',
    title: 'General Practitioner',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    quote: 'The team at Ajna Lab is not just a vendor; they are true partners. Their consultation services were invaluable in our digital transformation journey.',
    author: 'Bikash Thapa',
    title: 'CEO, Nepal Health Network',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    quote: 'We have been using Ajna Lab’s solutions for over a year now and the experience has been nothing short of amazing. The system is robust and the support is top-notch.',
    author: 'Prakash Adhikari',
    title: 'IT Head, Grande International Hospital',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
];

const TestimonialsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="bg-slate-50 text-slate-700 font-sans">
      {/* Hero Section */}
      <div className="relative bg-white pt-24 pb-16 sm:pt-32 sm:pb-20">
        {/* Abstract background pattern */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ffdb] to-[#1d4ed8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[70%] mx-auto px-6 text-center"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center rounded-full bg-teal-50 p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-teal-600">
              <span className="rounded-full bg-teal-600 px-3 py-1 text-sm font-semibold leading-5 text-white">
                Trusted
              </span>
              <span className="ml-4 text-sm text-teal-800">
                Rated 5-Stars by Our Clients
              </span>
              <FiChevronRight
                className="ml-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </div>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="mt-8 text-5xl md:text-7xl font-bold text-teal-900 tracking-tighter"
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-slate-600"
          >
            We are proud to have earned the trust of leading healthcare
            institutions and professionals.
          </motion.p>
        </motion.div>
      </div>

      {/* Testimonials Masonry Grid */}
      <div className="py-24 sm:py-32">
        <div className="w-full lg:w-[70%] mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 break-inside-avoid transform hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="p-8">
                  <FaQuoteLeft className="text-3xl text-teal-400 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <p className="text-base text-slate-600 italic flex-grow mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-slate-200 group-hover:border-teal-400 transition-colors"
                    />
                    <div>
                      <p className="font-semibold text-slate-800">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 px-8 py-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20 sm:py-24">
        <div className="w-full lg:w-[70%] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
              Ready to Transform Your Practice?
            </h2>
            <p className="mt-6 text-lg max-w-2xl mx-auto text-slate-600">
              Join the growing number of healthcare providers choosing Ajna Lab
              for a smarter, more efficient future.
            </p>
            <div className="mt-10 flex justify-center items-center gap-x-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all duration-300 flex items-center"
              >
                Book a Free Demo <FiChevronRight className="ml-2" />
              </motion.a>
              <motion.a
                href="/solutions"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="text-base font-semibold leading-6 text-slate-800 hover:text-teal-600 transition-colors"
              >
                Explore Solutions <span aria-hidden="true">→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
};

export default TestimonialsPage;