import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ArrowUpRight } from "lucide-react";
import data from "../../data/data.json";

const EduExp = () => {
  return (
    <section className="mt-20 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <TimelineSection
        icon={GraduationCap}
        title="Education"
        items={data.education}
      />

      <TimelineSection
        icon={Briefcase}
        title="Experience"
        items={data.experience}
      />
    </section>
  );
};

const TimelineSection = ({ icon: Icon, title, items }) => (
  <div>
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-cyan-500/10 dark:bg-cyan-400/10">
        <Icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
    </div>

    <div className="relative pl-6 border-l border-blue-300/30 space-y-8">
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </div>
  </div>
);

const TimelineItem = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="relative"
  >
    {/* Timeline Dot */}
    <span className="absolute -left-[32px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />

    <div className="rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/70 dark:border-gray-700/70 p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
          {item.title} <span className="text-sm font-light">{item.mode}</span>
        </h4>

        <span className="text-xs text-gray-500 dark:text-gray-400">
          {item.time}
        </span>
      </div>

      <div className="mb-2">
        <a
          href={item.companylink}
          className="text-sm text-gray-600 dark:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.subtitle}
        </a>
      </div>

      {item.points && (
        <ul className="list-disc list-outside pl-3 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          {item.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
        >
          View Project <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
    </div>
  </motion.div>
);

TimelineSection.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

TimelineItem.propTypes = {
  item: PropTypes.object,
};

export default EduExp;
