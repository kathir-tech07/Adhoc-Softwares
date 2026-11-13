import { useSearchParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';

  return (
    <>
      <PageMeta
        title="Contact Adhoc Softwares – Coimbatore Software Development"
        description="Contact Adhoc Softwares in Saravanampatti, Coimbatore. Call +91 94860 35353, email sales@adhocsoftwares.com, or submit your project enquiry."
      />

      <section className="bg-[#081426] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-[#21C8E5]">
              Contact Us <span aria-hidden="true">·</span> Coimbatore, Tamil Nadu
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Start a Conversation With Our Engineering Team.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you are scoping a custom enterprise platform, mobile application, Businessi ERP deployment, or AI automation workflow, our consulting team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      <ContactSection initialService={initialService} compactHeader />
    </>
  );
}
