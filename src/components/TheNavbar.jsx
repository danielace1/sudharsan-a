import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";

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
      className={`fixed top-0 w-full z-50 px-6 md:px-10 py-4 overflow-hidden transition-all duration-300 border-b border-b-gray-200 dark:border-b-gray-900
      ${
        scrolled
          ? "bg-white/80 dark:bg-black/40 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10 shadow-lg dark:shadow-[0_0_20px_rgba(0,245,255,0.3)]"
          : "bg-white/60 dark:bg-black/20 backdrop-blur-md"
      }`}
    >
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

      <div className="container 2xl:mx-auto flex justify-between items-center relative z-10">
        <NavLink to="/">
          <motion.span
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600 dark:from-[#b8b8b8] dark:via-white dark:to-[#b8b8b8] bg-[length:200%_auto] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            animate={{ backgroundPosition: ["200% center", "-200% center"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            {"</SD >"}
          </motion.span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="active-nav"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeSwitch />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-2 h-2 flex items-center justify-center"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <motion.span
            className="absolute h-[3px] w-6 bg-gray-900 dark:bg-white rounded"
            animate={{
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 0 : -7,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute h-[3px] w-6 bg-gray-900 dark:bg-white rounded"
            animate={{
              opacity: menuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute h-[3px] w-6 bg-gray-900 dark:bg-white rounded"
            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? 0 : 7,
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-lg mt-4 rounded-lg p-4 border border-gray-200 dark:border-white/10 shadow-lg"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block py-1 font-semibold ${
                        isActive
                          ? "text-gray-900 dark:text-white active-nav active"
                          : "text-gray-600 dark:text-gray-300 active-nav"
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
              <li className="mt-4">
                <ThemeSwitch />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
