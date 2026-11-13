import {
  Code2,
  Globe,
  Smartphone,
  Database,
  BrainCircuit,
  Palette,
  ShoppingBag,
  Cpu,
  Cloud,
  CheckSquare,
  Users,
  Target,
  Layers,
  ShieldCheck,
  Lock,
} from 'lucide-react';

const ICON_MAP = {
  Code2,
  Globe,
  Smartphone,
  Database,
  BrainCircuit,
  Palette,
  ShoppingBag,
  Cpu,
  Cloud,
  CheckSquare,
  Users,
  Target,
  Layers,
  ShieldCheck,
  Lock,
};

export type IconName = keyof typeof ICON_MAP;

interface ServiceIconProps {
  name: IconName;
  className?: string;
}

export default function ServiceIcon({ name, className = 'w-5 h-5' }: ServiceIconProps) {
  const Icon = ICON_MAP[name] || Code2;
  return <Icon className={className} aria-hidden="true" />;
}
