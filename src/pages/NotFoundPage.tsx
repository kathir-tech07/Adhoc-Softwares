import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageMeta from '../components/PageMeta';

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found (404) – Adhoc Softwares"
        description="The requested page could not be found on the Adhoc Softwares website."
      />

      <section className="py-24 sm:py-32 bg-[#F4F7FB]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <p className="font-mono text-sm font-semibold text-[#3478F6] tabular-nums">Error 404</p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#081426]">
            Page Not Found
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            The page you are looking for may have moved or does not exist. Explore our primary engineering pages below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#081426] hover:bg-[#102A4C] text-white text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Return Home</span>
            </Link>
            <Link
              to="/services"
              className="px-5 py-3 rounded-lg bg-white border border-slate-300 hover:border-[#3478F6] text-[#081426] text-sm font-semibold transition-colors"
            >
              Services
            </Link>
            <Link
              to="/products"
              className="px-5 py-3 rounded-lg bg-white border border-slate-300 hover:border-[#3478F6] text-[#081426] text-sm font-semibold transition-colors"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-lg bg-[#3478F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
