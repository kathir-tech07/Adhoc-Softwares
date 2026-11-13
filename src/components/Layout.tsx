import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { COMPANY_INFO } from '../data/company';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172337]">
      <Navbar />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />

      {/* Desktop-only unobtrusive WhatsApp quick contact */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Adhoc Softwares on WhatsApp"
        className="hidden lg:inline-flex fixed bottom-6 right-6 z-30 items-center gap-2 px-4 py-2.5 rounded-xl bg-[#081426] hover:bg-[#102A4C] text-white text-xs font-semibold shadow-lg border border-white/15 transition-transform duration-150 hover:-translate-y-0.5"
      >
        <MessageCircle className="w-4 h-4 text-[#21C8E5]" aria-hidden="true" />
        <span className="whitespace-nowrap">WhatsApp Us</span>
      </a>
    </div>
  );
}
