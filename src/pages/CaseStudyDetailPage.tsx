import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import CaseStudyPreview from '../components/CaseStudyPreview';
import CallToActionBanner from '../components/CallToActionBanner';
import { CASE_STUDIES } from '../data/portfolio';

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = CASE_STUDIES.find((item) => item.slug === slug);

  if (!study) {
    return (
      <section className="py-24 bg-[#F4F7FB]">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h1 className="text-3xl font-bold text-[#081426]">Case Study Not Found</h1>
          <p className="text-slate-600">
            The requested project case study could not be found. Browse our portfolio catalog below.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#3478F6] text-white text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </section>
    );
  }

  const relatedStudies = CASE_STUDIES.filter((s) => s.slug !== study.slug).slice(0, 3);

  return (
    <>
      <PageMeta
        title={`${study.title} Case Study – Adhoc Softwares`}
        description={study.shortDescription}
      />

      <section className="bg-[#081426] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-sm text-[#21C8E5] font-medium">
                <span>{study.category}</span>
                <span aria-hidden="true">·</span>
                <span>{study.region}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-balance">
                {study.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {study.overview}
              </p>
            </div>

            <div className="lg:col-span-5">
              <CaseStudyPreview
                study={study}
                className="rounded-xl border border-white/15 h-64 sm:h-72"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-[#081426]">Operational Context &amp; Challenge</h2>
              <p className="text-base text-slate-600 leading-relaxed">{study.challenge}</p>
            </div>

            <div className="space-y-3 pt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-[#081426]">Engineered Architecture &amp; Solution</h2>
              <p className="text-base text-slate-600 leading-relaxed">{study.solution}</p>
            </div>

            <div className="space-y-4 pt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-[#081426]">Core Functional Modules</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {study.coreModules.map((mod) => (
                  <div
                    key={mod}
                    className="rounded-lg bg-[#F4F7FB] border border-slate-200/80 p-4 flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 text-[#3478F6] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm font-medium text-[#172337]">{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-xl border border-slate-200 bg-[#F4F7FB] p-6 space-y-5">
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Category</p>
                <p className="text-sm font-bold text-[#081426]">{study.category}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Target Domain</p>
                <p className="text-sm font-bold text-[#081426]">{study.region}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-2">Technology Stack</p>
                <p className="text-sm font-medium text-[#081426] leading-relaxed">
                  {study.techStack.join(' · ')}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-[#3478F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-colors"
                >
                  <span>Build a Similar Solution</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-16 bg-[#F4F7FB] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#081426] mb-8">More Projects from Adhoc Softwares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStudies.map((item) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.slug}`}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:border-[#3478F6]/50 transition-colors"
              >
                <p className="text-xs font-semibold text-[#3478F6] mb-1.5">{item.category}</p>
                <h3 className="text-lg font-bold text-[#081426]">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">{item.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBanner />
    </>
  );
}
