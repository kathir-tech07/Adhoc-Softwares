export interface JobOpening {
  id: string;
  title: string;
  department: 'Engineering' | 'Mobile' | 'Design' | 'Quality Assurance';
  location: string;
  type: string;
  experience: string;
  summary: string;
  skills: string[];
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'senior-react-engineer',
    title: 'Senior Frontend Engineer (React / TypeScript)',
    department: 'Engineering',
    location: 'Coimbatore, Tamil Nadu (On-Site / Hybrid)',
    type: 'Full-Time',
    experience: '3–6 Years',
    summary:
      'Architect responsive SaaS portals, enterprise ERP interfaces, and component systems using React, Tailwind CSS, and modern state patterns.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    id: 'python-django-developer',
    title: 'Backend Software Engineer (Python / Django)',
    department: 'Engineering',
    location: 'Coimbatore, Tamil Nadu (On-Site)',
    type: 'Full-Time',
    experience: '2–5 Years',
    summary:
      'Design scalable APIs, multi-tenant database schemas, and AI automation pipelines powering enterprise client platforms.',
    skills: ['Python', 'Django', 'MySQL', 'AWS'],
  },
  {
    id: 'flutter-mobile-engineer',
    title: 'Mobile Application Developer (Flutter)',
    department: 'Mobile',
    location: 'Coimbatore, Tamil Nadu (On-Site)',
    type: 'Full-Time',
    experience: '2–5 Years',
    summary:
      'Build cross-platform iOS and Android mobility, commerce, and field-operations apps with clean architecture and reliable offline state.',
    skills: ['Flutter', 'Dart', 'REST / WebSockets', 'Android & iOS'],
  },
  {
    id: 'laravel-fullstack-engineer',
    title: 'Full-Stack Developer (PHP / Laravel & Vue)',
    department: 'Engineering',
    location: 'Coimbatore, Tamil Nadu (On-Site)',
    type: 'Full-Time',
    experience: '2–4 Years',
    summary:
      'Develop and maintain modular ERP workflows, e-commerce backends, and business automation portals.',
    skills: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
  },
  {
    id: 'product-ui-ux-designer',
    title: 'UI/UX Product Designer',
    department: 'Design',
    location: 'Coimbatore, Tamil Nadu (On-Site / Hybrid)',
    type: 'Full-Time',
    experience: '2–5 Years',
    summary:
      'Translate complex enterprise requirements into clean user flows, wireframes, design systems, and accessible web and mobile interfaces.',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'UX Research'],
  },
  {
    id: 'qa-automation-engineer',
    title: 'QA & Test Automation Engineer',
    department: 'Quality Assurance',
    location: 'Coimbatore, Tamil Nadu (On-Site)',
    type: 'Full-Time',
    experience: '2–4 Years',
    summary:
      'Own end-to-end regression suites, API contract verification, and cross-browser/device release sign-off across client projects.',
    skills: ['Automated Testing', 'API Testing', 'Test Planning', 'CI/CD'],
  },
];

export const CAREER_BENEFITS = [
  {
    title: 'Global Project Exposure',
    description:
      'Collaborate directly on production software serving enterprises across India, the UAE, Europe, and North America.',
  },
  {
    title: 'Engineering Mentorship',
    description:
      'Work alongside senior architects with 14+ years of industry experience through structured code reviews and design sessions.',
  },
  {
    title: 'Coimbatore Tech Campus',
    description:
      'Located in Saravanampatti—Coimbatore’s growing technology corridor—with collaborative workstations and focused engineering zones.',
  },
  {
    title: 'Continuous Skill Growth',
    description:
      'Hands-on learning across modern web frameworks, mobile platforms, cloud infrastructure, and applied AI.',
  },
];
