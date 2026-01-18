import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              ShopEase
            </h2>
            <p className="text-sm leading-relaxed">
              Your trusted online marketplace for quality products, fast
              delivery, and secure payments.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/returns" className="hover:text-white">Returns</Link></li>
              <li><Link to="/shipping" className="hover:text-white">Shipping Info</Link></li>
              <li><Link to="/track-order" className="hover:text-white">Track Order</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/cookies" className="hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-sm">

          {/* Payment Methods */}
          <div className="flex gap-4">
            <img src="https://i.ibb.co/Z8k0Z9P/visa.png" alt="Visa" className="h-6" />
            <img src="https://i.ibb.co/2dJzq8p/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="https://i.ibb.co/YQK0N8d/paypal.png" alt="PayPal" className="h-6" />
            <img src="https://i.ibb.co/9n3pKkN/amex.png" alt="Amex" className="h-6" />
          </div>

          {/* Copyright */}
          <p className="text-gray-400">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
