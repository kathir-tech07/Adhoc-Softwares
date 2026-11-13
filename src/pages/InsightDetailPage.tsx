import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import CallToActionBanner from '../components/CallToActionBanner';
import { INSIGHTS } from '../data/insights';

export default function InsightDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = INSIGHTS.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="py-24 bg-[#F4F7FB]">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h1 className="text-3xl font-bold text-[#081426]">Article Not Found</h1>
          <p className="text-slate-600">
            The requested insights article could not be located. Browse all engineering briefs below.
          </p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#3478F6] text-white text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Insights</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageMeta
        title={`${article.title} – Adhoc Softwares`}
        description={article.excerpt}
      />

      <section className="bg-[#081426] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>All Insights</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#21C8E5]">
            <span className="font-semibold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300">{article.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300">{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300">{article.author}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance">
            {article.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{article.excerpt}</p>
        </div>
      </section>

      <article className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-bold text-[#081426]">{section.heading}</h2>
              {section.paragraphs.map((para) => (
                <p key={para} className="text-base text-slate-600 leading-[1.75]">
                  {para}
                </p>
              ))}
            </section>
          ))}

          <div className="rounded-xl bg-[#F4F7FB] border border-slate-200 p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-bold text-[#081426]">Key Engineering Takeaways</h2>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-[#172337]">
                  <Check className="w-4 h-4 text-[#3478F6] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <CallToActionBanner />
    </>
  );
}
