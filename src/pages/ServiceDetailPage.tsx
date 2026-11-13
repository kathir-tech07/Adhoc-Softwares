import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import ServiceIcon from '../components/ServiceIcon';
import CallToActionBanner from '../components/CallToActionBanner';
import { SERVICES } from '../data/services';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="py-24 bg-[#F4F7FB]">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h1 className="text-3xl font-bold text-[#081426]">Service Not Found</h1>
          <p className="text-slate-600">
            The requested engineering service page could not be located. Browse our complete catalog below.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#3478F6] text-white text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>View All Services</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageMeta
        title={`${service.title} – Adhoc Softwares`}
        description={service.summary}
      />

      {/* Hero Header */}
      <section className="bg-[#081426] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to All Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium text-[#21C8E5]">
                <span className="font-mono tabular-nums">Service {service.index}</span>
                <span aria-hidden="true">·</span>
                <span>Adhoc Softwares Engineering</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-balance">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {service.summary}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#3478F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <span>Start a {service.shortTitle} Project</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F4F7FB] border border-slate-200 flex items-center justify-center text-[#3478F6]">
                <ServiceIcon name={service.iconName} className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#081426]">Engineering Scope &amp; Approach</h2>
              <p className="text-base text-slate-600 leading-relaxed">{service.overview}</p>
              <p className="text-sm font-medium text-[#3478F6]">{service.engagementNote}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#081426]">Core Capabilities</h3>
                <ul className="space-y-3">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm text-[#172337]">
                      <Check
                        className="w-4 h-4 text-[#3478F6] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#081426]">Standard Deliverables</h3>
                <ul className="space-y-3">
                  {service.deliverables.map((del) => (
                    <li key={del} className="flex items-start gap-2.5 text-sm text-[#172337]">
                      <Check
                        className="w-4 h-4 text-[#21C8E5] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-[#F4F7FB] border border-slate-200 p-6 sm:p-8">
              <h3 className="text-base font-bold text-[#081426] mb-3">
                Technologies Applied in This Practice
              </h3>
              <p className="text-sm text-slate-600">
                {service.techStack.join(' · ')}
              </p>
            </div>
          </div>

          {/* Sidebar Directory */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-xl border border-slate-200 bg-[#F4F7FB] p-6">
              <h3 className="text-sm font-bold text-[#081426] mb-4">All Engineering Services</h3>
              <nav aria-label="Services directory" className="space-y-1">
                {SERVICES.map((item) => (
                  <Link
                    key={item.id}
                    to={`/services/${item.slug}`}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      item.slug === service.slug
                        ? 'bg-[#081426] text-white font-semibold'
                        : 'text-[#172337] hover:bg-white'
                    }`}
                  >
                    <span className="truncate pr-2">{item.title}</span>
                    <span className="font-mono text-xs opacity-70 tabular-nums">{item.index}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </section>

      <CallToActionBanner />
    </>
  );
}
