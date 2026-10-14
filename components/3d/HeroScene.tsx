'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { FlavorVariant } from '@/types/product';
import { CanModel } from './CanModel';
import { Particles } from './Particles';
import { CanFallback } from './CanFallback';

interface HeroSceneProps {
  flavor: FlavorVariant;
  burstTrigger: number;
  onUserInteractionChange?: (isInteracting: boolean) => void;
}

export const HeroScene: React.FC<HeroSceneProps> = ({
  flavor,
  burstTrigger,
  onUserInteractionChange,
}) => {
  const [isInteracting, setIsInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  // Check for reduced motion preference and WebGL support
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);

      const handleChange = () => setReducedMotion(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleChange);

      // Simple WebGL check
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setHasWebGL(Boolean(gl));
      } catch {
        setHasWebGL(false);
      }

      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const handleStartInteraction = () => {
    setIsInteracting(true);
    onUserInteractionChange?.(true);
  };

  const handleEndInteraction = () => {
    setIsInteracting(false);
    onUserInteractionChange?.(false);
  };

  // SSR or WebGL failure fallback
  if (hasWebGL === false) {
    return <CanFallback flavor={flavor} />;
  }

  return (
    <div className="relative w-full h-full">
      {/* Dynamic Background Neon Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] rounded-full blur-[110px] pointer-events-none transition-colors duration-1000 opacity-40 mix-blend-screen"
        style={{
          background: `radial-gradient(circle, ${flavor.color1} 0%, transparent 70%)`,
        }}
      />

      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onPointerDown={handleStartInteraction}
        onPointerUp={handleEndInteraction}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
      >
        <Suspense fallback={null}>
          {/* Ambient & Key Studio Lighting */}
          <ambientLight intensity={0.65} />
          <directionalLight position={[5, 8, 5]} intensity={1.8} castShadow />
          <directionalLight position={[-5, -2, -3]} intensity={0.4} color="#A0A5B5" />

          {/* Dynamic Flavor Neon Rim & Accent Lights */}
          <pointLight
            position={[-3, 2, 2]}
            color={flavor.color1}
            intensity={2.5}
            distance={8}
          />
          <pointLight
            position={[3, -2, -2]}
            color={flavor.color1}
            intensity={1.8}
            distance={7}
          />
          <pointLight
            position={[0, -3, 1]}
            color={flavor.color1}
            intensity={1.2}
            distance={5}
          />

          {/* Environment Studio Reflections */}
          <Environment preset="city" />

          {/* Floating Group and 3D Can Model */}
          <Float
            speed={reducedMotion ? 0 : 2}
            rotationIntensity={reducedMotion ? 0 : 0.2}
            floatIntensity={reducedMotion ? 0 : 0.4}
          >
            <CanModel
              flavor={flavor}
              isInteracting={isInteracting}
              reducedMotion={reducedMotion}
            />
          </Float>

          {/* Rising Bubbles and Burst System */}
          <Particles
            color={flavor.color1}
            burstTrigger={burstTrigger}
            reducedMotion={reducedMotion}
          />

          {/* Orbit Controls for Free 3D Dragging */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.7}
            maxPolarAngle={Math.PI / 1.6}
            dampingFactor={0.08}
            rotateSpeed={0.8}
            onStart={handleStartInteraction}
            onEnd={handleEndInteraction}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

