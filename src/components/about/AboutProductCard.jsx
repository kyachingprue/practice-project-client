import { motion } from "motion/react";
import {
  ShoppingCart,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react";

const AboutProductCard = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-gray-50 rounded-3xl shadow-lg p-8"
        >
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://i.ibb.co.com/Fkn7sLTW/what-is-the-difference-between-tour-and-travel.jpg"
              alt="E-commerce"
              className="w-full rounded-2xl shadow-md object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-100 px-4 py-1 rounded-full">
              <BadgeCheck size={16} />
              Trusted E-commerce Platform
            </span>

            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              A Smarter Way to Shop Online
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our e-commerce platform is designed to give you a seamless,
              secure, and enjoyable shopping experience. From premium product
              quality to fast delivery, everything is built with customers
              in mind.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <ShoppingCart className="text-blue-600" />
                <span className="text-gray-700 font-medium">
                  Easy & Fast Shopping
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Truck className="text-blue-600" />
                <span className="text-gray-700 font-medium">
                  Reliable Delivery
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-600" />
                <span className="text-gray-700 font-medium">
                  Secure Payments
                </span>
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="text-blue-600" />
                <span className="text-gray-700 font-medium">
                  Trusted by Customers
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProductCard;
