import React from 'react';
// import motion
import { motion } from "motion/react";

const BasicsOfMotion = () => {
  return (
    <div className='h-screen gap-2 grid place-content-center w-full'>
      <motion.div className='w-[150px] h-[150px] bg-red-500'
        initial={{ rotate: '0deg' }}
        animate={{ rotate: '360deg' }}
        transition={{ duration: 2, type: "spring" }}

      >
      </motion.div>



    </div >
  );
};

export default BasicsOfMotion;