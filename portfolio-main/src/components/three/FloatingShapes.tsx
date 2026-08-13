import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Torus, Octahedron, MeshDistortMaterial } from '@react-three/drei';
import type { Mesh } from 'three';

export function FloatingShapes() {
  const coreRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (coreRef.current) coreRef.current.rotation.y += delta * 0.25;
  });

  return (
    <group>
      {/* Holographic distorted core */}
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <Icosahedron ref={coreRef} args={[1.15, 4]}>
          <MeshDistortMaterial
            color="#6366f1"
            emissive="#4f46e5"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.9}
            distort={0.38}
            speed={1.8}
          />
        </Icosahedron>
      </Float>

      {/* Wireframe outer shell */}
      <Float speed={1} rotationIntensity={0.4} floatIntensity={0.8}>
        <Icosahedron args={[1.8, 1]}>
          <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.25} />
        </Icosahedron>
      </Float>

      {/* Orbiting torus */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.4}>
        <Torus args={[0.38, 0.14, 16, 60]} position={[2.6, 0.9, -1]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#7c3aed"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Torus>
      </Float>

      {/* Floating octahedron */}
      <Float speed={1.6} rotationIntensity={1.5} floatIntensity={2}>
        <Octahedron args={[0.42]} position={[-2.8, -0.6, 0.5]}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={0.45}
            metalness={0.7}
            roughness={0.25}
          />
        </Octahedron>
      </Float>

      {/* Small accent dodecahedron */}
      <Float speed={2.2} rotationIntensity={2} floatIntensity={1.6}>
        <mesh position={[2.2, -1.6, 1.2]}>
          <dodecahedronGeometry args={[0.28]} />
          <meshStandardMaterial
            color="#a78bfa"
            emissive="#8b5cf6"
            emissiveIntensity={0.5}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>
      </Float>
    </group>
  );
}
