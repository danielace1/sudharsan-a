import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";
import data from "../../data/data.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-10 md:pt-14 md:pb-20 px-6 md:px-12 lg:px-20 bg-white/40 dark:bg-zinc-950 transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center underline underline-offset-12 decoration-1 decoration-cyan-400/40 dark:decoration-pink-400/40 leading-tight"
      >
        Projects
      </motion.h2>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-sm md:text-base">
        Where ideas become impactful web solutions.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {data.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center items-center mt-8 md:mt-14"
      >
        <a
          href="https://github.com/danielace1?tab=repositories"
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500  text-white font-medium hover:opacity-90 transition"
        >
          View More <ArrowRight className="size-4" />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
