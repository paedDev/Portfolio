import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen bg-sky-950 w-full p-4 lg:p-10 text-white'>
      <div className='flex lg:flex-row flex-col justify-between items-center space-x-10 max-w-6xl mx-auto mt-10 lg:py-8 '>
        {/* left container */}
        <div className="lg:w-1/2 lg:sticky lg:top-10 lg:bottom-20 mb-10 lg:mb-0  ">
          <div className='relative'>
            <h1 className='lg:text-9xl md:text-8xl text-7xl font-extrabold text-emerald italic tracking-wide leading-none'>ABOUT</h1>
            <span className="absolute top-8 md:top-12 lg:top-16 md:right-4 lg:right-20 -right-2 text-5xl md:text-7xl lg:text-9xl z-1 text-emerald-400 font-bold tracking-wide italic opacity-90"
              style={{
                color: 'transparent',
                WebkitTextStrokeWidth: '2px',
                WebkitTextStrokeColor: '#22c55e',
              }}>ME</span>
          </div>
        </div>
        {/* right container for the about me */}
        <div className='lg:w-1/2 space-y-8 md:text-base text-sm'>
          {/* introduction */}
          <div className='bg-gradient-to-r bg-sky-900 to-gray-800 p-6 text-center shadow-2xl rounded-xl border border-emerald-400/20 '>
            <p className='text-gray-200 leading-relaxed'>Hey, I'm Jan Noel S. Paed, a Full Stack Developer / Web Developer.
              I've been working with <span className='text-emerald-300'>React</span>, <span className='text-emerald-300'>Node.js</span> and <span className='text-emerald-300'>Laravel</span>, building web applications that are fast, scalable and user-friendly.
              I like solving problems, learning new things, and experimenting with different technologies. When I'm not coding, I'm probably working on a side project or exploring something new.</p>
          </div>

          <div className='space-y-6'>
            <h2 className='lg:text-3xl text-2xl font-bold text-emerald-400'>Skills & Experience</h2>
            <div className='pl-8 relative'>
              <div className='absolute left-0 top-0 flex flex-col items-center'>
                <div className='w-4 h-4 rounded-full bg-emerald-400 border-2 border-emerald-400 z-1'></div>
                <span className='w-0.5 h-34 bg-emerald-300 '></span>
              </div>
              <div className='space-y-2'>
                <h3 className='font-semibold lg:text-xl text-lg '>Full Stack Developer</h3>
                <span className='text-emerald-300'>2024 - PRESENT</span>
                <ul className='list-disc list-inside text-gray-200'>
                  <li>
                    Contributed significantly to the development of main project Sooperwizer, a pivotal project for automating and optimizing textile processes.
                  </li>
                  <li>esigned and developed multiple interactive data visualization dashboards.</li>
                  <li>Built several Android applications using React Native.</li>
                </ul>
              </div>
            </div>

          </div>
          <div className='space-y-6'>
            <h2 className='lg:text-3xl text-2xl font-bold text-emerald-400'>Certification</h2>
            <div className='pl-8 relative'>
              <div className='absolute left-0 top-0 flex flex-col items-center'>
                <div className='w-4 h-4 rounded-full bg-emerald-400 border-2 border-emerald-400 z-1'></div>
                <span className='w-0.5 h-30 bg-emerald-300 '></span>
              </div>
              <div className='space-y-2'>
                <h3 className='font-semibold lg:text-xl text-lg'>Full Stack Developer</h3>
                <span className='text-emerald-300'>House of Professionals (HOP) | 2021 - 2022</span>
                <ul className='list-disc list-inside'>
                  <li>
                    Earned a Full Stack Development certification from the House of Professional Developers.
                  </li>
                  <li>Awarded for securing the top position in class, demonstrating strong skills and commitment.</li>

                </ul>
              </div>

            </div>

          </div>
          <div className='space-y-6'>
            <h2 className='lg:text-3xl text-2xl font-bold text-emerald-400'>Education</h2>
            <div className='pl-8 relative'>
              <div className='absolute left-0 top-0 flex flex-col items-center'>
                <div className='w-4 h-4 rounded-full bg-emerald-400 border-2 border-emerald-400 z-1'></div>
                <span className='w-0.5 h-10 bg-emerald-300 '></span>
              </div>
              <div className='space-y-2'>
                <h3 className='font-semibold lg:text-xl text-lg'>Full Stack Developer</h3>
                <span className='text-emerald-300'>Bachelor of Science in Computer Engineering (BSCpE 2025)</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;;