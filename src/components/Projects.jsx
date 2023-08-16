import React from 'react';
import { Tilt } from 'react-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import yolo from "../assets/yolo.jpg"
import Super from "../assets/super.png"
import cnn from "../assets/cnn.png"
import { useInView } from 'react-intersection-observer';
import git from "../assets/github.png"

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <Tilt className="xs:w-[250px] w-[450px] items-center">
            <AnimatePresence>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ type: "spring", duration: 0.75, delay: index * 0.5, ease: "easeOut" }}
                    className="w-full rounded-[15px]" style={{ zIndex: 1 }}>

                    <div options={{ max: 45, scale: 1, speed: 450 }} className=" min-h-[300px] rounded-[15px] card-bg justify-center text-center items-center flex-col w-full">
                        <div className="flex flex-col items-center justify-center h-[300px] w-full relative">
                            <img src={image} alt={name} className="w-full h-[300px] object-cover rounded-t-[15px]" />
                            <div className="absolute inset-0 flex justify-end m-4">
                                <div onClick={() => window.open(source_code_link, "_blank")} className="flex w-10 h-10 rounded-full cursor-pointer items-center justify-center bg-black">
                                    <img src={git} alt="GitHub" className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div className="mt-5 text-left h-[200px] p-5 leading-relaxed"> {/* Set a fixed height */}
                            <h3 className="text-white font-bold text-[24px]">{name}</h3>
                            <p className="mt-2 text-md text-[14px]">{description}</p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2  p-5">
                            {tags.map((tag) => (
                                <p
                                    key={`${name}-${tag.name}`}
                                    className="text-[14px]"
                                    style={{ color: tag.color }}>
                                    #{tag.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </Tilt>
    )
}

const Projects = () => {
    const projects = [
        {
          name: "Object Detection For Cunstruction Site Safety",
          description:
            " Ultralytics library and YOLO model to perform object detection and evaluation on images and videos related to construction safety. The output included detection results, metrics, visualizations, and prediction images.",
          tags: [
            {
              name: "Colab",
              color: "red",
            },
            {
              name: "Pyhton",
              color: "yellow",
            },
            {
              name: "PyTorch",
              color: "green",
            },
          ],
          image: yolo,
          source_code_link: "https://github.com/",
        },
        {
            name: "Super-Resolution Image Generation with DL",
            description:
              "DL for generating high-resolution RGB images from low-resolution hyperspectral images using deep learning techniques. The model is trained using a dataset of hyperspectral images and their corresponding high-resolution RGB images.",
            tags: [
              {
                name: "Jupyter",
                color: "orange",
              },
              {
                name: "Pyhton",
                color: "yellow",
              },
              {
                name: "Tensorflow",
                color: "green",
              },
              {
                name: "Keras",
                color: "red",
              },
            ],
            image: Super,
            source_code_link: "https://github.com/",
          },
          {
            name: "CNN for CIFAR-10 Image Classification",
            description:
              " The project implements a Convolutional Neural Network (CNN) for image classification using the CIFAR-10 dataset.",
            tags: [
              {
                name: "Colab",
                color: "orange",
              },
              {
                name: "Pyhton",
                color: "yellow",
              },
              {
                name: "PyTorch",
                color: "green",
              },
            ],
            image: cnn,
            source_code_link: "https://github.com/",
          },]
  return (
    <>
        <div name="projects" className='h-full w-full text-white bg-gradient-to-r from-black to-slate-950 py-28 text-center justify-center items-center'>
            <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ type: "spring", duration: 1 }} 
                    style={{ zIndex: 1 }}>
                <h1 className='text-6xl font-bold'>
                    Projects  
                </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ type: "spring", duration: 1}}
                        style={{ zIndex: 1 }}>
                <div className=' text-center w-auto text-xl mt-14 leading-8 text-gray-200'>
                    <p>Here are some recent projects I have done.</p><br/>
                </div>
            </motion.div>
            <div className='flex flex-wrap gap-10 mt-20 items-center justify-center'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project}/>
                ))}
            </div>
        </div>  
    </>
  )
}

export default Projects