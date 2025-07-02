import React from 'react';

const Button = ({ text }) => {
  return (
    <button className='border-emerald-400  border-2 text-emerald-300 px-4 py-2 relative cursor-pointer overflow-hidden group shadow-sm rounded'>
      <span className='absolute inset-0 bg-emerald-400  transform -translate-x-[100%] group-hover:translate-x-0 duration-500'>
      </span>
      <span className=' relative z-10 w-full group-hover:text-emerald-100 transition-colors duration-300'>
        {text}
      </span>
    </button>
  );
};

export default Button;