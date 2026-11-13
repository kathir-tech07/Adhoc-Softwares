import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import BrandMark from './BrandMark';
import { COMPANY_INFO } from '../data/company';
import { SERVICES } from '../data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081426] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-2.5 text-white font-bold text-lg tracking-tight">
              <BrandMark className="w-8 h-8" light />
              <span>Adhoc Softwares</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Adhoc Softwares is a trusted technology partner in Coimbatore, India that transforms business ideas into custom software, cloud ERP, mobile applications, and AI-driven digital solutions.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
              {COMPANY_INFO.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-[#21C8E5] transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-slate-400 hover:text-white transition-colors">
                  Insights &amp; Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-[#21C8E5] hover:text-white transition-colors font-medium"
                >
                  <span>All 10 Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Contact */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/products#businessi-erp"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Businessi ERP
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products#queue-bot"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Queue Bot AI
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5 text-sm">
              <h3 className="text-sm font-semibold text-white">Coimbatore Headquarters</h3>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#21C8E5] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="leading-relaxed text-xs">
                  {COMPANY_INFO.address.line1} {COMPANY_INFO.address.line2} {COMPANY_INFO.address.city}{' '}
                  {COMPANY_INFO.address.region}
                </p>
              </div>
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-xs"
              >
                <Phone className="w-4 h-4 text-[#21C8E5] shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.salesEmail}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-xs"
              >
                <Mail className="w-4 h-4 text-[#21C8E5] shrink-0" aria-hidden="true" />
                <span>{COMPANY_INFO.salesEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {currentYear} Adhoc Softwares. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <a
              href={COMPANY_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              adhocsoftwares.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
