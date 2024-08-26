'use client'

// components/ThreeScene.js
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { MeshStandardMaterial, BoxGeometry } from 'three';


function Cube() {
  const cubeRef = useRef();

  // Rotating the cube
  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="lightgreen" />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <Cube />
    </Canvas>
  );
}
