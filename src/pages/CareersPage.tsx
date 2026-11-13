import { useState, FormEvent } from 'react';
import { MapPin, Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { COMPANY_INFO } from '../data/company';
import { JOB_OPENINGS, CAREER_BENEFITS, JobOpening } from '../data/careers';

const DEPARTMENTS: ('All' | JobOpening['department'])[] = [
  'All',
  'Engineering',
  'Mobile',
  'Design',
  'Quality Assurance',
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<'All' | JobOpening['department']>('All');
  const [selectedRole, setSelectedRole] = useState<string>(JOB_OPENINGS[0].title);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [experienceSummary, setExperienceSummary] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [readyMailto, setReadyMailto] = useState<string | null>(null);

  const filteredRoles =
    selectedDept === 'All'
      ? JOB_OPENINGS
      : JOB_OPENINGS.filter((role) => role.department === selectedDept);

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setReadyMailto(null);
    const el = document.getElementById('apply-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setReadyMailto(null);

    if (applicantName.trim().length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(applicantEmail.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (experienceSummary.trim().length < 20) {
      setErrorMsg('Please provide a brief summary of your experience (at least 20 characters).');
      return;
    }

    const subject = encodeURIComponent(`Job Application: ${selectedRole} – ${applicantName.trim()}`);
    const body = encodeURIComponent(
      [
        `Role: ${selectedRole}`,
        `Candidate Name: ${applicantName.trim()}`,
        `Email: ${applicantEmail.trim()}`,
        `Portfolio / LinkedIn / GitHub: ${portfolioLink.trim() || 'Not provided'}`,
        ``,
        `Experience Summary:`,
        experienceSummary.trim(),
        ``,
        `(Please attach your resume PDF before sending.)`,
      ].join('\n')
    );

    setReadyMailto(`mailto:${COMPANY_INFO.careersEmail}?subject=${subject}&body=${body}`);
  };

  return (
    <>
      <PageMeta
        title="Careers at Adhoc Softwares – Coimbatore Software Jobs"
        description="Explore software engineering, Flutter mobile, UI/UX design, and QA automation careers at Adhoc Softwares in Saravanampatti, Coimbatore."
      />

      {/* Header */}
      <section className="bg-[#081426] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-[#21C8E5]">
              Careers <span aria-hidden="true">·</span> Saravanampatti, Coimbatore
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Build Global Software Products From Our Coimbatore Engineering Campus.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Join engineers, designers, and quality specialists shipping enterprise web platforms, cloud ERP systems, mobile applications, and AI tools for international partners.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREER_BENEFITS.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-slate-200 bg-[#F4F7FB]/60 p-6 space-y-2.5"
              >
                <span className="font-mono text-xs font-semibold text-[#3478F6] tabular-nums">
                  0{idx + 1}
                </span>
                <h2 className="text-base font-bold text-[#081426]">{benefit.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles & Application */}
      <section className="py-20 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Roles List */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#081426]">Open Positions</h2>
              <p className="text-sm text-slate-600 mt-1">
                Filter roles by engineering discipline or send your resume directly to{' '}
                <a
                  href={`mailto:${COMPANY_INFO.careersEmail}`}
                  className="text-[#3478F6] font-medium hover:underline"
                >
                  {COMPANY_INFO.careersEmail}
                </a>
                .
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Filter jobs by department"
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 w-fit"
            >
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  role="tab"
                  aria-selected={selectedDept === dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    selectedDept === dept
                      ? 'bg-[#081426] text-white'
                      : 'text-slate-600 hover:text-[#081426] hover:bg-slate-50'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredRoles.map((role) => (
                <article
                  key={role.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-1.5">
                        <span className="font-semibold text-[#3478F6]">{role.department}</span>
                        <span aria-hidden="true">·</span>
                        <span>{role.type}</span>
                        <span aria-hidden="true">·</span>
                        <span>{role.experience}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#081426]">{role.title}</h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleApplyClick(role.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#081426] hover:bg-[#102A4C] text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">{role.summary}</p>

                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#3478F6]" aria-hidden="true" />
                      <span>{role.location}</span>
                    </span>
                    <span className="font-medium text-[#172337]">
                      {role.skills.join(' · ')}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Application Builder */}
          <div id="apply-form" className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-[#081426]">Prepare Application Email</h2>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Validate your candidate details to generate a pre-addressed email to {COMPANY_INFO.careersEmail}.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label
                  htmlFor="career-role"
                  className="block text-sm font-medium text-[#081426] mb-1.5"
                >
                  Position
                </label>
                <select
                  id="career-role"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-[#172337] focus:outline-none focus:ring-2 focus:ring-[#3478F6]/20 focus:border-[#3478F6]"
                >
                  {JOB_OPENINGS.map((role) => (
                    <option key={role.id} value={role.title}>
                      {role.title}
                    </option>
                  ))}
                  <option value="General Engineering Application">
                    General Engineering Application
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="career-name"
                  className="block text-sm font-medium text-[#081426] mb-1.5"
                >
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="career-name"
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-[#172337] focus:outline-none focus:ring-2 focus:ring-[#3478F6]/20 focus:border-[#3478F6]"
                />
              </div>

              <div>
                <label
                  htmlFor="career-email"
                  className="block text-sm font-medium text-[#081426] mb-1.5"
                >
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="career-email"
                  type="email"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-[#172337] focus:outline-none focus:ring-2 focus:ring-[#3478F6]/20 focus:border-[#3478F6]"
                />
              </div>

              <div>
                <label
                  htmlFor="career-portfolio"
                  className="block text-sm font-medium text-[#081426] mb-1.5"
                >
                  GitHub / LinkedIn / Portfolio URL
                </label>
                <input
                  id="career-portfolio"
                  type="url"
                  value={portfolioLink}
                  onChange={(e) => setPortfolioLink(e.target.value)}
                  placeholder="https://"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-[#172337] focus:outline-none focus:ring-2 focus:ring-[#3478F6]/20 focus:border-[#3478F6]"
                />
              </div>

              <div>
                <label
                  htmlFor="career-summary"
                  className="block text-sm font-medium text-[#081426] mb-1.5"
                >
                  Experience Summary <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="career-summary"
                  rows={4}
                  value={experienceSummary}
                  onChange={(e) => setExperienceSummary(e.target.value)}
                  placeholder="Briefly describe your technical stack, recent projects, and years of experience..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-[#172337] focus:outline-none focus:ring-2 focus:ring-[#3478F6]/20 focus:border-[#3478F6]"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-red-600 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{errorMsg}</span>
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-[#3478F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Validate &amp; Prepare Application
              </button>
            </form>

            {readyMailto && (
              <div className="mt-5 rounded-xl border border-[#3478F6]/30 bg-[#F4F7FB] p-4 space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3478F6] shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Application details validated. Click below to open your email client addressed to{' '}
                    <span className="font-semibold text-[#081426]">{COMPANY_INFO.careersEmail}</span>{' '}
                    and attach your resume PDF.
                  </p>
                </div>
                <a
                  href={readyMailto}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#081426] hover:bg-[#102A4C] text-white text-xs font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#21C8E5]" aria-hidden="true" />
                  <span>Send Application via Email</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
