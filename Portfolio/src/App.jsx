import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Home from './views/Home.jsx';
import About from './views/About.jsx';
import BasicsOfMotion from './components/Animation Motion/BasicsOfMotion.jsx';
const App = () => {
  return (
    <div className='max-w-8xl mx-auto h-screen bg-gray-900 font-jet'>
      <Navbar />
      <section>
        {/* <Home /> */}
      </section>
      <section>
        {/* <About /> */}
      </section>
      <section>
        <BasicsOfMotion />
      </section>





    </div >
  );
};

export default App;