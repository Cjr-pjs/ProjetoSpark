'use client';

import React, { useId } from 'react';

export interface CanProps {
  shortName?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface FlavorColorTriple {
  c1: string;
  c2: string;
  c3: string;
  shortName: string;
}

export const FLAVOR_PALETTES: Record<string, FlavorColorTriple> = {
  'voltage-lime': {
    c1: '#071a03',
    c2: '#1fa80c',
    c3: '#39ff14',
    shortName: 'VOLTAGE',
  },
  'eclipse-grape': {
    c1: '#1f0b38',
    c2: '#7e22ce',
    c3: '#a855f7',
    shortName: 'ECLIPSE',
  },
  'blaze-mango': {
    c1: '#3d1500',
    c2: '#d95804',
    c3: '#ff6b00',
    shortName: 'BLAZE',
  },
  'cyber-ice': {
    c1: '#002636',
    c2: '#0284c7',
    c3: '#00f0ff',
    shortName: 'CYBER',
  },
  'pulse-watermelon': {
    c1: '#380012',
    c2: '#d91a56',
    c3: '#ff2e74',
    shortName: 'PULSE',
  },
  'night-cherry': {
    c1: '#260009',
    c2: '#9f1239',
    c3: '#e11d48',
    shortName: 'NIGHT',
  },
};

export function getFlavorColors(
  flavorId: string,
  color1?: string,
  color2?: string,
  name?: string
): FlavorColorTriple {
  if (FLAVOR_PALETTES[flavorId]) {
    return FLAVOR_PALETTES[flavorId];
  }
  const c3 = color1 || '#39ff14';
  const c1 = color2 || '#071a03';
  const c2 = color1 || '#1fa80c';
  const shortName = name ? name.split(' ').pop()?.toUpperCase() || 'SPARK' : 'SPARK';
  return { c1, c2, c3, shortName };
}

const DROPLETS = [
  { cx: 42, cy: 98, r: 2.2 },
  { cx: 88, cy: 115, r: 1.8 },
  { cx: 36, cy: 145, r: 2.5 },
  { cx: 104, cy: 158, r: 1.4 },
  { cx: 48, cy: 185, r: 2.0 },
  { cx: 96, cy: 192, r: 2.4 },
  { cx: 62, cy: 172, r: 1.6 },
  { cx: 82, cy: 88, r: 1.3 },
];

export const Can: React.FC<CanProps> = ({
  shortName = 'VOLTAGE',
  className = '',
  style,
}) => {
  const reactId = useId();
  const uid = reactId.replace(/[^a-zA-Z0-9_-]/g, '');

  return (
    <svg
      viewBox="0 0 140 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto select-none pointer-events-none ${className}`}
      style={{
        filter:
          'drop-shadow(0 16px 20px rgba(0,0,0,.65)) drop-shadow(0 0 26px color-mix(in srgb, var(--c2) 28%, transparent))',
        ...style,
      }}
    >
      <defs>
        {/* Formato do corpo da lata */}
        <clipPath id={`${uid}-body-clip`}>
          <path d="M30 36 C30 52 20 54 20 68 L20 228 C20 238 30 240 30 246 A40 8 0 0 0 110 246 C110 240 120 238 120 228 L120 68 C120 54 110 52 110 36 Z" />
        </clipPath>

        {/* 1. Gradiente horizontal de metal escuro */}
        <linearGradient
          id={`${uid}-metal-body`}
          x1="0"
          y1="0"
          x2="140"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0a0b0c" />
          <stop offset="30%" stopColor="#272a2d" />
          <stop offset="60%" stopColor="#121416" />
          <stop offset="100%" stopColor="#050506" />
        </linearGradient>

        {/* 2. Gradiente vertical da faixa colorida diagonal */}
        <linearGradient
          id={`${uid}-stripe-grad`}
          x1="0"
          y1="174"
          x2="0"
          y2="252"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" style={{ stopColor: 'var(--c3)' }} />
          <stop offset="45%" style={{ stopColor: 'var(--c2)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--c1)' }} />
        </linearGradient>

        {/* 6. Gradiente metálico horizontal do colarinho e base */}
        <linearGradient
          id={`${uid}-metal-rim`}
          x1="20"
          y1="0"
          x2="120"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#3a3f43" />
          <stop offset="28%" stopColor="#f2f5f7" />
          <stop offset="55%" stopColor="#8f979c" />
          <stop offset="78%" stopColor="#cfd5d9" />
          <stop offset="100%" stopColor="#30353a" />
        </linearGradient>

        {/* Gradiente da tampa externa */}
        <linearGradient
          id={`${uid}-lid-metal`}
          x1="30"
          y1="28"
          x2="110"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#454b50" />
          <stop offset="28%" stopColor="#f2f5f7" />
          <stop offset="55%" stopColor="#8f979c" />
          <stop offset="80%" stopColor="#cfd5d9" />
          <stop offset="100%" stopColor="#33383c" />
        </linearGradient>

        {/* Gradiente radial da tampa interna */}
        <radialGradient
          id={`${uid}-lid-inner`}
          cx="70"
          cy="36"
          rx="35"
          ry="6.2"
          fx="68"
          fy="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#eef1f3" />
          <stop offset="100%" stopColor="#5b6166" />
        </radialGradient>

        {/* 7. Overlay de sombreamento cilíndrico */}
        <linearGradient
          id={`${uid}-cyl-shading`}
          x1="20"
          y1="0"
          x2="120"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#000000" stopOpacity="0.78" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0.26" />
          <stop offset="65%" stopColor="#000000" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.82" />
        </linearGradient>

        {/* 8. Reflexo vertical que some nas pontas */}
        <linearGradient
          id={`${uid}-vert-reflection`}
          x1="0"
          y1="76"
          x2="0"
          y2="224"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="75%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* 3. Glow do raio */}
        <filter id={`${uid}-bolt-glow`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="3.2" floodColor="var(--c3)" floodOpacity="0.85" />
        </filter>
      </defs>

      {/* Camadas dentro do clipPath do corpo */}
      <g clipPath={`url(#${uid}-body-clip)`}>
        {/* 1. Corpo: metal escuro */}
        <rect x="0" y="0" width="140" height="270" fill={`url(#${uid}-metal-body)`} />

        {/* 2. Faixa colorida diagonal na parte de baixo */}
        <path d="M20 206 L120 174 V252 H20 Z" fill={`url(#${uid}-stripe-grad)`} />
        <line
          x1="20"
          y1="206"
          x2="120"
          y2="174"
          stroke="var(--c3)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* 3. Raio em --c3 com drop-shadow glow */}
        <polygon
          points="75,82 60,101 69,101 65,116 80,95 71,95"
          fill="var(--c3)"
          filter={`url(#${uid}-bolt-glow)`}
        />

        {/* 4. Texto SPARK e Nome do sabor */}
        <text
          x="70"
          y="142"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="22"
          fontWeight="900"
          letterSpacing="-0.5"
          fontFamily="system-ui, -apple-system, 'Archivo Black', 'Arial Black', sans-serif"
        >
          SPARK
        </text>

        <text
          x="70"
          y="156"
          textAnchor="middle"
          fill="var(--c3)"
          fontSize="8.5"
          fontWeight="800"
          letterSpacing="2.2"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {shortName.toUpperCase()}
        </text>

        {/* 5. Na faixa colorida: ZERO AÇÚCAR e 473 ML */}
        <text
          x="70"
          y="218"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="6.8"
          fontWeight="800"
          letterSpacing="0.8"
          opacity="0.95"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          ZERO AÇÚCAR
        </text>

        <text
          x="70"
          y="232"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="6"
          fontWeight="700"
          letterSpacing="1.2"
          opacity="0.85"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          473 ML
        </text>

        {/* 6. Colarinho de alumínio no topo e base de alumínio */}
        <path d="M20 30 H120 V66 Q70 78 20 66 Z" fill={`url(#${uid}-metal-rim)`} />
        <path d="M20 236 Q70 248 120 236 V262 H20 Z" fill={`url(#${uid}-metal-rim)`} />

        {/* 7. Overlay de sombreamento cilíndrico */}
        <rect x="0" y="0" width="140" height="270" fill={`url(#${uid}-cyl-shading)`} />

        {/* 8. Reflexo vertical e luz de contorno na direita */}
        <rect x="34" y="76" width="5" height="148" rx="2.5" fill={`url(#${uid}-vert-reflection)`} />
        <rect x="117.5" y="68" width="2.5" height="155" fill="var(--c3)" opacity="0.5" />

        {/* 9. Gotas de condensação */}
        {DROPLETS.map((d, index) => (
          <g key={index}>
            <circle
              cx={d.cx}
              cy={d.cy}
              r={d.r}
              fill="rgba(255,255,255,0.09)"
              stroke="rgba(255,255,255,0.38)"
              strokeWidth="0.6"
            />
            <circle
              cx={d.cx - d.r * 0.35}
              cy={d.cy - d.r * 0.35}
              r={d.r * 0.28}
              fill="#ffffff"
              opacity="0.8"
            />
          </g>
        ))}
      </g>

      {/* Fora do clipPath (por cima: Tampa e Anel) */}
      <ellipse cx="70" cy="36" rx="40" ry="8" fill={`url(#${uid}-lid-metal)`} />
      <ellipse cx="70" cy="36" rx="35" ry="6.2" fill={`url(#${uid}-lid-inner)`} />

      {/* Abertura (drinking hole) */}
      <ellipse cx="60" cy="37" rx="11" ry="2.6" fill="#17191b" />

      {/* Anel / Puxador (Pull tab) */}
      <ellipse
        cx="76"
        cy="35"
        rx="12"
        ry="3.2"
        fill={`url(#${uid}-lid-metal)`}
        stroke="#666666"
        strokeWidth="0.8"
      />
      <circle cx="73" cy="35" r="1.3" fill="#2d3236" />
    </svg>
  );
};
