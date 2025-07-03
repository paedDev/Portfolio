import React, { useState } from 'react';
import { motion, useAnimationControls } from 'motion/react';
const AnimationControls = () => {

  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start("flip");
  };
  return (
    <div className='h-screen w-8xl mx-auto flex justify-center items-center'>
      <div className='flex flex-col items-center justify-center space-y-10'>

        <motion.button className='px-6 py-2 text-white bg-red-800 rounded-xl' onClick={handleClick}>
          Flip Me
        </motion.button>

        <motion.div className='w-[150px] h-[150px] bg-blue-400'
          variants={{
            initial: { rotate: '0deg' },
            flip: {
              rotate: '360deg'
            },
          }}
          initial="initial"
          animate={controls}
          transition={{ duration: 1 }}
        >
        </motion.div>


      </div>
    </div >
  );
};

export default AnimationControls;