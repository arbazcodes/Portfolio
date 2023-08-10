import React from 'react';
import { HiDownload } from 'react-icons/hi';
import avatar from "../assets/arbaz-a0.png";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-transparent text-white">
      <div className='w-full mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='w-full md:w-1/4 sm:flex sm:flex-row text-center items-center justify-center text-8xl mb-4 md:mb-0'>
          <div className="flex flex-col items-center">
            Hello There
          </div>
        </div>
        <div className='md:w-2/4 w-full flex justify-center items-center'>
          <img src={avatar} alt='Avatar' className='h-auto w-64 md:w-full max-w-full'/>
        </div>
        <div className='w-full md:w-1/4 flex md:flex-row text-center items-center justify-center text-8xl mt-4 md:mt-0'>
          <div className='text-6xl'>
            I am <h1 className='text-8xl'>Arbaz Khan</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
