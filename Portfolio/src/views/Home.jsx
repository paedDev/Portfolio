import React from 'react';
import AnimatedText from '../components/AnimatedText';
import { FaDownload, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { delay, motion, scale } from "motion/react";
const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(20)].map((_, i) => (
          <motion.div key={i} className='absolute h-2 w-2 opacity-20 rounded-full bg-green-300'
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}>

          </motion.div>
        ))}
      </div>
      <motionConfig
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transtion={{ duration: 2 }}>
        <motion.div className='  text-white h-screen flex flex-col justify-center items-center pt-16 md:pt-20 w-1/2 mx-auto min-w-[500px]'>
          <div className='text-center  mx-auto space-y-4  px-4'>
            <motion.h3 className='text-emerald-300 font-bold'
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            > Hi, my name is</motion.h3>
            <motion.h1 className='lg:text-6xl md:text-5xl text-4xl font-bold '
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                duration: 1,
                delay: 0.5,
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                textShadow: '0px 0px 20px rgba(52,211,153,0.5)'
              }}
            >Jan Noel S. Paed</motion.h1>
            <motion.div initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}>
              <AnimatedText />
            </motion.div>
            <motion.p
              className='text-gray-400 text-sm lg:text-lg max-w-2xl mx-auto'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.
            </motion.p>
          </div>
          <div className='flex lg:flex-row flex-col items-center justify-center lg:space-x-6 space-x-0 py-8 space-y-4 lg:space-y-0'>
            <div>
              <a href=''
                className='bg-emerald-300 px-6 py-2 rounded text-emerald-900 hover:shadow-md shadow-emerald-700 transition-colors duration-500 hover:opacity-90 flex items-center justify-center lg:text-lg text-sm'>View My Work</a>
            </div>
            <a href='' className='flex items-center space-x-2 text-emerald-300 border px-6 py-2 rounded hover:bg-emerald-300 hover:text-gray-950 transtion duration-400 lg:text-lg text-sm'>
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
      </motionConfig>
    </div >
  );
};

export default Home;