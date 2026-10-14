'use client';

import React, { useId } from 'react';

export interface SnackVisualProps {
  shortName?: string;
  badge?: string;
  type?: 'bar' | 'chips' | 'gummies';
  className?: string;
  style?: React.CSSProperties;
}

export const SnackVisual: React.FC<SnackVisualProps> = ({
  shortName = 'PROTEIN',
  badge = '20G WHEY',
  type = 'bar',
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
        {/* ClipPath do corpo da embalagem */}
        <clipPath id={`${uid}-snack-clip`}>
          <rect x="25" y="42" width="90" height="186" rx="14" />
        </clipPath>

        {/* Gradiente do foil metálico de fundo */}
        <linearGradient
          id={`${uid}-foil-base`}
          x1="25"
          y1="0"
          x2="115"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0b0c0e" />
          <stop offset="26%" stopColor="#2c3035" />
          <stop offset="55%" stopColor="#141618" />
          <stop offset="85%" stopColor="#25292d" />
          <stop offset="100%" stopColor="#08090a" />
        </linearGradient>

        {/* Gradiente da faixa colorida */}
        <linearGradient
          id={`${uid}-stripe-grad`}
          x1="0"
          y1="160"
          x2="0"
          y2="230"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" style={{ stopColor: 'var(--c3)' }} />
          <stop offset="45%" style={{ stopColor: 'var(--c2)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--c1)' }} />
        </linearGradient>

        {/* Gradiente metálico da selagem serrilhada (crimp) */}
        <linearGradient
          id={`${uid}-crimp-grad`}
          x1="25"
          y1="0"
          x2="115"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#32363a" />
          <stop offset="28%" stopColor="#8d9499" />
          <stop offset="55%" stopColor="#454b50" />
          <stop offset="82%" stopColor="#aab2b8" />
          <stop offset="100%" stopColor="#2b2f33" />
        </linearGradient>

        {/* Sombreamento curvado da embalagem almofadada */}
        <linearGradient
          id={`${uid}-pillow-shading`}
          x1="25"
          y1="0"
          x2="115"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#000000" stopOpacity="0.82" />
          <stop offset="28%" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="65%" stopColor="#000000" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.85" />
        </linearGradient>

        {/* Brilho vertical de reflexo no plástico foil */}
        <linearGradient
          id={`${uid}-sheen`}
          x1="0"
          y1="50"
          x2="0"
          y2="220"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="75%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Glow do raio */}
        <filter id={`${uid}-bolt-glow`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="3.2" floodColor="var(--c3)" floodOpacity="0.85" />
        </filter>
      </defs>

      {/* ============================================================== */}
      {/* 1. SELAGEM SERRILHADA SUPERIOR (TOP CRIMP)                      */}
      {/* ============================================================== */}
      <path
        d="M25 32 L30 36 L35 32 L40 36 L45 32 L50 36 L55 32 L60 36 L65 32 L70 36 L75 32 L80 36 L85 32 L90 36 L95 32 L100 36 L105 32 L110 36 L115 32 V46 H25 Z"
        fill={`url(#${uid}-crimp-grad)`}
      />
      {/* Frisos verticais da selagem */}
      {[32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 110].map((x) => (
        <line
          key={`tc-${x}`}
          x1={x}
          y1="34"
          x2={x}
          y2="45"
          stroke="rgba(0,0,0,0.4)"
          strokeWidth="0.8"
        />
      ))}

      {/* ============================================================== */}
      {/* 2. CORPO PRINCIPAL COM CLIPPATH                                 */}
      {/* ============================================================== */}
      <g clipPath={`url(#${uid}-snack-clip)`}>
        {/* Fundo foil escuro */}
        <rect x="25" y="42" width="90" height="186" fill={`url(#${uid}-foil-base)`} />

        {/* Faixa colorida diagonal na base */}
        <path d="M25 186 L115 158 V228 H25 Z" fill={`url(#${uid}-stripe-grad)`} />
        <line
          x1="25"
          y1="186"
          x2="115"
          y2="158"
          stroke="var(--c3)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Badge do topo (Ex: 20G WHEY / NOOTROPIC) */}
        <g transform="translate(70, 72)">
          <rect
            x="-34"
            y="-10"
            width="68"
            height="18"
            rx="9"
            fill="#050607"
            stroke="var(--c3)"
            strokeWidth="1.2"
          />
          <text
            x="0"
            y="3"
            textAnchor="middle"
            fill="var(--c3)"
            fontSize="8"
            fontWeight="900"
            letterSpacing="1"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            {badge.toUpperCase()}
          </text>
        </g>

        {/* Raio SPARK estilizado */}
        <polygon
          points="73,90 61,107 68,107 65,120 78,102 70,102"
          fill="var(--c3)"
          filter={`url(#${uid}-bolt-glow)`}
        />

        {/* Logotipo SPARK */}
        <text
          x="70"
          y="136"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="18"
          fontWeight="900"
          letterSpacing="-0.5"
          fontFamily="system-ui, -apple-system, 'Archivo Black', 'Arial Black', sans-serif"
        >
          SPARK
        </text>

        {/* Categoria do snack */}
        <text
          x="70"
          y="148"
          textAnchor="middle"
          fill="#a0a5ab"
          fontSize="7"
          fontWeight="800"
          letterSpacing="1.8"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {type === 'chips' ? 'CRUNCH PROTEIN CHIPS' : type === 'gummies' ? 'NOOTROPIC GUMMIES' : 'CRISP PROTEIN BAR'}
        </text>

        {/* Nome do Sabor */}
        <text
          x="70"
          y="194"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="9.5"
          fontWeight="900"
          letterSpacing="0.8"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {shortName.toUpperCase()}
        </text>

        {/* Especificações na barra inferior */}
        <text
          x="70"
          y="212"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="6.5"
          fontWeight="800"
          letterSpacing="1.2"
          opacity="0.9"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          ZERO GLÚTEN • ZERO AÇÚCAR
        </text>

        {/* Shading cilíndrico / almofadado */}
        <rect x="25" y="42" width="90" height="186" fill={`url(#${uid}-pillow-shading)`} />

        {/* Linha vertical de brilho do foil */}
        <rect x="38" y="55" width="4.5" height="160" rx="2.2" fill={`url(#${uid}-sheen)`} />

        {/* Linha de borda direita sutil */}
        <rect x="113" y="50" width="1.8" height="170" fill="var(--c3)" opacity="0.4" />
      </g>

      {/* ============================================================== */}
      {/* 3. SELAGEM SERRILHADA INFERIOR (BOTTOM CRIMP)                   */}
      {/* ============================================================== */}
      <path
        d="M25 226 H115 V240 L110 236 L105 240 L100 236 L95 240 L90 236 L85 240 L80 236 L75 240 L70 236 L65 240 L60 236 L55 240 L50 236 L45 240 L40 236 L35 240 L30 236 L25 240 Z"
        fill={`url(#${uid}-crimp-grad)`}
      />
      {/* Frisos verticais da selagem inferior */}
      {[32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 110].map((x) => (
        <line
          key={`bc-${x}`}
          x1={x}
          y1="227"
          x2={x}
          y2="238"
          stroke="rgba(0,0,0,0.4)"
          strokeWidth="0.8"
        />
      ))}
    </svg>
  );
};
