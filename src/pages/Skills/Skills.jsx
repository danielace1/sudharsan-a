import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Orb from "./Orb";
import data from "../../data/data.json";

const Skills = () => {
  const categories = Object.keys(data.skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <section
      id="skills"
      className="relative py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center underline underline-offset-12 decoration-1 decoration-cyan-400/40 dark:decoration-pink-400/40"
      >
        Technical Skills
      </motion.h2>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-sm md:text-base">
        What I work with
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 md:mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`
              px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer
              ${
                active === cat
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-md"
                  : "bg-blue-300/20 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-300/40 dark:hover:bg-gray-700"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-5 gap-y-6 justify-center place-items-center mx-auto max-w-6xl"
        >
          {data.skills[active].map((skill, index) => (
            <Orb
              key={skill.name}
              img={skill.img}
              name={skill.name}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
