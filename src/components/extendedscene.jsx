'use client'
// components/ThreeScene.js
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SpinningCube({ position, color, material }) {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={position} material={material}>
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
}

function Sphere({ position }) {
    const meshRef = useRef();
    const texture = new THREE.TextureLoader().load('/glowingearth2.jpeg'); // Load the Earth texture
    useFrame(() => {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      });
    return (
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  }

export default function ThreeScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />

      <SpinningCube 
        position={[-2, 0, 0]} 
        color="lightblue" 
        material={new THREE.MeshStandardMaterial({ color: 'lightblue' })}
      />
      <SpinningCube 
        position={[2, 0, 0]} 
        color="lightgreen" 
        material={new THREE.MeshPhongMaterial({ color: 'lightgreen', shininess: 100 })}
      />
      <Sphere 
        position={[0, 0, 2]} 
        color="red" 
        material={new THREE.MeshToonMaterial({ color: 'red' })}
      />

      <OrbitControls />
    </Canvas>
  );
}
