import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Briefcase, Mail, ChevronDown } from "lucide-react";
import data from "../data/data.json";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen text-black dark:text-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <div className="container 2xl:mx-auto relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 mx-auto mt-5 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 animate-spin-slow blur-xs"
          />
          <motion.img
            src="/sudharsan.jpg"
            alt={data.profile.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full h-full rounded-full border-4 border-gray-300 dark:border-gray-800 object-cover shadow-lg"
          />
        </div>

        <h1 className="my-3">
          <motion.span
            className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600 dark:from-[#b8b8b8] dark:via-white dark:to-[#b8b8b8] bg-[length:200%_auto] text-transparent bg-clip-text drop-shadow-[0_0_4px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
            animate={{ backgroundPosition: ["200% center", "-200% center"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            Hi, I’m {data.profile.name}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 sm:mt-6 md:mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-lg max-w-lg sm:max-w-2xl mx-auto leading-relaxed"
        >
          I’m a{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            {data.profile.role}
          </span>{" "}
          passionate about building{" "}
          <span className="text-fuchsia-600 dark:text-fuchsia-400 font-medium">
            modern
          </span>{" "}
          and{" "}
          <span className="text-pink-600 dark:text-pink-400 font-medium">
            user-friendly
          </span>{" "}
          web applications. I love turning{" "}
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
            ideas
          </span>{" "}
          into{" "}
          <span className="text-purple-600 dark:text-purple-400 font-medium">
            smooth digital experiences
          </span>
          .
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center z-10"
      >
        <a
          href={data.buttons.work.link}
          className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
        >
          <Briefcase className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
          {data.buttons.work.label}
        </a>

        <a
          href={data.buttons.contact.link}
          className="group flex items-center justify-center gap-2 px-6 py-3 
               rounded-full 
               bg-white/10 dark:bg-black/10 
               backdrop-blur-md 
               border border-gray-200 dark:border-gray-700 
               text-gray-800 dark:text-gray-200 
               font-medium 
               shadow-md 
               transition-all duration-300 
               hover:scale-105 hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300"
        >
          <Mail className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
          {data.buttons.contact.label}
        </a>
      </motion.div>

      {/* Scrolldown */}
      <Link to="about" smooth={true} duration={600} offset={-50}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 flex flex-col items-center cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400 dark:text-pink-400 drop-shadow-lg" />
        </motion.div>
      </Link>
    </section>
  );
};

export default Home;
