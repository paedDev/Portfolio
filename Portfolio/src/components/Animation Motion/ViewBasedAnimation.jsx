import React, { useEffect, useRef } from 'react';
import { inView, motion, useInView } from 'motion/react';

const ViewBasedAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    console.log("Is in View", isInView);

  }, [isInView]);
  return (
    <div className='h-[500vh] flex flex-col items-center justify-center  '>

      <motion.div className=' w-full h-screen bg-sky-950'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
      </motion.div>

      <div ref={ref} className={`transition duration-1000  w-full h-screen    ${isInView ? "bg-red-400" : "bg-blue-400"}`
      }

      >


      </div>


    </div >
  );
};

export default ViewBasedAnimation;