import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='container mx-auto'>
      <Header></Header>
       {/* header section */}
      <Outlet></Outlet>
    </div>
  );
};

export default App;