export interface ServiceItem {
  id: string;
  index: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string;
  iconName:
    | 'Code2'
    | 'Globe'
    | 'Smartphone'
    | 'Database'
    | 'BrainCircuit'
    | 'Palette'
    | 'ShoppingBag'
    | 'Cpu'
    | 'Cloud'
    | 'CheckSquare';
  capabilities: string[];
  deliverables: string[];
  techStack: string[];
  engagementNote: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-software',
    index: '01',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortTitle: 'Custom Software',
    summary:
      'Bespoke enterprise applications engineered around your exact operational workflows, security requirements, and integration landscape.',
    overview:
      'Off-the-shelf software often forces growing organizations to bend core processes around rigid templates. Adhoc Softwares designs and builds tailored desktop, cloud, and API-first software systems that fit seamlessly into your business logic, legacy databases, and compliance controls.',
    iconName: 'Code2',
    capabilities: [
      'Domain discovery and technical architecture blueprinting',
      'Legacy system modernization and structured data migration',
      'Multi-tenant SaaS architecture and role-based access control',
      'Third-party ERP, payment gateway, and logistics API integrations',
    ],
    deliverables: [
      'System Architecture Specification',
      'Modular Production Codebase',
      'Automated API & Integration Documentation',
      'Post-Launch Maintenance & SLA Support',
    ],
    techStack: ['Python', 'Django', 'Node.js', 'React', 'MySQL', 'AWS'],
    engagementNote: 'Built for complex internal platforms, B2B portals, and multi-department workflows.',
  },
  {
    id: 'web-application',
    index: '02',
    slug: 'web-application-development',
    title: 'Web Application Development',
    shortTitle: 'Web Applications',
    summary:
      'High-speed, responsive web portals and SaaS platforms engineered with modern JavaScript frameworks and resilient server backends.',
    overview:
      'We build browser-based business platforms, customer self-service portals, and interactive dashboards designed for clarity and high concurrency. Every interface is crafted for cross-browser consistency, fast initial rendering, and maintainable component architecture.',
    iconName: 'Globe',
    capabilities: [
      'Single-page applications and enterprise admin portals',
      'RESTful API engineering and real-time event streaming',
      'Responsive layouts across desktop, tablet, and mobile viewports',
      'Search engine optimization and semantic HTML accessibility',
    ],
    deliverables: [
      'Responsive Frontend Application',
      'Hardened Backend API Layer',
      'CI/CD Deployment Pipeline',
      'Cross-Browser Verification Report',
    ],
    techStack: ['React', 'Angular', 'Vue.js', 'Laravel', 'Node.js', 'MySQL'],
    engagementNote: 'Ideal for customer portals, booking engines, and SaaS dashboards.',
  },
  {
    id: 'mobile-app',
    index: '03',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    summary:
      'Native iOS, Android, and cross-platform Flutter and React Native applications built for smooth daily utility and offline resilience.',
    overview:
      'From on-demand ride dispatch to consumer retail ordering, our mobile team delivers applications engineered for responsive touch interactions, reliable push notifications, background geolocation handling, and App Store / Google Play compliance.',
    iconName: 'Smartphone',
    capabilities: [
      'Native Android and iOS application engineering',
      'Cross-platform development with Flutter and React Native',
      'Real-time GPS tracking, routing, and live status updates',
      'Secure mobile authentication and payment SDK integration',
    ],
    deliverables: [
      'iOS & Android Production Builds',
      'Mobile API Synchronization Layer',
      'Store Submission & Release Management',
      'Crash Monitoring & Performance Tuning',
    ],
    techStack: ['Flutter', 'React Native', 'Android', 'iOS', 'Node.js', 'AWS'],
    engagementNote: 'Backed by over 100 mobile applications built for diverse service sectors.',
  },
  {
    id: 'erp-software',
    index: '04',
    slug: 'erp-software-development',
    title: 'ERP Software Development',
    shortTitle: 'ERP Software',
    summary:
      'Unified resource planning systems connecting finance, inventory, procurement, manufacturing, and human resources in real time.',
    overview:
      'Drawing from the real-world engineering behind our Businessi ERP platform, we architect custom ERP modules and company-wide operational suites that eliminate data silos and provide leadership with live visibility across branches.',
    iconName: 'Database',
    capabilities: [
      'Accounting ledgers, invoicing, and tax compliance workflows',
      'Multi-warehouse inventory, procurement, and vendor portals',
      'Human resources, attendance, and payroll automation',
      'Role-governed executive reporting and audit trails',
    ],
    deliverables: [
      'Custom ERP Module Suite',
      'Role & Permission Matrix',
      'Data Import & Legacy Migration Tools',
      'Team Onboarding & Documentation',
    ],
    techStack: ['PHP', 'Laravel', 'Python', 'React', 'MySQL', 'AWS'],
    engagementNote: 'Designed for manufacturing, distribution, automotive garages, and multi-site enterprises.',
  },
  {
    id: 'ai-machine-learning',
    index: '05',
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    shortTitle: 'AI & ML',
    summary:
      'Intelligent automation, conversational assistants, and predictive analytics pipelines integrated directly into your business software.',
    overview:
      'We help organizations move beyond experimental proofs of concept by embedding practical AI capabilities into daily operations—from natural-language customer support routing with Queue Bot to demand forecasting and document processing.',
    iconName: 'BrainCircuit',
    capabilities: [
      'Conversational AI chatbots and automated support triage',
      'Natural language processing and knowledge base retrieval',
      'Predictive analytics and anomaly detection pipelines',
      'Human-in-the-loop escalation and auditability controls',
    ],
    deliverables: [
      'Trained Model / Prompt Orchestration Service',
      'API Integration with Existing CRM or ERP',
      'Evaluation & Accuracy Benchmark Suite',
      'Guardrail & Monitoring Configuration',
    ],
    techStack: ['Python', 'Django', 'Node.js', 'React', 'AWS'],
    engagementNote: 'Practical machine intelligence engineered with clear operational guardrails.',
  },
  {
    id: 'ui-ux-design',
    index: '06',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortTitle: 'UI/UX Design',
    summary:
      'Human-centered product interfaces, design systems, and interactive prototypes that reduce friction and accelerate user adoption.',
    overview:
      'Great engineering relies on clear interaction design. Our design team maps real user journeys, structures complex enterprise data into scannable screens, and builds reusable component libraries ready for frontend implementation.',
    iconName: 'Palette',
    capabilities: [
      'User research, workflow mapping, and information architecture',
      'Interactive wireframes and clickable product prototypes',
      'Multi-platform design systems and accessibility compliance',
      'Usability audits for existing web and mobile software',
    ],
    deliverables: [
      'Information Architecture & User Flows',
      'High-Fidelity Interactive Prototypes',
      'Tokenized Component Design System',
      'Developer Handoff Specifications',
    ],
    techStack: ['React', 'Vue.js', 'Flutter'],
    engagementNote: 'Bridging visual clarity and engineering feasibility from day one.',
  },
  {
    id: 'ecommerce-development',
    index: '07',
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    shortTitle: 'E-commerce',
    summary:
      'Scalable digital storefronts, multi-vendor marketplaces, and mobile ordering platforms tailored for seamless checkout and fulfillment.',
    overview:
      'Whether launching a hyperlocal fresh-grocery storefront or a B2B wholesale ordering portal, we engineer fast catalogs, real-time stock synchronization, flexible discount rules, and dependable payment workflows.',
    iconName: 'ShoppingBag',
    capabilities: [
      'Custom B2C and B2B storefront architecture',
      'Multi-vendor marketplace and delivery slot scheduling',
      'Real-time cart, inventory sync, and order tracking',
      'Secure payment gateway and invoice generation workflows',
    ],
    deliverables: [
      'Customer Storefront (Web & Mobile)',
      'Merchant & Inventory Admin Console',
      'Payment & Logistics Webhooks',
      'SEO-Structured Product Catalog',
    ],
    techStack: ['React', 'Laravel', 'Flutter', 'MySQL', 'AWS'],
    engagementNote: 'Proven across retail ordering platforms including Click Your Order and Freshy.',
  },
  {
    id: 'iot-solutions',
    index: '08',
    slug: 'iot-solutions',
    title: 'IoT Solutions',
    shortTitle: 'IoT Solutions',
    summary:
      'Connected device telemetry, edge-to-cloud ingestion backends, and real-time operational monitoring dashboards.',
    overview:
      'We connect physical equipment, fleet sensors, and industrial machinery to reliable cloud platforms—enabling continuous telemetry capture, threshold alerting, and remote diagnostic dashboards.',
    iconName: 'Cpu',
    capabilities: [
      'Device-to-cloud telemetry ingestion and protocol handling',
      'Real-time operational monitoring and alert rules',
      'Mobile companion apps for field technicians and operators',
      'Historical sensor data aggregation and reporting',
    ],
    deliverables: [
      'Cloud Telemetry Ingestion Service',
      'Live Operations Dashboard',
      'Device Provisioning & Alert Engine',
      'Technician Companion Interface',
    ],
    techStack: ['Python', 'Node.js', 'AWS', 'React', 'Flutter'],
    engagementNote: 'Connecting field hardware with actionable cloud software.',
  },
  {
    id: 'cloud-computing',
    index: '09',
    slug: 'cloud-computing',
    title: 'Cloud Computing',
    shortTitle: 'Cloud Computing',
    summary:
      'Resilient AWS cloud architecture, automated deployment pipelines, database tuning, and high-availability infrastructure management.',
    overview:
      'Modern applications depend on predictable uptime and cost-conscious cloud topology. Our cloud engineers design secure VPC networks, containerized workloads, automated backups, and CI/CD workflows that keep releases smooth and dependable.',
    iconName: 'Cloud',
    capabilities: [
      'Cloud architecture design and AWS workload migration',
      'Auto-scaling compute, load balancing, and CDN setup',
      'Database performance tuning, replication, and backup automation',
      'Continuous integration and zero-downtime deployment pipelines',
    ],
    deliverables: [
      'Cloud Topology & Security Blueprint',
      'Automated CI/CD Pipelines',
      'Backup & Disaster Recovery Runbook',
      'Infrastructure Monitoring Setup',
    ],
    techStack: ['AWS', 'Cloud Computing', 'Python', 'Node.js', 'MySQL'],
    engagementNote: 'Built for international availability, data resilience, and predictable scaling.',
  },
  {
    id: 'software-testing',
    index: '10',
    slug: 'software-testing-automation',
    title: 'Software Testing & Automation',
    shortTitle: 'QA & Automation',
    summary:
      'Comprehensive manual and automated quality assurance ensuring functional accuracy, regression stability, and security readiness.',
    overview:
      'Every release goes through disciplined validation before reaching production. Our QA engineering team builds repeatable regression suites, validates API contracts, tests cross-device mobile behavior, and verifies performance under load.',
    iconName: 'CheckSquare',
    capabilities: [
      'End-to-end automated web and mobile regression suites',
      'API contract, integration, and load testing',
      'Cross-device and cross-browser compatibility validation',
      'Security posture checks and pre-release sign-off governance',
    ],
    deliverables: [
      'QA Test Strategy & Coverage Matrix',
      'Automated Regression Test Suite',
      'Defect Traceability & Verification Logs',
      'Release Readiness Assessment',
    ],
    techStack: ['Python', 'Node.js', 'React', 'Android', 'iOS'],
    engagementNote: 'Aligned with ISO 9001:2015 quality assurance discipline.',
  },
];
