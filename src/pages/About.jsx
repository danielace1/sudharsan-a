import { motion } from "framer-motion";
import { Code, Cpu, Sparkles } from "lucide-react";
import data from "../data/data.json";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 text-black dark:text-white overflow-hidden bg-zinc-950"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        {/* Left: Professional Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative border-l border-gray-700 space-y-8 pl-6"
        >
          <div>
            <h4 className="text-cyan-400 font-semibold">Learning & Growth</h4>
            <p className="text-gray-400 text-sm">
              Built strong foundations in web development with{" "}
              <span className="text-white font-medium">
                JavaScript, React, and Node.js
              </span>
              .
            </p>
          </div>
          <div>
            <h4 className="text-purple-400 font-semibold">
              Hands-On Development
            </h4>
            <p className="text-gray-400 text-sm">
              Gained real-world experience through{" "}
              <span className="text-white font-medium">
                full-stack projects
              </span>{" "}
              and collaborative work.
            </p>
          </div>
          <div>
            <h4 className="text-pink-400 font-semibold">Future-Ready</h4>
            <p className="text-gray-400 text-sm">
              Focused on creating{" "}
              <span className="text-white font-medium">
                scalable, user-centric applications
              </span>{" "}
              and continuously exploring modern technologies.
            </p>
          </div>
        </motion.div>

        {/* Right: Professional Bio */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left text-gray-300 space-y-6 text-base md:text-lg leading-relaxed"
        >
          <p>
            Hi, I’m{" "}
            <span className="font-semibold text-cyan-400">
              {data.profile.name}
            </span>
            , a{" "}
            <span className="font-semibold text-purple-400">
              {data.profile.role}
            </span>{" "}
            passionate about turning ideas into impactful digital experiences. I
            specialize in building{" "}
            <span className="text-pink-400 font-medium">
              full-stack web applications
            </span>{" "}
            with clean architecture and user-first design.
          </p>
          <p>
            My journey has been shaped by{" "}
            <span className="text-green-400 font-medium">
              practical projects
            </span>
            ,{" "}
            <span className="text-purple-400 font-medium">
              continuous learning
            </span>
            , and a drive to create solutions that balance{" "}
            <span className="text-cyan-400 font-medium">innovation</span> with{" "}
            <span className="text-pink-400 font-medium">functionality</span>.
          </p>
          <p>
            I’m always exploring new tools and frameworks, aiming to grow into a
            professional who not only writes code but also contributes to{" "}
            <span className="text-white font-semibold">
              scalable, meaningful products
            </span>
            .
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="p-4 rounded-xl bg-white/10 border border-gray-700 shadow-md flex flex-col items-center text-center"
            >
              <Code className="w-6 h-6 mb-2 text-cyan-400" />
              <p className="text-sm">Full-Stack Expertise</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="p-4 rounded-xl bg-white/10 border border-gray-700 shadow-md flex flex-col items-center text-center"
            >
              <Cpu className="w-6 h-6 mb-2 text-purple-400" />
              <p className="text-sm">Scalable Thinking</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="p-4 rounded-xl bg-white/10 border border-gray-700 shadow-md flex flex-col items-center text-center"
            >
              <Sparkles className="w-6 h-6 mb-2 text-pink-400" />
              <p className="text-sm">Creative Mindset</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
