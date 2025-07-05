import React from "react";
import AnimatedText from "../components/AnimatedText";
import { FaDownload, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { motion, MotionConfig } from "motion/react";
import { MdOutgoingMail } from "react-icons/md";
const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="absolute inset-0 ">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 opacity-20 rounded-full bg-emerald-300"
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
              repeatType: "reverse",
            }}
          ></motion.div>
        ))}
      </div>
      <MotionConfig
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transtion={{ duration: 2 }}
      >
        <motion.div
          className=" relative z-10 text-white h-screen flex flex-col justify-center items-center pt-16 md:pt-20 w-1/2 mx-auto min-w-[500px]"
          id="home"
        >
          <div className="text-center  mx-auto space-y-4  px-4">
            <motion.h3
              className="text-emerald-300 font-bold"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {" "}
              Hi, my name is
            </motion.h3>
            <motion.h1
              className="lg:text-6xl md:text-5xl text-4xl font-bold "
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.5,
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 20px rgba(52,211,153,0.5)",
              }}
            >
              Jan Noel S. Paed
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <AnimatedText />
            </motion.div>
            <motion.p
              className="text-gray-400 text-sm lg:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Innovative Full Stack Developer passionate about creating seamless
              and impactful web solutions. Eager to leverage modern technologies
              to solve real-world problems and contribute to dynamic team
              environments.
            </motion.p>
          </div>
          <motion.div
            className="flex lg:flex-row flex-col items-center justify-center lg:space-x-6 space-x-0 py-8 space-y-4 lg:space-y-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <a
                href=""
                className="bg-emerald-300 px-6 py-2 rounded text-emerald-900 hover:shadow-md shadow-emerald-700 transition-colors duration-500 hover:opacity-90 flex items-center justify-center lg:text-lg text-sm"
              >
                View My Work
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <a
                href=""
                className="flex items-center space-x-2 text-emerald-300 border px-6 py-2 rounded hover:bg-emerald-300 hover:text-gray-950 transition duration-400 lg:text-lg text-sm"
              >
                <FaDownload size={18} />
                <span>Download CV</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              {[
                { icon: CiLinkedin, delay: 0 },
                { icon: FaGithub, delay: 0.1 },
                { icon: MdOutgoingMail, delay: 0.2 },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href=""
                  className="p-2 shadow rounded border flex items-center hover:shadow-emerald-400 duration-500 transition-all hover:scale-105"
                >
                  <social.icon size={24} className="text-emerald-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mt-10"
            >
              <IoIosArrowDown className="text-3xl text-emerald-400 cursor-pointer hover:text-emerald-300 transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </div>
  );
};

export default Home;
