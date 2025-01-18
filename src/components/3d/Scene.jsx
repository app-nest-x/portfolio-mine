'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Vector3 } from 'three';

function FloatingParticles({ count = 50 }) {
  const points = useRef();
  
  const [positions, speeds] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      speeds[i] = Math.random() * 0.1;
    }
    
    return [positions, speeds];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      points.current.geometry.attributes.position.array[i3 + 1] += 
        Math.sin(time + speeds[i]) * 0.01;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function GradientSphere() {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.1;
    mesh.current.rotation.y = time * 0.15;
    mesh.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <mesh ref={mesh} scale={[1, 1, 1]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={0.9}
        roughness={0.1}
        transmission={0.5}
        thickness={0.5}
      />
    </mesh>
  );
}

function FloatingLines({ count = 10 }) {
  const lines = useRef();
  
  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(count * 6);
    const velocities = Array(count).fill().map(() => new Vector3(
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01
    ));
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      positions[i * 6] = x;
      positions[i * 6 + 1] = y;
      positions[i * 6 + 2] = z;
      positions[i * 6 + 3] = x + (Math.random() - 0.5);
      positions[i * 6 + 4] = y + (Math.random() - 0.5);
      positions[i * 6 + 5] = z + (Math.random() - 0.5);
    }
    
    return [positions, velocities];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positionArray = lines.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i6 = i * 6;
      for (let j = 0; j < 6; j++) {
        positionArray[i6 + j] += velocities[i].getComponent(j % 3);
        if (Math.abs(positionArray[i6 + j]) > 5) {
          velocities[i].setComponent(j % 3, -velocities[i].getComponent(j % 3));
        }
      }
    }
    lines.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <line ref={lines}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count * 2}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#ffffff" opacity={0.2} transparent />
    </line>
  );
}

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
    >
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 5, 15]} />
      
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      
      <GradientSphere />
      <FloatingParticles count={50} />
      <FloatingLines count={10} />
      
      <EffectComposer>
        <Bloom
          intensity={1}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}
