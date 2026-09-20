import { motion } from "framer-motion";
import { Code, Cpu, Rocket, Sparkles } from "lucide-react";
import data from "../../data/data.json";
import EduExp from "./EduExp";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center py-10 md:py-12 lg:pt-12 lg:pb-20 px-6 md:px-8 lg:px-20 text-black dark:text-white overflow-hidden bg-white/40 dark:bg-zinc-950 transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center underline underline-offset-12 decoration-1 decoration-cyan-400/40 dark:decoration-pink-400/40"
      >
        About Me
      </motion.h2>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-sm md:text-base italic">
        Get to know me
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl w-full">
        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-4 lg:gap-5"
        >
          {/* Build */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="group relative min-h-[140px] p-4 md:p-3 lg:p-5 rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:border-cyan-400/50 shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 flex flex-col justify-between transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-400/20">
              <Code className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Build
              </p>

              <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Modern & responsive interfaces
              </p>
            </div>

            <span className="absolute top-5 right-5 text-[10px] font-medium text-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity">
              01
            </span>
          </motion.div>

          {/* Develop */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="group relative min-h-[140px] p-4 md:p-3 lg:p-5 rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:border-purple-400/50 shadow-sm hover:shadow-lg hover:shadow-purple-500/5 flex flex-col justify-between transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-500/10 border border-purple-400/20">
              <Cpu className="w-5 h-5 text-purple-500 dark:text-purple-400" />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Develop
              </p>

              <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Full-stack web applications
              </p>
            </div>

            <span className="absolute top-5 right-5 text-[10px] font-medium text-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity">
              02
            </span>
          </motion.div>

          {/* Integrate */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="group relative min-h-[140px] p-4 md:p-3 lg:p-5 rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:border-pink-400/50 shadow-sm hover:shadow-lg hover:shadow-pink-500/5 flex flex-col justify-between transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-pink-500/10 border border-pink-400/20">
              <Sparkles className="w-5 h-5 text-pink-500 dark:text-pink-400" />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Integrate
              </p>

              <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                APIs, databases & services
              </p>
            </div>

            <span className="absolute top-5 right-5 text-[10px] font-medium text-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity">
              03
            </span>
          </motion.div>

          {/* Improve */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="group relative min-h-[140px] p-4 md:p-3 lg:p-5 rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:border-green-400/50 shadow-sm hover:shadow-lg hover:shadow-green-500/5 flex flex-col justify-between transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-green-500/10 border border-green-400/20">
              <Rocket className="w-5 h-5 text-green-500 dark:text-green-400" />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Improve
              </p>

              <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Learn, iterate & ship better
              </p>
            </div>

            <span className="absolute top-5 right-5 text-[10px] font-medium text-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity">
              04
            </span>
          </motion.div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:text-left max-w-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-gray-900 dark:text-white">
            Building ideas into{" "}
            <span className="text-cyan-500 dark:text-cyan-400">meaningful</span>{" "}
            digital experiences.
          </h3>

          <div className="mt-5 space-y-4 text-sm md:text-base leading-7 text-gray-600 dark:text-gray-400">
            <p>
              I’m{" "}
              <span className="font-medium text-gray-900 dark:text-gray-200">
                {data.profile.name} A
              </span>
              , a{" "}
              <span className="font-medium text-purple-500 dark:text-purple-400">
                {data.profile.role}
              </span>{" "}
              focused on turning ideas into practical, well-crafted web
              applications.
            </p>

            <p>
              I enjoy working across{" "}
              <span className="font-medium text-cyan-500 dark:text-cyan-400">
                frontend
              </span>{" "}
              and{" "}
              <span className="font-medium text-purple-500 dark:text-purple-400">
                backend
              </span>
              , building responsive interfaces, reliable APIs, and data-driven
              experiences while continuously learning through hands-on projects.
            </p>
          </div>
        </motion.div>
      </div>

      <EduExp />
    </section>
  );
};

export default About;
