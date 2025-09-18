import {
  FiUsers,
  FiBarChart2,
  FiDatabase,
  FiShield,
  FiHeart,
} from 'react-icons/fi'
import CommunityImage from '../assets/community-health.png'
import DataDashboardImage from '../assets/data-dashboard.png'

export const features = [
  {
    icon: FiDatabase,
    title: 'Community Health Records',
    description:
      'A secure, centralized digital health record system accessible across all local facilities.',
  },
  {
    icon: FiHeart,
    title: 'Primary & Public Health',
    description:
      'Manage vaccination, maternal health, chronic diseases, and OPD care seamlessly.',
  },
  {
    icon: FiBarChart2,
    title: 'Data & Analytics',
    description:
      'Access real-time health dashboards for data-driven decisions and policy-making.',
  },
  {
    icon: FiUsers,
    title: 'Integrated Local Network',
    description:
      'Connect community clinics, health posts, and municipal hospitals on one unified platform.',
  },
  {
    icon: FiShield,
    title: 'Secure & Compliant',
    description:
      'Built with role-based access and aligned with global digital health standards for data privacy.',
  },
]

export const stats = [
  { number: '2M+', label: 'Citizens Covered' },
  { number: '50+', label: 'Municipalities Powered' },
  { number: '30%', label: 'Reduction in Paperwork' },
  { number: '100%', label: 'Data-Driven Reporting' },
]

export const benefits = [
  {
    title: 'Empower Municipalities & Local Governments',
    description:
      'Palika Care provides the tools to simplify healthcare administration, optimize resource allocation, and deliver efficient, citizen-focused care with full transparency.',
    points: [
      'Digitize and streamline all health governance tasks.',
      'Gain real-time insights into community health trends.',
      'Improve budget allocation with accurate data.',
    ],
    image: CommunityImage,
  },
  {
    title: 'Enhance Community & Public Health',
    description:
      'By connecting health facilities and digitizing records, the platform expands access to quality healthcare in rural and underserved areas, ensuring no one is left behind.',
    points: [
      'Ensure continuity of care with shared digital records.',
      'Monitor public health programs like vaccination drives.',
      'Build a strong foundation for a national digital health ecosystem.',
    ],
    image: DataDashboardImage,
  },
]

export const faqData = [
  {
    question: 'How does Palika Care improve citizen health outcomes?',
    answer:
      'By creating a unified digital health record, Palika Care ensures continuity of care across all local health posts. This leads to better diagnoses, reduced errors, and allows for proactive public health interventions based on real-time data.',
  },
  {
    question: 'Is the system difficult for non-technical staff to use?',
    answer:
      'No. Palika Care is designed with a simple, intuitive interface. We prioritize user-friendliness to ensure that healthcare workers, regardless of their technical skill level, can adopt and use the system efficiently with minimal training.',
  },
  {
    question: 'What kind of data and reports can the municipality access?',
    answer:
      'Municipal leaders can access a secure dashboard with real-time data on disease prevalence, vaccination coverage, maternal health metrics, and more. These insights are crucial for effective policy-making and resource allocation.',
  },
  {
    question: 'How is the data secured and who owns it?',
    answer:
      'Data security is our top priority. The platform uses end-to-end encryption and strict role-based access controls. The municipality and the respective health authorities retain full ownership of their data.',
  },
]
