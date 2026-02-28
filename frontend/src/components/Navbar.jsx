import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png"; // adjust path if needed

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-panel mx-4 mt-4 rounded-full px-6 py-3 max-w-7xl mx-auto shadow-sm">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Cudloo logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold tracking-[0.1em]">
              CUDLOO
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#philosophy" className="text-sm text-gray-600 hover:text-primary">
              Philosophy
            </a>

            <Link to="/catalog" className="text-sm text-gray-600 hover:text-primary">
              Collection
            </Link>

            <a href="#safety" className="text-sm text-gray-600 hover:text-primary">
              Safety
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Cart Icon */}
            <div className="relative cursor-pointer">
              <span className="material-symbols-outlined">
                shopping_bag
              </span>

              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-primary text-white text-xs px-1.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>

            {/* CTA */}
            <Link
              to="/catalog"
              className="hidden sm:block bg-primary text-white text-xs font-bold px-6 py-3 rounded-full"
            >
              Shop Now
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}