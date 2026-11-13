import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import ServiceIcon from '../components/ServiceIcon';
import CallToActionBanner from '../components/CallToActionBanner';
import { SERVICES } from '../data/services';

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Software Engineering Services – Adhoc Softwares"
        description="Explore 10 specialized software services from Adhoc Softwares: custom software, web & mobile apps, ERP, AI & ML, UI/UX, e-commerce, IoT, cloud, and QA automation."
      />

      {/* Header */}
      <section className="bg-[#081426] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-[#21C8E5]">
              Engineering Services <span aria-hidden="true">·</span> 10 Core Practices
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Full-Cycle Software Capabilities Built for Scale and Longevity.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From architecture discovery and UI/UX prototyping to cloud deployment and automated testing, every service practice works together as one unified engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Services Index */}
      <section className="py-20 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#081426] text-[#21C8E5] flex items-center justify-center shrink-0">
                    <ServiceIcon name={service.iconName} className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#3478F6] tabular-nums">
                    Service {service.index}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-[#081426]">{service.title}</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.overview}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#3478F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    <span>Explore {service.shortTitle}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="text-sm font-semibold text-[#081426] hover:text-[#3478F6] transition-colors whitespace-nowrap"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pl-6 lg:border-l lg:border-slate-100">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Capabilities
                  </h3>
                  <ul className="space-y-2.5">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-sm text-[#172337]">
                        <Check
                          className="w-4 h-4 text-[#3478F6] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Verified Technologies
                    </h3>
                    <p className="text-sm font-medium text-[#081426]">
                      {service.techStack.join(' · ')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Typical Engagement
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.engagementNote}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CallToActionBanner />
    </>
  );
}
