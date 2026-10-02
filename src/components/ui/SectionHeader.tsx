import React from 'react';
import { motion } from 'framer-motion';

// Einheitlicher Abschnittskopf: Nummer + Eyebrow, große Überschrift, optional Einleitung.
// tone="dark" für schwarze Abschnitte (Eyebrow türkis), "light" für helle (Eyebrow rot).
type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
  children?: React.ReactNode;
};

export default function SectionHeader({
  index,
  eyebrow,
  title,
  intro,
  tone = 'light',
  align = 'left',
  className = '',
  children,
}: SectionHeaderProps) {
  const dark = tone === 'dark';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center mx-auto' : ''} max-w-3xl ${className}`}
    >
      <p className={`text-xs font-bold uppercase tracking-[0.24em] ${dark ? 'text-hm-turquoise' : 'text-hm-red'}`}>
        <span className="mr-2">{index}</span>
        {eyebrow}
      </p>
      <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] tracking-[-0.04em] ${dark ? 'text-white' : 'text-[#111111]'}`}>
        {title}
      </h2>
      {intro && (
        <p className={`text-lg lg:text-xl font-light leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{intro}</p>
      )}
      {children}
    </motion.div>
  );
}
