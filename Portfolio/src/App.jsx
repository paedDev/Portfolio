import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import BasicsOfMotion from "./components/Animation Motion/BasicsOfMotion.jsx";
import Gestures from "./components/Animation Motion/Gestures.jsx";
import AnimationControls from "./components/Animation Motion/AnimationControls.jsx";
import ViewBasedAnimation from "./components/Animation Motion/ViewBasedAnimation.jsx";
import { motion, useScroll, useSpring } from "motion/react";
import ScrollAnimation from "./components/Animation Motion/ScrollAnimation.jsx";
const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    // bg-gray-900 this is my bg
    <div className="max-w-8xl mx-auto h-screen font-jet bg-gray-900  ">
      <motion.div
        className=" w-full mx-auto fixed inset-0 h-[5px] origin-left bg-emerald-400 z-20"
        style={{
          scaleX,
        }}
      ></motion.div>
      <Navbar />
      <section>
        <Home />
      </section>
      <section className="">
        <About />
      </section>
      <section></section>
    </div>
  );
};

export default App;
