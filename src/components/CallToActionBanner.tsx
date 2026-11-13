import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface CallToActionBannerProps {
  heading?: string;
  description?: string;
}

export default function CallToActionBanner({
  heading = "Have an Idea? Let's Build Something Amazing Together.",
  description = 'Partner with Adhoc Softwares to transform your business ideas into powerful digital solutions.',
}: CallToActionBannerProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#081426] via-[#102A4C] to-[#0E2444] px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
          {/* Subtle architectural glow */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#3478F6]/20 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -left-16 -bottom-24 w-80 h-80 rounded-full bg-[#21C8E5]/10 blur-3xl pointer-events-none"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                {heading}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#3478F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#21C8E5]" aria-hidden="true" />
                <span>Contact Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
