import React from 'react';
import ShortProductData from '../components/home/ShortProductData.jsx';
import HomeBanner from '../components/home/HomeBanner.jsx';

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <ShortProductData/>
    </div>
  );
};

export default Home;