import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function StunningNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-10 py-4 transition-all duration-300 overflow-hidden ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-gradient-to-b from-black/60 to-transparent backdrop-blur-md"
      }`}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30 blur-3xl"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #00f5ff55, transparent 60%), radial-gradient(circle at 80% 70%, #ff00c355, transparent 60%)",
            "radial-gradient(circle at 70% 20%, #ff00c355, transparent 60%), radial-gradient(circle at 30% 80%, #00f5ff55, transparent 60%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="flex justify-between items-center relative z-10">
        {/* Shimmer Logo */}
        <motion.span
          className="text-3xl font-bold bg-gradient-to-r from-[#b8b8b8] via-white to-[#b8b8b8] bg-[length:200%_auto] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          animate={{ backgroundPosition: ["200% center", "-200% center"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          Sudharsan
        </motion.span>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`active-nav`}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-black/90 backdrop-blur-lg mt-4 rounded-lg p-4 border border-white/10 shadow-lg"
        >
          <ul className="flex flex-col gap-4 text-gray-300">
            {navLinks.map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block py-1 font-semibold ${
                      isActive
                        ? "text-white active-nav active"
                        : "text-gray-300 active-nav"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
