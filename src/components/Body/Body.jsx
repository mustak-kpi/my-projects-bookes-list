import React from 'react';
import { useLoaderData, useNavigation,  } from 'react-router-dom';
import Bookes from '../../Bookes/Bookes';
import LodingSpiner from '../../LodingSpiner/LodingSpiner';
const Body = () => {
    const navaction = useNavigation();
    if(navaction.state === 'loading'){
     return <LodingSpiner></LodingSpiner>
    }
   const{ books} = useLoaderData();
  
    return (
        <div className='container mx-auto gap-6 mb-8 mt-4 grid  lg:grid-cols-4 sm:grid-cols-2'>
            {
                books.map(book => <Bookes
                key={book.isbn13}
                book={book}
                ></Bookes>)
            }
          
        </div>
    );
};

export default Body;