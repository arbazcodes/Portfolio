import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';
import CanvasLoader from './Loader';

const Model = () => {
  const model = useGLTF('/Model/spaceship.glb');

  return (
    <group>
      <primitive object={model.scene} scale={[1.25, 1.25, 1.25]} rotation-y={-50} rotation-x={50} position-y={-.25} />
    </group>
  );
};

const ModelCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[0, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, -10],
      }}
      style={{ height: '100vh', margin: '0', padding: '0' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={2.5} />

       
        <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={1}
          color="white"
        />

        <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={1}
          color="blue"
        />  

        <directionalLight
          castShadow
          position={[-5, 5, -5]}
          intensity={1}
          color="white"
        />
        <directionalLight
          castShadow
          position={[0, 0, -5]}
          intensity={1}
          color="white"
        />
        <directionalLight
          castShadow
          position={[-5, 0, -5]}
          intensity={1}
          color="white"
        />

        {/* Additional directional lights from corners */}
        <directionalLight
          position={[5, 0, 5]}
          intensity={0.5}
          color="lightblue"
        />
        <directionalLight
          position={[-5, 0, 5]}
          intensity={0.5}
          color="lightblue"
        />
        <directionalLight
          position={[5, 0, -5]}
          intensity={0.5}
          color="lightblue"
        />
        <directionalLight
          position={[-5, 0, -5]}
          intensity={0.5}
          color="lightblue"
        />

        {/* Point lights */}
        <pointLight color="red" position={[0, 5, 0]} intensity={1} />
        <pointLight color="green" position={[0, -5, 0]} intensity={1} />
        <pointLight color="white" position={[1, 1, 1]} intensity={1} />

        <Model />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ModelCanvas;
