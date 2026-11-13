import { CaseStudy } from '../data/portfolio';
import ResilientImage from './ResilientImage';
import {
  MapPin,
  Calendar,
  ShoppingCart,
  Leaf,
  Wrench,
  Car,
  Bot,
} from 'lucide-react';

interface CaseStudyPreviewProps {
  study: CaseStudy;
  className?: string;
}

export default function CaseStudyPreview({ study, className = '' }: CaseStudyPreviewProps) {
  if (study.featuredImage && (study.previewType === 'mobility' || study.previewType === 'ai')) {
    return (
      <div className={`relative overflow-hidden bg-[#081426] ${className}`}>
        <ResilientImage
          src={study.featuredImage}
          alt={`${study.title} software preview`}
          fallbackTitle={study.title}
          className="w-full h-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#081426]/60 via-transparent to-transparent"
        />
      </div>
    );
  }

  const themeMap: Record<
    CaseStudy['previewType'],
    { bg: string; accent: string; Icon: typeof Car; label: string; rows: string[] }
  > = {
    mobility: {
      bg: 'from-[#081426] via-[#102A4C] to-[#163A66]',
      accent: '#21C8E5',
      Icon: Car,
      label: 'Passenger & Driver Dispatch',
      rows: ['Pickup Zone Verification', 'Live Driver Matching', 'Automated Fare Calculation'],
    },
    events: {
      bg: 'from-[#0B1C36] via-[#132E54] to-[#1A3E70]',
      accent: '#3478F6',
      Icon: Calendar,
      label: 'Event Discovery & Scheduling',
      rows: ['Multi-Track Agenda View', 'Attendee Pass Registration', 'Live Schedule Updates'],
    },
    commerce: {
      bg: 'from-[#0A192F] via-[#102A4C] to-[#1B4275]',
      accent: '#21C8E5',
      Icon: ShoppingCart,
      label: 'Digital Storefront & Fulfillment',
      rows: ['Structured Product Catalog', 'One-Screen Checkout Flow', 'Merchant Fulfillment Queue'],
    },
    fresh: {
      bg: 'from-[#08192A] via-[#0F2C44] to-[#14405E]',
      accent: '#21C8E5',
      Icon: Leaf,
      label: 'Scheduled Fresh Delivery',
      rows: ['Category Stock Availability', 'Delivery Window Selection', 'Order Dispatch Tracking'],
    },
    garage: {
      bg: 'from-[#081426] via-[#112744] to-[#1D3B63]',
      accent: '#3478F6',
      Icon: Wrench,
      label: 'Workshop & Parts ERP',
      rows: ['Digital Vehicle Job Card', 'Spare Parts Inventory Ledger', 'Automated Service Billing'],
    },
    taxi: {
      bg: 'from-[#0B182E] via-[#122C52] to-[#193C6E]',
      accent: '#21C8E5',
      Icon: MapPin,
      label: 'Regional Fleet Hailing',
      rows: ['Instant & Scheduled Rides', 'Route & Fare Transparency', 'Operator Settlement Console'],
    },
    ai: {
      bg: 'from-[#081426] via-[#102A4C] to-[#1E40AF]',
      accent: '#21C8E5',
      Icon: Bot,
      label: 'Conversational Triage Engine',
      rows: ['Intent Classification', 'Knowledge Base Grounding', 'Contextual Agent Handoff'],
    },
  };

  const theme = themeMap[study.previewType];
  const Icon = theme.Icon;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${theme.bg} p-6 flex flex-col justify-between ${className}`}
    >
      {/* Subtle architectural grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative flex items-center justify-between">
        <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
          <Icon className="w-5 h-5" style={{ color: theme.accent }} aria-hidden="true" />
        </div>
        <span className="text-[11px] font-mono text-slate-300 tracking-wide">
          {theme.label}
        </span>
      </div>

      {/* Crisp schematic UI frame */}
      <div className="relative mt-6 bg-white/95 rounded-lg p-3.5 shadow-lg border border-white/20">
        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-100">
          <span className="text-xs font-semibold text-[#081426]">{study.title}</span>
          <span className="text-[11px] font-mono text-[#3478F6]">Module Architecture</span>
        </div>
        <div className="space-y-1.5">
          {theme.rows.map((row, idx) => (
            <div
              key={row}
              className="flex items-center justify-between px-2.5 py-1.5 rounded bg-[#F4F7FB] text-[11px] text-[#172337]"
            >
              <span className="font-medium truncate pr-2">{row}</span>
              <span className="font-mono text-slate-400 tabular-nums">0{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
