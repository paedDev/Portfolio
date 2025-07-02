import React from 'react';
import AnimatedText from '../components/AnimatedText';
import { FaDownload, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "motion/react";
const Home = () => {
  return (
    <motion.div className='  text-white h-screen flex flex-col justify-center items-center pt-16 md:pt-20 w-1/2 mx-auto min-w-[500px]'>
      <div className='text-center  mx-auto space-y-4  px-4'>
        <h3 className='text-emerald-300 font-bold'>Hi, my name is</h3>
        <h1 className='lg:text-7xl md:text-5xl text-4xl font-bold '>Jan Noel S. Paed</h1>
        <AnimatedText />
        <p className='text-gray-500 text-sm lg:text-lg'>Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments. </p>
      </div>
      <div className='flex lg:flex-row flex-col items-center justify-center lg:space-x-6 space-x-0 py-8 space-y-4 lg:space-y-0'>
        <div>
          <a href=''
            className='bg-emerald-300 px-6 py-2 rounded text-emerald-900 hover:shadow-md shadow-emerald-700 transition-colors duration-500 hover:opacity-90 flex items-center justify-center'>View My Work</a>
        </div>
        <a href='' className='flex items-center space-x-2 text-emerald-300 border px-6 py-2 rounded hover:bg-emerald-300 hover:text-gray-950 transtion duration-400'>
          <FaDownload size={18} />
          <span>Download CV</span>
        </a>
      </div>
      <div>
        <div className='flex items-center justify-center space-x-4 text-gray-400'>

          <a href="" className='p-2 shadow rounded border flex items-center hover:shadow-emerald-400 duration-500 transition-all hover:scale-105'>

            <i className="fa-brands fa-linkedin text-2xl text-emerald-300 "  ></i>
          </a>
          <a href="" className='p-2 shadow rounded border flex items-center hover:shadow-emerald-400 duration-500 transition-all hover:scale-105'
          >
            <FaGithub size={22} className='flex items-center text-emerald-300' />
          </a>
          <a href="" className='p-2 shadow rounded border flex items-center hover:shadow-emerald-400 duration-500 transition-all hover:scale-105'>
            <i className="fa-solid fa-envelope text-2xl flex items-center text-emerald-300" ></i>
          </a>
        </div>
      </div>

      <IoIosArrowDown className='text-3xl text-emerald-400 animate-bounce mt-10' />
    </motion.div>

  );
};

export default Home;