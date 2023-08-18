import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css'
import ncra from "../assets/ncra.png"
import sf from "../assets/sf.png"
import les from "../assets/les.png"
import aiesec from "../assets/aiesec.png"

const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: `url('/bg.png')`,
          backgroundSize: 'cover',
          
          border: '2px solid white', 
          color: '#fff',
          height: 500,
          width: 500
        }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full '>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[80%] h-[80%] object-contain'/>
          </div>
        }
        className=''
      >
        <div className='pt-5 '>
          <h3 className='text-white text-[25px] font-bold text-center'>{experience.title}</h3>
          <p
            className='s text-[16px] font-semibold text-center'
            style={{ margin: 10 }}
          >
            {experience.company_name}
          </p>
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2 text-left leading-7'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[16px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };

const Experience = () => {
    const experiences = [
        {
          title: "Reseach Intern",
          company_name: "NCRA",
          icon: ncra,
          iconBg: "#383E56",
          date: "June 2023 - July 2023",
          points: [
              "Contributed to cutting-edge research and development in EEG-based BCI.",
      
              "Collaborated with a skilled team to assist in the research and development of experimental protocols for EEG-based BCI projects.",
              
             " Utilized a 24-64 channels EEG headset to record and analyze brain data.",
              
              "Mapped EEG data to experimental paradigms", 
              
              "Developed two experimental protocols for ERP and SSVEP"
          ]},
      
          {
              title: "Software Development Intern",
              company_name: "Stanley Foods (Pvt) Limited",
              icon: sf,
              iconBg: "#383E56",
              date: "July 2022 - September 2022",
              points: [
                  "Developed a Web-based Employee Management System and collected existing employee data.",
          
                  "Gathered functional and non-functional requirements from the employees and administration, and built a portal for both with respective privileges and features.",
                  
                  "Collaborated with senior developers to brainstorm and implement ideas."
                  
              ]},
      
              {
                  title: "Web Team Leader",
                  company_name: "LES - GIKI",
                  icon: les,
                  iconBg: "#383E56",
                  date: "July 2022 - May 2023",
                  points: [
                      "Maintained the society's website—Revamped the home page and acquired new hosting services leading to a 25% decrease in cost—Led a team of 4 members.",
              
                      "Implemented a GUI-based software using C++ to grade applicants' attributes in interviews during recruitment drives."
                  
                  ]},
      
                  {
                      title: "Director Marketing and Talent Management",
                      company_name: "AIESEC in GIKI",
                      icon: aiesec,
                      iconBg: "#383E56",
                      date: "March 2021 - Feburary 2022",
                      points: [
                          "Assisted in the launch of Project SEED. Recruited and supervised campus ambassadors.",
                  
                          "Created content for society's social media pages and maintained KPI trackers.",
                          
                         " Participated in AIESEC National Conference."
                      ]},
      
              
      ]
  
    return (
      <>
        <div name="experience" className='wave h-full w-full text-white bg-gradient-to-r from-black to-slate-950 py-28 justify-center items-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', duration: 1 }}
            style={{ zIndex: 1 }}
          >
            <h1 className='text-6xl font-bold text-center'>Experience</h1>
          </motion.div>
  
          <div className='m-20 flex flex-col'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                />
              ))}
            </VerticalTimeline>
          </div>
        </div>
        
      </>
    );
  }
  
  export default Experience;