'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { FlavorVariant } from '@/types/product';

interface CanModelProps {
  flavor: FlavorVariant;
  isInteracting: boolean;
  reducedMotion?: boolean;
}

// Procedural texture generator for dynamic can label & condensation
function createCanLabelTexture(flavor: FlavorVariant): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (!ctx) return new THREE.CanvasTexture(canvas);

  // 1. Background gradient (dark base to flavor accent)
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, '#050505');
  grad.addColorStop(0.3, flavor.color2);
  grad.addColorStop(0.7, '#080808');
  grad.addColorStop(1, flavor.color1);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. High-tech angled stripes & energy accents
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
  ctx.lineWidth = 3;
  for (let x = -500; x < canvas.width + 500; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 300, canvas.height);
    ctx.stroke();
  }

  // Neon Energy Diagonal Band
  const neonBand = ctx.createLinearGradient(0, 0, canvas.width, 0);
  neonBand.addColorStop(0.2, 'transparent');
  neonBand.addColorStop(0.45, flavor.color1);
  neonBand.addColorStop(0.55, '#FFFFFF');
  neonBand.addColorStop(0.65, flavor.color1);
  neonBand.addColorStop(0.8, 'transparent');
  ctx.fillStyle = neonBand;
  ctx.globalAlpha = 0.18;
  ctx.beginPath();
  ctx.moveTo(250, 0);
  ctx.lineTo(550, 0);
  ctx.lineTo(750, canvas.height);
  ctx.lineTo(450, canvas.height);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // 3. Brand Header & Lightning Bolt
  ctx.save();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 68px "Arial Black", -apple-system, sans-serif';
  ctx.letterSpacing = '-2px';
  ctx.textAlign = 'center';
  ctx.shadowColor = flavor.color1;
  ctx.shadowBlur = 25;
  ctx.fillText('⚡ SPARK', canvas.width / 2, 130);

  ctx.font = '700 20px -apple-system, sans-serif';
  ctx.fillStyle = flavor.color1;
  ctx.shadowBlur = 10;
  ctx.fillText('HIGH PERFORMANCE ENERGY', canvas.width / 2, 170);
  ctx.restore();

  // 4. Large Flavor Name
  ctx.save();
  ctx.font = '900 52px "Arial Black", -apple-system, sans-serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
  ctx.shadowBlur = 15;
  ctx.fillText(flavor.name.toUpperCase(), canvas.width / 2, 275);

  // Tagline & Specs
  ctx.font = '600 20px -apple-system, sans-serif';
  ctx.fillStyle = '#D1D5DB';
  ctx.shadowBlur = 0;
  ctx.fillText(`ZERO AÇÚCAR  •  ${flavor.nutritional.caffeine} CAFEÍNA  •  TAURINA`, canvas.width / 2, 320);

  // Technical bottom specs bar
  ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.fillRect(150, 370, canvas.width - 300, 2);

  ctx.font = '700 18px monospace';
  ctx.fillStyle = flavor.color1;
  ctx.fillText('FORMULA IONIC V4 // 473 ML', canvas.width / 2, 420);
  ctx.restore();

  // 5. Procedural condensation water droplets on the label
  ctx.save();
  for (let i = 0; i < 90; i++) {
    const rx = Math.random() * canvas.width;
    const ry = Math.random() * canvas.height;
    const radius = 2 + Math.random() * 5;

    // Droplet shadow & highlight
    ctx.beginPath();
    ctx.arc(rx, ry, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(rx + 1, ry + 1, radius * 0.7, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    ctx.fill();
  }
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;
  return texture;
}

export const CanModel: React.FC<CanModelProps> = ({
  flavor,
  isInteracting,
  reducedMotion = false,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer, viewport } = useThree();

  // Dynamic texture generated for current flavor
  const labelTexture = useMemo(() => {
    return createCanLabelTexture(flavor);
  }, [flavor]);

  useEffect(() => {
    return () => {
      labelTexture.dispose();
    };
  }, [labelTexture]);

  // Metallic Aluminum Materials
  const aluminumMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: '#D4D8DD',
      metalness: 0.95,
      roughness: 0.18,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      envMapIntensity: 1.5,
    });
  }, []);

  const labelMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      map: labelTexture,
      metalness: 0.88,
      roughness: 0.22,
      clearcoat: 0.85,
      clearcoatRoughness: 0.12,
      reflectivity: 0.8,
      envMapIntensity: 1.3,
    });
  }, [labelTexture]);

  // Animation loop: mouse follow + smooth idle spin
  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (!reducedMotion) {
      // 1. Idle auto-rotation when user is not manually dragging
      if (!isInteracting) {
        groupRef.current.rotation.y += delta * 0.55; // Adjustable idle rotation speed
      }

      // 2. Responsive mouse cursor tilt follow (lerp smoothing)
      const targetRotationX = -pointer.y * 0.28;
      const targetRotationZ = -pointer.x * 0.22;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.08);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotationZ, 0.08);

      // Subtle floating bobbing effect
      groupRef.current.position.y = Math.sin(Date.now() * 0.0018) * 0.08;
    }
  });

  // Responsive scale according to screen size
  const canScale = viewport.width < 5 ? 1.05 : 1.35;

  return (
    <group ref={groupRef} scale={[canScale, canScale, canScale]}>
      {/* 1. Main Can Body with Brand Label */}
      <mesh ref={meshRef} material={labelMaterial} castShadow receiveShadow>
        <cylinderGeometry args={[0.72, 0.72, 2.2, 64, 1, true]} />
      </mesh>

      {/* 2. Top Shoulder Curve (Transition to lid) */}
      <mesh position={[0, 1.16, 0]} material={aluminumMaterial} castShadow>
        <cylinderGeometry args={[0.62, 0.72, 0.12, 64]} />
      </mesh>

      {/* 3. Top Rim Lip */}
      <mesh position={[0, 1.25, 0]} material={aluminumMaterial} castShadow>
        <torusGeometry args={[0.62, 0.035, 16, 64]} />
      </mesh>

      {/* 4. Top Lid Interior & Pull Tab */}
      <mesh position={[0, 1.23, 0]} rotation={[-Math.PI / 2, 0, 0]} material={aluminumMaterial}>
        <circleGeometry args={[0.61, 64]} />
      </mesh>

      {/* Pull Tab Geometry */}
      <group position={[0.1, 1.25, 0]} rotation={[0, 0.3, 0]}>
        <mesh material={aluminumMaterial}>
          <boxGeometry args={[0.3, 0.015, 0.18]} />
        </mesh>
        <mesh position={[-0.08, 0.01, 0]} material={aluminumMaterial}>
          <cylinderGeometry args={[0.035, 0.035, 0.02, 16]} />
        </mesh>
      </group>

      {/* 5. Bottom Bevel & Inward Base */}
      <mesh position={[0, -1.16, 0]} material={aluminumMaterial} castShadow>
        <cylinderGeometry args={[0.72, 0.62, 0.12, 64]} />
      </mesh>
      <mesh position={[0, -1.24, 0]} material={aluminumMaterial}>
        <torusGeometry args={[0.62, 0.035, 16, 64]} />
      </mesh>
      <mesh position={[0, -1.22, 0]} rotation={[Math.PI / 2, 0, 0]} material={aluminumMaterial}>
        <circleGeometry args={[0.61, 64]} />
      </mesh>
    </group>
  );
};

