'use client';

import React, { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface ParticlesProps {
  color: string;
  burstTrigger: number;
  reducedMotion?: boolean;
}

// Particle system parameters (adjustable)
const BUBBLE_COUNT = 180; // Total continuous fizz bubbles
const BURST_COUNT = 120;  // Burst sparks on flavor switch
const CAN_RADIUS = 1.3;
const TANK_HEIGHT = 7.0;

export const Particles: React.FC<ParticlesProps> = ({
  color,
  burstTrigger,
  reducedMotion = false,
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  const burstPointsRef = useRef<THREE.Points>(null);
  const burstProgressRef = useRef<number>(1.0); // 1.0 means burst is finished

  // Continuous Rising Bubbles
  const [bubblePositions, bubbleVelocities] = useMemo(() => {
    const pos = new Float32Array(BUBBLE_COUNT * 3);
    const vel = new Float32Array(BUBBLE_COUNT * 3);

    for (let i = 0; i < BUBBLE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.8 + Math.random() * CAN_RADIUS * 1.5;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * TANK_HEIGHT;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      vel[i * 3] = (Math.random() - 0.5) * 0.006;
      vel[i * 3 + 1] = 0.015 + Math.random() * 0.035; // Rising speed
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.006;
    }
    return [pos, vel];
  }, []);

  // Flavor Change Radial Burst Sparks
  const [burstPositions, burstDirections] = useMemo(() => {
    const pos = new Float32Array(BURST_COUNT * 3);
    const dir = new Float32Array(BURST_COUNT * 3);

    for (let i = 0; i < BURST_COUNT; i++) {
      pos[i * 3] = 0;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = 0;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const speed = 0.06 + Math.random() * 0.08;

      dir[i * 3] = Math.sin(phi) * Math.cos(theta) * speed;
      dir[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * speed;
      dir[i * 3 + 2] = Math.cos(phi) * speed;
    }
    return [pos, dir];
  }, []);

  // Trigger burst animation on prop change
  useEffect(() => {
    if (burstTrigger > 0 && !reducedMotion) {
      burstProgressRef.current = 0.0;
      if (burstPointsRef.current) {
        const positions = burstPointsRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < BURST_COUNT * 3; i++) {
          positions[i] = 0;
        }
        burstPointsRef.current.geometry.attributes.position.needsUpdate = true;
      }
    }
  }, [burstTrigger, reducedMotion]);

  // Frame animation loop
  useFrame((_, delta) => {
    if (reducedMotion) return;

    // 1. Update continuous bubbles
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < BUBBLE_COUNT; i++) {
        const idx = i * 3;
        positions[idx] += bubbleVelocities[idx];
        positions[idx + 1] += bubbleVelocities[idx + 1] * (delta * 60);
        positions[idx + 2] += bubbleVelocities[idx + 2];

        // Reset bubble when it reaches top ceiling
        if (positions[idx + 1] > TANK_HEIGHT / 2) {
          positions[idx + 1] = -TANK_HEIGHT / 2;
          const angle = Math.random() * Math.PI * 2;
          const radius = 0.8 + Math.random() * CAN_RADIUS * 1.5;
          positions[idx] = Math.cos(angle) * radius;
          positions[idx + 2] = Math.sin(angle) * radius;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // 2. Update burst animation
    if (burstProgressRef.current < 1.0 && burstPointsRef.current) {
      burstProgressRef.current += delta * 1.8;
      const positions = burstPointsRef.current.geometry.attributes.position.array as Float32Array;
      const decay = 1 - burstProgressRef.current;

      for (let i = 0; i < BURST_COUNT; i++) {
        const idx = i * 3;
        positions[idx] += burstDirections[idx] * (delta * 60);
        positions[idx + 1] += burstDirections[idx + 1] * (delta * 60) - 0.002; // slight gravity
        positions[idx + 2] += burstDirections[idx + 2] * (delta * 60);
      }
      burstPointsRef.current.geometry.attributes.position.needsUpdate = true;

      const mat = burstPointsRef.current.material as THREE.PointsMaterial;
      mat.opacity = Math.max(0, decay * 0.9);
    }
  });

  const parsedColor = useMemo(() => new THREE.Color(color), [color]);

  return (
    <group>
      {/* Continuous Rising Bubbles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[bubblePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color={parsedColor}
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Burst Effect on Flavor Change */}
      <points ref={burstPointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[burstPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color={parsedColor}
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

