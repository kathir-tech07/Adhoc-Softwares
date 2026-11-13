import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  ShieldCheck,
  Award,
  Quote,
} from 'lucide-react';
import PageMeta from '../components/PageMeta';
import StatCounter from '../components/StatCounter';
import ResilientImage from '../components/ResilientImage';
import ServiceIcon from '../components/ServiceIcon';
import CaseStudyPreview from '../components/CaseStudyPreview';
import CallToActionBanner from '../components/CallToActionBanner';
import ContactSection from '../components/ContactSection';
import {
  COMPANY_STATS,
  WHY_CHOOSE_ITEMS,
  TECH_STACK,
  CERTIFICATIONS,
  ENGAGEMENT_PERSPECTIVES,
} from '../data/company';
import { SERVICES } from '../data/services';
import { PRODUCTS } from '../data/products';
import { CASE_STUDIES, PORTFOLIO_CATEGORIES, PortfolioCategory } from '../data/portfolio';
import { INSIGHTS } from '../data/insights';

const HERO_SHOWCASES = [
  {
    id: 'engineering',
    label: 'Custom Engineering',
    title: 'Enterprise Cloud & Web Platforms',
    summary:
      'Bespoke multi-tenant SaaS architectures, API ecosystems, and native mobile systems engineered in Coimbatore for global enterprises.',
    image: '/src/assets/images/hero_enterprise_architecture_1794560266165.jpg',
    imageAlt: 'Enterprise cloud software architecture and interconnected digital network infrastructure',
    href: '/services',
    cta: 'Explore All 10 Services',
    highlights: ['React · Angular · Vue.js', 'Python · Django · Node.js', 'AWS Cloud & MySQL'],
  },
  {
    id: 'erp',
    label: 'Businessi ERP',
    title: 'Cloud ERP for Multi-Branch Control',
    summary:
      'Centralize accounting ledgers, inventory, procurement, and payroll inside one role-governed cloud platform.',
    image: '/src/assets/images/product_businessi_erp_1794560268404.jpg',
    imageAlt: 'Businessi ERP cloud financial ledger and inventory dashboard',
    href: '/products#businessi-erp',
    cta: 'Explore Businessi ERP',
    highlights: ['Finance & GST Invoicing', 'Multi-Warehouse Stock', 'HR & Payroll Workflows'],
  },
  {
    id: 'queuebot',
    label: 'Queue Bot AI',
    title: 'Automated Customer Support AI',
    summary:
      'Resolve routine customer inquiries instantly with intent routing and contextual handoff to live support specialists.',
    image: '/src/assets/images/product_queue_bot_1794560268003.jpg',
    imageAlt: 'Queue Bot conversational AI support interface on laptop and smartphone',
    href: '/products#queue-bot',
    cta: 'Explore Queue Bot',
    highlights: ['24/7 Inquiry Triage', 'Knowledge Base Grounding', 'Live Agent Handoff'],
  },
];

export default function HomePage() {
  const [heroTab, setHeroTab] = useState<string>('engineering');
  const [activeTechGroup, setActiveTechGroup] = useState<string>('all');
  const [activePortfolioCategory, setActivePortfolioCategory] = useState<'All' | PortfolioCategory>('All');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const activeHeroShowcase =
    HERO_SHOWCASES.find((item) => item.id === heroTab) || HERO_SHOWCASES[0];

  const visibleTechGroups =
    activeTechGroup === 'all'
      ? TECH_STACK
      : TECH_STACK.filter((group) => group.id === activeTechGroup);

  const filteredCaseStudies =
    activePortfolioCategory === 'All'
      ? CASE_STUDIES.slice(0, 6)
      : CASE_STUDIES.filter((study) => study.category === activePortfolioCategory);

  const activePerspective = ENGAGEMENT_PERSPECTIVES[testimonialIndex];

  const handlePrevPerspective = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? ENGAGEMENT_PERSPECTIVES.length - 1 : prev - 1
    );
  };

  const handleNextPerspective = () => {
    setTestimonialIndex((prev) =>
      prev === ENGAGEMENT_PERSPECTIVES.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <PageMeta
        title="Adhoc Softwares – Custom Software, ERP & AI Engineering"
        description="Adhoc Softwares engineers custom software, web and mobile apps, Businessi ERP, and Queue Bot AI in Coimbatore, India for global enterprises."
      />

      {/* Section 2: Hero Section */}
      <section className="relative overflow-hidden bg-[#081426] text-white">
        {/* Full-bleed architectural hero background */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0.75, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/src/assets/images/hero_first_screen_bg_1794574757101.jpg`}
            alt=""
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Measured directional scrims for >= 4.5:1 text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#081426] via-[#081426]/85 to-[#081426]/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#081426] via-transparent to-[#081426]/45"
        />

        {/* Subtle ambient radial glow */}
        <div
          aria-hidden="true"
          className="absolute -top-28 right-1/4 w-[520px] h-[520px] rounded-full bg-[#3478F6]/15 blur-3xl pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Copy */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <p className="text-xs sm:text-sm font-medium text-[#21C8E5] tracking-wide">
                Coimbatore, India <span aria-hidden="true">·</span> Global Software Engineering
              </p>

              <h1 className="text-[clamp(2.25rem,4vw,3.65rem)] font-bold tracking-tight leading-[1.08] text-white text-balance">
                Turning Ideas Into Powerful Digital Solutions.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                We engineer innovative software, intelligent applications, and scalable digital experiences that help businesses grow and succeed.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#3478F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-colors whitespace-nowrap shadow-lg shadow-[#3478F6]/25"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </motion.div>

            {/* Interactive Glassmorphism Engineering Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#081426]/70 backdrop-blur-xl shadow-2xl">
                {/* Interactive Showcase Switcher */}
                <div
                  role="tablist"
                  aria-label="Preview Adhoc Softwares flagship solutions"
                  className="flex items-center gap-1 p-2 border-b border-white/10 bg-white/[0.03] overflow-x-auto"
                >
                  {HERO_SHOWCASES.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={heroTab === item.id}
                      onClick={() => setHeroTab(item.id)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        heroTab === item.id
                          ? 'bg-[#3478F6] text-white'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="aspect-[16/9] w-full bg-[#081426] overflow-hidden">
                  <ResilientImage
                    key={activeHeroShowcase.id}
                    src={activeHeroShowcase.image}
                    alt={activeHeroShowcase.imageAlt}
                    fallbackTitle={activeHeroShowcase.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <h2 className="text-base font-bold text-white">
                        {activeHeroShowcase.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {activeHeroShowcase.summary}
                      </p>
                    </div>
                    <Link
                      to={activeHeroShowcase.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#21C8E5] hover:text-white transition-colors whitespace-nowrap shrink-0 pt-0.5"
                    >
                      <span>{activeHeroShowcase.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300">
                    {activeHeroShowcase.highlights.map((hl, idx) => (
                      <span key={hl} className="inline-flex items-center gap-4">
                        {idx > 0 && (
                          <span aria-hidden="true" className="text-slate-500">
                            ·
                          </span>
                        )}
                        <span>{hl}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Company Statistics (4-column KPI strip below hero) */}
      <section className="bg-[#F4F7FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200">
            {COMPANY_STATS.map((stat, idx) => (
              <div
                key={stat.id}
                className={`${idx > 0 ? 'lg:pl-8' : ''} ${idx < 3 ? 'lg:pr-8' : ''}`}
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#081426] tracking-tight">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#172337]">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: About Adhoc Softwares */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-5">
              <div className="h-full min-h-[320px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <ResilientImage
                  src="/src/assets/images/about_coimbatore_studio_1794560267787.jpg"
                  alt="Adhoc Softwares engineering collaboration studio in Coimbatore"
                  fallbackTitle="Adhoc Softwares Engineering Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <p className="text-sm font-semibold text-[#3478F6] mb-2">About Adhoc Softwares</p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081426] text-balance">
                  Your Trusted Technology Partner for Digital Transformation.
                </h2>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                Headquartered in Coimbatore, Tamil Nadu, Adhoc Softwares is a full-cycle software engineering firm building custom web platforms, enterprise ERP suites, mobile applications, and applied AI solutions for organizations in India and worldwide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
                <div>
                  <h3 className="text-sm font-bold text-[#081426]">Innovation &amp; Technology</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    Modern full-stack frameworks, cloud infrastructure, and practical machine intelligence tailored to real operations.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#081426]">Client-Focused Development</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    Milestone-driven delivery with transparent technical communication from discovery through launch.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#081426]">Quality &amp; Reliability</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    Structured QA verification and engineering workflows aligned with ISO 9001:2015 and ISO 27001:2013 practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#081426]">International Presence</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    Serving startups and enterprise teams across India, the UAE, Europe, and global markets.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#081426] hover:bg-[#102A4C] text-white text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Services (All 10 Services) */}
      <section className="py-20 lg:py-24 bg-[#F4F7FB] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#3478F6] mb-2">Our Services</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081426] text-balance">
                End-to-End Engineering Capabilities Across Web, Mobile, ERP &amp; AI
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3478F6] hover:text-[#102A4C] transition-colors whitespace-nowrap"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className={`group bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-150 hover:border-[#3478F6]/50 hover:-translate-y-0.5 ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-[#F8FAFF]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-[#F4F7FB] border border-slate-200/70 flex items-center justify-center text-[#3478F6] group-hover:bg-[#3478F6] group-hover:text-white transition-colors">
                      <ServiceIcon name={service.iconName} className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 tabular-nums">
                      {service.index}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#081426] group-hover:text-[#3478F6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#081426] group-hover:text-[#3478F6]">
                  <span>Learn More</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Our Products */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-[#3478F6] mb-2">Our Products</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081426] text-balance">
              Enterprise Software Products Built in House
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Ready-to-deploy platforms engineered by Adhoc Softwares to streamline operational management and automate customer support.
            </p>
          </div>

          <div className="space-y-12">
            {PRODUCTS.map((product, idx) => (
              <div
                key={product.id}
                className="rounded-2xl border border-slate-200 bg-[#F4F7FB] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                <div
                  className={`lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6 ${
                    idx % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div>
                    <p className="text-xs font-semibold text-[#3478F6] mb-1.5">
                      {product.category}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#081426]">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-base text-slate-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    {product.keyFeatures.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-[#172337]">
                        <Check className="w-4 h-4 text-[#3478F6] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Link
                      to={`/products#${product.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#3478F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-colors whitespace-nowrap"
                    >
                      <span>Explore {product.name}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 min-h-[280px] bg-[#081426] ${
                    idx % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <ResilientImage
                    src={product.image}
                    alt={product.imageAlt}
                    fallbackTitle={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Choose Adhoc Softwares? */}
      <section className="py-20 lg:py-24 bg-[#081426] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <p className="text-sm font-semibold text-[#21C8E5]">Why Adhoc Softwares</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                Engineering Discipline Designed for Long-Term Value
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                International clients choose Adhoc Softwares for predictable architecture, responsive collaboration, and secure production delivery.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#21C8E5] hover:text-white transition-colors"
                >
                  <span>Schedule a Technical Consultation</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-6 space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#3478F6]/20 border border-[#3478F6]/30 flex items-center justify-center text-[#21C8E5]">
                    <ServiceIcon name={item.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Technology Expertise */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#3478F6] mb-2">Technology Expertise</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081426] text-balance">
                Proven Frameworks &amp; Cloud Foundations
              </h2>
            </div>

            {/* Interactive Stack Filter */}
            <div
              role="tablist"
              aria-label="Filter technology stack"
              className="flex flex-wrap items-center gap-1 p-1 bg-[#F4F7FB] rounded-lg border border-slate-200/80"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTechGroup === 'all'}
                onClick={() => setActiveTechGroup('all')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  activeTechGroup === 'all'
                    ? 'bg-white text-[#081426] shadow-sm'
                    : 'text-slate-600 hover:text-[#081426]'
                }`}
              >
                All Stacks
              </button>
              {TECH_STACK.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTechGroup === group.id}
                  onClick={() => setActiveTechGroup(group.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    activeTechGroup === group.id
                      ? 'bg-white text-[#081426] shadow-sm'
                      : 'text-slate-600 hover:text-[#081426]'
                  }`}
                >
                  {group.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {visibleTechGroups.map((group) => (
              <div
                key={group.id}
                className="rounded-xl border border-slate-200 bg-[#F4F7FB]/60 p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-slate-200/80">
                  <h3 className="text-lg font-bold text-[#081426]">{group.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600">{group.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {group.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="bg-white rounded-lg border border-slate-200/90 p-4 flex items-start gap-3"
                    >
                      <div className="w-9 h-9 rounded-md bg-[#081426] text-[#21C8E5] font-mono text-xs font-semibold flex items-center justify-center shrink-0">
                        {tech.code}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-[#081426] truncate">{tech.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">{tech.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Portfolio / Case Studies */}
      <section className="py-20 lg:py-24 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#3478F6] mb-2">
                Portfolio &amp; Case Studies
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081426] text-balance">
                Software Platforms Engineered for Real-World Operations
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3478F6] hover:text-[#102A4C] transition-colors whitespace-nowrap"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Interactive Portfolio Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter portfolio projects by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 mb-10 w-fit"
          >
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activePortfolioCategory === category}
                onClick={() => setActivePortfolioCategory(category)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activePortfolioCategory === category
                    ? 'bg-[#081426] text-white'
                    : 'text-slate-600 hover:text-[#081426] hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.map((study) => (
              <article
                key={study.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-150 hover:border-[#3478F6]/50"
              >
                <div>
                  <CaseStudyPreview study={study} className="h-56" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-medium text-[#3478F6]">{study.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{study.region}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#081426]">{study.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {study.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {study.techStack.slice(0, 3).join(' · ')}
                  </span>
                  <Link
                    to={`/portfolio/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#081426] hover:text-[#3478F6] transition-colors whitespace-nowrap"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Client Testimonials / Engagement Perspectives Carousel */}
      <section className="py-20 lg:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm font-semibold text-[#3478F6]">Client Engagement Focus</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081426] text-balance">
                Partnership Outcomes Across Industries
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Representative collaboration summaries across our core delivery practices. Named client endorsements and verified ratings are published only with explicit written partner approval.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handlePrevPerspective}
                  aria-label="Previous engagement summary"
                  className="w-10 h-10 rounded-lg border border-slate-300 hover:border-[#081426] flex items-center justify-center text-[#081426] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextPerspective}
                  aria-label="Next engagement summary"
                  className="w-10 h-10 rounded-lg border border-slate-300 hover:border-[#081426] flex items-center justify-center text-[#081426] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="ml-2 font-mono text-xs text-slate-500 tabular-nums">
                  0{testimonialIndex + 1} / 0{ENGAGEMENT_PERSPECTIVES.length}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#F4F7FB] border border-slate-200 p-8 sm:p-10">
                <Quote className="w-8 h-8 text-[#3478F6]/40 mb-5" aria-hidden="true" />
                <blockquote className="text-lg sm:text-xl font-medium text-[#081426] leading-relaxed">
                  “{activePerspective.quote}”
                </blockquote>
                <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-bold text-[#081426]">{activePerspective.domain}</p>
                    <p className="text-xs text-slate-500">{activePerspective.location}</p>
                  </div>
                  <p className="text-xs font-medium text-[#3478F6]">
                    {activePerspective.focusArea}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Certifications & Trust */}
      <section className="py-16 lg:py-20 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-semibold text-[#3478F6] mb-2">
                Certifications &amp; Governance
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#081426]">
                Quality &amp; Information Security Standards
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Standards referenced on the Adhoc Softwares corporate profile guiding engineering quality and data security processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={cert.code}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#081426] text-[#21C8E5] flex items-center justify-center shrink-0">
                  {index === 0 ? (
                    <Award className="w-6 h-6" aria-hidden="true" />
                  ) : (
                    <ShieldCheck className="w-6 h-6" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-1">
                    <span className="font-mono font-semibold text-[#3478F6]">{cert.code}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cert.scope}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#081426]">{cert.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{cert.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Call To Action */}
      <CallToActionBanner />

      {/* Section 13: Latest Insights / Blog */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold text-[#3478F6] mb-2">Latest Insights</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081426]">
                Engineering Perspectives &amp; Technical Briefs
              </h2>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3478F6] hover:text-[#102A4C] transition-colors whitespace-nowrap"
            >
              <span>Read All Articles</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHTS.slice(0, 3).map((article) => (
              <article
                key={article.id}
                className="flex flex-col justify-between border-t border-slate-200 pt-6"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-[#3478F6]">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#081426] leading-snug">
                    <Link
                      to={`/insights/${article.slug}`}
                      className="hover:text-[#3478F6] transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{article.excerpt}</p>
                </div>

                <div className="mt-5">
                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#081426] hover:text-[#3478F6] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 14: Contact Section */}
      <ContactSection />
    </>
  );
}
