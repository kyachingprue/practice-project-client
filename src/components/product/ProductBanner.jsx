import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* ---------- Demo Product Banner Data ---------- */
const banners = [
  {
    id: 1,
    title: "Smart Gadgets",
    subtitle: "Upgrade your lifestyle",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    title: "Modern Accessories",
    subtitle: "Best quality products",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 3,
    title: "Next-Gen Technology",
    subtitle: "Experience the future",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661",
  },
];

const ProductBanner = () => {
  const [index, setIndex] = useState(0);

  /* ---------- Auto Slide ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-[70vh] mt-20 overflow-hidden rounded-2xl">
      {/* ---------- Slider ---------- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={banners[index].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Image */}
          <img
            src={banners[index].image}
            alt="product-banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="px-20 text-white max-w-xl">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                {banners[index].title}
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl"
              >
                {banners[index].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ---------- Left Arrow ---------- */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg"
      >
        <ArrowLeft size={24} />
      </button>

      {/* ---------- Right Arrow ---------- */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg"
      >
        <ArrowRight size={24} />
      </button>
    </div>
  );
};

export default ProductBanner;
