import { motion } from "framer-motion";
import { Code, Cpu, Sparkles } from "lucide-react";
import data from "../data/data.json";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center py-14 px-6 md:px-12 lg:px-20 text-black dark:text-white overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl w-full">
        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/40 flex flex-col items-center text-center shadow-md transition-colors"
          >
            <Code className="w-8 h-8 mb-3 text-cyan-600 dark:text-cyan-400" />
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Building modern websites
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/40 flex flex-col items-center text-center shadow-md transition-colors"
          >
            <Cpu className="w-8 h-8 mb-3 text-purple-600 dark:text-purple-400" />
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Exploring new tech
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-pink-100 dark:bg-pink-500/10 border border-pink-300 dark:border-pink-500/40 flex flex-col items-center text-center shadow-md transition-colors"
          >
            <Sparkles className="w-8 h-8 mb-3 text-pink-600 dark:text-pink-400" />
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Design with creativity
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-green-100 dark:bg-green-500/10 border border-green-300 dark:border-green-500/40 flex flex-col items-center text-center shadow-md transition-colors"
          >
            <p className="text-2xl mb-2">🚀</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Always curious to grow
            </p>
          </motion.div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6 text-base md:text-lg leading-relaxed"
        >
          <p>
            Hi, I’m{" "}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              {data.profile.name}
            </span>
            . I’m a{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              {data.profile.role}
            </span>{" "}
            who loves creating simple, useful, and modern web apps.
          </p>
          <p>
            I enjoy mixing{" "}
            <span className="text-pink-600 dark:text-pink-400">design</span> and{" "}
            <span className="text-cyan-600 dark:text-cyan-400">technology</span>{" "}
            to make things that people find easy and fun to use.
          </p>
          <p>
            My passion is learning new tools, writing clean code, and building
            projects that bring ideas to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
