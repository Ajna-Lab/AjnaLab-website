import {
  FiUsers,
  FiDatabase,
  FiAlertTriangle,
  FiGitMerge,
  FiBox,
  FiBriefcase,
  FiBarChart2,
} from 'react-icons/fi'

export const features = [
  {
    icon: FiUsers,
    title: 'OPD & IPD Management',
    description:
      'Manage the complete patient journey from registration and admission to discharge and follow-up.',
  },
  {
    icon: FiDatabase,
    title: 'Integrated EMR',
    description:
      'A single, unified medical record accessible in real-time across all hospital departments.',
  },
  {
    icon: FiAlertTriangle,
    title: 'Emergency & Casualty',
    description:
      'Streamlined and fast-tracked workflows designed for high-pressure critical care scenarios.',
  },
  {
    icon: FiGitMerge,
    title: 'Integrated Diagnostics',
    description:
      'Seamlessly connect lab and radiology for integrated test ordering, results, and reporting.',
  },
  {
    icon: FiBox,
    title: 'Billing, Insurance & Inventory',
    description:
      'Smart financial and stock control with automated billing, claims processing, and pharmacy management.',
  },
  {
    icon: FiBriefcase,
    title: 'Nursing & Ward Management',
    description:
      'Efficiently manage bed allocation, nursing handovers, and real-time patient tracking.',
  },
  {
    icon: FiBarChart2,
    title: 'Analytics & Reporting',
    description:
      'Gain deep operational, financial, and clinical insights with comprehensive dashboards.',
  },
]

export const audience = [
  {
    title: 'Mid-to-Large Hospitals',
    description:
      'Seeking a powerful, unified platform to manage complex operations.',
  },
  {
    title: 'Specialty Hospitals',
    description: 'Needing tailored workflows for specialized care delivery.',
  },
  {
    title: 'Healthcare Networks',
    description:
      'Requiring a scalable and interoperable system across multiple locations.',
  },
  {
    title: 'Hospital Administrators',
    description:
      'Who desire data-driven control and complete operational oversight.',
  },
]

export const benefits = [
  {
    title: 'Achieve Total Integration for Seamless Operations',
    description:
      'Ajna hOS breaks down departmental silos, connecting every process into a single, harmonized ecosystem. This holistic vision improves efficiency and decision-making at every level.',
    points: [
      'Ensure data consistency from the front desk to the back office.',
      'Improve inter-departmental communication and collaboration.',
      'Reduce manual errors with automated, integrated workflows.',
    ],
    image:
      'https://images.unsplash.com/photo-1516542076529-1ea0855399f2?q=80&w=1471',
  },
  {
    title: 'Elevate Patient Care with a 360-Degree View',
    description:
      'Our patient-centered design ensures that clinicians have instant access to complete and accurate information, leading to better diagnoses, safer treatments, and improved outcomes.',
    points: [
      'Provide clinicians with a comprehensive view of patient history.',
      'Enhance patient safety with integrated alerts and protocols.',
      'Personalize the patient journey from admission to post-discharge.',
    ],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1470',
  },
]

export const faqData = [
  {
    question: 'How long does the implementation process for Ajna hOS take?',
    answer:
      "The implementation timeline varies depending on the hospital's size and complexity. A standard implementation for a mid-sized hospital typically ranges from 3 to 6 months. This includes data migration, staff training, and a phased go-live to ensure a smooth transition.",
  },
  {
    question: 'Is our existing patient data compatible with your EMR system?',
    answer:
      'Yes. Our system is built on modern, interoperable standards like HL7 and FHIR. We have a dedicated data migration team that works with your IT department to securely and accurately transfer your existing patient data from legacy systems into Ajna hOS.',
  },
  {
    question:
      'What kind of training and support is provided to our hospital staff?',
    answer:
      'We provide a comprehensive training program tailored to different user roles, from front-desk staff to clinicians and administrators. After going live, our dedicated support team is available 24/7 via phone and a ticketing system to assist with any issues.',
  },
  {
    question: 'How does the system ensure patient data privacy and security?',
    answer:
      'Data security is fundamental to our platform. Ajna hOS features end-to-end encryption, strict role-based access controls (RBAC), and detailed audit logs of all user activity. Our system is designed to be compliant with major healthcare regulations like HIPAA.',
  },
]
