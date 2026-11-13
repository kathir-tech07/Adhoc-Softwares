export type PortfolioCategory =
  | 'Mobile Applications'
  | 'Web Applications'
  | 'ERP Solutions'
  | 'E-commerce'
  | 'AI Solutions';

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  region: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  coreModules: string[];
  techStack: string[];
  previewType: 'mobility' | 'events' | 'commerce' | 'fresh' | 'garage' | 'taxi' | 'ai';
  featuredImage?: string;
}

export const PORTFOLIO_CATEGORIES: ('All' | PortfolioCategory)[] = [
  'All',
  'Mobile Applications',
  'Web Applications',
  'ERP Solutions',
  'E-commerce',
  'AI Solutions',
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'rideapp-uae',
    slug: 'rideapp-uae',
    title: 'RideApp UAE',
    category: 'Mobile Applications',
    region: 'United Arab Emirates',
    shortDescription:
      'End-to-end passenger booking and driver dispatch mobile application engineered for urban mobility operations in the UAE.',
    overview:
      'RideApp UAE was engineered to coordinate passenger trip requests, nearby driver matching, fare estimation, and live route tracking across a unified mobile ecosystem.',
    challenge:
      'Urban mobility platforms require low-latency location synchronization between passenger apps, driver apps, and an administrative dispatch console under fluctuating mobile network conditions.',
    solution:
      'Adhoc Softwares architected dedicated passenger and driver mobile applications paired with an operations dashboard supporting live trip monitoring, automated fare calculation, and digital receipts.',
    coreModules: [
      'Passenger ride request & live vehicle tracking',
      'Driver trip acceptance, navigation handoff & earnings ledger',
      'Automated fare & zone pricing configuration',
      'Centralized dispatch & fleet oversight portal',
    ],
    techStack: ['Flutter', 'Android', 'iOS', 'Node.js', 'MySQL', 'AWS'],
    previewType: 'mobility',
    featuredImage: '/src/assets/images/portfolio_mobility_commerce_1794560268493.jpg',
  },
  {
    id: 'event-jam',
    slug: 'event-jam',
    title: 'Event Jam',
    category: 'Web Applications',
    region: 'International Event Ecosystem',
    shortDescription:
      'Interactive event discovery, schedule coordination, and attendee engagement platform built for seamless digital event management.',
    overview:
      'Event Jam provides organizers and attendees with a structured platform to publish event schedules, manage registrations, and coordinate live session updates.',
    challenge:
      'Event organizers needed an intuitive web and mobile-accessible experience where schedules, venue details, and attendee updates stay synchronized without administrative bottlenecks.',
    solution:
      'We delivered a responsive web application and organizer console featuring structured event listings, attendee registration workflows, and real-time schedule management.',
    coreModules: [
      'Event creation & multi-track schedule builder',
      'Attendee registration & digital pass workflows',
      'Venue details & live announcement updates',
      'Organizer dashboard & participation overview',
    ],
    techStack: ['React', 'Node.js', 'MySQL', 'AWS'],
    previewType: 'events',
  },
  {
    id: 'click-your-order',
    slug: 'click-your-order',
    title: 'Click Your Order',
    category: 'E-commerce',
    region: 'Retail & Digital Commerce',
    shortDescription:
      'Streamlined online ordering and storefront management platform enabling merchants to list catalogs and fulfill customer orders digitally.',
    overview:
      'Click Your Order connects merchants and customers through a fast, mobile-ready ordering storefront with structured catalog browsing, cart management, and order status tracking.',
    challenge:
      'Retail merchants needed a straightforward digital ordering channel that minimizes checkout steps for buyers while giving store staff clear order fulfillment queues.',
    solution:
      'Our team built a responsive e-commerce web and mobile system featuring category filtering, real-time order alerts, and an administrative inventory and pricing console.',
    coreModules: [
      'Dynamic product catalog & variant management',
      'Streamlined cart & multi-step checkout validation',
      'Merchant order queue & fulfillment status updates',
      'Customer order history & digital invoicing',
    ],
    techStack: ['React', 'Laravel', 'PHP', 'MySQL', 'Flutter'],
    previewType: 'commerce',
    featuredImage: '/src/assets/images/portfolio_mobility_commerce_1794560268493.jpg',
  },
  {
    id: 'freshy',
    slug: 'freshy',
    title: 'Freshy',
    category: 'E-commerce',
    region: 'On-Demand Fresh Grocery',
    shortDescription:
      'Fresh produce and daily essentials e-commerce application with slot-based delivery scheduling and real-time stock control.',
    overview:
      'Freshy streamlines daily grocery and fresh produce ordering, connecting local inventory hubs with scheduled doorstep deliveries through an approachable mobile-first interface.',
    challenge:
      'Perishable inventory changes rapidly throughout the day, requiring accurate stock availability checks and clear delivery window selection at checkout.',
    solution:
      'Adhoc Softwares engineered a mobile commerce platform with category-first browsing, time-slot delivery scheduling, and backend stock threshold controls.',
    coreModules: [
      'Perishable catalog with live availability status',
      'Scheduled delivery slot & zone management',
      'Repeat basket & quick-reorder workflows',
      'Dispatch & delivery partner status tracking',
    ],
    techStack: ['Flutter', 'PHP', 'Laravel', 'MySQL', 'AWS'],
    previewType: 'fresh',
  },
  {
    id: 'garage-management-system',
    slug: 'garage-management-system',
    title: 'Garage Management System',
    category: 'ERP Solutions',
    region: 'Automotive Service & Fleet',
    shortDescription:
      'Comprehensive automotive workshop ERP automating job cards, spare parts inventory, technician allocation, and customer billing.',
    overview:
      'The Garage Management System digitizes end-to-end automotive service center operations—from vehicle check-in and inspection checklists to spare parts consumption and final invoicing.',
    challenge:
      'Service centers often lose visibility between bay technicians, spare-parts stockrooms, and front-desk billing, leading to delayed turnarounds and untracked parts usage.',
    solution:
      'We built a role-based ERP platform tailored to automotive workshops with digital job cards, automated parts deduction, service history logs, and itemized billing.',
    coreModules: [
      'Digital vehicle intake & inspection job cards',
      'Spare parts inventory & supplier purchase tracking',
      'Bay & mechanic task assignment board',
      'Automated service estimates & tax-compliant invoicing',
    ],
    techStack: ['React', 'Python', 'Django', 'MySQL', 'AWS'],
    previewType: 'garage',
  },
  {
    id: 'taxi-booking-application',
    slug: 'taxi-booking-application',
    title: 'Taxi Booking Application',
    category: 'Mobile Applications',
    region: 'Urban & Regional Transit',
    shortDescription:
      'Cross-platform taxi hailing and fleet coordination system supporting instant rides, scheduled pickups, and live GPS routing.',
    overview:
      'Designed for regional taxi operators looking to modernize phone-based dispatch, the Taxi Booking Application pairs intuitive rider apps with automated driver assignment.',
    challenge:
      'Traditional dispatch desks struggle during peak commute hours when manual call-handling delays vehicle allocation and fare transparency.',
    solution:
      'We implemented an integrated rider app, driver companion app, and operator web console supporting instant and scheduled rides, fare estimates, and trip history records.',
    coreModules: [
      'Instant & scheduled pickup booking flows',
      'Driver availability toggle & proximity dispatch',
      'Real-time route view & fare breakdown',
      'Fleet operator trip logs & settlement reports',
    ],
    techStack: ['React Native', 'Android', 'iOS', 'Node.js', 'MySQL'],
    previewType: 'taxi',
  },
  {
    id: 'queue-bot-automation',
    slug: 'queue-bot-automation',
    title: 'Queue Bot Enterprise Support Suite',
    category: 'AI Solutions',
    region: 'Multi-Industry Customer Operations',
    shortDescription:
      'Conversational AI support deployment automating tier-1 customer inquiries, ticket categorization, and contextual live-agent escalation.',
    overview:
      'Built on Adhoc Softwares’ Queue Bot engine, this AI solution equips customer service teams with automated intent detection, structured self-service flows, and CRM ticket synchronization.',
    challenge:
      'High-volume support desks spend significant agent hours answering repetitive status and policy questions while urgent inquiries wait in undifferentiated queues.',
    solution:
      'We deployed an NLP-driven conversational assistant connected to verified knowledge bases and structured ticketing rules, resolving routine queries automatically and routing complex cases with full context.',
    coreModules: [
      'Natural language intent & entity extraction',
      'Knowledge-base grounded response generation',
      'Rule-based escalation to specialized support queues',
      'Conversation analytics & resolution tracking',
    ],
    techStack: ['Python', 'Django', 'React', 'Node.js', 'AWS'],
    previewType: 'ai',
    featuredImage: '/src/assets/images/product_queue_bot_1794560268003.jpg',
  },
];
