import ProductCard from '../components/home/ProductCard';
import ProductBanner from '../components/product/ProductBanner';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const axiosPublic = useAxiosPublic();

  const { data: products = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axiosPublic.get('/products');
      return res.data;
    }
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error data fetching...</p>
  }
  
  return (
    <div>
      <ProductBanner/>
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