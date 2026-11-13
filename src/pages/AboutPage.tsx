import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Globe, Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import ResilientImage from '../components/ResilientImage';
import StatCounter from '../components/StatCounter';
import ServiceIcon from '../components/ServiceIcon';
import CallToActionBanner from '../components/CallToActionBanner';
import {
  COMPANY_INFO,
  COMPANY_STATS,
  WHY_CHOOSE_ITEMS,
  CERTIFICATIONS,
} from '../data/company';

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Adhoc Softwares – Coimbatore Software Engineering Partner"
        description="Learn about Adhoc Softwares, our Coimbatore engineering studio, global client delivery model, ISO standards, and 14+ years of software experience."
      />

      {/* Page Header */}
      <section className="bg-[#081426] text-white py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-[#21C8E5]">
              About Us <span aria-hidden="true">·</span> Coimbatore, India
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Your Trusted Technology Partner for Digital Transformation.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Adhoc Softwares combines full-cycle software architecture, dedicated product engineering, and long-term partnership discipline to build dependable systems for enterprises worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Studio & Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-6">
              <div className="h-full min-h-[340px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <ResilientImage
                  src="/src/assets/images/about_coimbatore_studio_1794560267787.jpg"
                  alt="Adhoc Softwares engineers collaborating in our Coimbatore development office"
                  fallbackTitle="Adhoc Softwares Coimbatore Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#081426]">
                Engineering Clarity from Coimbatore to Global Markets
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Operating from Saravanampatti in Coimbatore, Tamil Nadu—one of South India’s fastest-growing technology corridors—Adhoc Softwares partners with ambitious startups, SMEs, and established enterprises to design and maintain mission-critical software.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                From bespoke cloud platforms and mobile ride-hailing ecosystems to our proprietary Businessi ERP and Queue Bot AI products, our engineering teams prioritize maintainable codebases, transparent delivery milestones, and security-first architecture.
              </p>

              <ul className="space-y-2.5 pt-2">
                {[
                  'Dedicated cross-functional squads covering architecture, UI/UX, backend, mobile, and QA',
                  'Time-zone aligned communication for partners across India, UAE, Europe, and North America',
                  'Full IP clarity and structured documentation delivered with every custom engagement',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-[#172337]">
                    <Check className="w-4 h-4 text-[#3478F6] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-14 bg-[#F4F7FB] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_STATS.map((stat) => (
              <div key={stat.id}>
                <p className="text-3xl sm:text-4xl font-bold text-[#081426]">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm font-semibold text-[#172337]">{stat.label}</p>
                <p className="mt-0.5 text-xs text-slate-500">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Adhoc Softwares */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-[#3478F6] mb-2">How We Deliver</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#081426]">
              Seven Pillars Behind Every Client Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-[#F4F7FB]/50 p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#081426] text-[#21C8E5] flex items-center justify-center">
                  <ServiceIcon name={item.iconName} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#081426]">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Global Reach */}
      <section className="py-16 bg-[#F4F7FB] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#3478F6]">
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span>Standards &amp; Headquarters</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#081426]">
                Quality &amp; Security Governance
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Visit or connect with our engineering headquarters at {COMPANY_INFO.address.full}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#3478F6] hover:text-[#102A4C]"
              >
                <span>Connect With Leadership</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert, index) => (
                <div
                  key={cert.code}
                  className="bg-white rounded-xl border border-slate-200 p-6 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#081426] text-[#21C8E5] flex items-center justify-center">
                      {index === 0 ? (
                        <Award className="w-5 h-5" aria-hidden="true" />
                      ) : (
                        <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                      )}
                    </div>
                    <span className="font-mono text-sm font-bold text-[#3478F6]">{cert.code}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#081426]">{cert.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{cert.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToActionBanner />
    </>
  );
}
