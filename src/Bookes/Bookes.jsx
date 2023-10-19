import React from 'react';
import { Link, useNavigation, } from 'react-router-dom';
import LodingSpiner from '../LodingSpiner/LodingSpiner';


const Bookes = ({book}) => {
    return (   
      
<Link to={`/Booke/${book.isbn13}`}>

      <div className='overflow-hidden relative transition duration-200 hover:-translate-y-2'>
        <img
          src={book.image}
          alt= 'book-cover'
          className='object-cover w-full h-60 md:h-64 sm:h-80 '
        />
     <div className='bg-black px-6 py-6 bg-opacity-75 opacity-0 hover:opacity-100
      text-gray-100 absolute inset-0 transition duration-200 flex flex-col' >
          <p>{book.title}</p>
          <br />
          <p>{book.subtitle.substring(0, 20 )}...</p>
          <br />
          <p className='mx-auto'>Price: {book.price}</p>
     </div>
      </div>
</Link>
    );
};

export default Bookes;