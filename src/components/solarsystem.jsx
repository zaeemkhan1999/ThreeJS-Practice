'use client'
// components/SolarSystem.js
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Planet({ textureUrl, position, rotationSpeed, orbitRadius, orbitSpeed }) {
  const planetRef = useRef();
  const orbitRef = useRef();

  const texture = new THREE.TextureLoader().load(textureUrl);

  // Rotate the planet on its axis and move it around the orbit
  useFrame(() => {
    if (planetRef.current && orbitRef.current) {
      planetRef.current.rotation.y += rotationSpeed;
      orbitRef.current.rotation.y += orbitSpeed;
      planetRef.current.rotation.x += rotationSpeed;
      orbitRef.current.rotation.x += orbitSpeed;

      planetRef.current.rotation.z += rotationSpeed;
      orbitRef.current.rotation.z += orbitSpeed;
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh ref={planetRef} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}

export default function SolarSystem() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={10} />
      <Stars />

      {/* The Sun */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="yellow" />
      </mesh>

      {/* Planets */}
      <Planet
        textureUrl="/earth_texture.jpg"
        position={[5, 0, 0]}
        rotationSpeed={0.01}
        orbitRadius={5}
        orbitSpeed={0.005}
      />
      <Planet
        textureUrl="/glowingearth.jpeg"
        position={[7, 0, 0]}
        rotationSpeed={0.008}
        orbitRadius={7}
        orbitSpeed={0.004}
      />
      <Planet
        textureUrl="/glowingearth2.jpeg"
        position={[10, 0, 0]}
        rotationSpeed={0.007}
        orbitRadius={10}
        orbitSpeed={0.003}
      />

      <OrbitControls />
    </Canvas>
  );
}
