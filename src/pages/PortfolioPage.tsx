import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import CaseStudyPreview from '../components/CaseStudyPreview';
import CallToActionBanner from '../components/CallToActionBanner';
import { CASE_STUDIES, PORTFOLIO_CATEGORIES, PortfolioCategory } from '../data/portfolio';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | PortfolioCategory>('All');

  const visibleStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((s) => s.category === selectedCategory);

  return (
    <>
      <PageMeta
        title="Portfolio & Case Studies – Adhoc Softwares"
        description="Explore software engineering case studies by Adhoc Softwares across mobile applications, web platforms, ERP solutions, e-commerce, and AI systems."
      />

      <section className="bg-[#081426] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-[#21C8E5]">
              Portfolio <span aria-hidden="true">·</span> Case Studies
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Engineered Platforms Across Mobility, Commerce, ERP &amp; AI.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Representative software builds delivered by our Coimbatore engineering teams, detailing system architecture, functional modules, and technology foundations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter case studies"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 mb-10 w-fit"
          >
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#081426] text-white'
                    : 'text-slate-600 hover:text-[#081426] hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleStudies.map((study) => (
              <article
                key={study.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-150 hover:border-[#3478F6]/50"
              >
                <div>
                  <CaseStudyPreview study={study} className="h-56" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-[#3478F6]">{study.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{study.region}</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#081426]">{study.title}</h2>
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

      <CallToActionBanner />
    </>
  );
}
