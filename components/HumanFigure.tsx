"use client";

import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Free animated human character from Three.js examples (MIT license)
// Swap MODEL_URL with your own Mixamo or Ready Player Me .glb for a custom character
const MODEL_URL = "https://threejs.org/examples/models/gltf/Soldier.glb";

const mouse = { x: 0, y: 0 };

function Character() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions, names } = useAnimations(animations, groupRef);

  // Play idle / first animation on mount
  useEffect(() => {
    const idle =
      actions["Idle"] ??
      actions["idle"] ??
      (names.length > 0 ? actions[names[0]] : undefined);
    if (idle) {
      idle.reset().fadeIn(0.5).play();
      return () => void idle.fadeOut(0.5);
    }
  }, [actions, names]);

  // Apply dark stylized materials with mint rim lighting
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#0d1117"),
          roughness: 0.6,
          metalness: 0.8,
          emissive: new THREE.Color("#64ffda"),
          emissiveIntensity: 0.05,
        });
        mesh.material = mat;
      }
    });
  }, [scene]);

  // Track mouse
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Smoothly follow mouse on Y axis
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.6,
      0.04
    );
    // Subtle float
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.05 - 0.9;
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.05} />
    </group>
  );
}

function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshBasicMaterial color="#64ffda" wireframe />
    </mesh>
  );
}

export default function HumanFigure() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 3.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      shadows
      style={{ background: "transparent" }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />

      {/* Key light — cool blue from front-left */}
      <directionalLight
        position={[-3, 4, 3]}
        intensity={1.5}
        color="#b0e0ff"
        castShadow
      />

      {/* Rim light — mint from behind */}
      <pointLight position={[1, 2, -3]} intensity={8} color="#64ffda" />

      {/* Fill light — warm from right */}
      <pointLight position={[3, 1, 2]} intensity={2} color="#64ffda" distance={6} />

      {/* Bottom bounce */}
      <pointLight position={[0, -0.5, 1]} intensity={1} color="#1a2a3a" />

      <Suspense fallback={<Loader />}>
        <Character />

        {/* Subtle ground shadow */}
        <ContactShadows
          position={[0, -0.9, 0]}
          opacity={0.4}
          scale={4}
          blur={2.5}
          color="#64ffda"
        />

        {/* HDRI environment for realistic reflections */}
        <Environment preset="night" />
      </Suspense>

      {/* Bloom glow — makes the mint light bleed */}
      <EffectComposer>
        <Bloom
          intensity={0.6}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}

// Preload the model
useGLTF.preload(MODEL_URL);
