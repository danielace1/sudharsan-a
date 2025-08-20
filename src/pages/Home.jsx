import * as motion from "motion/react-client";
import { Briefcase, Mail } from "lucide-react";
import data from "../data/data.json";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Animated Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-72 h-72 sm:w-96 sm:h-96 rounded-full 
             bg-cyan-300 
             blur-[100px] sm:blur-[120px] 
             opacity-80 dark:opacity-25"
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-32 -right-32 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full 
             bg-pink-300 
             blur-[100px] sm:blur-[140px] 
             opacity-80 dark:opacity-25"
      />

      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem] rounded-full 
            bg-purple-300 
             blur-[120px] sm:blur-[160px] 
             opacity-80 dark:opacity-25"
      />

      {/* Home Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        {/* Profile Pic with rotating border */}
        <div className="container 2xl:mx-auto relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 mx-auto mb-6">
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

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
          <motion.span
            className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600 dark:from-[#b8b8b8] dark:via-white dark:to-[#b8b8b8] bg-[length:200%_auto] text-transparent bg-clip-text drop-shadow-[0_0_4px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
            animate={{ backgroundPosition: ["200% center", "-200% center"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            Hi, I’m {data.profile.name}
          </motion.span>
        </h1>

        {/* Description */}
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

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center z-10"
      >
        <a
          href={data.buttons.work.link}
          className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
        >
          <Briefcase className="w-5 h-5" /> {data.buttons.work.label}
        </a>
        <a
          href={data.buttons.contact.link}
          className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-cyan-400 hover:text-cyan-400 dark:hover:text-cyan-300 font-medium hover:scale-105 transition-all duration-300"
        >
          <Mail className="w-5 h-5" /> {data.buttons.contact.label}
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
