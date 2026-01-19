import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

const MainLayout = () => {
  return (
    <div className='px-2 md:px-4'>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;