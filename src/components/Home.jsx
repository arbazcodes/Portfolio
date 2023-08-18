import React from 'react';
import avatar from "../assets/arbaz-a0.png";

const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted className="background-video">
      <source src={"/bg3.mp4"} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const Home = () => {
  return (
    <div name="home" className="relative h-screen w-full bg-transparent text-white">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Content Overlay */}
      <div className='w-full mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row relative'>
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
            I am <h1 className='text-8xl font-highlight bg-gradient-to-tr from-blue-400 via-cyan-600 to-zinc-200 text-transparent bg-clip-text'>ARBAZ KHAN</h1>
          </div>
        </div>
      </div>
      <div className='w-full h-3 bg-gradient-to-tr from-blue-400 via-cyan-600 to-zinc-200'></div>
    </div>
  );
}

export default Home;
