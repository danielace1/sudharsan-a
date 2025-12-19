import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Orb = ({ img, name, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.04,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      whileHover={{ y: -4 }}
      className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex flex-col items-center justify-center gap-1.5 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200/70 dark:border-gray-700/70 transition-all duration-300"
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-100 via-purple-100 to-pink-100 dark:from-cyan-400/25 dark:via-purple-400/25 dark:to-pink-400/25 blur-lg" />
      <img
        src={img}
        alt={name}
        className="relative z-10 size-10 object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <span className="relative z-10 text-[11px] sm:text-sm text-gray-700 dark:text-gray-300 font-medium text-center">
        {name}
      </span>
    </motion.div>
  );
};

Orb.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
};

export default Orb;
