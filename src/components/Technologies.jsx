import React, { useEffect, useRef }from 'react'
import { Canvas } from '@react-three/fiber'
import py from "../assets/py.png"
import jp from "../assets/jp.png"
import tf from "../assets/tf.png"
import kr from "../assets/kr.png"
import np from "../assets/np.png"
import cv from "../assets/cv.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import rt from "../assets/rt.png"
import tw from "../assets/tw.png"
import tjs from "../assets/tjs.png"
import c from "../assets//c.png"
import cpp from "../assets/cpp.png"
import sql from "../assets//sql.png"
import {
  Decal,
  Float,
  OrbitControls,
  useTexture,
} from "@react-three/drei";

const Ball = ({icon}) => {
    const texture = useTexture(icon);
    return(
      <Float speed={1.75} rotationIntensity={5} floatIntensity={2}>
        <mesh castShadow receiveShadow>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial
          color='#fff8eb'
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={3}
          map={texture}
          flatShading
        />
        </mesh>
      </Float>
    )

}

const BallCanvas = ({icon}) => {
  return (
    <Canvas>
      <ambientLight intensity={1}/>
      <directionalLight position={[0, 0, 0.05]} />
        <OrbitControls enableZoom={false}/>
        <Ball icon={icon}/>

    </Canvas>
  )
}

const Technologies  = () => {
  const technologies = [
    {
      name: "Python",
      icon: py,
    },
    {
      name: "Jupyter",
      icon: jp,
    },
    {
      name: "TensorFlow",
      icon: tf,
    },
    {
      name: "Keras",
      icon: kr,
    },
    {
      name: "Numpy",
      icon: np,
    },
    {
      name: "OpenCV",
      icon: cv,
    },
    {
      name: "Html",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: js,
    },
    {
      name: "React",
      icon: rt,
    },
    {
      name: "Tailwind",
      icon: tw,
    },
    {
      name: "ThreeJS",
      icon: tjs,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "CPP",
      icon: cpp,
    },
    {
      name: "MySQL",
      icon: sql,
    },
  ]
  return (
    <>
    <div className="bg-gradient-to-r from-black to-slate-950 py-28 flex flex-row flex-wrap gap-10 text-center justify-center items-center">
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
      </>
  )
}

export default Technologies