import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  key?: React.Key;
  icon?: React.ReactNode;
  title: string;
  description: string;
  index?: number;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function SpotlightCard({ 
  icon, 
  title, 
  description, 
  index = 0, 
  delay = 0, 
  className = "",
  children
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay || index * 0.1 }}
      className={`relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 group shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col h-full ${className}`}
    >
      {/* Spotlight Hover Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(252, 85, 85, 0.06), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-gray-100">
            {icon}
          </div>
        )}
        <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
        <p className="text-gray-500 leading-relaxed font-light text-sm flex-grow">{description}</p>
        
        {children && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            {children}
          </div>
        )}
      </div>
    </motion.div>
  );
}
