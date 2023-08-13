import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Model = () => {
  const earth = useGLTF("./model/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position={[0, 0, 0]} rotation={[0, 0, 0]} />
  );
};

const ModelCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      scale={10}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <hemisphereLight intensity={5} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight intensity={5} />
        <Model />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ModelCanvas;
