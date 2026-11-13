import { useState, useEffect, FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Send,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { SERVICES } from '../data/services';
import CoimbatoreOfficeMap from './CoimbatoreOfficeMap';

interface ContactSectionProps {
  initialService?: string;
  compactHeader?: boolean;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  serviceRequired: string;
  projectDetails: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function ContactSection({
  initialService = '',
  compactHeader = false,
}: ContactSectionProps) {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    serviceRequired: initialService || SERVICES[0].title,
    projectDetails: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [validatedBrief, setValidatedBrief] = useState<FormValues | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setValues((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const validateField = (field: keyof FormValues, value: string): string => {
    const trimmed = value.trim();
    switch (field) {
      case 'name':
        if (trimmed.length < 2) return 'Please enter your full name (at least 2 characters).';
        return '';
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
          return 'Please enter a valid business or personal email address.';
        }
        return '';
      case 'phone': {
        const digits = trimmed.replace(/[^\d]/g, '');
        if (digits.length < 7 || digits.length > 15) {
          return 'Please enter a valid phone number including country or area code.';
        }
        return '';
      }
      case 'companyName':
        if (trimmed.length < 2) return 'Please enter your company or organization name.';
        return '';
      case 'serviceRequired':
        if (!trimmed) return 'Please select a service.';
        return '';
      case 'projectDetails':
        if (trimmed.length < 20) {
          return 'Please describe your project scope or goals (at least 20 characters).';
        }
        return '';
      default:
        return '';
    }
  };

  const validateAll = (form: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    (Object.keys(form) as (keyof FormValues)[]).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) nextErrors[key] = err;
    });
    return nextErrors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err || undefined }));
    }
    if (validatedBrief) {
      setValidatedBrief(null);
    }
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, values[field]);
    setErrors((prev) => ({ ...prev, [field]: err || undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const allTouched: Partial<Record<keyof FormValues, boolean>> = {
      name: true,
      email: true,
      phone: true,
      companyName: true,
      serviceRequired: true,
      projectDetails: true,
    };
    setTouched(allTouched);
    const nextErrors = validateAll(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setValidatedBrief({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        companyName: values.companyName.trim(),
        serviceRequired: values.serviceRequired,
        projectDetails: values.projectDetails.trim(),
      });
    }
  };

  const formatBriefText = (brief: FormValues) =>
    [
      `Project Enquiry – Adhoc Softwares`,
      `Name: ${brief.name}`,
      `Email: ${brief.email}`,
      `Phone: ${brief.phone}`,
      `Company: ${brief.companyName}`,
      `Service Required: ${brief.serviceRequired}`,
      `Project Details:\n${brief.projectDetails}`,
    ].join('\n');

  const getMailtoHref = (brief: FormValues) => {
    const subject = encodeURIComponent(
      `Project Enquiry: ${brief.serviceRequired} – ${brief.companyName}`
    );
    const body = encodeURIComponent(formatBriefText(brief));
    return `mailto:${COMPANY_INFO.salesEmail}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppBriefHref = (brief: FormValues) => {
    const text = encodeURIComponent(formatBriefText(brief));
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
  };

  const handleCopyBrief = async () => {
    if (!validatedBrief) return;
    try {
      await navigator.clipboard.writeText(formatBriefText(validatedBrief));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const inputBase =
    'w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#172337] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors';

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#F4F7FB] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!compactHeader && (
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-[#3478F6] mb-2">Contact Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081426] text-balance">
              Discuss Your Software Requirements With Our Coimbatore Team
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Share your project scope below to validate your enquiry brief and connect directly with our engineering and consulting desk.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-[#081426]">Project Enquiry Form</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    All fields are validated before generating your direct dispatch brief.
                  </p>
                </div>
                <span className="hidden sm:inline text-xs font-mono text-slate-400">
                  sales@adhocsoftwares.com
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[#081426] mb-1.5"
                    >
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={values.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.name)}
                      className={`${inputBase} ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-300 focus:border-[#3478F6] focus:ring-[#3478F6]/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[#081426] mb-1.5"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={values.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="name@company.com"
                      aria-invalid={Boolean(errors.email)}
                      className={`${inputBase} ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-300 focus:border-[#3478F6] focus:ring-[#3478F6]/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-[#081426] mb-1.5"
                    >
                      Phone <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={values.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      placeholder="+91 98765 43210"
                      aria-invalid={Boolean(errors.phone)}
                      className={`${inputBase} ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-300 focus:border-[#3478F6] focus:ring-[#3478F6]/20'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-sm font-medium text-[#081426] mb-1.5"
                    >
                      Company Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={values.companyName}
                      onChange={(e) => handleChange('companyName', e.target.value)}
                      onBlur={() => handleBlur('companyName')}
                      placeholder="Organization name"
                      aria-invalid={Boolean(errors.companyName)}
                      className={`${inputBase} ${
                        errors.companyName
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-300 focus:border-[#3478F6] focus:ring-[#3478F6]/20'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.companyName}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-medium text-[#081426] mb-1.5"
                  >
                    Service Required <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={values.serviceRequired}
                    onChange={(e) => handleChange('serviceRequired', e.target.value)}
                    onBlur={() => handleBlur('serviceRequired')}
                    className={`${inputBase} border-slate-300 focus:border-[#3478F6] focus:ring-[#3478F6]/20`}
                  >
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Businessi ERP Product Demo">Businessi ERP Product Demo</option>
                    <option value="Queue Bot AI Product Demo">Queue Bot AI Product Demo</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-details"
                    className="block text-sm font-medium text-[#081426] mb-1.5"
                  >
                    Project Details <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="contact-details"
                    rows={4}
                    value={values.projectDetails}
                    onChange={(e) => handleChange('projectDetails', e.target.value)}
                    onBlur={() => handleBlur('projectDetails')}
                    placeholder="Outline your target platform, core features, timeline, or integration requirements..."
                    aria-invalid={Boolean(errors.projectDetails)}
                    className={`${inputBase} ${
                      errors.projectDetails
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:border-[#3478F6] focus:ring-[#3478F6]/20'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.projectDetails}</span>
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#3478F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Submit Enquiry</span>
                  </button>

                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 hover:border-[#081426] text-[#081426] text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 text-[#3478F6]" aria-hidden="true" />
                    <span>WhatsApp Consultation</span>
                  </a>
                </div>
              </form>

              {/* Honest Validated Dispatch Panel (never fakes server submission) */}
              {validatedBrief && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 rounded-xl border border-[#3478F6]/30 bg-[#F4F7FB] p-5 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3478F6] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-[#081426]">
                        Enquiry Brief Validated &amp; Ready to Send
                      </p>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        This site runs without an automated backend mail server, so your details have not been transmitted automatically. Choose a direct channel below to send your formatted brief to our team:
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={getMailtoHref(validatedBrief)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#081426] hover:bg-[#102A4C] text-white text-xs font-semibold transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#21C8E5]" aria-hidden="true" />
                      <span>Send via Email ({COMPANY_INFO.salesEmail})</span>
                    </a>
                    <a
                      href={getWhatsAppBriefHref(validatedBrief)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3478F6] hover:bg-[#2563EB] text-white text-xs font-semibold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-[#081426] text-xs font-semibold transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                          <span>Brief Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copy Brief</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Office Details & Google Map Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#081426] text-white rounded-xl p-6 sm:p-8 space-y-5">
              <div>
                <p className="text-xs font-semibold text-[#21C8E5] mb-1">
                  Headquarters · India
                </p>
                <h3 className="text-xl font-bold">{COMPANY_INFO.name}</h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#21C8E5] shrink-0 mt-1" aria-hidden="true" />
                  <p className="leading-relaxed">
                    {COMPANY_INFO.address.line1}
                    <br />
                    {COMPANY_INFO.address.line2}
                    <br />
                    {COMPANY_INFO.address.city}
                    <br />
                    {COMPANY_INFO.address.region}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#21C8E5] shrink-0" aria-hidden="true" />
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="hover:text-white transition-colors tabular-nums"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#21C8E5] shrink-0" aria-hidden="true" />
                  <div className="space-y-1">
                    <p>
                      <span className="text-slate-400 text-xs mr-2">Sales:</span>
                      <a
                        href={`mailto:${COMPANY_INFO.salesEmail}`}
                        className="hover:text-white transition-colors"
                      >
                        {COMPANY_INFO.salesEmail}
                      </a>
                    </p>
                    <p>
                      <span className="text-slate-400 text-xs mr-2">Careers:</span>
                      <a
                        href={`mailto:${COMPANY_INFO.careersEmail}`}
                        className="hover:text-white transition-colors"
                      >
                        {COMPANY_INFO.careersEmail}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-400">
                {COMPANY_INFO.officeHours}
              </div>
            </div>

            <div className="flex-1 min-h-[360px]">
              <CoimbatoreOfficeMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
