import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

export function Model() {
  const meshRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(time / 3)
    meshRef.current.rotation.y = Math.sin(time / 4)
  })

  return (
    <mesh ref={meshRef} scale={1.5}>
      <torusKnotGeometry args={[1, 0.3, 256, 32]} />
      <MeshDistortMaterial
        color="#000000"
        roughness={0}
        metalness={1}
        distort={0.3}
        speed={1}
        emissive="#000000"
        emissiveIntensity={0.05}
      />
    </mesh>
  )
}
