import React from 'react';
import { Tilt } from 'react-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import ai from "../assets/ai.png";
import data from "../assets/data.png";
import web from "../assets/web.png";
import { useInView } from 'react-intersection-observer';



const DomainCard = ({ index, title, icon }) => {
    const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
});
    return (
        <Tilt className="xs:w-[250px] w-80 items-center">
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: "spring", duration: 0.75, delay: index * 0.5, ease: "easeOut"}}
                className='w-full bg-gradient-to-tr from-blue-400 via-cyan-700 to-zinc-400 p-[4px]' style={{ zIndex: 1 }}>

                <div options={{ max: 45, scale: 1, speed: 450 }} className=' min-h-[300px] rounded-[10px] px-12 py-20 card-bg flex-col'>
                    <div className='flex flex-col items-center justify-center h-full '>
                        <img src={icon} alt={title} className='w-auto  h-20 object-contain items-center justify-center' />
                        <h1 className='mt-5 text-xl font-bold'>{title}</h1>
                    </div>
                </div>
            </motion.div>
            </AnimatePresence>
        </Tilt>
    )
}

const About = () => {
   
    const domain = [
        {
            title: "AI ENGINEER",
            icon: ai
        },
        {
            title: "DATA ANALYST",
            icon: data
        },
        {
            title: "WEB DEVELOPER",
            icon: web
        }
    ]
    return (
        <>
        <div name="about" className='h-full w-full text-white bg-gradient-to-r from-black to-slate-950 py-28 text-center justify-center items-center'>
        <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ type: "spring", duration: 1 }} 
                    style={{ zIndex: 1 }}>
                <h1 className='text-6xl font-bold'>
                    About  
                </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ type: "spring", duration: 1}}
                        style={{ zIndex: 1 }}>
                <div className=' text-left w-auto text-xl m-28 mt-14 leading-8 text-gray-200'>
                    <p>Hey, and welcome to my corner of the digital world!</p><br/>
                    <p>Ever since my childhood, I've been captivated by science and its endless possibilities. From crafting circuits to bringing Arduino Bluetooth cars and finger-tracking mice to life, my curiosity led me to GIK Institute, where I'm currently exploring the vast universe of knowledge. Coding is my heartbeat – from web development to diving deep into AI, RL, DL, and computer vision – I thrive on the blend of creativity and logic. But my interests don't stop at the virtual realm. With a strong grasp of system programming and hardware, I've ventured into the tangible world, merging the digital with the physical.</p><br/>
                    <p>Beyond lines of code, data analysis and visualization hold a special place in my skill set. I find joy in unraveling insights from data and presenting them with tools like Data Studio, Tableau, and Excel. The essence of my journey lies in crafting projects that fuse technology with creativity, from brain-computer interfaces to turning components into functional wonders. Innovation, for me, is about nurturing ideas into reality, and that's where my passion truly thrives. Thanks for joining me on this adventure where every line of code, every circuit, and every insight is a step forward in our digital narrative.</p><br/>
                </div>
            </motion.div>
            
            <div className='flex flex-wrap gap-10 mt-20 text-center justify-center items-center '>
                {domain.map((domain, index) => (<DomainCard key={domain.title} index = {index} {...domain}/>))}
            </div>

        </div>  
        </>
    )
}

export default About