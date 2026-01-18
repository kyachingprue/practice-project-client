import React, { useEffect, useState } from 'react';
import ProductCard from '../components/home/ProductCard';

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() =>{
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
    })
  } ,[])
  return (
    <div>
      <h3 className='text-3xl font-bold text-center py-28'>This is Products pages</h3>
      <h3 className='text-3xl font-bold text-gray-700 py-5 px-5'>All Products: ({products ? products?.length : 0})</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mx-auto md:px-2 py-10 gap-5'>
        {
          products && products.map(product => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))
        }
      </div>
    </div>
  );
};

export default Products;