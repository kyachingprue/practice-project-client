import { motion, useScroll, useTransform } from "motion/react";
import { ShoppingCart, ArrowRight } from "lucide-react";

const Banner = () => {
  const { scrollY } = useScroll();

  // Scroll-based animation values
  const yText = useTransform(scrollY, [0, 300], [0, -80]);
  const yImage = useTransform(scrollY, [0, 300], [0, 120]);
  const rotate = useTransform(scrollY, [0, 300], [0, 12]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-black via-gray-900 to-black text-white">

      {/* Glow background */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Shop Smarter <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
              Live Better
            </span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-lg">
            Discover premium products with immersive shopping experience,
            secure payments, and lightning-fast delivery.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:scale-105 transition">
              <ShoppingCart size={18} />
              Shop Now
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition">
              Explore More
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Right 3D Cards */}
        <motion.div
          style={{ y: yImage, rotate }}
          className="relative flex justify-center items-center"
        >
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute w-56 h-72 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl -rotate-12 -left-6"
          >
            <img
              src="https://i.ibb.co/2S8D4Vb/shoes.png"
              alt="product"
              className="w-full h-full object-contain p-6"
            />
          </motion.div>

          {/* Card 2 (Center) */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative w-64 h-80 bg-white/15 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl z-10"
          >
            <img
              src="https://i.ibb.co/2k1ZQxZ/headphone.png"
              alt="product"
              className="w-full h-full object-contain p-6"
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute w-52 h-68 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl rotate-12 -right-6"
          >
            <img
              src="https://i.ibb.co/QH8Yk7N/watch.png"
              alt="product"
              className="w-full h-full object-contain p-6"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Banner;
