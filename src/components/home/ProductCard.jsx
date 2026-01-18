import { motion } from "motion/react";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    image,
    price,
    discountPrice,
    rating,
    reviews,
  } = product;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-56 object-contain p-6"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-800 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
          <Star size={16} fill="currentColor" />
          <span className="text-gray-700 font-medium">
            {rating}
          </span>
          <span className="text-gray-400">
            ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-3">
          <span className="text-lg font-bold text-gray-900">
            ${discountPrice}
          </span>
          <span className="text-sm line-through text-gray-400">
            ${price}
          </span>
        </div>

        {/* Button */}
        <Link to={`/products/${_id}`} >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
