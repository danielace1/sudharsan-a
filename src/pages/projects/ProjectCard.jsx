import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, index }) => {
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
      className="group relative rounded-2xl overflow-hidden bg-white/80 dark:bg-white/5 border border-gray-300/60 dark:border-gray-700/60 backdrop-blur-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition">
          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 text-sm font-medium text-black hover:bg-white"
          >
            <ExternalLink size={14} /> Live
          </a>

          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 text-sm font-medium text-black hover:bg-white"
          >
            <Github size={14} /> Code
          </a>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>

          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400 whitespace-nowrap">
            {project.type}
          </span>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    live: PropTypes.string,
    github: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
  }),
  index: PropTypes.number,
};

export default ProjectCard;
