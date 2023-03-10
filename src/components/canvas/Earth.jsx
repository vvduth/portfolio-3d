import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Earth = () => {
  const earth = useGLTF('./mirabella/scene.gltf')
  return (
    <mesh>
      <pointLight intensity={5} position={[20, 20, 20]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <ambientLight intensity={2} />
      <primitive 
      object={earth.scene}
      scale={0.55}
      position-y ={0}
      rotation-y={0}

    />
    </mesh>
    
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov:45,
        near: 0.1,
        far: 200, 
        position: [-4,3,6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
