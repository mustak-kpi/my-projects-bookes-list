import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div className='bg-gray-100 px-4 py-5 mx-auto md:max-w-lx  lg:max-w-screen-full md:px-24 lg:px-8'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to='/' className="inline-flex items-center">
          <BoltIcon className="h-10 w-10 text-blue-500"/>
          <span className='text-4xl tracking-wide  font-bold hover:text-blue-500 ml-2'>next page</span>
         </Link>         
         <ul className='items-center lg:inline-flex font-bold text-4xl space-x-8'>
           <li>
            <NavLink to='/'
            title='home link'
            className={({isActive})=>  isActive ? 'text-blue-500' : ''}>Home</NavLink>
            </li>
           <li>
             <NavLink to='Booke' 
            className={({isActive})=>  isActive ? 'text-blue-500' : ''} >Booke</NavLink>
           </li>
           <li>
           <NavLink to='About'
           className={({isActive})=>  isActive ? 'text-blue-500' : ''}>About us</NavLink>
          </li>
     </ul>       
</div>
      </div>
    );
};

export default Header;