import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LodingSpiner from '../LodingSpiner/LodingSpiner';

const BookesDetiles = () => {
  const navaction = useNavigation();
  if(navaction.state === 'loading'){
   return <LodingSpiner></LodingSpiner>
  }
    
 const book = useLoaderData()
 console.log(book)
    return (
        <div className='container mx-auto lg:flex'>
          <div className='lg:w-full h-full overflow-hidden bg-white border  flex flex-col  max-w-screen-lg lg:flex-row sm:mx-auto'>
            <img
              src={book.image}
              alt='book cover'
              className='object-cover  w-full lg:h-full'
            /> 
          </div>
          <div className='px-4 mt-3 py-3'>
          <h1 className='font-extrabold text-4xl leading-none sm:text-5xl'>{book.title}</h1>
          <p className=' text-gray-900'>Authors: {book.authors.substring(0, 50)}...</p>
          <p className=' text-gray-900'>Publisher: {book.publisher}</p>
          <p className=' text-gray-900'>Year: {book.year}</p>
          <p className='mb-5 text-gray-900'>Rating: {book.rating}</p>
          <p className='items-center font-extrabold text-gray-600 '>
              Price: {book.price}
            </p>
            <div>
              <p className='badge'>Brand new</p>
            </div>
          </div>
        </div>
     
    );
};

export default BookesDetiles;