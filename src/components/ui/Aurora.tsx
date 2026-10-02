import React, { useId } from 'react';

// Lebendiges Schwarz: drei langsam ziehende Lichtschleier (HM-Rot, Türkis, Blau) mit feinem Filmkorn.
// Rein dekorativ; Bewegung in index.css (.aurora-*), bei „Bewegung reduzieren“ steht sie still.
export default function Aurora({ className = '' }: { className?: string }) {
  const grainId = `grain-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="aurora-blob left-[5%] top-[5%] w-[55%] h-[60%] bg-hm-red/45" />
      <div className="aurora-blob aurora-b2 left-[45%] top-[30%] w-[55%] h-[65%] bg-hm-turquoise/30" />
      <div className="aurora-blob aurora-b3 left-[25%] top-[60%] w-[45%] h-[50%] bg-hm-blue/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.75)_100%)]" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.12] mix-blend-overlay">
        <filter id={grainId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${grainId})`} />
      </svg>
    </div>
  );
}
