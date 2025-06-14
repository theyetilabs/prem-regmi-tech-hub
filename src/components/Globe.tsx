
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const ref = useRef<THREE.Points>(null!);

  const sphere = useMemo(() => {
    const points = new THREE.SphereGeometry(2.5, 48, 48);
    const positions = points.attributes.position.array;
    const randomPositions = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i++) {
      randomPositions[i] = positions[i] + (Math.random() - 0.5) * 0.1;
    }
    return randomPositions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#4263eb"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const GlobeCanvas = () => (
  <div className="absolute top-0 left-0 w-full h-full">
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <Globe />
    </Canvas>
  </div>
);

export default GlobeCanvas;
