import {
  FiShield,
  FiTrendingUp,
  FiCheckSquare,
  FiGitMerge,
} from 'react-icons/fi'

export const corePillars = [
  {
    icon: FiShield,
    title: 'Enterprise-Grade Security',
    description:
      'End-to-end encryption, multi-factor authentication, granular RBAC, and comprehensive audit logs to protect sensitive data.',
  },
  {
    icon: FiTrendingUp,
    title: 'Massive Scalability',
    description:
      'Engineered to perform from a 500-bed hospital to a nationwide chain, with flexible cloud, on-premise, or hybrid deployment.',
  },
  {
    icon: FiCheckSquare,
    title: 'Compliance First',
    description:
      'Built with a compliance-first architecture to align with HIPAA, GDPR, HL7, and FHIR standards from the ground up.',
  },
  {
    icon: FiGitMerge,
    title: 'Radical Interoperability',
    description:
      'API-first design allows seamless integration with labs, insurance providers, government systems, and third-party applications.',
  },
]

export const benefits = [
  {
    title: 'Achieve Unprecedented Operational Control',
    description:
      'Ajna hOS Enterprise provides a single source of truth, breaking down silos between clinical, financial, and administrative departments for data-driven decision-making.',
    points: [
      'Gain 360-degree visibility with enterprise-wide analytics.',
      'Optimize revenue cycles and supply chain management.',
      'Streamline workforce management, from rostering to payroll.',
    ],
    image:
      'https://images.unsplash.com/photo-1516542076529-1ea0855399f2?q=80&w=1471',
  },
  {
    title: 'Build a Future-Ready Healthcare Ecosystem',
    description:
      "Our platform is not just a system of record; it's a foundation for innovation. Leverage built-in AI capabilities and a flexible architecture to adapt to the future of healthcare.",
    points: [
      'Utilize predictive analytics to improve patient flow and outcomes.',
      'Ready for integration with IoT, telehealth, and AI diagnostic tools.',
      'Manage multi-branch hospital networks under one unified command center.',
    ],
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484',
  },
]

export const comparisonData = [
  {
    feature: 'Compliance',
    traditional: 'Limited or as a paid add-on',
    ajna: 'HIPAA, GDPR, HL7, FHIR built-in',
  },
  {
    feature: 'Scalability',
    traditional: 'Department-focused, limited',
    ajna: 'Enterprise, multi-branch, national scale',
  },
  {
    feature: 'Interoperability',
    traditional: 'Siloed, difficult to integrate',
    ajna: 'API-first, multi-system integration',
  },
  {
    feature: 'Analytics',
    traditional: 'Basic, retrospective reports',
    ajna: 'Predictive, AI-driven, real-time insights',
  },
  {
    feature: 'Deployment',
    traditional: 'Primarily on-premise',
    ajna: 'Cloud, on-premise, hybrid, multi-tenant',
  },
  {
    feature: 'Security',
    traditional: 'Standard, often requires patching',
    ajna: 'Enterprise-grade, OWASP-compliant',
  },
]

export const faqData = [
  {
    question: 'How does Ajna hOS handle data migration from our legacy system?',
    answer:
      "We have a dedicated data migration team that works closely with your IT department. Our process involves a thorough data mapping, validation, and a phased rollout to ensure a seamless and secure transition with minimal disruption to your hospital's operations.",
  },
  {
    question:
      'What level of customization is possible for our specific workflows?',
    answer:
      'Ajna hOS Enterprise is highly modular and configurable. While our core system is built on best practices, we understand that every hospital is unique. Our implementation specialists will work with you to configure modules and workflows to match your specific operational needs.',
  },
  {
    question:
      'What are the security and compliance certifications of the platform?',
    answer:
      'Security is at the core of our architecture. The platform is designed to be HIPAA and GDPR compliant and supports standards like HL7 and FHIR for interoperability. Our cloud infrastructure follows ISO 27001 practices for information security management.',
  },
  {
    question: 'How does the system scale for a multi-branch hospital network?',
    answer:
      'The Enterprise Edition is built on a multi-tenant architecture, allowing you to manage multiple hospitals or clinics from a single, centralized platform. This provides unified analytics and control while allowing for branch-specific configurations and data segregation.',
  },
]
