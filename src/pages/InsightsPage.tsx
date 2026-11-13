import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import CallToActionBanner from '../components/CallToActionBanner';
import { INSIGHTS, InsightArticle } from '../data/insights';

const CATEGORIES: ('All' | InsightArticle['category'])[] = [
  'All',
  'Software Development',
  'AI & Machine Learning',
  'Mobile App Development',
  'ERP Technology',
  'Digital Transformation',
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | InsightArticle['category']>('All');

  const visibleArticles =
    selectedCategory === 'All'
      ? INSIGHTS
      : INSIGHTS.filter((article) => article.category === selectedCategory);

  return (
    <>
      <PageMeta
        title="Insights & Engineering Blog – Adhoc Softwares"
        description="Read technical insights from Adhoc Softwares on custom software architecture, AI & Machine Learning, mobile apps, ERP technology, and digital transformation."
      />

      <section className="bg-[#081426] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-[#21C8E5]">
              Insights <span aria-hidden="true">·</span> Engineering Perspectives
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Practical Notes on Software Architecture, ERP, Mobile &amp; AI.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Technical briefs written by our Coimbatore engineering practices on building resilient digital systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div
            role="tablist"
            aria-label="Filter articles by topic"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 mb-10 w-fit"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
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
            {visibleArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between transition-colors hover:border-[#3478F6]/50"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-[#3478F6]">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#081426] leading-snug">
                    <Link
                      to={`/insights/${article.slug}`}
                      className="hover:text-[#3478F6] transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{article.excerpt}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{article.author}</span>
                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#081426] hover:text-[#3478F6]"
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

      <CallToActionBanner />
    </>
  );
}
