import { motion } from "motion/react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-24 h-24">
        {/* Outer rotating circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="absolute inset-0 border-4 border-blue-500 border-b-transparent rounded-full"
        ></motion.div>

        {/* Inner rotating circle */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="absolute inset-4 border-4 border-green-500 border-t-transparent rounded-full"
        ></motion.div>

        {/* Center dot */}
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-10 w-4 h-4 bg-red-500 rounded-full mx-auto my-auto"
        ></motion.div>
      </div>
      <p className="absolute bottom-10 text-gray-600 text-lg font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
