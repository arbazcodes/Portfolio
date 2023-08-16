import React from 'react';
import { BiSolidDownload } from 'react-icons/bi';
import resume from "../assets/resume.pdf";

const ResumeButton = () => {
  return (
    <div className='group fixed flex flex-row top-35% left-0 mt-96 ml-[-103px] hover:ml-0 duration-300 hover:cursor-pointer hover:scale-110' style={{ zIndex: 2 }}>
      <a href={resume} download="resume.pdf">
        <div className='flex justify-center items-center w-44 h-16 px-4 bg-white'>
          <h1 className="text-centertext-black duration-75 mr-5 text-center">Download Resume</h1>
          <BiSolidDownload size={50} className='mr-2'/>
        </div>
      </a>
    </div>
  );
};

export default ResumeButton;
