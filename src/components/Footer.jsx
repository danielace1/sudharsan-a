import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Globe, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  const [active, setActive] = useState("home");

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <footer className="w-full bg-gray-100 dark:bg-zinc-950 text-gray-900 dark:text-gray-200 py-10 px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-7 mb-7"
      >
        {[
          {
            Icon: Globe,
            url: "https://sudharsan-a.dev",
            hover: "hover:text-cyan-500",
          },
          {
            Icon: Github,
            url: "https://github.com/danielace1",
            hover: "hover:text-orange-400",
          },
          {
            Icon: Linkedin,
            url: "https://www.linkedin.com/in/a-sudharsan/",
            hover: "hover:text-blue-400",
          },
          {
            Icon: Instagram,
            url: "https://instagram.com/sudharsan_daniel",
            hover: "hover:text-pink-400",
          },
          {
            Icon: Twitter,
            url: "https://x.com/SudharsanDaniel",
            hover: "hover:text-sky-400",
          },
        ].map(({ Icon, url, hover }, i) => (
          <motion.a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.18 }}
            className={`text-gray-500 dark:text-gray-400 transition-all duration-300 ${hover}`}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      <ul className="flex flex-wrap justify-center gap-6 mb-6">
        {navLinks.map((item) => {
          const id = item.toLowerCase();
          return (
            <li key={item}>
              <ScrollLink
                to={id}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                onSetActive={() => setActive(id)}
                className={`font-medium transition-all duration-300 cursor-pointer ${
                  active === id
                    ? "text-purple-600 dark:text-cyan-400 scale-105"
                    : "text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-pink-400"
                }`}
              >
                {item}
              </ScrollLink>
            </li>
          );
        })}
      </ul>

      <p className="text-xs sm:text-sm text-gray-500 tracking-wide text-center">
        &copy; {year} All rights reserved by{" "}
        <motion.span
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative inline-block font-semibold bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-transparent bg-clip-text cursor-pointer
    after:content-[''] after:absolute after:left-0 after:-bottom-[1.5px] after:w-full after:h-[1.5px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300
    after:bg-gradient-to-r after:from-cyan-500 after:via-purple-600 after:to-pink-500
    hover:after:scale-x-100"
        >
          Sudharsan A
        </motion.span>
      </p>
    </footer>
  );
};

export default Footer;
