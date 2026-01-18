import { motion } from "motion/react";
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: ShoppingBag,
    title: "Premium Products",
    description:
      "We offer high-quality, carefully curated products to ensure the best shopping experience.",
  },
  {
    id: 2,
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick and reliable delivery so your favorite products reach you on time.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure Payment",
    description:
      "Your payments are protected with industry-leading security standards.",
  },
  {
    id: 4,
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our support team is always available to help you with any questions.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            About Our Store
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are an innovative e-commerce platform dedicated to providing
            quality products, fast delivery, and a seamless shopping experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
