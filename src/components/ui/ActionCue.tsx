import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

type ActionCueProps = {
  mode: 'expand' | 'detail' | 'external';
  expanded?: boolean;
  accent?: 'red' | 'blue' | 'turquoise';
  className?: string;
};

const accentClasses = {
  red: {
    text: 'text-hm-red',
    shell: 'border-hm-red/20 bg-hm-red/[0.06]',
    icon: 'bg-hm-red/10',
  },
  blue: {
    text: 'text-hm-blue',
    shell: 'border-hm-blue/20 bg-hm-blue/[0.06]',
    icon: 'bg-hm-blue/10',
  },
  turquoise: {
    text: 'text-hm-turquoise',
    shell: 'border-hm-turquoise/20 bg-hm-turquoise/[0.06]',
    icon: 'bg-hm-turquoise/10',
  },
};

export default function ActionCue({
  mode,
  expanded = false,
  accent = 'red',
  className = '',
}: ActionCueProps) {
  const accentStyle = accentClasses[accent];
  const label =
    mode === 'expand'
      ? expanded
        ? 'Weniger anzeigen'
        : 'Mehr anzeigen'
      : mode === 'detail'
        ? 'Details ansehen'
        : 'Extern öffnen';

  const icon =
    mode === 'expand' ? (
      expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
    ) : mode === 'detail' ? (
      <ArrowRight className="w-4 h-4" />
    ) : (
      <ArrowUpRight className="w-4 h-4" />
    );

  return (
    <motion.div
      animate={!expanded ? { y: [0, -2, 0] } : { y: 0 }}
      transition={!expanded ? { repeat: Infinity, duration: 1.9, ease: 'easeInOut' } : { duration: 0.2 }}
      className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 ${accentStyle.shell} ${accentStyle.text} text-[11px] font-bold uppercase tracking-[0.22em] shadow-[0_10px_30px_-20px_rgba(15,23,42,0.4)] ${className}`}
    >
      <span>{label}</span>
      <motion.span
        animate={!expanded ? { x: [0, 3, 0] } : { x: 0 }}
        transition={!expanded ? { repeat: Infinity, duration: 1.9, ease: 'easeInOut' } : { duration: 0.2 }}
        className={`flex h-7 w-7 items-center justify-center rounded-full ${accentStyle.icon}`}
      >
        {icon}
      </motion.span>
    </motion.div>
  );
}
