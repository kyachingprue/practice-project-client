import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, LogOut, User } from "lucide-react";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [profileOpen, setProfileOpen] = useState(false);

  // Scroll show/hide logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = async () => {
    await logoutUser();
    setProfileOpen(false);
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 font-semibold transition-colors duration-300"
            : "text-gray-600 hover:text-purple-500 transition-colors duration-300"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 font-semibold transition-colors duration-300"
            : "text-gray-600 hover:text-purple-500 transition-colors duration-300"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 font-semibold transition-colors duration-300"
            : "text-gray-600 hover:text-purple-500 transition-colors duration-300"
        }
      >
        Products
      </NavLink>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-white/80 backdrop-blur-md shadow`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-gray-900">
            MyWebsite
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks}

            {!user ? (
              <Link
                to="/login"
                className="px-4 py-1.5 rounded-md bg-black text-white hover:bg-gray-800 transition"
              >
                Login
              </Link>
            ) : (
              <div className="relative">
                <img
                  src={user?.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
                  alt="profile"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-sky-700"
                  onClick={() => setProfileOpen(!profileOpen)}
                />

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-44 bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-400">
                      <p className="text-sm font-semibold">
                        {user?.displayName || "User"}
                      </p>
                    </div>

                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"
                      onClick={() => setProfileOpen(false)}
                    >
                      <User size={16} /> Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks}

            {!user ? (
              <Link
                to="/login"
                className="w-fit px-4 py-2 rounded bg-black text-white"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600"
              >
                <LogOut size={18} /> Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
