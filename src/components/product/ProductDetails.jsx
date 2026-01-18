import { motion } from "motion/react";
import {
  Star,
  Tag,
  Package,
  ShoppingCart,
  BadgeCheck,
  ArrowLeft,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
    })
  },[])

  const product = products.find((item) => item._id === id);

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Product not found
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-6">

        {/* Product Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex justify-center"
        >
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full max-w-md rounded-xl object-cover"
          />
        </motion.div>

        {/* Product Info */}
        <div className="space-y-5">
          {product?.featured && (
            <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
              <BadgeCheck size={16} /> Featured Product
            </span>
          )}
          <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>

          <p className="text-gray-500">
            <span className="font-medium">Brand:</span> {product?.brand}
          </p>

          <p className="text-gray-500">
            <span className="font-medium">Category:</span> {product?.category}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <span className="font-semibold">{product?.rating}</span>
            <span className="text-gray-500">({product?.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-blue-600">
              ${product?.discountPrice}
            </span>
            <span className="text-lg line-through text-gray-400">
              ${product?.price}
            </span>
            <span className="flex items-center gap-1 text-sm text-red-500">
              <Tag size={16} />
              Save ${(product?.price - product?.discountPrice).toFixed(2)}
            </span>
          </div>

          {/* Stock */}
          <p className="flex items-center gap-2 text-gray-600">
            <Package size={18} />
            {product?.stock > 0 ? `${product?.stock} items in stock` : "Out of stock"}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product?.description}</p>

          {/* Action Button */}
          <div className="flex items-center gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white"
            >
              <ArrowLeft size={18} />
              Go Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={product?.stock === 0}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold disabled:bg-gray-400"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </motion.button>
         </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
