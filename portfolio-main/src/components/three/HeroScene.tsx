import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import type { Group } from 'three';
import { Particles } from './Particles';
import { FloatingShapes } from './FloatingShapes';

function MouseParallax({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<Group>(null);
  const { pointer } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    target.current.x = pointer.x * 0.6;
    target.current.y = pointer.y * 0.4;
    const lerp = Math.min(delta * 2.5, 1);
    groupRef.current.rotation.y += (target.current.x - groupRef.current.rotation.y) * lerp;
    groupRef.current.rotation.x += (-target.current.y - groupRef.current.rotation.x) * lerp;
  });

  return <group ref={groupRef}>{children}</group>;
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#6366f1" />
        <pointLight position={[-10, -5, -5]} intensity={0.8} color="#06b6d4" />
        <pointLight position={[0, 5, -8]} intensity={0.6} color="#8b5cf6" />

        <MouseParallax>
          <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
            <FloatingShapes />
          </Float>
        </MouseParallax>

        <Particles />

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
