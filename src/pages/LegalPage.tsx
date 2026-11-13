import PageMeta from '../components/PageMeta';
import { COMPANY_INFO } from '../data/company';

interface LegalPageProps {
  mode: 'privacy' | 'terms';
}

export default function LegalPage({ mode }: LegalPageProps) {
  const isPrivacy = mode === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';

  return (
    <>
      <PageMeta
        title={`${title} – Adhoc Softwares`}
        description={`${title} governing website usage and enquiry communication with Adhoc Softwares, Coimbatore.`}
      />

      <section className="bg-[#081426] text-white py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#21C8E5] mb-2">Legal Documentation</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-600 leading-relaxed text-sm sm:text-base">
          {isPrivacy ? (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-[#081426]">1. Information You Share With Us</h2>
                <p>
                  When you prepare a project enquiry or job application on the Adhoc Softwares website, your details remain within your browser session until you choose to transmit them directly via email ({COMPANY_INFO.salesEmail} or {COMPANY_INFO.careersEmail}) or WhatsApp ({COMPANY_INFO.phone}).
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-[#081426]">2. Purpose of Processing</h2>
                <p>
                  Business contact details shared with Adhoc Softwares are used solely to respond to project consultations, product demonstrations (Businessi ERP and Queue Bot), and recruitment correspondence.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-[#081426]">3. Maps &amp; Third-Party Services</h2>
                <p>
                  Our Contact page integrates Google Maps to display our office location in Saravanampatti, Coimbatore. Use of map features is subject to Google Maps End User Additional Terms of Service and the Google Privacy Policy.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-[#081426]">4. Contact for Privacy Enquiries</h2>
                <p>
                  Questions regarding data handling may be directed to {COMPANY_INFO.salesEmail} or by mail to {COMPANY_INFO.address.full}.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-[#081426]">1. Scope of Website Information</h2>
                <p>
                  This website presents corporate information, service capabilities, software products, and case study overviews for Adhoc Softwares. Project timelines, architecture scopes, and commercial terms are governed exclusively by signed Statements of Work and Master Services Agreements.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-[#081426]">2. Intellectual Property</h2>
                <p>
                  All Adhoc Softwares branding, Businessi ERP and Queue Bot product materials, and original website content remain the property of Adhoc Softwares unless otherwise agreed in writing.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-[#081426]">3. Jurisdiction</h2>
                <p>
                  These terms are governed by applicable laws in India, with headquarters located in Coimbatore, Tamil Nadu.
                </p>
              </section>
            </>
          )}
        </div>
      </article>
    </>
  );
}
