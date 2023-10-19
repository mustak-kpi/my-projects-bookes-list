import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from '../../assets/animation_lnc491bs.json'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
   <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
   {/* Text Content */}
   <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
     <div className='max-w-xl mb-6 lg:mt-8'>
       <div>
         <p className='badge'>On Sale!</p>
       </div>
       <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
         A reader lives a <br className='hidden md:block' /> thousand lives{' '}
         <span className='inline-block text-blue-400'>before he dies</span>
       </h2>
       <p className='text-base text-gray-700 md:text-lg'>
         Books are a uniquely portable magic. Books serve to show a man that
         those original thoughts of his aren’t very new after all. The man
         who does not read good books is no better than the man who can’t.
       </p>
     </div>
     <div>
    <Link to='About' className='bg-blue-500 py-4 px-5 font-bold text-white rounded-md'>learn more</Link>
    <Link to='Booke' className='font-bold ml-4 text-2xl'>visit store</Link>
     </div>
   </div>
   {/* Lottie Animation */}
  <div>
  <Lottie animationData={groovyWalkAnimation} loop={true} />
  </div>
 </div>
);
};

export default Home;