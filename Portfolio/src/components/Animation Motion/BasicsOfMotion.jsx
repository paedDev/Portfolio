import react, { useState } from "react";

// import motion
import { backInOut, motion, AnimatePresence } from "motion/react";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='h-screen gap-2 grid place-content-center w-full'>

      <motion.button onClick={() => setIsVisible(!isVisible)}
        className='text-white px-4 py-2 bg-red-200'
        layout>
        Hello

      </motion.button>
      <AnimatePresence mode="popLayout">
        {
          isVisible && (
            <motion.div className='w-full mx-auto h-[80px] bg-red-500'
              initial={{ rotate: '0deg', scale: 0, y: 0 }}
              animate={{ rotate: '360deg', scale: 1, x: [0, 150, -300, 0] }}
              exit={{ rotate: '0deg', scale: 0, y: 0 }}
              transition={{ duration: 1, ease: backInOut, times: [0, 3, 3, 3, 1] }}

            >
            </motion.div>
          )
        }
      </AnimatePresence>





    </div >
  );
};

export default BasicsOfMotion;