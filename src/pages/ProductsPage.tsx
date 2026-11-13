import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import ResilientImage from '../components/ResilientImage';
import CallToActionBanner from '../components/CallToActionBanner';
import { PRODUCTS, ProductItem } from '../data/products';

function ProductInteractiveSection({
  product,
  reverse = false,
}: {
  product: ProductItem;
  reverse?: boolean;
}) {
  const [selectedModuleId, setSelectedModuleId] = useState(product.modules[0].id);
  const activeModule =
    product.modules.find((m) => m.id === selectedModuleId) || product.modules[0];

  return (
    <section
      id={product.slug}
      className="py-20 border-b border-slate-200/80 last:border-b-0 odd:bg-white even:bg-[#F4F7FB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Product Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className={`lg:col-span-6 space-y-5 ${reverse ? 'lg:order-2' : ''}`}>
            <p className="text-sm font-semibold text-[#3478F6]">{product.category}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081426]">
              {product.name}
            </h2>
            <p className="text-base font-medium text-[#172337]">{product.tagline}</p>
            <p className="text-base text-slate-600 leading-relaxed">
              {product.extendedDescription}
            </p>

            <ul className="space-y-2.5 pt-2">
              {product.keyFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-sm text-[#172337]">
                  <Check className="w-4 h-4 text-[#3478F6] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to={`/contact?service=${encodeURIComponent(`${product.name} Product Demo`)}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3478F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <span>Request {product.name} Demo</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <span className="text-xs text-slate-500">
                {product.deploymentOptions.join(' · ')}
              </span>
            </div>
          </div>

          <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : ''}`}>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#081426] aspect-[16/10] shadow-md">
              <ResilientImage
                src={product.image}
                alt={product.imageAlt}
                fallbackTitle={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Interactive Module Explorer */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-[#081426]">
                {product.name} Functional Modules
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Select a module to inspect included capabilities.
              </p>
            </div>

            <div
              role="tablist"
              aria-label={`${product.name} modules`}
              className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F4F7FB] rounded-lg border border-slate-200"
            >
              {product.modules.map((mod) => (
                <button
                  key={mod.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedModuleId === mod.id}
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    selectedModuleId === mod.id
                      ? 'bg-[#081426] text-white'
                      : 'text-slate-600 hover:text-[#081426]'
                  }`}
                >
                  {mod.name}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <h4 className="text-xl font-bold text-[#081426]">{activeModule.name}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{activeModule.summary}</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeModule.capabilities.map((cap, idx) => (
                <div
                  key={cap}
                  className="rounded-lg bg-[#F4F7FB] border border-slate-200/80 p-4 space-y-2"
                >
                  <span className="font-mono text-xs text-[#3478F6] tabular-nums">
                    0{idx + 1}
                  </span>
                  <p className="text-sm font-medium text-[#081426] leading-snug">{cap}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <>
      <PageMeta
        title="Products – Businessi ERP & Queue Bot AI | Adhoc Softwares"
        description="Explore Adhoc Softwares products: Businessi ERP cloud enterprise resource planning and Queue Bot AI conversational customer support automation."
      />

      <section className="bg-[#081426] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-[#21C8E5]">
              Software Products <span aria-hidden="true">·</span> Businessi ERP &amp; Queue Bot
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Proprietary Platforms Engineered for Operational Clarity.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Alongside custom client engineering, Adhoc Softwares develops and maintains focused cloud products built for enterprise management and AI-assisted customer service.
            </p>
          </div>
        </div>
      </section>

      {PRODUCTS.map((product, idx) => (
        <ProductInteractiveSection key={product.id} product={product} reverse={idx % 2 === 1} />
      ))}

      <CallToActionBanner
        heading="Want to See Businessi ERP or Queue Bot in Action?"
        description="Schedule a tailored product walkthrough with our Coimbatore engineering specialists."
      />
    </>
  );
}
