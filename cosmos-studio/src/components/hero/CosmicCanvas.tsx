"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Rig() {
  const { camera, mouse } = useThree();
  const v = useMemo(() => new THREE.Vector3(), []);
  return useFrame(() => {
    v.set(mouse.x * 0.65, mouse.y * 0.45, camera.position.z);
    camera.position.lerp(v, 0.028);
    camera.lookAt(0, 0, 0);
  });
}

function EnergyCore() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!mesh.current) return;
    mesh.current.rotation.x = t * 0.22;
    mesh.current.rotation.y = t * 0.38;
  });
  return (
    <Float speed={1.35} rotationIntensity={0.22} floatIntensity={0.55}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color="#0c1228"
          emissive="#6366f1"
          emissiveIntensity={0.55}
          metalness={0.85}
          roughness={0.22}
          wireframe
        />
      </mesh>
      <mesh scale={0.9}>
        <icosahedronGeometry args={[1.05, 0]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#22d3ee"
          emissiveIntensity={0.12}
          metalness={0.25}
          roughness={0.45}
          transparent
          opacity={0.14}
        />
      </mesh>
    </Float>
  );
}

export default function CosmicCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 46 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#050816"]} />
        <fog attach="fog" args={["#050816", 14, 36]} />
        <ambientLight intensity={0.14} />
        <pointLight position={[6, 5, 5]} intensity={1.35} color="#818cf8" />
        <pointLight position={[-6, -3, 4]} intensity={0.75} color="#5eead4" />
        <Stars radius={88} depth={42} count={3800} factor={2.2} saturation={0} fade speed={0.28} />
        <Sparkles count={160} scale={12} size={1.8} speed={0.22} opacity={0.38} color="#c7d2fe" />
        <EnergyCore />
        <Rig />
      </Canvas>
    </div>
  );
}
