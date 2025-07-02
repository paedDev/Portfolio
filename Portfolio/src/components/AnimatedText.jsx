import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const AnimatedText = () => (
  <h2 className="lg:text-5xl md:text-3xl text-2xl font-semibold text-gray-400">
    <Typewriter
      words={['I build things for the web.', 'I love to code.', 'Full stack developer.']}
      loop={0}
      cursor
      cursorStyle="|"

      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </h2>
);

export default AnimatedText;
