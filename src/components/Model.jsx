import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Model = ({ modelPath }) => {
  const avatar = useGLTF(modelPath);
  const {actions, names} = useAnimations(avatar.animations, avatar.scene);

  useEffect(() => {
    actions.wave.play();
  })

  return (<group><primitive object={avatar.scene} scale={[8,8,8]} rotation-y={0} position-y={-12} /></group>);
};

const ModelCanvas = ({ modelPath }) => {
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
        position: [-4, 3, -10],
      }}
      style={{ height: 800 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1} />

        {/* Strong directional light from one direction */}
        <directionalLight color="white" position={[5, 5, 5]} intensity={1} castShadow />

        {/* Another directional light from a different direction */}
        <directionalLight color="blue" position={[-5, 5, -5]} intensity={1} castShadow />

        {/* Strong light right in front of the camera */}
        <directionalLight color="white" position={[0, 0, -5]} intensity={2} />

        <directionalLight color="white" position={[-5, 0, -5]} intensity={2} />

        {/* Additional light sources */}
        <pointLight color="red" position={[0, 5, 0]} intensity={1} />
        <pointLight color="green" position={[0, -5, 0]} intensity={1} />
        <pointLight color="white" position={[1, 1, 1]} intensity={1} />

        <Model modelPath={modelPath} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ModelCanvas;
