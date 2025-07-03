import React from 'react';
import { motion, MotionConfig } from 'motion/react';
const Gestures = () => {
  return (
    <div className='h-screen w-8xl mx-auto flex justify-center items-center'>
      <div className='flex flex-col items-center justify-center space-y-10'>
        <MotionConfig
          transition={{ duration: 0.125, ease: 'easeInOut' }}>

          <motion.button className='px-6 py-2 text-white bg-red-800 rounded-xl'

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: '10deg' }}>
            Click Me !
          </motion.button>
          <motion.button className='px-6 py-2 text-white bg-violet-800 rounded-xl'

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: '10deg' }}>
            Click Me !
          </motion.button>
        </MotionConfig>


      </div>
    </div >
  );
};

export default Gestures;