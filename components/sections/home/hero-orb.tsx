"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

function Orb() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.08;
    mesh.current.rotation.x += delta * 0.03;
  });
  return (
    <mesh ref={mesh} position={[0.45, 0.4, 0]} scale={1.05}>
      <sphereGeometry args={[1, 96, 96]} />
      <MeshDistortMaterial
        color="#f7e6e8"
        emissive="#f1d3dc"
        emissiveIntensity={0.15}
        roughness={0.4}
        metalness={0}
        distort={0.34}
        speed={0.9}
      />
    </mesh>
  );
}

export default function HeroOrb() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = wrapper.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapper} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={0.9} color="#fff6ee" />
        <directionalLight position={[-3, 4, 5]} intensity={1.6} color="#fff1e6" />
        <pointLight position={[-3, -1.5, 2.5]} intensity={60} color="#a88bc7" />
        <pointLight position={[3, -2, 2]} intensity={45} color="#8fb996" />
        <pointLight position={[2.5, 3, 2]} intensity={40} color="#e9a66b" />
        <pointLight position={[-2, 3, 1]} intensity={35} color="#7fb3d5" />
        <pointLight position={[0, -3, 3]} intensity={30} color="#d9776f" />
        <Orb />
      </Canvas>
    </div>
  );
}
