import {
  FiFileText,
  FiCreditCard,
  FiCalendar,
  FiMessageSquare,
  FiBarChart2,
  FiUser,
  FiUsers,
  FiHeart,
} from 'react-icons/fi'

export const features = [
  {
    icon: FiFileText,
    title: 'Electronic Medical Records',
    description:
      'Securely manage patient history, lab results, and prescriptions in one place.',
  },
  {
    icon: FiCreditCard,
    title: 'Billing & Invoicing',
    description:
      'Automate invoicing and receipts for faster, more accurate financial management.',
  },
  {
    icon: FiCalendar,
    title: 'Appointment Scheduling',
    description:
      'Use a smart calendar to reduce no-shows and optimize your patient flow.',
  },
  {
    icon: FiMessageSquare,
    title: 'Patient Engagement',
    description:
      'Send automated SMS reminders for appointments, follow-ups, and prescriptions.',
  },
  {
    icon: FiBarChart2,
    title: 'Reports & Analytics',
    description:
      'Gain insights into patient visits, revenue, and overall clinic performance.',
  },
]

export const targetAudience = [
  {
    icon: FiUser,
    title: 'Solo Doctors & Practitioners',
    description:
      'Manage your entire practice from a single, intuitive dashboard.',
  },
  {
    icon: FiUsers,
    title: 'Family Clinics',
    description:
      'Keep all your family health records organized and instantly accessible.',
  },
  {
    icon: FiHeart,
    title: 'Small Healthcare Centers',
    description:
      'Deliver professional services without the complexity of large hospital systems.',
  },
]

export const benefits = [
  {
    title: 'Save Time and Focus on What Matters: Your Patients',
    description:
      'Clinic Pro automates the tedious administrative tasks that consume your day, freeing you up to provide better care.',
    points: [
      'Automate appointment reminders to reduce no-shows.',
      'Generate bills and receipts in a single click.',
      'Access patient information instantly during consultations.',
    ],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1470',
  },
  {
    title: 'Grow Your Practice with Confidence and Clarity',
    description:
      'Our platform provides the tools and insights you need to run your clinic efficiently and make informed decisions for future growth.',
    points: [
      'Track revenue and performance with simple reports.',
      'Improve patient satisfaction with a modern, digital experience.',
      'Scale your operations seamlessly as your patient base grows.',
    ],
    image:
      'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1470',
  },
]

export const faqData = [
  {
    question: 'Is Clinic Pro difficult to set up?',
    answer:
      'Not at all. Clinic Pro is designed for quick and easy setup. You can be up and running in minutes with no technical expertise required. We also provide simple video tutorials to guide you.',
  },
  {
    question: 'What kind of support is included?',
    answer:
      'All plans come with our friendly phone and email support. Our team is always ready to help you with any questions you may have to ensure you get the most out of Clinic Pro.',
  },
  {
    question: "Can I access my clinic's data from anywhere?",
    answer:
      'Yes. Clinic Pro is a cloud-based system, which means you can securely access your patient records, appointments, and billing from any computer or tablet with an internet connection.',
  },
  {
    question: 'How is my patient data kept secure?',
    answer:
      "We take data security very seriously. All your data is protected with bank-level encryption, stored on secure cloud servers, and we follow best practices to ensure your clinic's information is safe.",
  },
  {
    question: 'Is there a long-term contract or commitment?',
    answer:
      'No. We offer simple monthly or annual billing with no long-term contracts. You can start with our free trial and choose the plan that works for you, with the flexibility to cancel anytime.',
  },
]
