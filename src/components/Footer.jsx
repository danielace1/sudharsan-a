import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import {
  Globe,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  X,
  Code,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  const [active, setActive] = useState("home");

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <footer className="w-full bg-white/40 dark:bg-zinc-950 text-gray-900 dark:text-gray-200 py-5 md:pt-8 px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex justify-center gap-6 mb-6"
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
            hover: "hover:text-black dark:hover:text-gray-100",
          },
          {
            Icon: Linkedin,
            url: "https://www.linkedin.com/in/a-sudharsan/",
            hover: "hover:text-cyan-500",
          },
          {
            Icon: Instagram,
            url: "https://instagram.com/sudharsan_daniel",
            hover: "hover:text-pink-500",
          },
          {
            Icon: Facebook,
            url: "https://www.facebook.com/sudharsandaniel01/",
            hover: "hover:text-blue-500",
          },
          {
            Icon: X,
            url: "https://x.com/SudharsanDaniel",
            hover: "hover:text-black dark:hover:text-gray-100",
          },
          {
            Icon: Code,
            url: "https://dev.to/sudharsan01",
            hover: "hover:text-black dark:hover:text-gray-100",
          },
        ].map(({ Icon, url, hover }, i) => (
          <motion.a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, x: 0.5, scale: 1.12 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 18,
              mass: 0.6,
            }}
            className={`text-gray-500 dark:text-gray-400 ${hover}`}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      <ul className="flex flex-wrap justify-center gap-6 mb-5 text-sm">
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
                    ? "text-purple-600 dark:text-cyan-400 "
                    : "text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-pink-400"
                }`}
              >
                {item}
              </ScrollLink>
            </li>
          );
        })}
      </ul>

      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 tracking-wide text-center">
        &copy; {year} All rights reserved by{" "}
        <motion.span
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative inline-block font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-[1px] after:w-full after:h-[1px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 hover:after:scale-x-100"
        >
          <a href="https://sudharsan-a.dev">Sudharsan A</a>
        </motion.span>
      </p>
    </footer>
  );
};

export default Footer;
