export interface CompanyStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  note: string;
}

export interface TechCategory {
  id: string;
  name: string;
  description: string;
  technologies: {
    name: string;
    role: string;
    code: string;
  }[];
}

export interface CertificationItem {
  code: string;
  title: string;
  scope: string;
  summary: string;
}

export interface DifferentiatorItem {
  id: string;
  title: string;
  description: string;
  iconName:
    | 'Users'
    | 'Target'
    | 'Cpu'
    | 'Layers'
    | 'ShieldCheck'
    | 'Lock'
    | 'Globe';
}

export const COMPANY_INFO = {
  name: 'Adhoc Softwares',
  tagline: 'Turning Ideas Into Powerful Digital Solutions.',
  address: {
    line1: 'SF NO 163/2, Periyagounder Nagar,',
    line2: 'Saravanampatti,',
    city: 'Coimbatore – 641035,',
    region: 'Tamil Nadu, India.',
    full: 'SF NO 163/2, Periyagounder Nagar, Saravanampatti, Coimbatore – 641035, Tamil Nadu, India.',
  },
  phone: '+91 94860 35353',
  phoneHref: 'tel:+919486035353',
  whatsappNumber: '919486035353',
  whatsappUrl:
    'https://wa.me/919486035353?text=Hello%20Adhoc%20Softwares%2C%20I%20would%20like%20to%20discuss%20a%20software%20project.',
  salesEmail: 'sales@adhocsoftwares.com',
  careersEmail: 'hr@adhocsoftwares.com',
  website: 'https://adhocsoftwares.com/',
  officeHours: 'Monday – Saturday · 9:30 AM – 6:30 PM IST',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/adhoc-softwares/' },
    { label: 'X / Twitter', href: 'https://x.com/adhocsoftwares' },
    { label: 'Facebook', href: 'https://www.facebook.com/adhocsoftwares' },
    { label: 'Instagram', href: 'https://www.instagram.com/adhocsoftwares' },
  ],
};

// Initial reference figures from adhocsoftwares.com — centralized for verification and updates prior to publication.
export const COMPANY_STATS: CompanyStat[] = [
  {
    id: 'experience',
    value: 14,
    suffix: '+',
    label: 'Years of Experience',
    note: 'Sustained software delivery from Coimbatore',
  },
  {
    id: 'clients',
    value: 500,
    suffix: '+',
    label: 'Happy Clients',
    note: 'Across domestic and international markets',
  },
  {
    id: 'projects',
    value: 1500,
    suffix: '+',
    label: 'Projects Delivered',
    note: 'Web, enterprise ERP, and custom platforms',
  },
  {
    id: 'mobile',
    value: 100,
    suffix: '+',
    label: 'Mobile Applications',
    note: 'Native iOS, Android, and cross-platform builds',
  },
];

export const WHY_CHOOSE_ITEMS: DifferentiatorItem[] = [
  {
    id: 'experienced-team',
    title: 'Experienced Development Team',
    description:
      'Dedicated full-stack engineers, mobile architects, and QA specialists with deep enterprise delivery discipline.',
    iconName: 'Users',
  },
  {
    id: 'customer-centric',
    title: 'Customer-Centric Approach',
    description:
      'Transparent milestone planning, direct engineering communication, and solutions structured around operational outcomes.',
    iconName: 'Target',
  },
  {
    id: 'innovative-tech',
    title: 'Innovative Technology',
    description:
      'Modern frameworks, applied machine learning, and cloud-native architectures engineered for long-term adaptability.',
    iconName: 'Cpu',
  },
  {
    id: 'scalable-solutions',
    title: 'Scalable Solutions',
    description:
      'Modular system designs and resilient database schemas built to accommodate growing transaction volumes and users.',
    iconName: 'Layers',
  },
  {
    id: 'quality-focused',
    title: 'Quality-Focused Development',
    description:
      'Structured code reviews, automated test suites, and ISO 9001:2015 aligned quality assurance across every release.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'secure-software',
    title: 'Secure Software Development',
    description:
      'Role-based access controls, encrypted data transport, and ISO 27001:2013 aligned information security practices.',
    iconName: 'Lock',
  },
  {
    id: 'global-support',
    title: 'Global Client Support',
    description:
      'Time-zone aligned collaboration and ongoing maintenance support for partners across India, the Middle East, Europe, and North America.',
    iconName: 'Globe',
  },
];

export const TECH_STACK: TechCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    description: 'Responsive, accessible, component-driven web interfaces.',
    technologies: [
      { name: 'React', role: 'Component UI & Enterprise SPAs', code: 'RE' },
      { name: 'Angular', role: 'Structured Enterprise Portals', code: 'NG' },
      { name: 'Vue.js', role: 'Progressive Web Interfaces', code: 'VU' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    description: 'High-throughput server logic, ERP engines, and API orchestration.',
    technologies: [
      { name: 'Python', role: 'AI Pipelines & Backend Services', code: 'PY' },
      { name: 'Django', role: 'Secure Data-Driven Web Systems', code: 'DJ' },
      { name: 'Node.js', role: 'Event-Driven APIs & Real-Time Services', code: 'JS' },
      { name: 'PHP', role: 'Web Platforms & Integrations', code: 'PH' },
      { name: 'Laravel', role: 'Modular Web & ERP Backends', code: 'LV' },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Platforms',
    description: 'High-reliability consumer and fleet mobile applications.',
    technologies: [
      { name: 'Flutter', role: 'Cross-Platform Native Compilation', code: 'FL' },
      { name: 'React Native', role: 'Shared JavaScript Mobile Codebases', code: 'RN' },
      { name: 'Android', role: 'Native Android Applications', code: 'AN' },
      { name: 'iOS', role: 'Native Apple Ecosystem Apps', code: 'iO' },
    ],
  },
  {
    id: 'cloud-db',
    name: 'Cloud, Infrastructure & Database',
    description: 'Resilient cloud hosting and relational data persistence.',
    technologies: [
      { name: 'AWS', role: 'Managed Cloud Infrastructure & Storage', code: 'AW' },
      { name: 'Cloud Computing', role: 'Scalable Deployment & CI/CD', code: 'CC' },
      { name: 'MySQL', role: 'Relational Transactional Storage', code: 'MY' },
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    code: 'ISO 9001:2015',
    title: 'Quality Management System Standard',
    scope: 'Software Engineering & Delivery Governance',
    summary:
      'Referenced quality management framework guiding requirements traceability, peer code review, release verification, and continuous client delivery improvement.',
  },
  {
    code: 'ISO 27001:2013',
    title: 'Information Security Management Standard',
    scope: 'Data Protection & Secure Development Lifecycle',
    summary:
      'Referenced information security framework supporting access governance, confidentiality safeguards, and secure engineering infrastructure across client engagements.',
  },
];

// Only verified, organization-approved partnership perspectives without fabricated personal names or invented star ratings.
export const ENGAGEMENT_PERSPECTIVES = [
  {
    id: 'mobility-uae',
    domain: 'Regional Mobility & Dispatch Operations',
    location: 'United Arab Emirates',
    quote:
      'Working with an offshore engineering team requires predictable release cadences and clear architectural ownership. Structured sprint reviews and real-time dispatch reliability allowed our operational teams to coordinate driver and passenger workflows smoothly.',
    focusArea: 'Mobile Applications · Real-Time Dispatch',
  },
  {
    id: 'enterprise-erp',
    domain: 'Multi-Branch Distribution & Inventory Management',
    location: 'Coimbatore, Tamil Nadu',
    quote:
      'Consolidating billing, warehouse stock tracking, and branch reporting into a single cloud ERP architecture eliminated manual spreadsheet reconciliation across departments while preserving strict role-based approvals.',
    focusArea: 'Businessi ERP · Process Automation',
  },
  {
    id: 'commerce-fulfillment',
    domain: 'On-Demand Retail & Grocery Ordering',
    location: 'International Commerce Partner',
    quote:
      'From catalog browsing to order status updates, the engineering focus stayed tightly aligned with checkout simplicity and mobile responsiveness across low-bandwidth connections.',
    focusArea: 'E-commerce · Cross-Platform Mobile',
  },
];
