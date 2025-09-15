import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiDatabase, FiAlertTriangle, FiGitMerge, FiBox, FiBriefcase, FiBarChart2, FiCheckCircle } from 'react-icons/fi';
// import AjnaHOSMockup from '../assets/ajna-hos-mockup.png'; // Suggested: Add a product mockup image
// import HospitalCollaborationImage from '../assets/hospital-collaboration.jpg'; // Suggested: Add relevant images
// import PatientCareImage from '../assets/patient-care.jpg'; // Suggested: Add relevant images

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
    { icon: FiUsers, title: "OPD & IPD Management", description: "Manage the complete patient journey from registration and admission to discharge and follow-up." },
    { icon: FiDatabase, title: "Integrated EMR", description: "A single, unified medical record accessible in real-time across all hospital departments." },
    { icon: FiAlertTriangle, title: "Emergency & Casualty", description: "Streamlined and fast-tracked workflows designed for high-pressure critical care scenarios." },
    { icon: FiGitMerge, title: "Integrated Diagnostics", description: "Seamlessly connect lab and radiology for integrated test ordering, results, and reporting." },
    { icon: FiBox, title: "Billing, Insurance & Inventory", description: "Smart financial and stock control with automated billing, claims processing, and pharmacy management." },
    { icon: FiBriefcase, title: "Nursing & Ward Management", description: "Efficiently manage bed allocation, nursing handovers, and real-time patient tracking." },
    { icon: FiBarChart2, title: "Analytics & Reporting", description: "Gain deep operational, financial, and clinical insights with comprehensive dashboards." },
];

const audience = [
    { title: "Mid-to-Large Hospitals", description: "Seeking a powerful, unified platform to manage complex operations." },
    { title: "Specialty Hospitals", description: "Needing tailored workflows for specialized care delivery." },
    { title: "Healthcare Networks", description: "Requiring a scalable and interoperable system across multiple locations." },
    { title: "Hospital Administrators", description: "Who desire data-driven control and complete operational oversight." },
];

const benefits = [
    {
        title: "Achieve Total Integration for Seamless Operations",
        description: "Ajna hOS breaks down departmental silos, connecting every process into a single, harmonized ecosystem. This holistic vision improves efficiency and decision-making at every level.",
        points: [
            "Ensure data consistency from the front desk to the back office.",
            "Improve inter-departmental communication and collaboration.",
            "Reduce manual errors with automated, integrated workflows.",
        ],
        image: "HospitalCollaborationImage",
    },
    {
        title: "Elevate Patient Care with a 360-Degree View",
        description: "Our patient-centered design ensures that clinicians have instant access to complete and accurate information, leading to better diagnoses, safer treatments, and improved outcomes.",
        points: [
            "Provide clinicians with a comprehensive view of patient history.",
            "Enhance patient safety with integrated alerts and protocols.",
            "Personalize the patient journey from admission to post-discharge.",
        ],
        image: "PatientCareImage",
    },
];

// Main Component
const AjnaHOSStandardPage = () => {
  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a5f3fc] to-[#4f46e5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
        </div>
        <div className="w-full lg:w-[70%] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center lg:text-left">
              <motion.span variants={itemVariants} className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/10 mb-4">
                Hospital Operating System
              </motion.span>
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">
                The Third Eye of Healthcare Management
              </motion.h1>
              <motion.p variants={itemVariants} className="mt-6 text-lg max-w-xl mx-auto lg:mx-0 text-slate-600 leading-8">
                Ajna hOS unifies all hospital workflows—from clinical to administrative—into one intelligent platform, providing the clarity and insight needed for exceptional patient care.
              </motion.p>
              <motion.div variants={itemVariants} className="mt-10 flex justify-center lg:justify-start gap-4">
                <a href="/book-a-demo" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1">
                  Book a Demo <FiArrowRight className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
              <img src="" alt="Ajna hOS Dashboard on a computer screen" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="w-full lg:w-[70%] mx-auto px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter mb-4">
              A Unified Command Center for Your Hospital
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed">
              Ajna hOS is a modular, all-in-one solution that brings clarity and control to every aspect of hospital management.
            </motion.p>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="bg-blue-50 text-blue-600 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section (Why Ajna hOS) */}
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
                                    <FiCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
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
              Designed for Modern Healthcare Institutions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed">
              Ajna hOS is the perfect fit for healthcare providers who are ready to embrace a fully integrated digital future.
            </motion.p>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audience.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white text-center p-8 rounded-2xl border border-slate-200/80 shadow-sm border-t-4 border-t-blue-500">
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
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tighter">See Beyond the Visible. Align Your Hospital's Future.</h2>
                <p className="mt-6 text-lg max-w-2xl mx-auto text-slate-600">
                    Discover how Ajna hOS can bring unparalleled clarity and efficiency to your institution. Schedule a personalized demo with our experts today.
                </p>
                <div className="mt-10">
                    <a href="/book-a-demo" className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1">
                        Book a Demo <FiArrowRight className="ml-2" />
                    </a>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AjnaHOSStandardPage;