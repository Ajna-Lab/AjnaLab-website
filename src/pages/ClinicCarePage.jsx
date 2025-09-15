import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiActivity, FiDatabase, FiCheckCircle, FiGitMerge, FiCalendar, FiBox } from 'react-icons/fi';

// --- INSTRUCTIONS FOR IMAGES ---
// I have used placeholder images from Unsplash to make the design work.
// To use your own images:
// 1. Place your images in your assets folder (e.g., src/assets/).
// 2. Import them at the top of this file like this:
//    import ClinicCareMockup from '../assets/clinic-care-mockup.png';
//    import MultiSpecialtyImage from '../assets/multi-specialty-clinic.jpg';
//    import PatientFlowImage from '../assets/patient-flow.jpg';
// 3. Replace the URL strings in the `benefits` array and the `Hero Section` with these imported variables.

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

// Data
const features = [
    { icon: FiUsers, title: "Multi-Doctor & Specialty Support", description: "Seamlessly coordinate care between multiple specialists and departments within a single, unified system." },
    { icon: FiDatabase, title: "Advanced EMR", description: "Manage comprehensive patient records including history, prescriptions, labs, and imaging results." },
    { icon: FiGitMerge, title: "Lab & Radiology Integration", description: "Enable direct test requests, automated results sharing, and fully digital reporting from diagnostic centers." },
    { icon: FiCalendar, title: "Smart Queue Management", description: "Efficiently handle both walk-in patients and scheduled online appointments to reduce wait times." },
    { icon: FiBox, title: "Billing, Insurance & Inventory", description: "A centralized system to manage financials, process insurance claims, and control stock levels." },
    { icon: FiActivity, title: "Performance Analytics", description: "Monitor key metrics like patient trends, revenue streams, and department efficiency with powerful insights." },
];

const audience = [
    { title: "Busy Urban Clinics", description: "For practices managing high patient flow and complex schedules." },
    { title: "Multi-specialty Polyclinics", description: "For centers offering diverse services under one roof." },
    { title: "High-Tech Practices", description: "For clinics committed to full digital transformation and innovation." },
    { title: "Growing Healthcare Centers", description: "For startups scaling into multi-doctor and multi-location practices." },
];

const benefits = [
    {
        title: "Streamline Complex Operations and Enhance Coordination",
        description: "Clinic Care is built to handle the demands of a busy, multi-faceted practice, ensuring smooth workflows from the front desk to the consultation room.",
        points: [
            "Improve coordination across different specialties and diagnostic services.",
            "Reduce patient wait times with an intelligent queue management system.",
            "Centralize all financial, inventory, and insurance data for better control.",
        ],
        // Placeholder Image URL. Replace with your imported image variable.
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2940&auto=format&fit=crop",
    },
    {
        title: "Deliver a Superior Patient Experience at Scale",
        description: "Our platform empowers you to provide high-quality, personalized care even as your patient volume grows, fostering loyalty and trust.",
        points: [
            "Ensure continuity of care with a comprehensive, shared EMR.",
            "Minimize errors with integrated lab, radiology, and pharmacy modules.",
            "Provide data-driven insights for better clinical and operational decisions.",
        ],
        // Placeholder Image URL. Replace with your imported image variable.
        image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2940&auto=format&fit=crop",
    },
];

// Main Component
const ClinicCarePage = () => {
  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d8b4fe] to-[#818cf8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
        </div>
        <div className="w-full lg:w-[70%] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center lg:text-left">
              <motion.span variants={itemVariants} className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/10 mb-4">
                Advanced Clinic Management
              </motion.span>
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">
                Smarter Care for Smarter Clinics
              </motion.h1>
              <motion.p variants={itemVariants} className="mt-6 text-lg max-w-xl mx-auto lg:mx-0 text-slate-600 leading-8">
                Clinic Care is a comprehensive solution for busy clinics and polyclinics. Manage patient flow, advanced EMR, and integrated diagnostics to deliver efficient, high-quality healthcare.
              </motion.p>
              <motion.div variants={itemVariants} className="mt-10 flex justify-center lg:justify-start gap-4">
                <a href="/book-a-demo" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 transition-all hover:-translate-y-1">
                  Request a Demo <FiArrowRight className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
              {/* Placeholder Image URL. Replace with your imported image variable. */}
              <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2940&auto=format&fit=crop" alt="Clinic Care software on a desktop monitor" className="w-full h-auto rounded-lg shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="w-full lg:w-[70%] mx-auto px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter mb-4">
              A Powerful Core for Your Growing Practice
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed">
              Clinic Care is engineered to handle complexity with ease, giving you a complete command center for your clinic.
            </motion.p>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="bg-indigo-50 text-indigo-600 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="w-full lg:w-[70%] mx-auto px-6 space-y-24">
            {benefits.map((benefit, index) => (
                <motion.div key={index} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={` ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                        <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tighter mb-6">{benefit.title}</motion.h3>
                        <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed mb-6">{benefit.description}</motion.p>
                        <ul className="space-y-3">
                            {benefit.points.map((point, pIndex) => (
                                <motion.li key={pIndex} variants={itemVariants} className="flex items-start">
                                    <FiCheckCircle className="text-indigo-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-slate-600">{point}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <motion.div variants={itemVariants} className={` ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                        <img src={benefit.image} alt={benefit.title} className="rounded-2xl shadow-xl w-full h-auto object-cover" />
                    </motion.div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Who is it for Section */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="w-full lg:w-[70%] mx-auto px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter mb-4">
              Designed For Ambitious Healthcare Providers
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed">
              Clinic Care is the perfect fit for practices that are scaling up their services and complexity.
            </motion.p>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audience.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white text-center p-8 rounded-2xl border border-slate-200/80 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="w-full lg:w-[70%] mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tighter">Ready to Elevate Your Clinic?</h2>
                <p className="mt-6 text-lg max-w-2xl mx-auto text-slate-600">
                    Discover how Clinic Care can transform your operations and patient care. Schedule a personalized demo with our team today.
                </p>
                <div className="mt-10">
                    <a href="/book-a-demo" className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 transition-all hover:-translate-y-1">
                        Request a Demo <FiArrowRight className="ml-2" />
                    </a>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClinicCarePage;