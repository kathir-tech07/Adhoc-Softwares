import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import BrandMark from './BrandMark';
import { SERVICES } from '../data/services';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b-2 ${
      isActive
        ? 'text-[#081426] border-[#3478F6]'
        : 'text-[#172337]/80 border-transparent hover:text-[#081426] hover:border-[#3478F6]/40'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#081426] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3478F6] rounded-md"
        >
          <BrandMark className="w-8 h-8 shrink-0" />
          <span>Adhoc Softwares</span>
        </Link>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-7"
        >
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
                location.pathname.startsWith('/services')
                  ? 'text-[#081426] border-[#3478F6]'
                  : 'text-[#172337]/80 border-transparent hover:text-[#081426]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px] z-50">
                <div className="bg-white rounded-xl border border-slate-200 shadow-xl p-6">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <div>
                      <p className="text-sm font-semibold text-[#081426]">
                        Engineering &amp; Technology Services
                      </p>
                      <p className="text-xs text-slate-500">
                        End-to-end delivery from architecture to cloud deployment
                      </p>
                    </div>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#3478F6] hover:text-[#102A4C] whitespace-nowrap"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="group flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#F4F7FB] transition-colors"
                      >
                        <span className="font-mono text-xs text-[#3478F6] pt-0.5 tabular-nums">
                          {service.index}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-[#081426] group-hover:text-[#3478F6] transition-colors">
                            {service.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/careers" className={navLinkClass}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Zone 3: Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#3478F6] hover:bg-[#2563EB] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3478F6]"
          >
            Get a Quote
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-[#081426] hover:bg-slate-50 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav aria-label="Mobile Navigation" className="px-4 py-5 space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-[#F4F7FB] text-[#3478F6]' : 'text-[#172337] hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-[#F4F7FB] text-[#3478F6]' : 'text-[#172337] hover:bg-slate-50'
                }`
              }
            >
              About
            </NavLink>

            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                aria-expanded={mobileServicesOpen}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-[#172337] hover:bg-slate-50 cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 border-l border-slate-200 ml-3 mt-1">
                  <Link
                    to="/services"
                    className="block px-3 py-2 text-sm font-semibold text-[#3478F6] rounded-md hover:bg-[#F4F7FB]"
                  >
                    All 10 Services Overview
                  </Link>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="block px-3 py-2 text-sm text-[#172337]/85 rounded-md hover:bg-slate-50"
                    >
                      {service.index}. {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-[#F4F7FB] text-[#3478F6]' : 'text-[#172337] hover:bg-slate-50'
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-[#F4F7FB] text-[#3478F6]' : 'text-[#172337] hover:bg-slate-50'
                }`
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/insights"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-[#F4F7FB] text-[#3478F6]' : 'text-[#172337] hover:bg-slate-50'
                }`
              }
            >
              Insights
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-[#F4F7FB] text-[#3478F6]' : 'text-[#172337] hover:bg-slate-50'
                }`
              }
            >
              Careers
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-[#F4F7FB] text-[#3478F6]' : 'text-[#172337] hover:bg-slate-50'
                }`
              }
            >
              Contact
            </NavLink>

            <div className="pt-4">
              <Link
                to="/contact"
                className="flex items-center justify-center w-full px-4 py-3 text-base font-semibold text-white bg-[#3478F6] hover:bg-[#2563EB] rounded-lg transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
