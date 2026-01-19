import ProductCard from './ProductCard';
import {motion} from 'motion/react'
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading';

const ShortProductData = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const { data: productData = [], isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axiosPublic.get('/products');
      return res.data;
    }
  })

  if (isLoading) {
    return <Loading/>
  }

  if (isError) {
    return <p> Error data fetching ...</p>
  }
  return (
    <div>
      <h3 className='text-3xl font-bold text-gray-700 py-5'>All Products: ({productData ? productData?.length : 0})</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mx-auto md:px-2 py-10 gap-5'>
        {
          productData && productData.slice(0,10).map(product => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))
        }
      </div>
      <div className='flex mx-auto w-full justify-center items-center pb-10'>
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          onClick={() => navigate('/products')}
          className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-semibold overflow-hidden shadow-lg"
        >
          <span className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

          <span className="relative z-10">
            See More Products
          </span>

          <ArrowRight
            size={18}
            className="relative z-10 group-hover:translate-x-1 transition"
          />
        </motion.button>
     </div>
    </div>
  );
};

export default ShortProductData;